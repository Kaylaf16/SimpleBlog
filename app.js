//const models = require('./model');
const express = require('express');
const bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
const app = express();
var db = require('./config/config');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.set('view engine','ejs');
app.use(express.static("public"));

//app.use('/', express.static('public'));
//loading in all of the controllers
var controllers = require('./controllers');
app.use(controllers);


//connecting to the database and ensuring it is up and running before starting the server
db.connect('', function(err){
  if (err){
    console.log('connection failed');
  }
  else{
app.listen(8000, function () {
  console.log('Local host running on port 8000 :)');
})
}
})
