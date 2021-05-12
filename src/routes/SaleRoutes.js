const express = require('express');
const router = express.Router();
const cors = require('cors');

const SaleController = require('../controller/SaleController');
const SaleValidation = require('../middlewares/SaleValidation');

router.use(cors());

//

router.post('/', SaleValidation, SaleController.create, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :post Route'})
});

router.put('/:id', SaleValidation,  SaleController.update, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :put Route'})
});

router.get('/:id', SaleController.show, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :get Route'})
});

router.delete('/:id', SaleController.delete, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :delete Route'})
});

router.put('/:id/:done', SaleController.status, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :done Route'})
});

//

router.get('/filter/all/:macaddress',  SaleController.all, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :get Route'})
});

router.get('/filter/today/:macaddress',  SaleController.today, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :get Route'})
});

router.get('/filter/week/:macaddress',  SaleController.week, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :get Route'})
});

router.get('/filter/month/:macaddress',  SaleController.month, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :get Route'})
});

router.get('/filter/year/:macaddress',  SaleController.year, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :get Route'})
});

module.exports = router;