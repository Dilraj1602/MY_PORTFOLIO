import React, { useState } from "react";
import "../App.css";
import user_data from "../data";
import Project_Section from "./Project_Section";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Projects({ isdarkmode }) {
  const { projects } = user_data;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div className={`pt-[5.5rem] flex flex-col relative justify-between items-center w-full mb-10 lg:mb-0 px-4 sm:px-0 ${isdarkmode ? "text-white" : "text-black"}`}>
      <h1 className="text-[1.5rem] sm:text-[2rem] font-bold text-[var(--body-font)] font-Poppins text-center">Projects</h1>
      <p className={`text-[1rem] sm:text-[1.1rem] ${isdarkmode?"text-gray-400":"text-gray-500"} text-center`}>My Recent Work</p>

      <div className="flex-1 max-w-full mt-8 sm:mt-10">
        <div className="flex items-center justify-center space-x-2 sm:space-x-4">
          <button
            onClick={prevProject}
            className={`p-2 rounded-full ${isdarkmode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"} transition-colors duration-200`}
            aria-label="Previous project"
          >
            <IoIosArrowBack size="2rem" className="sm:text-3rem" />
          </button>

          <div className="flex-1 flex justify-center">
            <Project_Section
              img={projects[currentIndex].img}
              title={projects[currentIndex].title}
              description={projects[currentIndex].description}
              url={projects[currentIndex].url}
              isdarkmode={isdarkmode}
            />
          </div>

          <button
            onClick={nextProject}
            className={`p-2 rounded-full ${isdarkmode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"} transition-colors duration-200`}
            aria-label="Next project"
          >
            <IoIosArrowForward size="2rem" className="sm:text-3rem" />
          </button>
        </div>

        {/* Project Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex
                  ? "bg-[var(--first-color)]"
                  : isdarkmode
                  ? "bg-gray-600"
                  : "bg-gray-300"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
