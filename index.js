const express = require("express");
const app = express();
app.use(express.json());


//dotenv
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;

//dbconnection
const db = require('./connection/dbconnection');
db();

//testing route for  server
app.get('/test', (req,res) => {
    req.json('express server test ~ OK');
})

//express server
app.listen(port, () => {
    console.log(`Server is running at localhost:${port}`);
})