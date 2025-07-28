import Form from "./Form";
import data from "../data";
import Contact_section from "./Contact_section";

function Contact({isdarkmode}) {
    const { contacts } = data;
    console.log(contacts);

    return (
<<<<<<< HEAD
        <div className={`pt-[5.5rem] flex flex-col relative justify-between items-center w-full mb-10 lg:mb-0 px-4 sm:px-0 ${isdarkmode ? "text-white" : "text-black"}`}>
            <h1 className="text-[1.5rem] sm:text-[2rem] font-bold text-[var(--body-font)] font-Poppins text-center">Contact Me</h1>
            <p className={`text-[1rem] sm:text-[1.1rem] ${isdarkmode?"text-gray-400":"text-gray-500"} text-center`}>Want to connect? My inbox is always open!</p>

            <div className="flex flex-col lg:flex-row lg:pt-[7%] lg:justify-between mt-8 sm:mt-12 lg:space-x-[16%] relative w-full max-w-6xl" >
=======
        <div className={`max-w-[1080px] mx-auto pt-[5.5rem] flex flex-col  relative justify-between items-center px-[5%] sm:px-0 mb-10 lg:mb-0 ${isdarkmode ? "text-white" : "text-black"}`}>
            <h1 className="text-[2rem]  font-bold text-[var(--body-font)] font-Poppins">Contact Me</h1>
            <p className={`text-[1.1rem] ${isdarkmode?"text-gray-400":"text-gray-500"} `}>Want to connect? My inbox is always open!</p>

            <div className="flex flex-col sm:flex-row px-[5%] w-full lg:pt-[7%] justify-center sm:justify-between  mt-12 sm:space-x-[7%] md:space-x-[16%] relative " >
>>>>>>> 75eb4da51fab6545e5233401190809173a84d4d8
                {/* Way to connect */}
                <div className="flex flex-col space-y-4 sm:space-y-[2%] mb-8 lg:mb-0 lg:space-y-[20%] w-full lg:w-auto">
                    {contacts.map((contact, index) => {
                        return ( 
                            <Contact_section
                                key={index}
                                icon={contact.icon}
                                title={contact.title}
                                description={contact.description}
                                isdarkmode={isdarkmode}
                            />
                        );
                    })}
                </div>

                {/* Form */}
<<<<<<< HEAD
                <div className="w-full sm:w-[400px] lg:w-[600px] mx-auto lg:mx-0">
=======
                <div className="w-[95%] md:w-[460px] lg:w-[600px] ">
>>>>>>> 75eb4da51fab6545e5233401190809173a84d4d8
                    <Form isdarkmode={isdarkmode} />
                </div>
            </div>
        </div>
    );
}

export default Contact;
