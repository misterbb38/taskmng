const express = require('express')

const router = express.Router()

const Task = require('../models/Task')

const auth = require('../middlewares/auth')
//
//CRUD tasks pour les identification des users

//get task

router.get('/test', auth, (req, res) => {
    res.json({
        message: 'Task fonctionne',
        user: req.user
    })
})

// create task

router.post('/', auth, async (req, res) => {
   try {

    const task = new Task({
        ...req.body,
        owner: req.user._id
    })
    await task.save()
    res.status(201).json({task, message: 'task cree avec succes'})
    
   } catch (err) {
    res.status(400).send({error: err})
   }
})

// get user task
router.get('/', auth, async (req, res) => {
    try {
 
     const tasks = await Task.find({
         owner: req.user._id
     })
     res.status(200).json({tasks, count: tasks.length, message:'task fetched avec succes'})
     
     
    } catch (err) {
     res.status(400).send({error: err})
    }
 })

 // get user task by id
router.get('/:id', auth, async (req, res) => {
    const taskid = req.params.id
    try {
 
     const task = await Task.findOne({
        _id: taskid,
         owner: req.user._id
     })
     if(!task){
        res.status(404).json({message: "task n existe pas"})
     }
     res.status(200).json({task, message:'task existe'})
     
     
    } catch (err) {
     res.status(400).send({error: err})
    }
 })

  // update user task by id
router.patch('/:id', auth, async (req, res) => {
    const taskid = req.params.id
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every(update => allowedUpdates.includes(update) )
    if(!isValidOperation){
        res.status(400).json({error: 'update invalide'})
    }
    try {
 
     const task = await Task.findOne({
        _id: taskid,
         owner: req.user._id
     })
     if(!task){
        res.status(404).json({message: "task n existe pas"})
     }
     updates.forEach(update => task[update] = req.body[update])
        
    
     res.status(200).json({task, message:'task modifier avec succes'})
     
     
    } catch (err) {
     res.status(400).send({error: err})
    }
 })

 // delete task by id

 router.delete('/:id', auth, async (req, res) => {
    const taskid = req.params.id
    try {
 
     const task = await Task.findOneAndDelete({
        _id: taskid,
         owner: req.user._id
     })
     if(!task){
        res.status(404).json({message: "task n existe pas"})
     }
     res.status(200).json({task, message:'task supprimer avec succes'})
     
     
    } catch (err) {
     res.status(400).send({error: err})
    }
 })







module.exports = router