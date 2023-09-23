const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/user';

module.exports = new mongoose.createConnection(uri);
