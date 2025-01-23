import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "../App.css";
import ProjectsSection from "./Project_Section";
import React, { useState } from "react";
import data from "../data";

function Projects({isdarkmode}) {
    const [idx, setIdx] = useState(1);
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
        <div className={`pt-[5.5rem] flex flex-col relative justify-center items-center ${isdarkmode?"text-white" :"text-black" }`}>
            <h1 className="text-[2rem] font-bold text-[var(--body-font)] font-Poppins">
                Projects
            </h1>
            <p className={`text-[1.1rem] ${isdarkmode?"text-gray-400":"text-gray-500"} `}>Most recent work</p>

            <div className="flex  items-center justify-center mt-10 lg:w-[1000px] space-x-4 ">
                {/* Left Button */}
                <div className="">

                    <FaAngleLeft
                        size="3rem"
                        className="hover:cursor-pointer text-[var(--first-color)]"
                        onClick={handlePrev}
                    />
                </div>

                {/* Render Active Project */}
                <ProjectsSection
                    img={projects[idx].img}
                    title={projects[idx].title}
                    description={projects[idx].description}
                    className=" "
                    isdarkmode={isdarkmode}
                />

                {/* Right Button */}
                <div>
                    <FaAngleRight
                        size="3rem"
                        className="hover:cursor-pointer text-[var(--first-color)]"
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
