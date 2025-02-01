const mongoose = require('mongoose');
require('dotenv').config();

exports.connect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log('Database connected');
    })
    .catch((err) => {
        console.log('Error connecting to database', err);
        process.exit(1);
    });
};
