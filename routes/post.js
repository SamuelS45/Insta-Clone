const express = require('express')
const router = express.Router()
const Post = require('../models/Post')
const User = require('../models/User')

router.get('/', async (req, res)=>{
    // res.json('Hi this is a post End point ')
    try{
        const post = await Post.find()
        res.json(post)
    }catch(err){
        res.status(err.status).send()
    }
})

router.post('/', async (req, res)=>{
    const post = new Post(req.body)
    try{
        const newPost = await post.save()
        res.status(201).json(newPost)

        const user = await User.findById({_id: post.user})
        user.post.push(newPost)
        await user.save()
    }catch(err){
        res.status(err.status).send()
    }
})


module.exports = router