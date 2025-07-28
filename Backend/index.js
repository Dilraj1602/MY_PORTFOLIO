const express = require('express');
const cors = require('cors'); 
<<<<<<< HEAD
const { createEmailTemplate, createPlainTextTemplate } = require('./template');
const sgMail = require('@sendgrid/mail');
=======
const {connect} = require('./config/database');
const Response = require('./models/response'); 
>>>>>>> 75eb4da51fab6545e5233401190809173a84d4d8

const app = express();
require('dotenv').config();

<<<<<<< HEAD
// Set SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY || 'YOUR_SENDGRID_API_KEY');

app.use(cors());
app.use(express.json());

=======
app.use(cors());
app.use(express.json());

connect();



>>>>>>> 75eb4da51fab6545e5233401190809173a84d4d8
app.get('/', (req, res) => {
    res.send("hello world");
});

app.post('/add', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
<<<<<<< HEAD
        
        // Create email templates
        const htmlContent = createEmailTemplate(name, email, subject, message);
        const textContent = createPlainTextTemplate(name, email, subject, message);

        // Email data for sending
        const emailData = {
            to: 'dilraj1602@gmail.com',
            from: 'dilraj1602@gmail.com', // Verified sender email
            subject: `Portfolio Contact: ${subject}`,
            text: textContent,
            html: htmlContent,
            replyTo: email // So you can reply directly to the sender
        };

        // Send email using SendGrid
        try {
            await sgMail.send(emailData);
            console.log('Email sent successfully to dilraj1602@gmail.com');
            res.status(200).json({ 
                message: "Email sent successfully!",
                success: true 
            });
        } catch (sendError) {
            console.error('SendGrid Error:', sendError);
            res.status(500).json({ 
                error: "Failed to send email. Please try again later.",
                success: false 
            });
        }

=======
        const newResponse = new Response({ name, email, subject, message });

        await newResponse.save();
        res.status(201).json({ message: "Response added" });
>>>>>>> 75eb4da51fab6545e5233401190809173a84d4d8
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error. Please try again later." });
    }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
