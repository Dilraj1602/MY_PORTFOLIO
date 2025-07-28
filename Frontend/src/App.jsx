import "./App.css";
import { useEffect, useState } from "react";
import MainSection from "./Components/MainSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailsProject from "./Components/DetailsProject";

function App() {
<<<<<<< HEAD
=======
  const [isdarkmode, setisdarkmode] = useState(false);

  function tooglemode() {
    console.log("toggle");
    setisdarkmode(!isdarkmode);
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isdarkmode ? "dark" : "light");
  }, [isdarkmode]);

>>>>>>> 75eb4da51fab6545e5233401190809173a84d4d8
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
