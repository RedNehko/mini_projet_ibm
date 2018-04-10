var mongoose = require('mongoose'); // pour la bdd
var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var router = express.Router();

// on se connecte à la bdd mlab
mongoose.connect('mongodb://maxime:progtr00@ds237489.mlab.com:37489/mini_projet');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur de connexion : Impossible de se connecter à la BDD'));
db.once('open', () => {
    console.log('Connecté à la BDD :)');
});

app.use(express.static('http://localhost:4200/add_serie_film'));//on envoie vers le lien

// structure du schéma
var sfSchema = mongoose.Schema({
  sftitle: String,
  sftype: String,
  sfdescription: String,
  sfaddBy: String,
  sfaddDate: Date
});
var serieFilm = mongoose.model('Serie', sfSchema);

// envoie de la nouvelle entrée
app.post('/http://localhost:4200/add_serie_film', (req, res) => {
  if(!req.body){
      return res.sendStatus(500);
  }else{
      // definie la date
      var date = new Date();
      var formData = req.body;
      var title = req.body.title;
      var type = req.body.type;
      var description = req.body.description;
      var addBy = req.body.addBy;
      var mySerie = new Serie({sftitle: title, sftype: type, sfdescription: description, sfaddBy: addBy, sfaddDate: date});
      mySerie.save((err, savedSerie) => {
          if(err){
              console.error(err);
              return;
          }else{
              console.log(savedSerie);
              //res.sendStatus(201);
              res.status(201).send('La/Le serie/film a été ajouté(e) avec succès !');
          }
      });
  }
});



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.options('*', cors());
app.use(cors({ origin: true, credentials: true }));

require('./router')(app);

var cfenv = require('cfenv');
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function () {
  console.log("server starting on " + appEnv.url);
});