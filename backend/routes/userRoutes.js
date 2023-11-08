const express = require('express')
const User = require('../models/User')
const router = express.Router()

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.get('/', (req, res) => {
    res.send('User fonction')
})

//register user
router.post('/register', async (req, res) => {
    const {name, email, password} = req.body
try {
    const user = new User({name, email, password})
    await user.save()
    res.status(201).send({user, message: 'l utilisateur a ete cree'})
} catch (err) {
    res.status(400).send({error : err })
}


})


//login user

router.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body
        const user = await User.findOne({email})

        if(!user){
            throw new Error('email ou mot de passe incorrect')
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch){
            throw new Error('email ou mot de passe incorrect')
        }

        const token = jwt.sign({
            _id: user._id.toString()
        }, process.env.JWT_SECRET_KEY )
        res.send({user, token, message: 'connection avec succes'})

    } catch (err) {
        res.status(400).send({error : err })
    }
})

module.exports = router