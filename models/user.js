const mongoose = require('mongoose')
const {Schema} = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    surname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    feed:[{
        type: Schema.Types.ObjectId,
        ref: 'Feed'
    }],
    post:[{
        type: Schema.Types.ObjectId,
        ref:'Post'
    }]
})


module.exports = mongoose.model('User', userSchema)
