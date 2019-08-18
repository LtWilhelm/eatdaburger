const express = require('express');
const app = express();
const port = process.env.PORT || 6969;

const handlebars = require('express-handlebars');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');