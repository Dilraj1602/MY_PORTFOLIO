import "../App.css";
import { useState } from "react";
import { TbBrandTwitter } from "react-icons/tb";

function Footer({isdarkmode}) {
    const [isScrolled, setIsScrolled] = useState(false);
    const tabs = [
        { name: "About", id: "about" },
        { name: "Projects", id: "projects" },
        { name: "Contact Me", id: "contact" },
    ];
    const handleScroll = (id) => {
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={`  ${isdarkmode?"bg-[var(--dark-container-color)]":"bg-[var(--first-color)]"} w-full py-8  `}>
            {/* Main Footer Container */}
            <div className="px-[5%] sm:px-0 max-w-[1200px] mx-auto text-center  space-y-8">
                {/* Footer Title */}
                <div className="text-4xl font-bold font-Poppins text-white">
                    Dil Raj
                </div>

                {/* Navigation Tabs */}
                <div className="flex flex-wrap items-center justify-center space-x-8 w-auto ">
                    {tabs.map((tab, index) => (
                        <a
                            key={index}
                            href={`#${tab.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                handleScroll(tab.id);
                            }}
                            className="text-white text-lg font-medium font-Poppins transition-colors duration-200 hover:text-[var(--scroll-bar-color)]"
                        >
                            {tab.name}
                        </a>
                    ))}
                </div>

                {/* Social Media Icons */}
                <div className="flex flex-wrap justify-center space-x-6">
                    <a
                        href="https://www.linkedin.com/in/dil-raj-503b44266/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl text-white transition-colors duration-200 hover:text-[var(--scroll-bar-color)]"
                    >
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a
                        href="https://x.com/Dilraj1602"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl text-white transition-colors duration-200 hover:text-[var(--scroll-bar-color)]"
                    >
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a
                        href="https://www.instagram.com/dilraj_1602/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl text-white transition-colors duration-200 hover:text-[var(--scroll-bar-color)]"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>

                {/* Footer Bottom Text */}
                <div className="text-white text-sm font-light">
                    © 2024 Dil Raj. All rights reserved.
                </div>
            </div>
        </div>
    );
}

export default Footer;
