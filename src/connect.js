require('dotenv').config();

const mongoose = require('mongoose');
console.log(process.env.MONGOURL);
module.exports = mongoose.connect(process.env.MONGOURL)
.then( () => {
    console.log("Connection with database : success");
}) 
.catch((err) => {
    console.log('Connection with database : failure '+err);
})