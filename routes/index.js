var express = require('express');
var path = require('path');
var router = express.Router();
const fs = require('fs');
var store = require('store');
var WebRcon = require('webrconjs');
const { route } = require('../app');

/* GET home page. */
router.get("/",function(req,res,next){
res.redirect("/signin");
})

router.get('/status', function(req, res, next) {
res.render('status');
});

router.get('/rcon', function(req, res, next) {
res.render('rcon');
});

router.get('/players', function(req, res, next) {
res.render('players');
});

router.get('/whitelist', function(req, res, next) {
res.render('whitelist');
});

//サインイン
router.get('/signin', function(req, res, next) {
res.render("signin");
});

//サインアウト
router.get('/signout', function(req, res, next) {
res.render("signout");
});

module.exports = router;
