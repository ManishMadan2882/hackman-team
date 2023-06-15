const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json())
app.use(cors({
    origin:"*"
}));
app.use(bodyParser.urlencoded({extended:true}));

const lawyer = require("./routes/lawyerRoute");
const user = require("./routes/userRoute");

app.use("/api/v1",lawyer);
app.use("/api/v1",user);

module.exports = app;

