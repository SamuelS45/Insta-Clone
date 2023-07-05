const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    img:{
        type:String,
        required:true
    },
    likes:{
        type:Number,
    },
    user:{
        type:String
    }
},
    {timestamps: true}
)


module.exports = mongoose.model('Post', postSchema)