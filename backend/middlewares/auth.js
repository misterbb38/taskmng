const jwt = require('jsonwebtoken')
const User = require('../models/User')

const auth = async (req, res, next) =>{
    try {
        const token = req.header('authorization').replace('Bearer ', "")
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        const user = await User.findOne({
            _id: decoded._id
        })

        if(!user){
            throw new Error('email ou mot de passe incorrect')
        }

        req.user = user
        req.token = token
        next()
    } catch (error) {
        res.status(401).send({error : 'Merci de vous identifier'})
    }
    
}

module.exports = auth