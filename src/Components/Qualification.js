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
        <div className={`pt-[5.5rem] flex flex-col relative justify-center items-center ${isdarkmode ?"text-white":"text-black"} `}>
            {/* Header */}
            <h1 className="text-[2rem] font-bold text-[var(--body-font)] font-Poppins">
                Qualification
            </h1>
            <p className={`text-[1.1rem] ${isdarkmode?"text-gray-400":"text-gray-500"} `}>My Educational Qualification & Work Experience</p>

            {/* Tabs */}
            <div className="mt-10 ">
                <div className="flex space-x-[50px] justify-center items-center">
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
                        <RiGraduationCapLine style={{ width: '1.8rem', height: '1.8rem' }} />
                        <h1 className="font-Poppins font-[500] text-[1.8rem]">Education</h1>
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
                        <MdWorkOutline style={{ width: '1.8rem', height: '1.8rem' }} />
                        <h1 className={`font-Poppins font-[500] text-[1.8rem]  `}>Work</h1>
                    </div>
                </div>

                {/* Section for education and work */}
                <div className={`relative  `}>
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
                    <div className="bg-[var(--first-color)] w-1 h-[80%]
                     absolute top-0 left-[50.3%] "></div>
                    <div className="absolute top-[-2px] left-[49%]">
                        <Circle></Circle>
                    </div>
                    <div className="absolute top-[45%] left-[49%] ">
                        <Circle></Circle>
                    </div>
                    <div className="absolute top-[78%] left-[49%]">
                        <Circle></Circle>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Qualification;
