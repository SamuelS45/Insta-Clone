const express = require('express')
const router = express.Router()
const Feed = require('../models/Feed')
const User = require('../models/User')
// const User = require('../models/User')
router.get('/', async (req,res)=>{
    try{
        const feed = await Feed.find()
        res.json(feed)
    }catch(err){
        res.status(err.status).send()
    }
})


router.post('/', async (req,res)=>{
    const feed = new Feed(req.body) 
    try{
        const newFeed = await feed.save()
        res.status(201).json(newFeed)

        const user = await User.findById({_id: newFeed.user})
        user.feed.push(newFeed)
        await user.save()
    }catch(err){
        res.status(err.status).send()
    }

    // const user =
})

router.get('/:id', async(req,res)=>{
    try{
        const feed = await Feed.findById(req.params.id)
        res.json(feed)
    }catch(err){
        res.status(500).send()
    }
})
router.post('/:id', async (req,res)=>{
    try{
        await Feed.findByIdAndUpdate(req.params.id, {img:req.body.img} )
        // res.send('Updated Successfully')
        res.status(201).json('Success in feed update')
        // res.json()
    }catch(err){
        res.status(err.status).send()
    }
})

router.delete('/:id', (req,res)=>{
    try{
        Feed.findByIdAndDeletecd(req.body)

    }catch(err){
        res.status(err.status).send()
    }
})
module.exports = router