const Lawyer = require("../database/models/lawyerModel");

//Register a lawyer 
exports.registerLawyer = async(req,res,next)=>{
    const {name,address,city,regNo,cases,courts,experience,contact,desc,email} = req.body;

    const lawyer = await Lawyer.create({
        name,address,city,regNo,cases,courts,contact,experience,desc,email,
        avatar:{
            public_id:"TEST id",
            url:"https://cdn.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.webp"
        }
    });

    res.status(200).json({
        success:true,
        lawyer
    })
};


//get lawyer route -- protected Route
exports.getLawyerDetails = async(req,res,next)=>{
    const lawyer = await Lawyer.findById(req.params.id);

    res.status(200).json({
        success:true,
        lawyer
    })
};

//Get All lawyers
exports.getAllLawyers = async(req,res,next)=>{
    const lawyers  = await Lawyer.find();

    res.status(200).json({
        success:true,
        lawyers
    })
};


