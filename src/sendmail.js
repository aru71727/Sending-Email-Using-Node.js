const express = require('express')
const router = express.Router()
const fs = require('fs');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');


//router.use(require('connect').bodyParser());
router.use(bodyParser.urlencoded({ extended: true })); 
router.post('/',
function(req,res){
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: username,
      pass: pass
    }
  });
  //console.log('loggedin');
  
  var mailOptions = {
    from: username,
    to: 'kush.aradhana007@gmail.com',
    subject: 'Sending Email using Node.js',
    html:'<h2> hello,</h2><p>Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is an open source framework developed and maintained by the Node.js foundation</p>',
    attachments: [{
            filename: fname,
            path: newpath,
            cid: 'img'
        }],
         
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      //res.write("Email sent!!")
      //res.end();
      alert('Email Sent...!!');
      res.render('home');

    }
  });
   res.write("sent..!!");
   res.end();
});
module.exports = router;