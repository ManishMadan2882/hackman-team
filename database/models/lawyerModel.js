const mongoose = require('mongoose');

const lawyerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    regNo:{
        type:String,
        required:true
    },
    cases:[{
        type:String,
        required:true
    }],
    courts:[{
        type:String,
        required:true
    }],
    exp:{
        type:Number,
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
    desc:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model("Lawyer",lawyerSchema);