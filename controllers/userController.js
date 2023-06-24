const User =  require("../database/models/userModel");
const Lawyer = require("../database/models/lawyerModel");

//register a user
exports.registerUser = async (req,res,next)=>{
    const {name,email,contact,role,url} = req.body;
    console.log(url);
    const user = await User.create({
        name,email,contact,role,
        url:url
        
    })

    res.status(200).json({
        success:true,
        user
    })
};

//get all Users
exports.getAllUsers = async(req,res,next)=>{
    const users = await User.find();

    res.status(200).json({
        success:true,
        users
    })
};

//get User Details --protected Route
exports.getUserDetails = async(req,res,next)=>{
    const user = await User.findOne({email:req.params.email});
    if(!user){
       return res.status(404).json({
            success:true,
            message:"No user found"
        })
    }

    res.status(200).json({
        success:true,
        user
    })
};

//Update a user
exports.updateUser = async(req,res,next)=>{
    const {email,newName,newContact} = req.body;
    const user = await User.findOne({email:email});

    user.name=newName;
    user.contact = newContact;

    await user.save();
    res.status(200).json({
        success:true,
        user
    })
};

//Delete Profile
exports.deleteUser = async(req,res,next)=>{
    const {email} = req.body;
    const user = await User.deleteOne({email:email});

    res.status(200).json({
        success:true,
        message:"user Deleted Successfully."
    })
};

//update contact
exports.updateContact = async(req,res,next)=>{
    const{lawyerEmail,userEmail}=req.body;
    const user = await User.findOne({email:userEmail});
    user.contacts.push(lawyerEmail);
    const lawyer = await Lawyer.findOne({email:lawyerEmail});
    lawyer.contacts.push(userEmail);
    await user.save();
    await lawyer.save();
    res.status(200).json({
        success:true,
        message:"Added Contact"
    })
};