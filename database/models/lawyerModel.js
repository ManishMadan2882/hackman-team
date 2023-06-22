const mongoose = require('mongoose');
const moment = require('moment');

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
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    desc:{
        type:String
    },
    ratings:{
        type:Number,
        default:0
    },
    createdAt:{
        type:String,
        default:moment().format('DD-MM-YYYY')
    }
});

module.exports = mongoose.model("Lawyer",lawyerSchema);