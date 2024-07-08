import express from "express";

//Create express app
const app = express()

//Apply midlleware
app.use(express.json());

//Listening for incoming request
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Running on Port ${PORT}`);
});