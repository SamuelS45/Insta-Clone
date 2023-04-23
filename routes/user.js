const express = require('express')
// const route = require('ro')
const router = express.Router()



router.get('/',(req, res)=>{
    res.json({msg: 'Hello world'})
    
})

router.post('/',(req,res)=>{
    const user = {
        email: req.body.email,
        password:re
    }
    
})

router.get('/:id',(req,res)=>{

})
router.post('/:id',(req,res)=>{

})

router.delete('/',(req,res)=>{

})


module.exports = router