const Member = require("../../../db/models/build/member");

const UpdateMember = async (req, res) => {
  const { _id, email, phone: phoneNumber, tag: discordTag } = req.body;
  try {
    await Member.findOneAndUpdate({ _id }, { email, phoneNumber, discordTag });
    res.send({ success: true });
  } catch (error) {
    console.log(error);
  }
};

module.exports = UpdateMember;
