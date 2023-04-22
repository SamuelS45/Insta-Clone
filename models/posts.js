const mongoose = require('mongoose')

const posts = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    posts:[
        {
            date:{

            },
            time:{

            },
            pic:{

            },
            liked:{
                type:Boolean,
            },
            comments:[String]
        }
    ]
})


module.exports = mongoose.model('posts', posts)