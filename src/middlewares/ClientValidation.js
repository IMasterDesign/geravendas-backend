const ClientModel = require('../model/ClientModel');
const { isPast } = require('date-fns');

const ClientValidation = async (req, res, next) => {
  const { 
    macaddress, 
    name,
    whatsapp,
    email,
    address,
    sexy,
    birthday,
    status
  } = req.body;

  if(!macaddress)
    return res.status(400).json({ error: 'MACADDRESS é obrigatório!'});
  else if(!name)
    return res.status(400).json({ error: 'NOME é obrigatório!'});
  else if(!whatsapp)
    return res.status(400).json({ error: 'WHATSAPP é obrigatório!'});
    else if(!sexy)
      return res.status(400).json({ error: 'SEXO é obrigatório!'});
  else {
    let exists;

  if(req.params.id) {
    exists = await ClientModel
    .findOne({
      '_id': {'$ne': req.params.id},
      //'created': {'$eq': new Date(created)},
      'macaddress': {'$in': macaddress}
    });
  } else {
    if(!isPast(new Date(birthday)))
      return res.status(400).json({ error: 'WoW, você veio do futuro? Informa um data de nascimento válida!'});
    }

    next();
  }
}

module.exports = ClientValidation;