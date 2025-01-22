import { useState } from "react";
import { motion } from "framer-motion";
import { FaBookOpen, FaLightbulb, FaTasks } from "react-icons/fa";
import CourseNavigation from "./CourseNavigation";
import TheorySection from "./sections/TheorySection";
import ExamplesSection from "./sections/ExamplesSection";
import ExercisesSection from "./sections/ExercisesSection";
import "katex/dist/katex.min.css";
import { useNavigate } from "react-router-dom";

const CourseContent = ({ lesson }) => {
  const [activeSection, setActiveSection] = useState("theory");
  const navigate = useNavigate();

  if (!lesson) {
    return console.log("Nie znaleziono lekcji");
  }

  const contentAnimation = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 },
  };

  const SectionButton = ({ icon: Icon, name, title }) => (
    <button
      onClick={() => setActiveSection(name)}
      className={`flex items-center gap-3 py-3 px-5 rounded-lg transition-all ${
        activeSection === name
          ? "bg-blueBgColor text-white"
          : "hover:bg-gray-100"
      }`}>
      <Icon size={20} />
      <span className="font-medium">{title}</span>
    </button>
  );

  const hasExamples = lesson.examples && lesson.examples.length > 0;
  const hasExercises = lesson.exercises && lesson.exercises.length > 0;

  const handleNavigate = (lessonId) => {
    navigate(`/lesson/${lessonId}`);
  };

  return (
    <motion.div {...contentAnimation} className="flex-1 p-8 mt-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="border-b pb-6 mb-8">
          <div className="flex items-center gap-4 mb-3">
            <h1 className="text-3xl font-bold text-blueTextColor">
              {lesson.title}
            </h1>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
              {lesson.category}
            </span>
          </div>
          <p className="text-gray-600">{lesson.description}</p>
        </div>

        <div className="grid auto-cols-fr grid-flow-col gap-4 mb-8">
          <SectionButton icon={FaBookOpen} name="theory" title="Teoria" />
          {hasExamples && (
            <SectionButton
              icon={FaLightbulb}
              name="examples"
              title="Przykłady"
            />
          )}
          {hasExercises && (
            <SectionButton icon={FaTasks} name="exercises" title="Ćwiczenia" />
          )}
        </div>

        <div className="bg-white rounded-lg p-4">
          {activeSection === "theory" && (
            <TheorySection theory={lesson.theory} tip={lesson.tip} />
          )}
          {activeSection === "examples" && hasExamples && (
            <ExamplesSection examples={lesson.examples} />
          )}
          {activeSection === "exercises" && hasExercises && (
            <ExercisesSection exercises={lesson.exercises} />
          )}
        </div>

        <CourseNavigation
          prevLesson={lesson.prevLesson}
          nextLesson={lesson.nextLesson}
          onNavigate={handleNavigate}
        />
      </div>
    </motion.div>
  );
};

export default CourseContent;
