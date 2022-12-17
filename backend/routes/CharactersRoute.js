var express = require('express');
var router = express.Router();
const Character = require("../models/CharactersModel")


router.route("/AddCharacter").post ( (req,res) =>{
        const Nom = req.body.Nom;
        const Niveau = req.body.Niveau;
        const Force = req.body.Force;
        const Dexterite = req.body.Dexterite;
        const Constitution = req.body.Constitution;
        const Sagesse = req.body.Sagesse;
        const Charisme = req.body.Charisme;
        const Intelligence = req.body.Intelligence;
        const description = req.body.description;

        const NewCharacter = new Character ({
            Nom,
            Niveau,
            Force,
            Dexterite,
            Constitution,
            Sagesse,
            Charisme,
            Intelligence,
            description,
        });
    NewCharacter.save();
})

router.route("/Characters").post ( (req,res) =>{
    Character.find()
        .then(fundCharacters => res.json(fundCharacters))

});

/*

router.get('/Characters/Nom', function(req, res, next) {
    UserData.find({type:"Nom"})
        .then(function(doc) {
            res.json(doc);
        });
});


router.post('/delete', function(req, res, next) {
    var id = req.body.id;
    UserData.findByIdAndRemove(id).exec();
    res.redirect('/');
});
*/

module.exports = router;
