import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import LandingPage from "./components/Landing/LandingPage";
import HelpPage from "./components/Help/HelpPage";

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    return localStorage.getItem("currentPage") || "home";
  });

  const handlePageChange = (page) => {
    setCurrentPage(page);
    localStorage.setItem("currentPage", page);
  };

  return (
    <div className="mr-52 ml-52">
      <Navbar currentPage={currentPage} onNavigate={handlePageChange} />
      {currentPage === "home" ? (
        <LandingPage onNavigate={handlePageChange} />
      ) : currentPage === "help" ? (
        <HelpPage />
      ) : (
        <div className="flex">
          <Sidebar />
        </div>
      )}
    </div>
  );
}

export default App;
