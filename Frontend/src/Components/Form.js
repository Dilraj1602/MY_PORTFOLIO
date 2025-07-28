import { useState } from "react";
import Button from "./Button";
import "../App.css";
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

function Form({isdarkmode}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!name || !email || !subject || !message) {
            toast.error("All fields are required!");
            return;
        }

        setIsLoading(true);
    
        try {
            const templateParams = {
                to_email: 'wolfstrix360@gmail.com',
                from_name: name,
                from_email: email,
                subject: subject,
                message: message,
                reply_to: email
            };

            const response = await emailjs.send(
                'service_j3403xp', 
                'template_lzwzrad', 
                templateParams,
                'zWmqCjA8iOd3UhTia' 
            );

            if (response.status === 200) {
                toast.success("Message sent successfully!");
                
                // Clear form fields after successful submission
                setName("");
                setEmail("");
                setSubject("");
                setMessage("");
            } else {
                throw new Error('Failed to send email');
            }
        } catch (error) {
            toast.error("Failed to send the message. Please try again later.");
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <form
            onSubmit={handleSubmit}
            className="sm:w-[100%] h-full border-2 border-[var(--first-color)] p-4 rounded-lg shadow-md space-y-4"
        >
            <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    disabled={isLoading}
                    className={`w-full border border-[var(--first-color)] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--first-color)]
                        ${isdarkmode ? "bg-[var(--dark-body-color)]" : "bg-white"} ${isLoading ? "opacity-50" : ""}`}
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    disabled={isLoading}
                    className={`w-full border border-[var(--first-color)] rounded-md px-3 py-2 focus:outline-none focus:ring-2 
                        focus:ring-[var(--first-color)] ${isdarkmode ? "bg-[var(--dark-body-color)]" : "bg-white"} ${isLoading ? "opacity-50" : ""}`}
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium">
                    Subject
                </label>
                <input
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Enter the subject"
                    disabled={isLoading}
                    className={`w-full ${isdarkmode ? "bg-[var(--dark-body-color)]" : "bg-white"} border border-[var(--first-color)] rounded-md px-3 py-2
                     focus:outline-none focus:ring-2 focus:ring-[var(--first-color)] ${isLoading ? "opacity-50" : ""}`}
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                    Message
                </label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter your message"
                    rows={4}
                    disabled={isLoading}
                    className={`w-full ${isdarkmode ? "bg-[var(--dark-body-color)]" : "bg-white"} border border-[var(--first-color)] rounded-md px-3 py-2
                     focus:outline-none focus:ring-2 focus:ring-[var(--first-color)] ${isLoading ? "opacity-50" : ""}`}  
                />
            </div>

            {/* Add type="submit" to Button */}
            <Button 
                text={isLoading ? "Sending..." : "Send Message"} 
                icon="uil uil-message" 
                type="submit" 
                isdarkmode={isdarkmode}
                disabled={isLoading}
            />
        </form>
    );
}

export default Form;
