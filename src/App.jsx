import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Qualification from "./Components/Qualification";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [isdarkmode, setisdarkmode] = useState(false);

  function tooglemode() {
    console.log("toggle");
    setisdarkmode(!isdarkmode);
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isdarkmode ? "dark" : "light");
  }, [isdarkmode]);

  return (
    <div
      className={`w-full lg:space-y-[5%] scrollp
     ${isdarkmode ? "bg-[var(--dark-body-color)]" : "bg-white"}`}
    >
      <div className="max-w-[1000px] mx-auto pt-4 px-[16px] relative">
        <div className="fixed max-w-[1000px] top-0 z-50 w-full left-0 " >
          <Navbar tooglemode={tooglemode} isdarkmode={isdarkmode} /></div>
        <div id="home">
          <Home isdarkmode={isdarkmode} />
        </div>
        <div id="about">
          <About isdarkmode={isdarkmode} />
        </div>
        <div id="skills">
          <Skills isdarkmode={isdarkmode} />
        </div>
        <div id="qualification">
          <Qualification isdarkmode={isdarkmode} />
        </div>
        <div id="projects">
          <Projects isdarkmode={isdarkmode} />
        </div>
      </div>

      <div id="contact" className="w-full">
        <Contact isdarkmode={isdarkmode} />
      </div>
      <div className="w-full">
        <Footer isdarkmode={isdarkmode} />
      </div>
    </div>
  );
}

export default App;
