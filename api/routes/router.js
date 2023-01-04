const express = require("express")
const router = express.Router()
const checkBody = require("../middlewares/checkBody")
const Signup = require("../controllers/auth/signup")
const Signin = require("../controllers/auth/signin")
const VerifyMember = require("../controllers/auth/verify")


router.route("/signup").post(checkBody,Signup)
router.route("/signin").post(checkBody,Signin)
router.route("/verify/:key").get(VerifyMember)

module.exports = router