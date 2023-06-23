const Post = require("../database/models/postModel");
const User = require("../database/models/userModel");
const Lawyer = require("../database/models/lawyerModel");



//create posts 
exports.createPost = async (req,res,next)=>{
    const {title,desc,userEmail} = req.body;
    const user = await User.findOne({email:userEmail});
    const image=[{
        public_id:"Test ID",
        url:"https://www.shutterstock.com/image-vector/various-new-post-writing-concepts-600w-1555973897.jpg"
    }]

    const post = await Post.create({
        title,desc,user,image
    })
    
    res.status(200).json({
        success:true,
        post
    })
};

//Get All post 
exports.getAllPost =  async(req,res,next)=>{
    const posts = await Post.find().sort({createdAt:'desc'}).populate('user','name url contact email createdAt role').populate('comment.lawyer','name url').populate('comment.user','name url');

    res.status(200).json({
        success:true,
        posts
    })
};

//Get Single Post
exports.getSinglePost = async(req,res,next)=>{

    const post = await Post.findById(req.params.id).populate('user','name url contact email createdAt role')
    .populate('comment.lawyer','name url')
    .populate('comment.user','name url');

    if(post){
        res.status(200).json({
            success:true,
            post
        })
            
    }
    else{
        res.status(404).json({
            success:false,
            message:"No Post found"
        })
    }
};

//add comment
exports.addComment = async(req,res,next)=>{
    const {postId,commentDesc,userEmail} = req.body
    if(userEmail){
        const post = await Post.findById(postId);

    const isUser = await User.findOne({email:userEmail});
    const islawyer = await Lawyer.findOne({email:userEmail});
    let comment;
    if(isUser){
         comment = {
            commentDesc:commentDesc,
            user:user
        }
    }

    else if(islawyer){
         comment = {
            commentDesc:commentDesc,
            lawyer:user,
            isLawyer:true
        }
    }


    post.comment.push(comment);
     await post.save();

     res.status(200).json({
        success:true,
        message:"Comment Added Successfully"
     })
    }
    else{
        res.status(400).json({
            error:"User Id required"
        })
    }
    
};

exports.deletePost = async(req,res,next)=>{
    const post = await Post.findById(req.params.id);

    await post.deleteOne();

    res.status(200).json({
        success:true,
        message:"Deleted Successfully"
    })


}
