const connection = require('../database/connection')

module.exports = {
  async index(req, res) {
    const opinions = await connection('opinion').select('*')

    return res.json(opinions)
  },

  async create(req, res) {
    const { name, email, whatsapp, suggestion, score } = req.body
    const company_id = req.headers.authorization

    const [ id ] = await connection('opinion').insert({
      name, email, whatsapp, suggestion, score, company_id
    })

    return res.json({ id })
  }
}