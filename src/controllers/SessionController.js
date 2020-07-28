const connection = require('../database/connection')
const bcrypt = require('bcryptjs') // para desencriptar a hash do banco de dados

module.exports = {
  async create(req, res) {
    const { email, password } = req.body

    if(!email || !password) {
      return res.json({error: 'E-emil e senha obrigatorios'})
    } else {
      const company = await connection('company')
      .where('email', email)
      .select('*')
      .first()
  
      if(company != undefined) {        
          const correct = bcrypt.compareSync(password, company.password)
          
          if(correct) {
            return res.json(company)
          } else {
            return res.status(401).json({ error: 'Senha incorreta!'});
          }
  
      } else {
        return res.status(400).json({error: 'E-mail no exist'})
      }         
    }
      
  }
}