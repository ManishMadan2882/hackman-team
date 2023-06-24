let User =  require("../database/models/userModel");

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
    const user = await User.findOne({email:req.body.email});

    res.status(200).json({
        success:true,
        user
    })
};
