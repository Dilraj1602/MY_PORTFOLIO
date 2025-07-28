import React, { useState } from "react";
import "../App.css";
import user_data from "../data";
import Skills_section from "./Skills_section";
import Skills_section_1 from "./Skills_section_1";
import { PiBracketsAngleBold, PiBracketsCurlyBold } from "react-icons/pi";
import { GoTools } from "react-icons/go";

function Skills({ isdarkmode }) {
  const [isdown1, setIsDown1] = useState(true);
  const [isdown2, setIsDown2] = useState(false);
  const [isdown3, setIsDown3] = useState(false);

  const { languages, frameworks, tools, languages1, img4, img1, img2, img3, rate1, rate2, rate3, rate4 } = user_data;
  // 
  return (
    <div className={`md:pt-[5.5rem] flex flex-col relative justify-center items-center px-4 sm:px-0 ${isdarkmode ? "text-white" : "text-black"}   `}>
      <h1 className={`text-[1.5rem] sm:text-[2rem] ${isdarkmode ? "text-white" : "text-black"} font-bold text-[var(--body-font)] font-Poppins text-center`}>Skills</h1>
      <p className={`text-[1rem] sm:text-[1.1rem] ${isdarkmode ? "text-gray-400" : "text-gray-500"} mb-6 sm:mb-10 text-center`}>My Technical Skills</p>

      <div className="grid grid-cols-1 gap-6 sm:gap-[40px] md:grid-cols-2 md:gap-[80px] mt-6 sm:mt-8 pl-0 md:pl-[7%] w-full max-w-6xl">
        {/* Languages */}
        <div className="relative">
          <div>
            <PiBracketsAngleBold
              size="2rem"
              className="sm:text-2.5rem text-[var(--first-color)] hover:cursor-pointer absolute left-0 sm:left-[-12%] top-[10px] "
              onClick={() => setIsDown1(!isdown1)}
            />

          </div>
          <div className="font-Poppins text-lg sm:text-xl font-[600] pl-8 sm:pl-0">Languages</div>
          <p
            className="flex items-center hover:cursor-pointer text-gray-400 select-none text-sm sm:text-base pl-8 sm:pl-0"
            onClick={() => setIsDown1(!isdown1)}
          >
            Languages that I have picked up over the years
            <i
              className={`uil ${!isdown1 ? "uil-angle-down" : "uil-angle-up"} skills_arrow ml-2`}
            ></i>
          </p>
          {isdown1 && <Skills_section_1 languages1={languages1} img4={img4} rate4={rate4} />}
          {isdown1 && <Skills_section languages={languages} img1={img1} rate1={rate1} />}
        </div>

        {/* Libraries & Frameworks */}
        <div className="relative">
          <div>
            <PiBracketsCurlyBold
              size="2rem"
              className="sm:text-2.5rem text-[var(--first-color)] hover:cursor-pointer absolute left-0 sm:left-[-12%] top-[10px] "
              onClick={() => setIsDown2(!isdown2)}
            />
          </div>
          <div className="font-Poppins text-lg sm:text-xl font-[600] pl-8 sm:pl-0">Libraries & Frameworks</div>
          <p
            className="flex items-center hover:cursor-pointer text-gray-400 select-none text-sm sm:text-base pl-8 sm:pl-0"
            onClick={() => setIsDown2(!isdown2)} 
          >
            Libraries and Frameworks that I prefer to work with
            <i
              className={`uil ${!isdown2 ? "uil-angle-down" : "uil-angle-up"} skills_arrow ml-2`}
            ></i>
          </p>
          {isdown2 && <Skills_section frameworks={frameworks} img2={img2} rate2={rate2} />}
        </div>

        {/* Tools */}
        <div className="relative md:col-span-2 lg:col-span-1">
          <div>
            <GoTools
              size="2rem"
              className="sm:text-2.5rem text-[var(--first-color)] hover:cursor-pointer absolute left-0 sm:left-[-12%] top-[10px] "
              onClick={() => setIsDown3(!isdown3)}
            />
          </div>
          <div className="font-Poppins text-lg sm:text-xl font-[600] pl-8 sm:pl-0">Tools</div>
          <p
            className="flex items-center hover:cursor-pointer text-gray-400 select-none text-sm sm:text-base pl-8 sm:pl-0"
            onClick={() => setIsDown3(!isdown3)}
          >
            Tools that I use to bring my ideas to life
            <i
              className={`uil ${!isdown3 ? "uil-angle-down" : "uil-angle-up"} skills_arrow ml-2`}
            ></i>
          </p>
          {isdown3 && <Skills_section tools={tools} img3={img3} rate3={rate3} />}
        </div>
      </div>
    </div>
  );
}

export default Skills;
