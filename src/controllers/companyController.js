const connection = require('../database/connection')
const bcrypt = require('bcryptjs')
const crypto = require('crypto')

module.exports = {
  async index(req, res) {
    const companies = await connection('company').select('*')

    return res.json(companies)
  },

  async create(req, res) { 
    const { name, email, password } = req.body;

    const salt =bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)

    const id = crypto.randomBytes(4).toString('HEX'); 

    await connection('company').insert({
        id,
        name,
        email,
        password: hash
    }).then(() => {
      return res.json({ id });
    }).catch((err) => {
      return res.status(401).json(err)
    })
  },

  async delete(req, res) { 
    const { id } = req.params;    // pega o id dentro do req.params
    const company_id = req.headers.authorization; // tambem busca o id da company logada
    
    const company = await connection('company') // verificar se e a mesma do caso
        .where('id', id)
        .select('company_id')
        .first()

    if (company.company_id != company_id) { // verifica o id da 
        return res.status(401).json({ error: 'Operetion not permitted.'});
    }

    await connection('company').where('id', id).delete();

    return res.status(204).send(); 
  }
}