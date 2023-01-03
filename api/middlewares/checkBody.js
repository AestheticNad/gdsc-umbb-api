
const checkBody = (req,res,next)=>{
    const obj = req.body
    const keys=["name","email","password","tag","departement"]
    return Object.values(obj).every(value=>value) && Object.keys(obj).every(key=>keys.includes(key)) ? next()  : res.status(401).send({error:"Invalid Payload"})

}
    module.exports = checkBody