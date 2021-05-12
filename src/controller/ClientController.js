const ClientModel = require('../model/ClientModel');

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

class ClientController {
    async create(req, res) {
    const client = new ClientModel(req.body);
    await client
          .save()
          .then(response => {
            return res.status(200).json(response);
          })
          .catch(error => {
            return res.status(500).json(error);
          });
  }

  async update(req, res) {
    await ClientModel.findByIdAndUpdate(
        {'_id': req.params.id}, req.body, {new: true }
    )
    .then(response => {
        return res.status(200).json(response);
    })
    .catch(error => {
        return res.status(500).json(error);
    });
  }

  async all(req, res) {
    await ClientModel.find(
        {macaddress: {'$in': req.params.macaddress }}
    )
    .sort('created')
    .then(response => {
        return res.status(200).json(response);
    })
    .catch(error => {
        return res.status(500).json(error);
    });
  }

  async show(req, res) {
    await ClientModel.findById(req.params.id)
    .then(response => {
        if(response)
            return res.status(200).json(response);
        else
            return res.status(404).json({error: 'Cliente não encontrado!'});
    })
    .catch(error => {
        return res.status(500).json(error);
    });
  }

  async delete(req, res) {
    await ClientModel.deleteOne(
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
    await ClientModel.findByIdAndUpdate(
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
    await ClientModel
    .find({
        'macaddress': {'$in': req.params.macaddress},
        'created': {'$gte': startOfDay(currentDate), '$lte': endOfDay(currentDate)}
    })
    .sort('created')
    .then(response => {
        return res.status(200).json(response);
    })
    .catch(error => {
        return res.status(500).json(error);
    });
  }

  async week(req, res) {
    await ClientModel
    .find({
        'macaddress': {'$in': req.params.macaddress},
        'created': {'$gte': startOfWeek(currentDate), '$lte': endOfWeek(currentDate)}
    })
    .sort('created')
    .then(response => {
        return res.status(200).json(response);
    })
    .catch(error => {
        return res.status(500).json(error);
    });
  }

  async month(req, res) {
    await ClientModel
    .find({
        'macaddress': {'$in': req.params.macaddress},
        'created': {'$gte': startOfMonth(currentDate), '$lte': endOfMonth(currentDate)}
    })
    .sort('created')
    .then(response => {
        return res.status(200).json(response);
    })
    .catch(error => {
        return res.status(500).json(error);
    });
  }

  async year(req, res) {
    await ClientModel
    .find({
        'macaddress': {'$in': req.params.macaddress},
        'created': {'$gte': startOfYear(currentDate), '$lte': endOfYear(currentDate)}
    })
    .sort('created')
    .then(response => {
        return res.status(200).json(response);
    })
    .catch(error => {
        return res.status(500).json(error);
    });
  }
}

module.exports = new ClientController();