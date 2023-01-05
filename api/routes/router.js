const express = require("express");
const router = express.Router();
const checkBody = require("../middlewares/checkBody");
const Signup = require("../controllers/auth/signup");
const Signin = require("../controllers/auth/signin");
const VerifyMember = require("../controllers/auth/verify");
const { SendResetToken, ResetMember } = require("../controllers/auth/reset");
const ChangePassword = require("../controllers/auth/updatePassword")
const UpdateMember = require("../controllers/auth/update")

router.route("/signup").post(checkBody(6), Signup);
router.route("/signin").post(checkBody(2), Signin);
router.route("/verify/:key").get(VerifyMember);
router.route("/reset").post(checkBody(1),SendResetToken);
router.route("/reset/:key").post(checkBody(1), ResetMember);
router.route("/account/update-password").post(checkBody(3),ChangePassword)
router.route("/account/update").post(checkBody(2),UpdateMember)

module.exports = router;
