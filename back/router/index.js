const express = require('express');
const router = express.Router();

var mongoose = require('mongoose'); // pour la bdd

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
        let tabMovies = [
            { titre: 'a', type: 'serie' },
            { titre: 'b', type: 'film' }
        ];
        res.status(200).send(tabMovies);
    })


    mongoose.connect('mongodb://maxime:progtr00@ds237489.mlab.com:37489/mini_projet');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Erreur de connexion : Impossible de se connecter à la BDD'));
    db.once('open', () => {
        console.log('Connecté à la BDD :)');
    });


    //db.series.find({sftitre: titre});
    db.collection("series").findOne({}, function(err, result) {
        if (err) throw err;
            console.log(result.sftitle);
        db.close();
    });
    db.collection("series").find({type: 'film'}, function(err, result){
        console.log(result.sftitle);
    });


}