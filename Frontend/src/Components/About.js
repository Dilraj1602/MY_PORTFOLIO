import React, { useEffect } from "react";
import Button from "./Button";
import "../App.css";
import user_data from "../data";
import user_img from "../assests/img-removebg.png";

import VanillaTilt from "vanilla-tilt";

function About({isdarkmode}) {
    
  useEffect(() => {
    const tiltElement = document.querySelector(".tilt-effect");
    if (tiltElement) {
      VanillaTilt.init(tiltElement, {
        max: 30, // Maximum tilt angle in degrees
        speed: 400, // Speed of tilt animation
        glare: true, // Enable glare effect
        "max-glare": 0.5, // Maximum glare intensity
      });
    }
  }, []); // Empty array to run effect on component mount

  const openResume = () => {
    window.open(user_data.resume, "_blank"); // Open resume in a new tab
  };

  return (
    <div className="mt-[5.5rem] px-[5%] sm:px-0 w-[90%] sm:w-full flex flex-col relative justify-between items-center mx-auto">
      {/* Header Section */}
      <h1 className={`text-[1.5rem] sm:text-[2rem] font-bold ${isdarkmode ?"text-white ": "text-black"} text-[var(--body-font)] font-Poppins`}>
        About Me
      </h1>
      <p className="text-[1.1rem] text-gray-400">My Introduction</p>

      {/* Main Section */}
      <div className="py-[50px] md:pl-[7%] flex flex-col items-center space-y-10 md:flex-row md:space-x-[100px] md:justify-between w-[90%] sm:w-[100%]">
        {/* Image Section with Tilt Effect */}
        <div className="md:w-[400px] md:pt-[20px]">
          <img
            src={user_img}
            alt="User"
            className="tilt-effect w-[300px] h-[330px] sm:w-[350px] sm:h-[400px] object-cover rounded-xl"
          />
        </div>

        {/* Text Section */}
        <div className=" md:w-[55%] flex flex-col items-center justify-center sm:items-start sm:justify-start space-y-[40px]">
          <div className={`w-[100%]  sm:w-[95%] leading-[2rem] font-Poppins text-base sm:text-xl ${isdarkmode ?"text-[var(--dark-text-color)]" :"text-[var(--text-color)]"} `}>
            {user_data.bio} {/* Displaying bio from data */}
          </div>
          <div onClick={openResume} className="flex justify-center sm:justify-start items-center ">
            <Button text="Resume" icon="uil uil-file-download-alt button_icon" isdarkmode={isdarkmode} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
