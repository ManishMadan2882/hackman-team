const port = 5500;
require('dotenv').config();
const {posts} = require('./src/schema');
const express = require('express')
const app = express();
app.use(express.json())
app.post('/submit',async (req,res)=>{
   const {name,title,description} = req.body;
   const newbie = new posts({
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
   const postData = await posts.find();
   postData.sort((obj1,obj2)=>{
      return (obj2.time-obj1.time)
   })
   res.status(200).json(postData)
   }
   catch(err)
   {
    res.status(500).json({msg : 'Something unexpected occured'+err})
   }
})

app.listen(port,()=>console.log(`Server running at port : ${port}`));
