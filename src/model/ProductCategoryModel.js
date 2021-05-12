const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const ProductCategorySchema = new Schema({
    macaddress: {type: String, required: true},
    name: {type: String, required: true},
    description: {type: String, default: null},
    image: {type: String, default: null},
    status: {type: Boolean, default: false},
    created: {type: Date, default: Date.now()},
});

module.exports = mongoose.model('ProductCategory', ProductCategorySchema);