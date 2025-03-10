import Button from "./Button";
import { useState } from "react";

function ProjectsSection({ img, title, description, isdarkmode, url }) {
  const [readmore, setreadmore] = useState(false);

  return (
    <div className="w-[95%] sm:w-full max-w-7xl mx-auto flex flex-col md:flex-row md:space-x-6 items-center px-4 md:px-6 py-4 md:py-8">
      {/* Project Image */}
      <div className="w-full md:w-1/2 max-w-lg flex justify-center md:justify-start">
        <img
          src={img}
          alt={title}
          className={`w-[90%] h-[130px] md:w-full sm:w-[350px] sm:h-[220px] md:h-[260px] object-fill sm:object-cover border-2 ${isdarkmode ? "border-zinc-500" : "border-[var(--dark-body-color)]"} rounded-lg shadow-md`}
        />
      </div>

      {/* Project Details */}
      <div className="w-[95%] md:w-1/2 flex flex-col space-y-4 text-center md:text-left mt-6 md:mt-0">
        <h2 className="text-xl md:text-2xl font-semibold text-[var(--body-font)] font-Poppins">
          {title}
        </h2>
        <p className={`${isdarkmode ? "text-gray-400" : "text-gray-600"} text-sm md:text-base leading-relaxed`}>
          {readmore ? description : `${description.substring(0, 50)}...`}
          <span>
            <button
              onClick={() => setreadmore(!readmore)}
              className="text-[var(--first-color)] font-semibold"
            >
              Read {readmore ? "Less" : "More"}
            </button>
          </span>
        </p>

        <div className="flex justify-center md:justify-start">
          <Button
            text={"Check Out"}
            icon="uil uil-arrow-right button_icon"
            aria-label={`Check out project: ${title}`}
            isdarkmode={isdarkmode}
            onClick={() => window.open(url, "_blank")}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
