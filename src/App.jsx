import { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar/Navbar";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import HomePage from "./components/pages/HomePage/HomePage";
import CourseContent from "./components/pages/CoursePage/CourseContent";
import SupportPage from "./components/pages/SupportPage/SupportPage";
import { getLessonData } from "./data/lessonData";
import DeviceWarning from "./components/warning/DeviceWarning";
import Quiz from "./components/pages/QuizPage/Quiz";

import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  useNavigate,
  HashRouter,
} from "react-router-dom";

function CourseContainer() {
  const { lessonId } = useParams();
  const lessonData = getLessonData(lessonId);

  if (!lessonData) {
    return console.log("Lesson not found");
  }

  return <CourseContent lesson={lessonData} />;
}

function AppContent() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(
    () => localStorage.getItem("currentPage") || "home"
  );
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    localStorage.setItem("currentPage", page);
    navigate(page);
  };

  const handleTopicSelect = (topicId) => {
    setSelectedTopic(topicId);
    setCurrentPage("topics");
    navigate(`topics/lesson/${topicId}`);
  };

  useEffect(() => {
    if (currentPage === "topics" && !selectedTopic) {
      handleTopicSelect("introduction");
    }
  }, [currentPage, selectedTopic]);

  return (
    <div className="hidden lg:block mr-52 ml-52">
      <Navbar currentPage={currentPage} onNavigate={handlePageChange} />
      <Routes>
        <Route path="/" element={<HomePage onNavigate={handlePageChange} />} />
        <Route
          path="home"
          element={<HomePage onNavigate={handlePageChange} />}
        />
        <Route
          path="topics/*"
          element={
            <div className="flex">
              <Sidebar onTopicSelect={handleTopicSelect} />
              <Routes>
                <Route path="lesson/:lessonId" element={<CourseContainer />} />
                <Route
                  path=""
                  element={
                    selectedTopic && (
                      <CourseContent lesson={getLessonData(selectedTopic)} />
                    )
                  }
                />
              </Routes>
            </div>
          }
        />
        <Route path="quiz" element={<Quiz />} />
        <Route path="help" element={<SupportPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename="/MathPath">
      <DeviceWarning />
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
