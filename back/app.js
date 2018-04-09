var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var router = express.Router();

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