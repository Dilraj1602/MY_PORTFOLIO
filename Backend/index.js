const express = require('express');
const cors = require('cors'); 
const {connect} = require('./config/database');
const Response = require('./models/response'); 

const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

connect();



app.get('/', (req, res) => {
    res.send("hello world");
});

app.post('/add', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        const newResponse = new Response({ name, email, subject, message });

        await newResponse.save();
        res.status(201).json({ message: "Response added" });
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
