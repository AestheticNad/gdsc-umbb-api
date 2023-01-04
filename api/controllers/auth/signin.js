const Member = require("../../../db/models/build/member");
const hash = require("../util/hash");
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
