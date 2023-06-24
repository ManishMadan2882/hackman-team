const app = require('./app');
require('dotenv').config;
require("./database/conn");

const port = 5000 || process.env.PORT;

//handling uncaughtException
process.on("uncaughtException" , (err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the Server due to unCaughtException `);
    process.exit(1);
});

//Unhandled Promise Rejection
process.on("unhandledRejection",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the Server due to unHandled Promise Rejection`);
    server.close(()=>{
        process.exit(1);
    });
});

const server = app.listen(port,()=>{
    console.log(`Server is up at port ${port}`);
})