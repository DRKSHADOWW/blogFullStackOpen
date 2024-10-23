const mongoose = require('mongoose')
const config = require('./utils/config')

mongoose.connect(config.TEST_mongoUrl)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  })
  
  process.on('uncaughtException', () => {
    mongoose.connection.close()
  })
