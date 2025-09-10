import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Details from "./Detail";
import NavBar from "./NavBar";
import { skills } from "./data";

function App() {
  return (
    <Router>
      <NavBar skills={skills} />

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills/:skillName" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
