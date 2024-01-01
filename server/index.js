import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
const app = express();
dotenv.config()
app.get('/', (req, res) => {
    res.send("hello");
});

const PORT = 5500;

app.listen(PORT, () => {
    console.log(`Server Running on the PORT ${PORT}`);
});

const DB_URL = process.env.CONNECTION_URL

mongoose.connect(DB_URL,{useNewsUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log("MongoDB database connected")
}).catch((error)=>{
    console.log(error)
})