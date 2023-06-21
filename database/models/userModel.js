const mongoose = require('mongoose');
const moment = require('moment');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    contact:{
        type:Number,
        required:true
    },
    avatar:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    createdAt:{
        type:String,
        default:moment().format('DD-MM-YYYY')
    },
    role:{
        type:String,
        default:"User"
    }
});

module.exports = mongoose.model("User",userSchema);