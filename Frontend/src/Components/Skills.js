import { useState } from "react";
import user_data from "../data";
import Skills_section from "./Skills_section";
import Skills_section_1 from "./Skills_section_1";
import { GoTools } from "react-icons/go";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { PiBracketsAngleBold } from "react-icons/pi";

function Skills({ isdarkmode }) {
  const [isdown1, setIsDown1] = useState(true);
  const [isdown2, setIsDown2] = useState(false);
  const [isdown3, setIsDown3] = useState(false);

  const { languages, frameworks, tools, languages1, img4, img1, img2, img3, rate1, rate2, rate3, rate4 } = user_data;
  // 
  return (
<<<<<<< HEAD
    <div className={`md:pt-[5.5rem] flex flex-col relative justify-center items-center px-4 sm:px-0 ${isdarkmode ? "text-white" : "text-black"}   `}>
      <h1 className={`text-[1.5rem] sm:text-[2rem] ${isdarkmode ? "text-white" : "text-black"} font-bold text-[var(--body-font)] font-Poppins text-center`}>Skills</h1>
      <p className={`text-[1rem] sm:text-[1.1rem] ${isdarkmode ? "text-gray-400" : "text-gray-500"} mb-6 sm:mb-10 text-center`}>My Technical Skills</p>

      <div className="grid grid-cols-1 gap-6 sm:gap-[40px] md:grid-cols-2 md:gap-[80px] mt-6 sm:mt-8 pl-0 md:pl-[7%] w-full max-w-6xl">
=======
    <div className={`w-[90%] sm:w-full px-[5%] sm:px-0 md:pt-[5.5rem] flex flex-col relative justify-center items-center ${isdarkmode ? "text-white" : "text-black"}   `}>
      <h1 className={`text-[2rem] ${isdarkmode ? "text-white" : "text-black"} font-bold text-[var(--body-font)] font-Poppins`}>Skills</h1>
      <p className={`text-[1.1rem] ${isdarkmode ? "text-gray-400" : "text-gray-500"} mb-10`}>My Technical Skills</p>

      <div className="grid grid-cols-1  gap-[40px] md:grid-cols-2 md:gap-[80px] mt-8 pl-[1%] md:pl-[7%] ">
>>>>>>> 75eb4da51fab6545e5233401190809173a84d4d8
        {/* Languages */}
        <div className="relative">
          <div>
            <PiBracketsAngleBold
<<<<<<< HEAD
              size="2rem"
              className="sm:text-2.5rem text-[var(--first-color)] hover:cursor-pointer absolute left-0 sm:left-[-12%] top-[10px] "
=======
              className="text-[2rem] sm:text-[2.5rem] text-[var(--first-color)] hover:cursor-pointer sm:absolute left-[-13%] sm:left-[-12%] top-[10px]"
>>>>>>> 75eb4da51fab6545e5233401190809173a84d4d8
              onClick={() => setIsDown1(!isdown1)}
            />

          </div>
<<<<<<< HEAD
          <div className="font-Poppins text-lg sm:text-xl font-[600] pl-8 sm:pl-0">Languages</div>
=======
          <div className={`w-full font-Poppins  text-xl font-[600]`}>Languages</div>
>>>>>>> 75eb4da51fab6545e5233401190809173a84d4d8
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
<<<<<<< HEAD
              size="2rem"
              className="sm:text-2.5rem text-[var(--first-color)] hover:cursor-pointer absolute left-0 sm:left-[-12%] top-[10px] "
=======
              size="2.5rem"
              className="text-[var(--first-color)] hover:cursor-pointer sm:absolute left-[-13%] sm:left-[-12%] top-[10px] "
>>>>>>> 75eb4da51fab6545e5233401190809173a84d4d8
              onClick={() => setIsDown2(!isdown2)}
            />
          </div>
          <div className="font-Poppins text-lg sm:text-xl font-[600] pl-8 sm:pl-0">Libraries & Frameworks</div>
          <p
<<<<<<< HEAD
            className="flex items-center hover:cursor-pointer text-gray-400 select-none text-sm sm:text-base pl-8 sm:pl-0"
            onClick={() => setIsDown2(!isdown2)} 
=======
            className="flex items-center hover:cursor-pointer text-gray-400 select-none "
            onClick={() => setIsDown2(!isdown2)}
>>>>>>> 75eb4da51fab6545e5233401190809173a84d4d8
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
<<<<<<< HEAD
              size="2rem"
              className="sm:text-2.5rem text-[var(--first-color)] hover:cursor-pointer absolute left-0 sm:left-[-12%] top-[10px] "
=======
              size="2.5rem"
              className="text-[var(--first-color)] hover:cursor-pointer sm:absolute left-[-13%] sm:left-[-12%] top-[10px] "
>>>>>>> 75eb4da51fab6545e5233401190809173a84d4d8
              onClick={() => setIsDown3(!isdown3)}
            />
          </div>
          <div className="font-Poppins text-lg sm:text-xl font-[600] pl-8 sm:pl-0">Tools</div>
          <p
            className="flex items-center hover:cursor-pointer text-gray-400 select-none text-sm sm:text-base pl-8 sm:pl-0"
            onClick={() => setIsDown3(!isdown3)}
          >
            Tools that I know and use on a daily basis
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
