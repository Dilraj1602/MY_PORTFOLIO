const express = require('express');
const app = express();
const response = require('../models/response');

app.use(express.json());

app.get('/add',(req,res)=>{
    res.send("hello mitra");
})

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
            res.status(201).send("Response added");
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send("Server error. Please try again later.");
        });
});
