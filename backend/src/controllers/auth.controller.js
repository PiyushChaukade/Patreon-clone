require("dotenv").config();
const jwt=require("jsonwebtoken")
const User=require("../models/user.model")

const newToken=(user)=>{
   return jwt.sign({ user: user},process.env.JWT_SECRET_KEY,{expiresIn:60*60*3 });
}
const signUp=async (req,res)=>{
   try{
    let user=await User.findOne({email:req.body.email}).lean().exec()
    if(user)
        return res.status(404).send("already exist")
  
        user=await User.create(req.body)
                              
        const token=newToken(user)
       // console.log(user)
         return res.status(201).send({user,token})
     
   }
   catch(err){
       return res.status(500).send(err.message)
   }
}
const login=async(req,res)=>{
  try{
      let user=await User.findOne({email:req.body.email})
      if(!user) return res.status(400).send("either email or password is incorrect")

      const match=user.checkPassword(req.body.password)
      if(!match) return res.status(400).send("either email or password is incorrect")

      
                              
      const token=newToken(user)
      console.log(user)
       return res.status(201).send({user,token})
  }
  catch(err){
      return res.status(500).send(err.message)
  }
 
}
module.exports={signUp,login}