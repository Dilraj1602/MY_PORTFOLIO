import Button from "./Button";

function ProjectsSection({ img, title, description }) {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row md:space-x-6 items-center px-4 md:px-6 py-4 md:py-8">
      {/* Project Image */}
      <div className="w-full md:w-1/2 max-w-lg flex justify-center md:justify-start">
        <img
          src={img}
          alt={title}
          className="w-[90%] sm:w-[80%] md:w-full max-w-[400px] h-[220px] md:h-[260px] object-cover border-2 border-gray-400 rounded-lg shadow-md"
        />
      </div>

      {/* Project Details */}
      <div className="w-[90%] md:w-1/2 flex flex-col space-y-4 text-center md:text-left mt-6 md:mt-0">
        <h2 className="text-xl md:text-2xl font-semibold text-[var(--body-font)] font-Poppins">
          {title}
        </h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          {description}
        </p>
        <div className="flex justify-center md:justify-start">
          <Button
            text={"Check Out"}
            icon="uil uil-arrow-right button_icon"
            aria-label={`Check out project: ${title}`}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
