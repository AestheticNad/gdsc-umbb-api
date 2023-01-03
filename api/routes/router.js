const express = require("express")
const router = express.Router()
const checkBody = require("../middlewares/checkBody")
const Signup = require("../controllers/auth/signup")


router.route("/allo").post(checkBody,Signup)


module.exports = router