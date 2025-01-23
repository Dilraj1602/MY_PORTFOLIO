import "../App.css";
import { useState, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import { BsFillSunFill } from "react-icons/bs";
function Navbar({ tooglemode, isdarkmode }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [selectedTab, setSelectedTab] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const tabs = [
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Skills", id: "skills" },
        { name: "Qualification", id: "qualification" },
        { name: "Projects", id: "projects" },
        { name: "Contact Me", id: "contact" },
    ];

    const handleScroll = (id) => {
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
        setSelectedTab(id);
    };

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.9,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setSelectedTab(entry.target.id);
                }
            });
        }, observerOptions);

        tabs.forEach((tab) => {
            const section = document.getElementById(tab.id);
            if (section) observer.observe(section);
        });

        return () => {
            tabs.forEach((tab) => {
                const section = document.getElementById(tab.id);
                if (section) observer.unobserve(section);
            });
        };
    }, [tabs]);

    useEffect(() => {
        const handleScrollEvent = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScrollEvent);

        return () => window.removeEventListener("scroll", handleScrollEvent);
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 p-[20px] ${isScrolled ? "shadow-sm" : "shadow-none"} transition-all duration-200 ${isdarkmode ? "bg-[var(--dark-body-color)]" : "bg-white"} `}
        >
            <div className="max-w-[1000px] mx-auto flex justify-between items-center">
                <div className={`text-xl font-bold hover:cursor-pointer ${isdarkmode ? "text-[var(--dark-title-color)]" : "text-black"}`}>
                    Dil Raj
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {tabs.map((tab) => (
                        <a
                            key={tab.id}
                            href={`#${tab.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                handleScroll(tab.id);
                            }}
                            className={`transition-colors duration-200 ${
                                selectedTab === tab.id
                                    ? "text-[var(--first-color-second)]"
                                    : (isdarkmode ? "text-[var(--dark-title-color)]" : "text-black") 
                            } hover:text-[var(--first-color-alt)]`}
                        >
                            {tab.name}
                        </a>
                    ))}

                    {/* Dark Mode Toggle */}
                    <div onClick={tooglemode} className="cursor-pointer">
                        {!isdarkmode ? (
                            <BsFillSunFill  className="text-2xl text-[var(--first-color)] " />
                        ) : (
                            <BsFillSunFill  className="text-2xl text-white" />
                        )}
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className="flex md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <i className="uil uil-bars text-2xl"></i>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isMenuOpen && (
                <div className={`flex flex-col md:hidden ${isdarkmode ?"text-[var(--dark-title-color)]" : "text-black" } shadow-lg rounded-lg mt-2 p-4 space-y-4`}>
                    {tabs.map((tab) => (
                        <a
                            key={tab.id}
                            href={`#${tab.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                handleScroll(tab.id);
                                setIsMenuOpen(false);
                            }}
                            className={`transition-colors duration-200 ${
                                selectedTab === tab.id
                                    ? "text-[var(--first-color)] font-semibold"
                                    : "text-[var(--title-color)]"
                            } hover:text-[var(--first-color-alt)]`}
                        >
                            {tab.name}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Navbar;
