const express = require('express');
const router = express.Router();
const cors = require('cors');

const ProductController = require('../controller/ProductController');
const ProductValidation = require('../middlewares/ProductValidation');

router.use(cors());

//

router.post('/', ProductValidation, ProductController.create, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :post Route'})
});

router.put('/:id', ProductValidation,  ProductController.update, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :put Route'})
});

router.get('/:id', ProductController.show, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :get Route'})
});

router.delete('/:id', ProductController.delete, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :delete Route'})
});

router.put('/:id/:done', ProductController.status, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :done Route'})
});

//

router.get('/filter/all/:macaddress',  ProductController.all, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :get Route'})
});

router.get('/filter/today/:macaddress',  ProductController.today, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :get Route'})
});

router.get('/filter/week/:macaddress',  ProductController.week, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :get Route'})
});

router.get('/filter/month/:macaddress',  ProductController.month, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :get Route'})
});

router.get('/filter/year/:macaddress',  ProductController.year, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :get Route'})
});

module.exports = router;