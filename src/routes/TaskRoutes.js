const express = require('express');
const router = express.Router();
const cors = require('cors');

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');

router.use(cors());

//

router.post('/', TaskValidation, TaskController.create, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :post Route'})
});

router.put('/:id', TaskValidation,  TaskController.update, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :put Route'})
});

router.get('/:id', TaskController.show, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :get Route'})
});

router.delete('/:id', TaskController.delete, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :delete Route'})
});

router.put('/:id/:done', TaskController.done, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :done Route'})
});

//

router.get('/filter/all/:macaddress',  TaskController.all, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :get Route'})
});

router.get('/filter/late/:macaddress',  TaskController.late, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :get Route'})
});

router.get('/filter/today/:macaddress',  TaskController.today, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :get Route'})
});

router.get('/filter/week/:macaddress',  TaskController.week, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :get Route'})
});

router.get('/filter/month/:macaddress',  TaskController.month, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :get Route'})
});

router.get('/filter/year/:macaddress',  TaskController.year, cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a :get Route'})
});

//
/*
var app = express()
app.listen(80, function () {
    console.log('CORS-enabled web server listening on port :3333')
});
*/

module.exports = router;