import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="mr-52 ml-52">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      {currentPage === "home" ? (
        <LandingPage onNavigate={setCurrentPage} />
      ) : (
        <div className="flex">
          <Sidebar />
        </div>
      )}
    </div>
  );
}

export default App;
