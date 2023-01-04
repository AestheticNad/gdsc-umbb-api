const hash = (password) =>
  require("crypto").createHash("sha256").update(password).digest("hex");
module.exports = hash;
