const connection = require('../database/connection')
const crypto = require('crypto')

module.exports = {
  async index(req, res) {
    const opinions = await connection('opinion').select('*')

    return res.json(opinions)
  },

  async create(req, res) {
    const { name, email, whatsapp, suggestion, score, companyName } = req.body

    const cuponKey = crypto.randomBytes(4).toString('HEX').toUpperCase();
    
    await connection('opinion').insert({
      name, email, whatsapp, suggestion, score, companyName, cuponKey
    })
    
    return res.json({ cuponKey })
  },
  
  async delete(req, res) {
    const { id } = req.params
    const companyName = req.headers.authorization
    
    const opinion = await connection('opinion')
      .where('id', id)
      .select('*')
      .first()

      if (opinion.companyName !== companyName) {
        return res.status(401).json({ error: 'Operation not permitted.'})
      }

      await connection('opinion').where('id', id).delete()
      return res.status(204).send()
  },
}