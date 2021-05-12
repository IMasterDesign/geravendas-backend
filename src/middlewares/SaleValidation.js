const ProductModel = require('../model/ProductModel');
const { isPast } = require('date-fns');

const ProductValidation = async (req, res, next) => {
  const { 
    macaddress,
    client,
    product,
    type,
    amount,
    description,
    status
  } = req.body;

  if(!macaddress)
    return res.status(400).json({ error: 'MACADDRESS é obrigatório!'});
  else if(!client)
    return res.status(400).json({ error: 'CLIENTE é obrigatório!'});
    else if(!type)
      return res.status(400).json({ error: 'TIPO é obrigatório!'});
  else if(!amount)
    return res.status(400).json({ error: 'VALOR é obrigatório!'});
  else {
    let exists;

    if(req.params.id) {
        exists = await ProductModel
        .findOne({
        '_id': { '$ne': req.params.id },
        'created': {'$eq': new Date(created) },  
        'macaddress': {'$in': macaddress}
        });
    } else {
    
    }

    next();
  }
}

module.exports = ProductValidation;