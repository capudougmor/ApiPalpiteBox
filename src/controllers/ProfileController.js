const connection = require('../database/connection')

module.exports = {
  async index(req, res) {
    const companyName = req.headers.authorization
    
    const opinions = await connection('opinion')
      .where('companyName', companyName)
      .select('*')
    
    return res.json(opinions)
  },

  async showCupon(req, res, next) {
    try {
      const companyName = req.params.name
      
      const msgCompany = await connection('company')
        .where('name', companyName)
        .select('*')

      const data = {
        msgCupon: msgCompany[0].msgCupon,
        msgCkecked: msgCompany[0].msgCkecked
      }

      
      return res.json(data)

    } catch(err) {
      next(err)
    }
  },

  
  async update(req, res, next) {
    try {
      const id = req.headers.authorization
      let { msgCkecked, msgCupon } = req.body   
      
      console.log(msgCupon, msgCkecked)
      const company = await connection('company')
        .where('id', id)
        .update( {msgCkecked, msgCupon } )
  
      return res.json(company)

    } catch(err) {
      next(err)
    }
  }
}