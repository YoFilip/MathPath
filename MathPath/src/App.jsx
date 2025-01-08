import { useState } from "react";
import Navbar from "./components/layout/Navbar/Navbar";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import HomePage from "./components/pages/HomePage/HomePage";
import CourseContent from "./components/pages/CoursePage/CourseContent";
import SupportPage from "./components/pages/SupportPage/SupportPage";
import { getLessonData } from "./data/lessonData";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  useNavigate,
} from "react-router-dom";

function CourseContainer() {
  const { lessonId } = useParams();
  return <CourseContent lesson={getLessonData(lessonId)} />;
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
  };

  const handleTopicSelect = (topicId) => {
    setSelectedTopic(topicId);
    setCurrentPage("topics");
    navigate(`/lesson/${topicId}`);
  };

  return (
    <div className="mr-52 ml-52">
      <Navbar currentPage={currentPage} onNavigate={handlePageChange} />
      {currentPage === "topics" && (
        <div className="flex">
          <Sidebar onTopicSelect={handleTopicSelect} />
          <Routes>
            <Route path="/lesson/:lessonId" element={<CourseContainer />} />
            <Route
              path="/"
              element={
                selectedTopic && (
                  <CourseContent lesson={getLessonData(selectedTopic)} />
                )
              }
            />
          </Routes>
        </div>
      )}
      {currentPage === "home" && <HomePage onNavigate={handlePageChange} />}
      {currentPage === "help" && <SupportPage />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
