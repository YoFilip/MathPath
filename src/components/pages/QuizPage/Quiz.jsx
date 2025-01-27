import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { QuizAI } from "../../../services/aiService";

const Quiz = () => {
  const [ai] = useState(() => new QuizAI());
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [performance, setPerformance] = useState(0);

  const getNextQuestion = async () => {
    const question = await ai.getNextQuestion(performance);
    setCurrentQuestion(question);
  };

  const checkAnswer = () => {
    if (!currentQuestion || !userAnswer) return;

    let isCorrect = false;

    switch (currentQuestion.type) {
      case "identification":
        isCorrect =
          (["geometryczny", "ciąg geometryczny"].includes(
            userAnswer.toLowerCase()
          ) &&
            currentQuestion.answer === "geometryczny") ||
          (["arytmetyczny", "ciąg arytmetyczny"].includes(
            userAnswer.toLowerCase()
          ) &&
            currentQuestion.answer === "arytmetyczny");
        break;
      case "numeric":
        isCorrect = Number(userAnswer) === currentQuestion.answer;
        break;
      case "formula":
        const normalizedUserAnswer = userAnswer
          .toLowerCase()
          .replace(/\s+/g, "");
        const normalizedCorrectAnswer = currentQuestion.answer
          .toLowerCase()
          .replace(/\s+/g, "");
        isCorrect = normalizedUserAnswer === normalizedCorrectAnswer;
        break;
      default:
        isCorrect = Number(userAnswer) === currentQuestion.answer;
    }

    ai.updateModel(isCorrect, currentQuestion.difficulty);

    setPerformance((prev) => {
      const newPerformance = isCorrect ? prev + 0.1 : prev - 0.1;
      return Math.max(0, Math.min(1, newPerformance));
    });

    setFeedback({
      isCorrect,
      message: isCorrect
        ? "Brawo! Poprawna odpowiedź!"
        : `Niestety, prawidłowa odpowiedź to: ${currentQuestion.answer}`,
    });

    if (isCorrect) {
      setScore(score + 1);
    }
    setTotalQuestions(totalQuestions + 1);
  };

  const nextQuestion = async () => {
    await getNextQuestion();
    setUserAnswer("");
    setFeedback(null);
  };

  useEffect(() => {
    nextQuestion();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-5xl mx-auto mt-12 p-8">
      <div className="bg-white rounded-lg shadow-lg p-6  mb-6 border border-blueBgColor">
        <div className="bg-blueBgColor px-10 py-2 max-w-max rounded-xl mt-[-45px] mx-auto mb-6">
          <div className=" text-white text-center">
            Wynik: {score}/{totalQuestions}
          </div>
        </div>
        <p className="text-lg text-gray-600 mb-4">
          {currentQuestion?.question}
        </p>
        {feedback && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`mt-4 p-4 rounded-lg ${
              feedback.isCorrect
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}>
            {feedback.message}
          </motion.div>
        )}
        <div className="mb-6">
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="w-full p-3  focus:outline-none focus:ring-2 focus:ring-blueBgColor"
            placeholder="Wpisz odpowiedź..."
          />
        </div>

        <button
          onClick={checkAnswer}
          className="bg-blueBgColor text-white px-6 py-2 mr-2 rounded-lg hover:opacity-90">
          Sprawdź
        </button>
        <button
          onClick={nextQuestion}
          className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300">
          Następne pytanie
        </button>
      </div>
    </motion.div>
  );
};

export default Quiz;
