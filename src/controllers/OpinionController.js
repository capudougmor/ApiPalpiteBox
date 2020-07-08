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
  },
  
  async delete(req, res) {
    const { id } = req.params
    const company_id = req.headers.authorization
    
    const opinion = await connection('opinion')
      .where('id', id)
      .select('company_id')
      .first()

      if (opinion.company_id !== company_id) {
        return res.status(401).json({ error: 'Operation not permitted.'})
      }

      if (opinion.id !== 'id') {
        return res.status(401).json({ error: 'There is no Opinion.'})
      }

      await connection('opinion').where('id', id).delete()
      return res.status(204).send()
  },
}