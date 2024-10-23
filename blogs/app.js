require('./mongoDb')
const express = require('express')
const blogsRouter =  require('./controllers/blogs')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')


const {unknownEndpoint, errorHandler, requestLogger} = require('./utils/middleware')
const app = express()
app.use(express.json())
require('express-async-errors')
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.use(requestLogger)


app.use("/api/blogs",  blogsRouter)
app.use("/api/users", usersRouter)
app.use("/api/login", loginRouter)



app.use(unknownEndpoint)
app.use(errorHandler)


module.exports = app