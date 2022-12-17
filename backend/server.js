const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://admin:bg7iIGzkXKhFyBzt@cluster0.1hrsn6p.mongodb.net/ProjetWeb'),


app.use("/",require('./routes/CharactersRoute'));

app.listen(3001, function (){
    console.log("express server is running on port 3001")
});