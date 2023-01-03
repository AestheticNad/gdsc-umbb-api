const Member =require("../../../db/models/member")
const hash = password=>require("crypto").createHash('sha256').update(password).digest('hex')
const Signup = async (req,res)=>{
    let data = req.body
   try {
    let user =  await Member.create({
        name:data.name,
        email:data.email,
        hashedPassword:hash(data.password),
        departement:data.departement,
        discordTag:data.tag
      })
      res.send({user})
   } catch (error) {
    res.send(!error.keyValue?.email ? {error} : {error:"Email used"})
   }
}

module.exports = Signup