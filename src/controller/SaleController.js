const SaleModel = require('../model/SaleModel');

const { 
    startOfDay, 
    endOfDay, 
    startOfWeek, 
    endOfWeek, 
    startOfMonth, 
    endOfMonth, 
    startOfYear, 
    endOfYear 
} = require('date-fns');

const currentDate = new Date();

class SaleController {
    async create(req, res) {
    const sale = new SaleModel(req.body);
    await sale
          .save()
          .then(response => {
            return res.status(200).json(response);
          })
          .catch(error => {
            return res.status(500).json(error);
          });
  }

  async update(req, res) {
    await SaleModel.findByIdAndUpdate(
        {'_id': req.params.id}, req.body, { new: true }
    )
    .then(response => {
        return res.status(200).json(response);
    })
    .catch(error => {
        return res.status(500).json(error);
    });
  }

  async all(req, res) {    
    await SaleModel.find(
        { macaddress: {'$in': req.params.macaddress }}
    )
    .sort('when')
    .then(response => {
        return res.status(200).json(response);
    })
    .catch(error => {
        return res.status(500).json(error);
    });
  }

  async show(req, res) {
    await SaleModel.findById(req.params.id)
    .then(response => {
        if(response)
            return res.status(200).json(response);
        else
            return res.status(404).json({error: 'tarefa não encontrada'});
    })
    .catch(error => {
        return res.status(500).json(error);
    });
  }

  async delete(req, res) {
    await SaleModel.deleteOne(
        {'_id': req.params.id}
    )
    .then(response => {
        return res.status(200).json(response);
    })
    .catch(error => {
        return res.status(500).json(error);
    });
  }

  async status(req, res) {
    await SaleModel.findByIdAndUpdate(
        {'_id': req.params.id},
        {'status': req.params.status},
        {new: true}
    )
    .then(response => {
        return res.status(200).json(response);
    })
    .catch(error => {
        return res.status(500).json(error);
    });
  }

  async today(req, res) {
    await SaleModel
    .find({ 
        'macaddress': {'$in': req.params.macaddress},
        'when': {'$gte': startOfDay(currentDate), '$lte': endOfDay(currentDate)}
    })
    .sort('when')
    .then(response => {
        return res.status(200).json(response);
    })
    .catch(error => {
        return res.status(500).json(error);
    });
  }

  async week(req, res) {
    await SaleModel
    .find({ 
        'macaddress': {'$in': req.params.macaddress},
        'when': {'$gte': startOfWeek(currentDate), '$lte': endOfWeek(currentDate)}
    })
    .sort('when')
    .then(response => {
        return res.status(200).json(response);
    })
    .catch(error => {
        return res.status(500).json(error);
    });
  }

  async month(req, res) {
    await SaleModel
    .find({ 
    '   ddress': {'$in': req.params.macaddress},
    'when': {'$gte': startOfMonth(currentDate), '$lte': endOfMonth(currentDate)}
    })
    .sort('when')
    .then(response => {
        return res.status(200).json(response);
    })
    .catch(error => {
        return res.status(500).json(error);
    });
  }

  async year(req, res) {
    await SaleModel
    .find({ 
        'macaddress': {'$in': req.params.macaddress},
        'when': {'$gte': startOfYear(currentDate), '$lte': endOfYear(currentDate)}
    })
    .sort('when')
    .then(response => {
        return res.status(200).json(response);
    })
    .catch(error => {
        return res.status(500).json(error);
    });
  }
}

module.exports = new SaleController();