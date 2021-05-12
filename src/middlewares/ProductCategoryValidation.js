const ProductCategoryModel = require('../model/ProductCategoryModel');
const { isPast } = require('date-fns');

const ProductCategoryValidation = async (req, res, next) => {
  const { 
    macaddress,
    name,
    description,
    image,
    status
  } = req.body;

  if(!macaddress)
    return res.status(400).json({ error: 'MACADDRESS é obrigatório!'});
  else if(!name)
    return res.status(400).json({ error: 'NOME é obrigatório!'});
  else {
    let exists;

    if(req.params.id) {
        exists = await ProductCategoryModel
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

module.exports = ProductCategoryValidation;