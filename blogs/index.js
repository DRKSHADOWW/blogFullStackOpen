const app = require('./app')
const config = require('./utils/config')

app.listen(config.PORT || 3002, () => {
  console.log(`Server running on port ${config.PORT}`)
})
