import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "../App.css";
import ProjectsSection from "./Project_Section";
import React, { useState } from "react";
import data from "../data";

function Projects({isdarkmode}) {
    const [idx, setIdx] = useState(0);
    const { projects } = data;
    let n = projects.length;
    if (!projects || projects.length === 0) {
        return (
            <div className="pt-[5.5rem] flex flex-col justify-center items-center">
                <h1>No Projects Available</h1>
            </div>
        );
    }

    // Handle previous button click
    const handlePrev = () => {
        setIdx((prevIdx) => (prevIdx - 1 + projects.length) % projects.length);
    };

    // Handle next button click
    const handleNext = () => {
        setIdx((prevIdx) => (prevIdx + 1) % projects.length);
    };

    return (
        <div className={`pt-[5.5rem] flex flex-col relative justify-center items-center px-4 sm:px-0 ${isdarkmode?"text-white" :"text-black" }`}>
            <h1 className="text-[1.5rem] sm:text-[2rem] font-bold text-[var(--body-font)] font-Poppins text-center">
                Projects
            </h1>
            <p className={`text-[1rem] sm:text-[1.1rem] ${isdarkmode?"text-gray-400":"text-gray-500"} text-center`}>Most recent work</p>

            <div className="flex items-center justify-center mt-8 sm:mt-10 lg:w-[1000px] space-x-2 sm:space-x-4 w-full">
                {/* Left Button */}
                <div className="flex-shrink-0">
                    <FaAngleLeft
                        size="2rem"
                        className="sm:text-3rem hover:cursor-pointer text-[var(--first-color)]"
                        onClick={handlePrev}
                    />
                </div>

                {/* Render Active Project */}
                <div className="flex-1 max-w-full">
                    <ProjectsSection
                        img={projects[idx].img}
                        title={projects[idx].title}
                        description={projects[idx].description}
                        url={projects[idx].url}
                        className=""
                        isdarkmode={isdarkmode}
                    />
                </div>

                {/* Right Button */}
                <div className="flex-shrink-0">
                    <FaAngleRight
                        size="2rem"
                        className="sm:text-3rem hover:cursor-pointer text-[var(--first-color)]"
                        onClick={handleNext}
                    />
                </div>
            </div>
            {/* dot symbol */}
            <div className="flex justify-center mt-4">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`h-2 w-2 rounded-full mx-1 cursor-pointer ${index === idx ? "bg-[var(--first-color)]" : "bg-gray-400"
                            }`}
                        onClick={() => setIdx(index)}  
                    ></div>
                ))}
            </div>


        </div>
    );
}

export default Projects;
