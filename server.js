const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDb(); 
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json())
app.use("/dashboard", require("./routes/dashboardRoutes"))
app.use("/", require("./routes/userRoutes"))  
app.use(errorHandler)

app.listen(port, () =>{
    console.log(`Server running on the port ${port}`);
})