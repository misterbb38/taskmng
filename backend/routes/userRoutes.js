// const express = require('express')
// const User = require('../models/User')
// const router = express.Router()

// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')

// router.get('/', (req, res) => {
//     res.send('User fonction')
// })

// //register user
// router.post('/register', async (req, res) => {
//     const {name, email, password} = req.body
// try {
//     const user = new User({name, email, password})
//     await user.save()
//     res.status(201).send({user, message: 'l utilisateur a ete cree'})
// } catch (err) {
//     res.status(400).send({error : err })
// }


// })


// //login user

// router.post('/login', async (req, res) => {
//     try {
//         const {email, password} = req.body
//         const user = await User.findOne({email})

//         if(!user){
//             throw new Error('email ou mot de passe incorrect')
//         }

//         const isMatch = await bcrypt.compare(password, user.password)

//         if(!isMatch){
//             throw new Error('email ou mot de passe incorrect')
//         }

//         const token = jwt.sign({
//             _id: user._id.toString()
//         }, process.env.JWT_SECRET_KEY )
//         res.send({user, token, message: 'connection avec succes'})

//     } catch (err) {
//         res.status(400).send({error : err })
//     }
// })

// module.exports = router

const express = require('express');
const User = require('../models/User');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Liste noire pour stocker les jetons invalides
const blacklist = [];

router.get('/', (req, res) => {
    res.send('User fonction');
});

// Enregistrement de l'utilisateur
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).send({ user, message: 'L\'utilisateur a été créé avec succès.' });
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
});

// Connexion de l'utilisateur
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            throw new Error('Email ou mot de passe incorrect');
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            throw new Error('Email ou mot de passe incorrect');
        }

        const token = jwt.sign({
            _id: user._id.toString()
        }, process.env.JWT_SECRET_KEY );

        res.send({ user, token, message: 'Connexion réussie.' });

    } catch (err) {
        res.status(400).send({ error: err.message });
    }
});

// Déconnexion de l'utilisateur (invalidate the token)
router.post('/logout', (req, res) => {
    const token = req.header('Authorization').replace('Bearer ', '');

    // Ajouter le jeton à la liste noire
    blacklist.push(token);

    res.send('Vous avez été déconnecté avec succès.');
});

module.exports = router;
