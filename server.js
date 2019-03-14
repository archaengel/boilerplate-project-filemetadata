'use strict';

var express = require('express');
var cors = require('cors');

// require and use "multer"...
const multer = require("multer")

const Maybe = require("folktale/maybe")
const { Just, Nothing } = Maybe

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

const apiRouter = require('./routes/api')
app.use('/api', apiRouter)

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

const mainIsModule = (main) =>
  (module) => main === module

const startServerIfCommandline = (main) =>
  (module) =>
  (app) =>
  (port) =>
  mainIsModule(main)(module)
  ? Just(app.listen(port, () => console.log(`Node is listening on port: ${port}!`)))
  : Nothing()

module.exports = {
  startServerIfCommandline,
}

startServerIfCommandline(require.main)(module)(app)(3000)
