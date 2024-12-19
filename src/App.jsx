import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Qualification from "./Components/Qualification";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="w-full lg:space-y-[5%] overflow-x-hidden  ">
      <div className="max-w-[1000px] mx-auto pt-4 px-[16px]  relative ">
        <div className="fixed max-w-[1000px] top-0 z-50 w-full left-0 " ><Navbar /></div>
        <div id="home"  >
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="qualification">
          <Qualification />
        </div>
        <div id="projects">
          <Projects />
        </div>
      </div>

      <div id="contact" className="w-full" >
        <Contact />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>

  );
}

export default App;
