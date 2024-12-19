import { useState } from "react";
import Button from "./Button";
import "../App.css";
import toast, { Toaster } from 'react-hot-toast';

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !subject || !message) {
            toast.error("All fields are required!");
            return;
        }
        // Logic to handle form submission, e.g., send data to the backend or show a toast notification
        console.log({ name, email, subject, message });
        
        toast.success("Message sent successfully!");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
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
                    className="w-full border border-[var(--first-color)] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--first-color)]"
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
                    className="w-full border border-[var(--first-color)] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--first-color)]"
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
                    className="w-full border border-[var(--first-color)] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--first-color)]"
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
                    className="w-full border border-[var(--first-color)] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--first-color)]"  
                />
            </div>

            {/* Add type="submit" to Button */}
            <Button text="Send Message" icon="uil uil-message" type="submit" />
        </form>
    );
}

export default Form;
