import "./App.css";
import { useEffect, useState } from "react";
import MainSection from "./Components/MainSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailsProject from "./Components/DetailsProject";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<MainSection />} />
      <Route path="/details-project" element={<DetailsProject />} />
    </Routes>
  </Router>
  );
}

export default App;
