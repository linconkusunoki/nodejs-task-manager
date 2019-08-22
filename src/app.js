const express = require('express')
const path = require('path')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', userRouter)
app.use('/api', taskRouter)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'))
  })
}

module.exports = app
