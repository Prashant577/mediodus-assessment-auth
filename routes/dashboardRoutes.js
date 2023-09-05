const express = require("express");
const router = express.Router();
const {getDashboard, createDashboard} = require("../controllers/dashboardController");
const validateToken = require("../middlewares/validateTokenHandler");

router.use(validateToken);
router.route("/").get(getDashboard).post(createDashboard);

module.exports = router;