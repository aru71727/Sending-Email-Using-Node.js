const express = require('express')
const router = express.Router()
const fs = require('fs');
const url = require('url');

const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

//router.use(require('connect').bodyParser());
router.use(bodyParser.urlencoded({ extended: true })); 

router.post('/', function(req,res){
  const email = req.body.email;
  const password = req.body.password;
  username = email;
  pass = password;
  console.log(username);
  //console.log(pass);
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: username,
      pass: pass
    }
  });
  transporter.verify(function(error,success){
    if(error){
      console.log("Invalid email or password.");
      res.render('home');
      }
    else{
    console.log("Logged In");
    res.render('content');
    }
  });
  //console.log("Logged In");

  
});


module.exports = router;