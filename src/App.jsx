import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/Home";
import AttendEase from "./components/Projects/AttendEase";
import LineFollwerRobot from "./components/Projects/LineFollwerRobot";
import ProjectDetails from "./components/ProjectDetails";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/AttendEase" element={<AttendEase />} />
          <Route path="/projects/LineFollwerRobot" element={<LineFollwerRobot />} />
          <Route path="/project/:projectId" element={<ProjectDetails />} />
          <Route path="/projects" element={<Navigate to="/" />} />
          {/* Add other routes here */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
