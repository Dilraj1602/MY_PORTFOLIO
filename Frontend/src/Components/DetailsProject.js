import { useLocation } from 'react-router-dom';
import "../App.css";
import project_data from '../project_data';  // Assuming 'data.js' is in the same folder or adjust the path accordingly

function DetailsProject() {
    const location = useLocation();
    const { title } = location.state || {};

    if (!location.state) {
        return (
            <div className="text-center text-white mt-10">
                <p>Project details could not be loaded.</p>
            </div>
        );
    }

    // Fetch the project details from the project_data object based on the title
    const project = project_data.projects.find(p => p.details[0].title === title)?.details[0];

    if (!project) {
        return (
            <div className="text-center text-white mt-10">
                <p>Project not found.</p>
            </div>
        );
    }

    const { img, description, url } = project;
    
    // Default fallback description (with multiple paragraphs as array)
    const fallbackDescription = [
        "The StudyNotion project is a full-stack e-learning platform developed using React, Tailwind CSS, Express.js, MongoDB, and Node.js.",
        "It handles 1,000+ course enrollments efficiently, providing seamless registration, tracking, and user management.",
        "The platform includes secure authentication using JWT, ensuring 100% secure user verification. It features automated email notifications via Nodemailer, improving user engagement by 40%.",
        "A powerful search, filtering, and rating system has been integrated, enhancing course discovery by 50%.",
        "A payment gateway has also been implemented, achieving a 98% transaction success rate.",
        "Additionally, the project includes cloud storage for managing course content and user data."
    ];

    // Convert string to array if needed
    const paragraphs = Array.isArray(description)
        ? description
        : typeof description === "string"
        ? description.split('\n').filter(p => p.trim() !== "")
        : fallbackDescription;

    return (
        <div className="w-full min-h-screen bg-[var(--dark-body-color)] text-white py-10 px-4">
            <div className="max-w-6xl mx-auto flex flex-col space-y-12">
                
                {/* Title */}
                <h1 className="text-4xl font-bold text-center">{project.title}</h1>

                {/* Image and Description Section */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10">
                    {/* Project Image */}
                    <img
                        src={img || "https://via.placeholder.com/600"} // Placeholder if img is missing
                        alt={project.title}
                        className="w-full lg:w-[600px] h-auto rounded-lg shadow-lg object-cover"
                    />

                    {/* Description */}
                    <div className="lg:w-[50%] text-lg leading-7 text-justify space-y-6">
                        {paragraphs.map((para, index) => (
                            <p key={index}>{para}</p>
                        ))}

                        {/* URL Section */}
                        {url && (
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-blue-600 hover:bg-blue-700 transition-all px-5 py-2 rounded-lg font-semibold"
                            >
                                Visit Project 🚀
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsProject;
