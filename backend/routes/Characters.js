var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:bg7iIGzkXKhFyBzt@cluster0.1hrsn6p.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true})

var Schema = mongoose.Schema;
var CharacterSchema = new Schema({
    Nom:{type: String, required: true},
    Niveau:{type: Number, required: true},
    Force:{type: Number, required: true},
    Dexterite:{type: Number, required: true},
    Constitution:{type: Number, required: true},
    Sagesse:{type: Number, required: true},
    Charisme:{type: Number, required: true},
    Intelligence:{type: Number, required: true},
    description: {type: String, required: true},
}, {versionKey: false});

var UserData = mongoose.model('Characters', CharacterSchema);


router.get('/Character', function(req, res, next) {
    UserData.find()
        .then(function(doc) {
            res.json(doc);
        });
});

router.get('/Character/Nom', function(req, res, next) {
    UserData.find({type:"Nom"})
        .then(function(doc) {
            res.json(doc);
        });
});



router.post('/AddCharacter', function(req, res, next) {
    var item = {
        Nom:req.body.Nom,
        Niveau:req.body.Niveau,
        Force:req.body.Force,
        Dexterite:req.body.Dexterite,
        Constitution:req.body.Constitution,
        Sagesse:req.body.Sagesse,
        Charisme:req.body.Charisme,
        Intelligence:req.body.Intelligence,
        description: req.body.description,
    };

    var data = new UserData(item);
    data.save();
    res.redirect('/');
});


router.post('/delete', function(req, res, next) {
    var id = req.body.id;
    UserData.findByIdAndRemove(id).exec();
    res.redirect('/');
});

module.exports = router;
