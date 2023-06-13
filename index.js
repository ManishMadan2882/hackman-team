const port = 5500;
require('dotenv').config();
const {postSchema, posts} = require('./src/schema');
const express = require('express')
const app = express();
app.use(express.json());
app.post('/submit',async (req,res)=>{
   const {name,title,description} = req.body;
   const newbie = new postSchema({
    name:name,
    title:title,
    description:description
   })
   newbie.save()
   .then(()=> res.json({msg: "saved"}))
   .catch((err)=> res.json({msg:'error '+err}))
})

app.get('/posts',async (req,res)=>{
    try  
   {
   const posts = await postSchema.find();
   res.status(200).json(posts)
   }
   catch(err)
   {
    res.status(500).json({msg : 'Something unexpected occured'})
   }
})

app.listen(port,()=>console.log(`Server running at port : ${port}`));
