import Form from "./Form";
import data from "../data";
import Contact_section from "./Contact_section";

function Contact({isdarkmode}) {
    const { contacts } = data;
    console.log(contacts);

    return (
        <div className={`max-w-[1080px] mx-auto pt-[5.5rem] flex flex-col  relative justify-between items-center px-[5%] sm:px-0 mb-10 lg:mb-0 ${isdarkmode ? "text-white" : "text-black"}`}>
            <h1 className="text-[2rem]  font-bold text-[var(--body-font)] font-Poppins">Contact Me</h1>
            <p className={`text-[1.1rem] ${isdarkmode?"text-gray-400":"text-gray-500"} `}>Want to connect? My inbox is always open!</p>

            <div className="flex flex-col sm:flex-row px-[5%] w-full lg:pt-[7%] justify-center sm:justify-between  mt-12 sm:space-x-[7%] md:space-x-[16%] relative " >
                {/* Way to connect */}
                <div className="flex flex-col space-y-[2%]  mb-[20px]  sm:space-y-[20%]  ">
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
                <div className="w-[95%] md:w-[460px] lg:w-[600px] ">
                    <Form isdarkmode={isdarkmode} />
                </div>
            </div>
        </div>
    );
}

export default Contact;
