const connection = require('../database/connection')

module.exports = {
  async index(req, res) {
    const companyName = req.headers.authorization
    
    const opinions = await connection('opinion')
    .where('companyName', companyName)
    .select('*')
    
    return res.json(opinions)
  },
  
  async update(req, res, next) {
    try {
      const id = req.headers.authorization
      const { msgCkecked, msgCupon } = req.body
      
      const company = await connection('company')
        .where('id', id)
        .update( {msgCkecked, msgCupon } )
  
      return res.json(company.id)

    } catch(err) {
      next(err)
    }
  }
}