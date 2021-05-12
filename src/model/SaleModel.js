const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const SaleSchema = new Schema({
    macaddress: {type: String, required: true},
    client: {type: Number, required: true},
    product: {type: Number, required: true},
    type: {type: String, required: true},
    amount: {type: String, default: null},
    description: {type: String, default: null},
    status: {type: Boolean, default: false},
    created: {type: Date, default: Date.now()},
});

module.exports = mongoose.model('Sale', SaleSchema);