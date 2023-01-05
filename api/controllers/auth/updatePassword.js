const Member = require("../../../db/models/build/member");
const hash = require("../util/hash");
const ChangePassword = async (req, res) => {
  const { old: oldPw, new: newPw, _id } = req.body;
  const [hashedOld, hashedNew] = [hash(oldPw), hash(newPw)];
  try {
    let member = await Member.findOne({ _id });
    if (hashedOld == member.hashedPassword) {
      await Member.findOneAndUpdate({ _id }, { hashedPassword: hashedNew });
      res.send({ success: true });
    } else res.send({ success: false });
  } catch (error) {
    console.log(error);
  }
};

module.exports = ChangePassword;
