const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const userRoutes = require('./routes/userRoutes.js')
const taskRoutes = require('./routes/taskRoutes.js')
require('dotenv').config()
const PORT = process.env.PORT
require('./db.js')

app.use(bodyParser.json())
app.use('/users', userRoutes)
app.use('/tasks', taskRoutes)

app.get('/', (req, res) => {
    res.json({
        message: 'Task management API fonctionne '
    })
})

app.listen(PORT, () => {
    console.log(`j ecoute au port ${PORT}`)
})