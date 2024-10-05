const userModel = require('../models/userModel')


exports.createUser = async (req, res) =>{
  console.log(req.body)
  res.json('hello user')

  const firstUser = new userModel({
    name:'String',
    city:'String',
    age:30
  })

  const data = await firstUser.save()
  console.log(data)
}