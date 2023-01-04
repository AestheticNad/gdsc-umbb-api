const express = require("express")
const router = express.Router()
const checkBody = require("../middlewares/checkBody")
const Signup = require("../controllers/auth/signup")
const Signin = require("../controllers/auth/signin")
const VerifyMember = require("../controllers/auth/verify")
const {SendResetToken,ResetMember} = require("../controllers/auth/reset")

router.route("/signup").post(checkBody,Signup)
router.route("/signin").post(checkBody,Signin)
router.route("/verify/:key").get(VerifyMember)
router.route("/reset").post(SendResetToken)
router.route("/reset/:key").post(ResetMember)

module.exports = router