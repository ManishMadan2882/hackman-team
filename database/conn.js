const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/hackman",{ useNewUrlParser: true,
// useUnifiedTopology: true})
// .then(()=>{
//     console.log("Connected to Database");
// })

mongoose.connect(process.env.MONGOURL,{ useNewUrlParser: true,
useUnifiedTopology: true})
.then(()=>{
    console.log("Connected to Database");
})

// mongoose.connect("mongodb+srv://manishmadan101:QqXwEgB7VhIzPSsh@cluster0.wtpmj5h.mongodb.net/hackman-2023",{ useNewUrlParser: true,
// useUnifiedTopology: true})
// .then(()=>{
//     console.log("Connected to Database");
// })

