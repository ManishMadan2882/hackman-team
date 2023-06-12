const mongoose = require('mongoose');

require("./connect");

const postSchema = new mongoose.Schema({
    name : {
        type : String
    },
    title:{
      type:String,
      require:true
    },
    description : {
        type : String
    },
    time : {
        type : Date,
        default : Date.now
    }
});
const posts = new mongoose.model("posts",postSchema);

module.exports.posts = posts;