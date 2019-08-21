const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', userRouter)
app.use('/api', taskRouter)

module.exports = app
