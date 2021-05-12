const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    macaddress: {type: String, required: true},
    category: {type: Number, required: true},
    name: {type: String, required: true},
    price: {type: String, default: null},
    description: {type: String, default: null},
    image: {type: String, default: null},
    status: {type: Boolean, default: false},
    created: {type: Date, default: Date.now()},
});

module.exports = mongoose.model('Product', ProductSchema);