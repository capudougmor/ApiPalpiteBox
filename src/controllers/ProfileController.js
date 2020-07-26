const connection = require('../database/connection')

module.exports = {
  async index(req, res) {
    const companyName = req.headers.authorization

    const opinions = await connection('opinion')
      .where('companyName', companyName)
      .select('*')

      return res.json(opinions)
  }
}