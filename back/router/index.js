const express = require('express');
const router = express.Router();

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
    app.post('/add_serie_film', (req, res) => {
        console.log(req.body)
        if (!req.body) {
            return res.sendStatus(500);
        } else {
            // definie la date
            var date = new Date();
            var formData = req.body;
            var title = req.body.title;
            var type = req.body.type;
            var description = req.body.description;
            var addBy = req.body.addBy;
            var mySerie = new serieFilm({ sftitle: title, sftype: type, sfdescription: description, sfaddBy: addBy, sfaddDate: date });
            mySerie.save((err, savedSerie) => {
                if (err) {
                    console.error(err);
                    return;
                } else {
                    console.log(savedSerie);
                    //res.sendStatus(201);
                    res.status(201).send('La/Le serie/film a été ajouté(e) avec succès !');
                }
            });
        }
    });

    app.get('/getMovies', (req, res, next) => {
        //let tabMovies= ['a','b'];
        let tabMovies = [
            {titre: 'a'},
            {titre: 'b'}
        ];
        res.status(200).send(tabMovies);
    })
}