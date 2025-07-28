import React, { useState } from "react";
import { RiGraduationCapLine } from "react-icons/ri";
import { MdWorkOutline } from "react-icons/md";
import data from "../data";
import Q_section from "./Q_section";
import Circle from "./Circle";

function Qualification({isdarkmode}) {
    const [Field, setField] = useState("Education");
    const { education, place, location, year, work, w_place, w_year, w_location } = data;
    console.log(data);
    function handleClick(newField) {
        console.log(Field);
        setField(newField);
    }

    return (
        <div className={`pt-[5.5rem] flex flex-col relative justify-center items-center px-4 sm:px-0 ${isdarkmode ?"text-white":"text-black"} `}>
            {/* Header */}
            <h1 className="text-[1.5rem] sm:text-[2rem] font-bold text-[var(--body-font)] font-Poppins text-center">
                Qualification
            </h1>
            <p className={`text-[1rem] sm:text-[1.1rem] ${isdarkmode?"text-gray-400":"text-gray-500"} text-center`}>My Educational Qualification & Work Experience</p>

            {/* Tabs */}
            <div className="mt-8 sm:mt-10 w-full max-w-4xl">
                <div className="flex space-x-6 sm:space-x-[50px] justify-center items-center mb-6 sm:mb-8">
                    <div
                        className={`flex items-center space-x-2 cursor-pointer transition-colors duration-200 ${
                            Field === "Education" 
                                ? "text-[var(--first-color-alt)]" 
                                : isdarkmode 
                                    ? "text-[var(--dark-text-color)]" 
                                    : "text-[var(--title-color)]"
                        }`}
                        
                        onClick={() => handleClick("Education")}
                    >
                        <RiGraduationCapLine style={{ width: '1.5rem', height: '1.5rem' }} className="sm:w-[1.8rem] sm:h-[1.8rem]" />
                        <h1 className="font-Poppins font-[500] text-[1.4rem] sm:text-[1.8rem]">Education</h1>
                    </div>
                    <div
                        className={`flex items-center space-x-2 cursor-pointer transition-colors duration-200 ${
                            Field === "Work" 
                                ? "text-[var(--first-color-alt)]" 
                                : isdarkmode 
                                    ? "text-[var(--dark-text-color)]" 
                                    : "text-[var(--title-color)]"
                        }`}
                        
                        onClick={() => handleClick("Work")}
                    >
                        <MdWorkOutline style={{ width: '1.5rem', height: '1.5rem' }} className="sm:w-[1.8rem] sm:h-[1.8rem]" />
                        <h1 className={`font-Poppins font-[500] text-[1.4rem] sm:text-[1.8rem]  `}>Work</h1>
                    </div>
                </div>

                {/* Section for education and work */}
                <div className="relative">
                    {Field === "Education" && (
                        <Q_section
                            data={education}
                            place={place}
                            location={location}
                            year={year}
                            type="Education"
                            isdarkmode={isdarkmode}
                        />
                    )}
                    {Field === "Work" && (
                        <Q_section
                            data={work}
                            place={w_place}
                            location={w_location}
                            year={w_year}
                            type="Work"
                            isdarkmode={isdarkmode}
                        />
                    )}
                    {/* Timeline line */}
                    <div className="bg-[var(--first-color)] w-1 h-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
                    
                    {/* Timeline circles */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Circle></Circle>
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Circle></Circle>
                    </div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                        <Circle></Circle>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Qualification;
