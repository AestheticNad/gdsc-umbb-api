const Member = require("../../../db/models/build/member");
const hash = (password) =>
  require("crypto").createHash("sha256").update(password).digest("hex");
const Signin = async (req, res) => {
  let data = req.body;
  try {
    let user = await Member.findOne({
      email: data.email,
      hashedPassword: hash(data.password),
    });
    res.send(user ? { user } : { error: "Invalid credentials" });
  } catch (error) {
    res.send({ error });
  }
};

module.exports = Signin;
