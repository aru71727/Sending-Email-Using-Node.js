const express = require('express')
const router = express.Router()
const fs = require('fs');
const formidable = require('formidable');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');


//router.use(require('connect').bodyParser());
router.use(bodyParser.urlencoded({ extended: true })); 

router.post('/',
function(req,res){
  console.log(req.body);
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    console.log(files.filetoupload.path);
    var oldpath = files.filetoupload.path;
    console.log("-----------",oldpath)
    newpath = '/home/appventurez/Desktop/codes/src/src/uploaded_files/'+files.filetoupload.name;
    console.log("-----------",newpath)
    fname = files.filetoupload.name;
    fs.rename(oldpath, newpath, function (err) {
      if (err) throw err;
    console.log("uploaded..!!");
    //console.log(username);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="sendmail" method="post" enctype="multipart/form-data">');
    res.write('From: ' +username +'<br>');
    res.write('File: ' +fname +'<br>');
    res.write('<input type="submit" value = "Send Mail"> ');
    res.write('</form>');
    return res.end();

    });
});
});








module.exports = router;