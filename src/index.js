
const express = require('express');
const app = express();
const login = require('./login.js');
const composemail = require('./composemail');
const send = require('./sendmail');
app.set('view engine','ejs');
app.use(express.static(__dirname+'/public'));
var username = "";
var pass ="";
var fname="";
var newpath = "";

app.get('/', (req, res) => {
  res.render('home');
});


app.use('/validate', login);
app.use('/upload',composemail);
app.use('/sendmail',send);

app.listen(8080);

