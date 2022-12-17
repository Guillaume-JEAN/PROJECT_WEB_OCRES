var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');

const CharacterSchema =  {
    Nom:String,
    Niveau:Number,
    Force:Number,
    Dexterite: Number,
    Constitution: Number,
    Sagesse:Number,
    Charisme:Number,
    Intelligence:Number,
    description:  String,
}

const Characters = mongoose.model('Characters', CharacterSchema);

module.exports = Characters;