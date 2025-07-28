import React from "react";
import "../App.css";

function Project_Section({ img, title, description, url, isdarkmode }) {
  const handleCheckOut = () => {
    window.open(url, "_blank");
  };

  return (
    <div className={`w-full sm:w-[400px] lg:w-[600px] border-2 border-[var(--first-color)] rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 ${isdarkmode ? "bg-[var(--dark-body-color)]" : "bg-white"}`}>
      <div className="space-y-4">
        {/* Project Image */}
        <div className="w-full h-48 overflow-hidden rounded-lg">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Project Info */}
        <div className="space-y-3">
          <h3 className={`text-xl font-semibold ${isdarkmode ? "text-white" : "text-gray-800"}`}>
            {title}
          </h3>
          <p className={`text-sm leading-relaxed ${isdarkmode ? "text-gray-300" : "text-gray-600"}`}>
            {description}
          </p>
          
          {/* Check Out Button */}
          <button
            onClick={handleCheckOut}
            className={`w-full py-2 px-4 bg-[var(--first-color)] text-white rounded-md hover:bg-opacity-90 transition-all duration-300 font-medium`}
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Project_Section;
