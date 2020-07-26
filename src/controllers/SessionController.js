const connection = require('../database/connection')
const bcrypt = require('bcryptjs') // para desencriptar a hash do banco de dados

module.exports = {
  async create(req, res) {
    const { email, password } = req.body

    const company = await connection('company')
      .where('email', email)
      .select('name')
      .first()

      if (!company) {
        return res.status(400).json({error: 'E-mail no exist'})
      } else {
        const correct = bcrypt.compareSync(password, company.password)
        if(correct) {
          return res.json(company)
        } else {
          return res.status(401).json({ error: 'Senha incorreta!'});
        }
      }
  }
}