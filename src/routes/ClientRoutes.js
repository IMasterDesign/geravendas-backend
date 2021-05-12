const express = require('express');
const router = express.Router();
const cors = require('cors');

const ClientController = require('../controller/ClientController');
const ClientValidation = require('../middlewares/ClientValidation');

router.use(cors());

//

router.post('/', ClientValidation, ClientController.create, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :post Route'})
});

router.put('/:id', ClientValidation,  ClientController.update, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :put Route'})
});

router.get('/:id', ClientController.show, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :get Route'})
});

router.delete('/:id', ClientController.delete, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :delete Route'})
});

router.put('/:id/:done', ClientController.status, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :done Route'})
});

//

router.get('/filter/all/:macaddress',  ClientController.all, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :get Route'})
});

router.get('/filter/today/:macaddress',  ClientController.today, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :get Route'})
});

router.get('/filter/week/:macaddress',  ClientController.week, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :get Route'})
});

router.get('/filter/month/:macaddress',  ClientController.month, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :get Route'})
});

router.get('/filter/year/:macaddress',  ClientController.year, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :get Route'})
});

module.exports = router;