const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/users')
const {tokenExtractor} = require('../utils/middleware')

usersRouter.get('/', async (request, response) => {
  const users = await User
    .find({})
    .populate('blogs', {title: 1, author: 1, url: 1})
    response.json(users)
})

usersRouter.post('/',tokenExtractor, async (request, response) => {
  const { username, name, password } = request.body

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  try{
    const user = new User({
        username,
        name,
        passwordHash
      })
      const savedUser = await user.save()
    response.status(201).json(savedUser)
  }catch{
    response.status(400).json({error: 'invalid user data'})
  }


  
})

module.exports = usersRouter