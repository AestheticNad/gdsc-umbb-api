const Member = require("../../../db/models/build/member");
const VerificationToken = require("../../../db/models/tokens/verification");
const tokenGen = require("../util/token");
const hash = require("../util/hash");

const Signup = async (req, res) => {
  let data = req.body;
  try {
    let user = await Member.create({
      name: data.name,
      email: data.email,
      hashedPassword: hash(data.password),
      phoneNumber: data.phone,
      departement: data.departement,
      discordTag: data.tag,
      role: data.special,
    });
    let token = await VerificationToken.create({
      uid: user._id,
      key: tokenGen(64),
      expires: Date.now(),
    });
    res.send({ user, token: token.key });
  } catch (error) {
    res.send(!error.keyValue?.email ? { error } : { error: "Email used" });
  }
};

module.exports = Signup;
