const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    image:[
        {
            public_id:{
                type:String,
                default:""
            },
            url:{
                type:String,
                default:""
            }
        }
    ],
    createdAt : {
        type : Date,
        default : Date.now
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref: "User",
        required:true
    },
    comment:[{
        lawyer:{
            type:mongoose.Schema.ObjectId,
            ref: "Lawyer",
            required:true
        },
        commentDesc:{
            type:String,
            required:[true,"Please Enter the comment"]
        },
        createdAt:{
            type:Date,
            default:Date.now
        }
    }
    ],
    noOfLikes:{
        type:Number,
        default:0
    }

})

module.exports = mongoose.model("Post",postSchema);