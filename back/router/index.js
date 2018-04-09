const express = require('express');
const router = express.Router();

module.exports = function (app) {

    app.use('/', router);

    // res.render(fichier html)

    router.route('/', (req, res, next) => {
        console.log(req);

        res.status(200).send('GG');
    })

    app.get('/getMovies', (req, res, next) => {
        //let tabMovies= ['a','b'];
        let tabMovies = [
            {titre: 'a'},
            {titre: 'b'}
        ];
        res.status(200).send(tabMovies);
    })
}