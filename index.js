const express = require("express");
const app = express();

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//dotenv
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;

//dbconnection
const db = require("./connection/dbconnection");
db();

//routes
const orderRoute = require("./routes/order");
const registerRoute = require("./routes/register");
const loginRoute = require("./routes/login");
//login And registration
app.use("/api", registerRoute);
app.use("/api", loginRoute);
//OrderRoutes
app.use("/order", orderRoute);

//testing route for  server
app.get("/test", (req, res) => {
  res.json("express server test ~ OK");
});

//-----------------------------------------
//setting products in database
// const product = require("./models/ProductSchema");

// app.get("/product", async (req, res) => {
//   // console.log(data);
//   const data = require("./data.json");
//   try {
//     let result = await product.create(data);
//     if (result) res.status(201).json({ status: "sucess", result });
//     else res.status(400).json({ status: "failed", result });
//   } catch (e) {
//     res.status(400).json({ status: "failed", message: e.message });
//   }
// });
//-----------------------------------------------
//express server
app.listen(port, () => {
  console.log(`Server is running at localhost:${port}`);
});
