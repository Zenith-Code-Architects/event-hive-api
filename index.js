import express from "express";
import mongoose from "mongoose";
import college from "./routes/college.js";

// Create database connection
await mongoose.connect(process.env.CONNECT_STRING);
console.log('Connected to event api database')

//Create express app
const app = express()

//Apply midlleware
app.use(express.json());
app.use(college)

//Listening for incoming request
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Running on Port ${PORT}`);
});