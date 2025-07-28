import "../App.css";
import data from "../data";
import Button from "./Button";
import { useEffect } from "react";
import Typed from "typed.js";
import Avatar from "../assests/AvatarMaker (1).png";
import VanillaTilt from "vanilla-tilt";

function Home({isdarkmode}) {
    const { social_media } = data;

    const handleScroll_1 = (id) => {
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const typed = new Typed(".role", {
            strings: [
                "Full Stack Developer",
                "Software Developer",
                "ML Enthusiast",
                "DSA Enthusiast",
            ],
            loop: true,
            typeSpeed: 100,
            backSpeed: 80,
            backDelay: 1000,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    useEffect(() => {
        const tiltElement = document.querySelector(".tilt-effect_1");
        if (tiltElement) {
            VanillaTilt.init(tiltElement, {
                max: 30, // Maximum tilt angle in degrees
                speed: 400, // Speed of tilt animation
                glare: true, // Enable glare effect
                "max-glare": 0.5, // Maximum glare intensity
            });
        }
    }, []);

    return (
        <div className="flex space-x-16 pt-6 sm:pt-12 md:pt-24 translate-y-12 w-full">
            {/* Social Media Section */}
            <div className="flex flex-col space-y-8">
                {social_media.map((item, index) => (
                    <a
                        key={index}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 hover:opacity-80 duration-300 hover:scale-105 transition-all"
                    >
                        {/* Icon */}
                        <div className="text-2xl text-[var(--first-color)] transform scale-125">
                            {item.icon} {/* Dynamic Icon from social_media data */}
                        </div>
                        <div className="flex flex-col space-y-1">
                            {/* Title */}
                            <div className="text-xl font-semibold">{item.title}</div>
                            {/* Description */}
                            <div className="text-gray-400 text-sm">{item.description}</div>
                        </div>
                    </a>
                ))}
            </div>
            {/* avatar-section */}

            <div className=" flex flex-col md:flex-row-reverse md:justify-between md:items-center md:w-[77%]">

                <div className={`w-[250px] h-[250px] tilt-effect_1 rounded-lg ${isdarkmode ?"bg-[var(--dark-body-color)]" :"bg-white" } `}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 200 200"
                        className="w-[250px] h-[250px]  "
                    >
                        <defs>
                            <clipPath id="shapeClip">
                                <path
                                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                                />
                            </clipPath>
                        </defs>
                        <g>
                            {/* Background Color Shape */}
                            <path
                                d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                                fill="var(--first-color)" 
                            />
                            {/* Image inside the shape */}
                            <image
                                href={Avatar}
                                width="200"
                                height="200"
                                className="object-cover  "
                                clipPath="url(#shapeClip)"
                                preserveAspectRatio="xMidYMid slice"
                            />
                        </g>
                    </svg>
                </div>

                {/* Text Section */}
                <div className="flex flex-col items-start space-y-6 pl-[7%]">
                    <h1 className={`text-5xl font-semibold ${isdarkmode ? "text-[var(--dark-title-color)]" : "text-[var(--title-color)]"} `}>
                        Hi, I'm Dil Raj
                    </h1>
                    <h2 className={`text-2xl text-gray-700  ${isdarkmode ?"text-[var(--dark-title-color)]" : "text-[var(--text-color)]"} font-[500]`}>
                        I am a <span className={`role ${isdarkmode ?"text-[var(--dark-text-color)]" : "text-[var(--text-color)]"} font-[500]`}></span>
                    </h2>
                    <p className="text-lg text-[var(--text-color-light)] w-[80%]">
                        Building software to solve real-life problems.
                    </p>
                    <Button text="Contact Me" icon="uil uil-message" onClick={() => handleScroll_1("contact")} isdarkmode={isdarkmode} />

                </div>

            </div>
        </div>
    );
}

export default Home;
