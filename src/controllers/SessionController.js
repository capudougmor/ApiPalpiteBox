const connection = require('../database/connection')

module.exports = {
  async create(req, res) {
    const { email } = req.body

    const company = await connection('company')
      .where('email', email)
      .select('name')
      .first()

      if (!company) {
        return res.status(400).json({error: 'E-mail no exist'})
      }

      return res.json(company)
  }
}