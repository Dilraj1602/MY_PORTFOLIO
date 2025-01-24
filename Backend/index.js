const express = require('express');
const cors = require('cors'); // Importing CORS
const app = express();

const connectDB = require('./config/database');
const response = require('./models/response');

// Use CORS middleware
app.use(cors()); 

app.use(express.json());

// In your backend (Express)
app.post('/add', (req, res) => {
    const { name, email, subject, message } = req.body;
    const newResponse = new response({
        name,
        email,
        subject,
        message
    });

    newResponse.save()
        .then(() => {
            res.status(201).json({ message: "Response added" }); 
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Server error. Please try again later." }); 
        });
});


app.get('/', (req, res) => {
    res.send("hello world");
});

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});

connectDB();
