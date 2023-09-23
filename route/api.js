const Router = require('express').Router;
const schema = require('../db/schema');
var db = require('../db/db');

var user = new db.model('User', schema.user);

var item = new db.model('Item', schema.item);

var app = Router();

app.get('/items', function (req, res) {     
});