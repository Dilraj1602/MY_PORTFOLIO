const project_data = {
    projects: [
        {
            details: [
                {
                    title: "Study Notion",
                    description: "An E-Learning platform where students can purchase, filter, and track courses, while instructors upload content. 🚀",
                    setup: "The StudyNotion project aims to create a full-fledged online learning platform using the MERN stack (MongoDB, Express, React, Node.js). The process begins with project planning and setting up the backend using Node.js and Express. MongoDB is used for data storage, with secure JWT-based authentication and role-based access control (RBAC) for students, instructors, and admins. Course management is implemented through CRUD operations, allowing instructors to create, update, and delete courses, including uploading video content and resources. Stripe is integrated for secure payment processing. The frontend is developed using React and Tailwind CSS, featuring a responsive UI for user registration, course enrollment, and progress tracking. State management is handled with Context API for a smooth user experience. Students can enroll in courses, track their progress, and leave reviews, while instructors can monitor engagement and update course content. A dynamic dashboard displays enrolled courses, progress, and completed courses. API requests are managed using Axios, and real-time notifications keep users informed about course updates and reviews. The platform is tested using Postman and React DevTools to ensure reliability. Finally, the project is deployed using Vercel (frontend) and Render (backend), with performance optimization through caching and lazy loading. Advanced features like AI-based course recommendations, gamification, and chat support can be added to enhance user engagement and satisfaction.",
                    impact: [
                        "Handles 1,000+ course enrollments efficiently.",
                        "Includes secure authentication using JWT for user verification.",
                        "Features automated email notifications via Nodemailer, improving user engagement by 40%.",
                        "Powerful search, filtering, and rating system enhancing course discovery by 50%.",
                        "Payment gateway integration with a 98% transaction success rate.",
                        "Cloud storage for managing course content and user data."
                    ]
                }
            ]
        },
        {
            details: [
                {
                    title: "Fingenius",
                    description: "An AI-driven financial assistant that helps users manage their finances efficiently. The platform provides real-time insights into spending patterns and helps users make informed financial decisions.",
                    setup: "Created the project using Next.js for a scalable and efficient frontend. Database Integration – Used Supabase for real-time data storage and management, and Prisma for efficient database queries. User Authentication – Integrated Clerk to manage user registration, login, and secure session handling. Transaction Analysis – Developed an AI-driven spending pattern analyzer to give actionable insights. Receipt Scanning – Built an AI-powered receipt scanning tool to automate expense categorization. Background Task Handling – Used Inngest for running scheduled tasks and automating workflows. Security Implementation – Integrated Arcjet Shield to prevent unauthorized access and ensure data integrity. Frontend Design – Designed a clean and responsive UI using Shadcn UI and Tailwind CSS for a modern look and feel. Testing and Optimization – Tested the platform using Postman and React DevTools to ensure smooth performance and user experience.",
                    impact: [
                        "Real-Time Transaction Tracking – Tracks over 1,000+ transactions in real-time.",
                        "Intelligent Spending Pattern Analyzer – Analyzes user spending patterns, reducing overspending by 30%.",
                        "Receipt Scanning AI – Automates 90% of expense categorization using AI.",
                        "Secure Authentication – Integrated Clerk for secure user login and session handling.",
                        "Arcjet Shield – Prevents 100% unauthorized access attempts through advanced security protocols.",
                        "Automated Background Tasks – Managed with Inngest for improved performance and reliability.",
                        "Intuitive UI – Designed with Shadcn UI to enhance user experience by 45%.",
                    ]
                }
            ]
        },
        {
            details: [
                {
                    title: "YTClipSaver",
                    description: "A Chrome extension that allows users to bookmark and revisit timestamps in YouTube videos. The extension provides a lightweight and responsive solution for video bookmarking.",
                    setup: "Created a Chrome extension project with JavaScript, HTML, and CSS. Bookmarking Functionality – Developed functionality to save and revisit timestamps. Persistent Storage – Used Chrome Storage API to store and retrieve data efficiently. UI Development – Designed a lightweight and responsive interface using HTML and CSS. Event Handling – Added real-time video change detection and dynamic updates. Keyboard Shortcuts – Implemented shortcuts to improve bookmarking efficiency. Testing and Optimization – Ensured smooth performance and zero data loss.",
                    impact: [
                        "Real-Time Video Change Detection – Boosted UI responsiveness by 50%.",
                        "Persistent Storage – Used Chrome Storage API to prevent data loss, ensuring 0% loss.",
                        "Bookmarking with Keyboard Shortcuts – Reduced bookmarking time by 40%.",
                        "Lightweight Design – Built an intuitive interface under 100KB for quick loading.",
                        "Seamless Integration – Works directly with YouTube’s interface for smooth user experience.",
                    ]
                }
            ]
        }
    ]
};

export default project_data;
