const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/', async(req, res)=>{
    // res.json('Hello World')
    try{
        const user = await User.find()
        res.json(user)
    }catch(err){
        res.status(err.status).send()
    }
})
router.post('/', async (req, res)=>{
    const user  = new User(req.body)
    try{
        const newUser = await user.save()
        res.status(201).json(newUser)
    }catch(err){
        res.status(err.status).send()
    }
})
// router.get('/:id', (req,res)=>{

// })
// router.post('/:id', (req,res)=>{

// })

// router.delete('/', (req,res)=>{

// })


module.exports = router