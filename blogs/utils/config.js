require('dotenv').config()

const SECRET = process.env.SECRET

const PORT = process.env.PORT
const TEST_mongoUrl = process.env.NODE_ENV === 'test'
? process.env.mongoUrl
: process.env.TEST_mongoUrl


module.exports = {PORT, TEST_mongoUrl, SECRET}