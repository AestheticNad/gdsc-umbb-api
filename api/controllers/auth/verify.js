const VerificationToken = require("../../../db/models/tokens/verification");
const Member = require("../../../db/models/build/member");

const VerifyMember = async (req, res) => {
  let key = req.params.key;
  try {
    let token = await VerificationToken.findOne({ key });
    if (!token) return res.send({ error: "Invalid key" });
    if (Date.now() - token.expires > 3600000)
      return res.send({ error: "Key Expired Login to get a new one" });
    await Member.findOneAndUpdate({ _id: token.uid }, { isVerified: true });
    await VerificationToken.findOneAndDelete({ key });
    res.send({ success: "true" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = VerifyMember;
