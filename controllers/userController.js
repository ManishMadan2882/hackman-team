let User =  require("../database/models/userModel");

//register a user
exports.registerUser = async (req,res,next)=>{
    const {name,email,contact,role} = req.body;

    const user = await User.create({
        name,email,contact,role,
        avatar:{
            public_id:"TEST id",
            url:"https://cdn.icon-icons.com/icons2/2468/PNG/512/user_kids_avatar_user_profile_icon_149314.png"
        }
        
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
    const user = await User.findById(req.params.id);

    res.status(200).json({
        success:true,
        user
    })
};
