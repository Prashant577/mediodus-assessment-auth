const asyncHandler = require("express-async-handler");  
const Dashboard = require("../models/dashboardModel");


const getDashboard =asyncHandler(async (req,res) => {
    const dashboard = await Dashboard.find({user_id: req.user.id});
    res.status(200).json(dashboard);
});

const createDashboard = asyncHandler(async (req,res) => {
    console.log("request ->", req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory !");
    }

    const dashboard = await Dashboard.create({
        name,
        email,
        phone,
        user_id: req.user.id
    });
    res.status(201).json(dashboard);
})

module.exports = {getDashboard, createDashboard};