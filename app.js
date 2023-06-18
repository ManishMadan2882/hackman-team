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
const post = require("./routes/postRoute")

app.use("/api/v1",lawyer);
app.use("/api/v1",user);
app.use("/api/v1",post);

module.exports = app;

