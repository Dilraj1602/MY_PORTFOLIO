const mongoose = require('mongoose');
require('dotenv').config();
const connectDB =async()=>{
    try{
        const conn = await mongoose.connect(process.env.DATABASE_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log(`MongoDB connected`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;