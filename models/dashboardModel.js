const mongoose = require("mongoose");

const dashboardSchema = mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    name:{
        type: String,
        required: [true, "Please add the dashboard user name"]
    },
    email: {
        type: String,
        required: [true, "Please add the dashboard user email address"]
    },
    phone: {
        type: String,
        required: [true, "Please add the dashboard user phone number"]
    }
},{
    timestamps: true
}
);

module.exports = mongoose.model("Dashboard", dashboardSchema);