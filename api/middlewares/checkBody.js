const checkBody = payloadLength=>{
 return (req, res, next) => {
    const obj = req.body;
    const keys = [
      "name",
      "email",
      "password",
      "tag",
      "departement",
      "special",
      "phone",
      "_id",
      "old",
      "new"
    ];
    return Object.values(obj).every((value) => value) &&
      Object.keys(obj).every((key) => keys.includes(key)) && Object.values(obj).length>=payloadLength
      ? next()
      : res.status(401).send({ error: "Invalid Payload" });
  };
}
module.exports = checkBody;
