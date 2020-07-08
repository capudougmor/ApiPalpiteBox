const connection = require('../database/connection')

module.exports = {
  async index(req, res) {
    const company_id = req.headers.authorization

    const opinions = await connection('opinion')
      .where('company_id', company_id)
      .select('*')

      return res.json(opinions)
  }
}