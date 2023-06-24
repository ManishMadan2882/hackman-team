const mongoose = require('mongoose');
const moment = require('moment');

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
        type : String,
        default : moment().format('DD-MM-YYYY HH:mm')
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref: "User",
        required:true
    },
    comment:[{
        user:{
            type:mongoose.Schema.ObjectId,
            ref:"User"
        },
        lawyer:{
            type:mongoose.Schema.ObjectId,
            ref: "Lawyer",
        },
        isLawyer:{
            type:Boolean,
            default:false
        },
        commentDesc:{
            type:String,
            required:[true,"Please Enter the comment"]
        },
        createdAt:{
            type:String,
            default:moment().format('DD-MM-YYYY HH:mm')
        },
    }
    ],
    likes:{
        noOFLikes:{
            type:Number,
            default:0
        },
        user:[String]
    }

})

module.exports = mongoose.model("Post",postSchema);