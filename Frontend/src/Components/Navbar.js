import "../App.css";
import { useState, useEffect } from "react";
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
        const observerOptions = { root: null, rootMargin: "0px", threshold: 0.9 };

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
            setIsMenuOpen(false);
        };

        window.addEventListener("scroll", handleScrollEvent);

        return () => window.removeEventListener("scroll", handleScrollEvent);
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 p-4 sm:p-[20px] ${
                isScrolled ? "shadow-sm" : "shadow-none"
            } transition-all duration-200 ${
                isdarkmode ? "bg-[var(--dark-body-color)] text-white" : "bg-white text-black"
            }`}
        >
            <div className="max-w-[1000px] mx-auto flex justify-between items-center">
                <div className={`text-lg sm:text-xl font-bold cursor-pointer ${isdarkmode ? "text-[var(--dark-title-color)]" : "text-black"}`}>
                    Dil Raj
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 lg:space-x-8">
                    {tabs.map((tab) => (
                        <a
                            key={tab.id}
                            href={`#${tab.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                handleScroll(tab.id);
                            }}
                            className={`transition-colors duration-200 text-sm lg:text-base ${
                                selectedTab === tab.id
                                    ? "text-[var(--first-color-second)]"
                                    : isdarkmode
                                    ? "text-[var(--dark-title-color)]"
                                    : "text-black"
                            } hover:text-[var(--first-color-alt)]`}
                        >
                            {tab.name}
                        </a>
                    ))}

                    {/* Dark Mode Toggle */}
                    <div onClick={tooglemode} className="cursor-pointer">
                        <BsFillSunFill className={`text-xl lg:text-2xl ${isdarkmode ? "text-white" : "text-[var(--first-color)]"}`} />
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <i className="uil uil-bars text-xl sm:text-2xl"></i>
                    </button>
                </div>
            </div>

            <div onClick={tooglemode} className="cursor-pointer md:hidden absolute top-4 sm:top-6 right-12 sm:right-[4rem]">
                        <BsFillSunFill className={`text-xl sm:text-2xl ${isdarkmode ? "text-white" : "text-[var(--first-color)]"}`} />
            </div>

            {/* Mobile Dropdown */}
            {isMenuOpen && (
                <div
                    className={`absolute right-4 top-[60px] flex flex-col w-[140px] sm:w-[150px] md:hidden bg-opacity-80 backdrop-blur-md rounded-lg p-3 space-y-2 sm:space-y-3 ${
                        isdarkmode ? "bg-gray-800 text-white" : "bg-white text-black"
                    }`}
                >
                    {tabs.map((tab) => (
                        <a
                            key={tab.id}
                            href={`#${tab.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                handleScroll(tab.id);
                                setIsMenuOpen(false);
                            }}
                            className={`transition-colors duration-200 text-sm ${
                                selectedTab === tab.id
                                    ? "text-[var(--first-color)] font-semibold"
                                    : isdarkmode
                                    ? "text-white"
                                    : "text-black"
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
