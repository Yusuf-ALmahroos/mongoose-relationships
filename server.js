const express = require('express')
const logger = require('morgan')

const db = require('./db')

const tasksRouter = require('./routes/tasksRouter.js')
const usersRouter = require('./routes/usersRouter.js')

const PORT = process.env.PORT ? process.env.PORT : 3000

const app = express()

app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/tasks", tasksRouter);
app.use('/users', usersRouter);

app.use('/', (req, res) => {
  res.send('Our app is connected . . . ')
})

app.listen(PORT, () => {
  console.log(`Running Server on Port ${PORT} . . . `)
})
