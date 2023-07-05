const mongoose = require('mongoose')
// const timestamps = require('mongoose-timestamps')
const feedSchema = new mongoose.Schema({
    profileImg:{
        type: String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    des:{
        type:String,
    },
    numComments:{
        type:Number,
    },
    heart:{
        type:Boolean,
        required:true
    },
    likes:{
        type:Number,
        default:0
        // required:true
    },
    user:{
        type:String
    }
},
    {timestamps: true}
)


module.exports = mongoose.model('Feed', feedSchema)