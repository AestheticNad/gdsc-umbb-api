const ResetToken = require("../../../db/models/tokens/reset");
const Member = require("../../../db/models/build/member");
const tokenGen = require("../util/token");
const hash = require("../util/hash");
const SendResetToken = async (req, res) => {
  let email = req.body.email;
  try {
    let user = await Member.findOne({ email });
    if (!user) return res.send({ error: "Doesnt Exist" });
    let temp = await ResetToken.findOne({ uid: user._id });
    if (temp && Date.now() - temp.expires < 3600000)
      return res.send({ message: "Check ur email for previous reset emails" });
    else if (temp && Date.now() - temp.expires > 3600000) {
      await ResetToken.findOneAndDelete({ uid: user._id });
    }
    let token = await ResetToken.create({
      uid: user._id,
      key: tokenGen(64),
      expires: Date.now(),
    });
    res.send({
      token: token.key,
    });
  } catch (error) {
    console.log(error);
  }
};

const ResetMember = async (req, res) => {
  let key = req.params.key;
  let password = hash(req.body.password);
  try {
    let token = await ResetToken.findOne({ key });
    if (!token) return res.send({ error: "Invalid key" });
    if (Date.now() - token.expires > 3600000)
      return res.send({ error: "Key Expired , Request a new one" });
    await Member.findOneAndUpdate(
      { id: token.uid },
      { hashedPassword: password }
    );
    await ResetToken.findOneAndDelete({ key });
    res.send({ success: true });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  SendResetToken,
  ResetMember,
};
