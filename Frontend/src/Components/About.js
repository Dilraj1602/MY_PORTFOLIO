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
    <div className="mt-[5.5rem] flex flex-col relative justify-between items-center mx-auto px-4 sm:px-0">
      {/* Header Section */}
      <h1 className={`text-[1.5rem] sm:text-[2rem] font-bold ${isdarkmode ?"text-white ": "text-black"} text-[var(--body-font)] font-Poppins text-center`}>
        About Me
      </h1>
      <p className="text-[1rem] sm:text-[1.1rem] text-gray-400 text-center">My Introduction</p>

      {/* Main Section */}
      <div className="py-8 sm:py-[50px] md:pl-[7%] flex flex-col items-center space-y-8 sm:space-y-10 md:flex-row md:space-x-[100px] md:justify-between w-full">
        {/* Image Section with Tilt Effect */}
        <div className="md:w-[400px] md:pt-[20px] w-full flex justify-center">
          <img
            src={user_img}
            alt="User"
            className="tilt-effect w-[280px] h-[320px] sm:w-[350px] sm:h-[400px] object-cover rounded-xl"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-[55%] flex flex-col space-y-6 sm:space-y-[40px] w-full">
          <div className={`w-full md:w-[78%] leading-7 sm:leading-[2rem] font-Poppins text-lg sm:text-xl ${isdarkmode ?"text-[var(--dark-text-color)]" :"text-[var(--text-color)]"} text-center md:text-left`}>
            {user_data.bio} {/* Displaying bio from data */}
          </div>
          <div onClick={openResume} className="flex justify-center md:justify-start">
            <Button text="Resume" icon="uil uil-file-download-alt button_icon" isdarkmode={isdarkmode} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
