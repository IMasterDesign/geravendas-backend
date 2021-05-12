const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    macaddress: {type: String, required: true},
    name: {type: String, required: true},
    whatsapp: {type: String, required: true},
    email: {type: String, default: false},
    address: {type: String, default: false},
    sexy: {type: String, required: true},
    birthday: {type: Date, default: false},
    status: {type: Boolean, default: false},
    created: {type: Date, default: Date.now()},
});

module.exports = mongoose.model('Client', ClientSchema);