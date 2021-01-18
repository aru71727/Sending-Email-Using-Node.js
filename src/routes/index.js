var express = require('express');
var router = express.Router();
/*

router.get('/', function(req, res, next) {
  //console.log("express");
 // res.render('index', {  title:'Express' });
 res.send('hello world');
});*/


// GET method route
router.get('/', function (req, res) {
  res.send('GET request to the homepage')
})

// POST method route
router.post('/', function (req, res) {
  res.send('POST request to the homepage')
})
/*
router.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
})*/

router.get('/about', function (req, res) {
  res.send('about')
})
router.get('/ab?cd', function (req, res) {
  res.send('ab?cd')
})

router.get('/ab+cd', function (req, res) {
  res.send('ab+cd')
})


router.get('/ab*cd', function (req, res) {
  res.send('ab*cd')
})
router.get('/ab(cd)?e', function (req, res) {
  res.send('ab(cd)?e')
})


router.get(/a/, function (req, res) {
  res.send('/a/')
})


router.get(/.*fly$/, function (req, res) {
  res.send('/.*fly$/')
})

router.get('/:id', function(req,res){
  const id = req.params.id
  res.send(id);
})


module.exports = router;
