const express = require('express');
const router = express.Router();
const cors = require('cors');

const ProductCategoryController = require('../controller/ProductCategoryController');
const ProductCategoryValidation = require('../middlewares/ProductCategoryValidation');

router.use(cors());

//

router.post('/', ProductCategoryValidation, ProductCategoryController.create, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :post Route'})
});

router.put('/:id', ProductCategoryValidation,  ProductCategoryController.update, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :put Route'})
});

router.get('/:id', ProductCategoryController.show, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :get Route'})
});

router.delete('/:id', ProductCategoryController.delete, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :delete Route'})
});

router.put('/:id/:done', ProductCategoryController.status, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :done Route'})
});

//

router.get('/filter/all/:macaddress',  ProductCategoryController.all, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :get Route'})
});

router.get('/filter/today/:macaddress',  ProductCategoryController.today, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :get Route'})
});

router.get('/filter/week/:macaddress',  ProductCategoryController.week, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :get Route'})
});

router.get('/filter/month/:macaddress',  ProductCategoryController.month, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :get Route'})
});

router.get('/filter/year/:macaddress',  ProductCategoryController.year, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :get Route'})
});

module.exports = router;