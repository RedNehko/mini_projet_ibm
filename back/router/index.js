const express = require('express');
const router = express.Router();

var mongoose = require('mongoose'); // pour la bdd
const {db} = require('../env/dev');

module.exports = function (app) {

    app.use('/', router);

    // res.render(fichier html)

    router.route('/', (req, res, next) => {
        console.log(req);

        res.status(200).send('GG');
    })
    // router.post('/add_serie_film', (req ,res , next) =>{
    //     console.log(req);

    //     res.status(200).send('izi')
    // })

    app.get('/avis', (req, res, next) => {
        //let tabMovies= ['a','b'];
        /*let tabMovies = [
            { titre: 'a', type: 'serie' },
            { titre: 'b', type: 'film' }
        ];
        res.status(200).send(tabMovies);*/
        serieFilm.find({}, function (err, result) {
            let tabSF = result;
            res.status(200).send(tabSF);
        });
    })


    mongoose.connect(db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Erreur de connexion : Impossible de se connecter à la BDD'));
    db.once('open', () => {
        console.log('Connecté à la BDD :)');
    });


    /*serieFilm.findOne({}, function (err, result) {
        if (err) throw err;
        console.log(result.sftitle);
        db.close();
    });*/
    serieFilm.find({ sftype: 'film' }, function (err, result) {
        console.log(result);
    });


}