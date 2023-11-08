const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.send('task fonction')
})


//CRUD tasks

module.exports = router