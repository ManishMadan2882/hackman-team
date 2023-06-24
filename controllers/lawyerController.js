const Lawyer = require("../database/models/lawyerModel");
const ApiFeatures = require("../utils/ApiFeatures");

//Register a lawyer 
exports.registerLawyer = async(req,res,next)=>{
    const {name,address,city,regNo,cases,courts,experience,contact,desc,email,url,calendly} = req.body;
    console.log(url);
    const lawyer = await Lawyer.create({
        name,address,city,regNo,cases,courts,contact,experience,desc,email,url,calendly
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

    const  apiFeatures = new ApiFeatures(Lawyer.find(),req.query).search();
    const lawyers  = await apiFeatures.query;

    res.status(200).json({
        success:true,
        lawyers
    })
};


