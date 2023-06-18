const Post = require("../database/models/postModel");

//Get All post 
exports.getAllPost =  async(req,res,next)=>{
    const posts = await Post.find().sort({createdAt:'asc'}).populate('user','name').populate('comment.lawyer','name');

    res.status(200).json({
        success:true,
        posts
    })
}

//create posts 
exports.createPost = async (req,res,next)=>{
    const {} = req.body
}