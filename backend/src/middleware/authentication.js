require("dotenv").config()
const jwt=require("jsonwebtoken")
const verifyToken=(token)=>{
    return new Promise((resolve,reject) => {
    jwt.verify(token,process.env.JWT_SECRET_KEY, function (err,user){
        if(err) return reject(err)


        resolve(user)
    });
    });
}
module.exports=async(req,res,next)=>{
    if(!req?.headers?.authorization) 
    return res.status(400).send("provide valid token")
    const bearerToken= req.headers.authorization
    if(!bearerToken.startsWith("Bearer "))
    return res.status(400).send("provide valid token")
    const token=bearerToken.split(" ")[1]
    let user
    try{
       
    const user=await verifyToken(token)

    }
    catch(err){
        return res.status(401).send("token is not valid")
    }
    req.user=user
    return next()
}