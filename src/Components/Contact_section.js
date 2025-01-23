import "../App.css";

function Contact_section({ icon, title, description }) {
    let url = "";
    
    // Set URLs for specific titles
    if (title === "Instagram") {
        url = "https://www.instagram.com/dilraj_1602/";
    }
    if (title === "Twitter") {
        url = "https://x.com/Dilraj1602";
    }
    if (title === "Email") {
        url = "mailto:wolfstrix360@gmail.com"; 
    }

    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="flex  items-center space-x-4 relative w-[auto] ">
            {/* Icon */}
            <div className="text-2xl text-[var(--first-color)] transform scale-150
            ">
                {icon}
            </div>
            <div className="flex flex-col space-y-[2px]">
                {/* Title */}
                <div className="text-xl  font-[500]">{title}</div>
                {/* Description */}
                <div className=" text-gray-400 ">{description}</div>
            </div>
        </a>
    );
}

export default Contact_section;
