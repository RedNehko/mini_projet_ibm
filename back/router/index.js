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

    app.get('/avis', (req, res, next) => {
        //let tabMovies= ['a','b'];
        let tabMovies = [
            { titre: 'a', type: 'serie' },
            { titre: 'b', type: 'film' }
        ];
        res.status(200).send(tabMovies);
    })
}