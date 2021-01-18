var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.

var nodemailer = require('nodemailer');
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
//alert ("Login successfully");
alert(username);
document.write(username);
alert ("Login successfully");
var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: username,
          pass: password
        }
      });
    console.log('loggedin');
    alert("login");
      

window.location = "success.html"; // Redirecting to other page.
return false;
/*
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}*/
}
