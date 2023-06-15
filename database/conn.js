const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/hackman",{ useNewUrlParser: true,
useUnifiedTopology: true})
.then(()=>{
    console.log("Connected to Database");
})