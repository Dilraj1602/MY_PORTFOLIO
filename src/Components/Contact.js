import Form from "./Form";
import data from "../data";
import Contact_section from "./Contact_section";

function Contact() {
    const { contacts } = data;
    console.log(contacts);

    return (
        <div className="pt-[5.5rem] flex flex-col  relative justify-between items-center w-full mb-10 lg:mb-0 ">
            <h1 className="text-[2rem] font-bold text-[var(--body-font)] font-Poppins">Contact Me</h1>
            <p className="text-[1.1rem] text-gray-500">Want to connect? My inbox is always open!</p>

            <div className="flex flex-col sm:flex-row lg:pt-[7%] md:justify-between mt-12 sm:space-x-[7%] md:space-x-[16%] relative " >
                {/* Way to connect */}
                <div className="flex flex-col space-y-[2%]  mb-[20px]  sm:space-y-[20%]  ">
                    {contacts.map((contact, index) => {
                        return ( 
                            <Contact_section
                                key={index}
                                icon={contact.icon}
                                title={contact.title}
                                description={contact.description}
                            />
                        );
                    })}
                </div>

                {/* Form */}
                <div className="w-[460px] sm:w-[400px] md:w-[460px] lg:w-[600px] ">
                    <Form />
                </div>
            </div>
        </div>
    );
}

export default Contact;
