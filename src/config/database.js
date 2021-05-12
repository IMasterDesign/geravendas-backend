const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/GeraVendas';

mongoose.connect(url, { userNewUrlParser: true });

module.exports = mongoose;