let express = require('express');
let router = express.Router();

let burger = require('../models/burgers')

router.get('/', function(req, res){
    burger.select(function(results){
        res.render('index', results);
    })

});