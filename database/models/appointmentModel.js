const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    lawyer:{
      type:mongoose.Schema.ObjectId,
      ref:'Lawyer',
      required:true,
      unique:true
    },
    requests:[{
        user:{
            type:mongoose.Schema.ObjectId,
            ref: "User",
            required:true
        },
        desc:{
            type:String,
            default:''
        },
        createdAt:{
            type:Date,
            default:Date.now
        },
        status:{
            type:String,
            enum:['pending','accepted','cancel'],
            default:"pending"
        }
    }
    ]

})

module.exports = mongoose.model("Appointment",appointmentSchema);