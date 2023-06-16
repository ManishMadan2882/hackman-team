const mongoose = require("mongoose");

mongoose.connect(process.env.MONGOURL,{ useNewUrlParser: true,
useUnifiedTopology: true})
.then(()=>{
    console.log("Connected to Database");
})
