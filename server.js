const app = require('./app');
require('dotenv').config;
require("./database/conn");

const port = 4000 || process.env.PORT;

const server = app.listen(port,()=>{
    console.log(`Server is up at port ${port}`);
})