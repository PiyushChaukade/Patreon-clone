const cookieSession = require("cookie-session")
const {signUp,login}=require("./controllers/auth.controller")
const express=require("express")
const cors = require("cors")
const passportSetup=require("./passport")
const passport = require("passport")
const authRoute=require("./routes/auth")
const app=express()
// const User=requirerequire("./models/user.model")
// const router=require("express").Router();
// require("./configs/db")

// //app.post("/signUp",register)
// router.post("/signUp",(req,res)=>{
//     const {name,picture,email,password,confirm_password}=req.body;
//     if(!name || !picture || !email || !password  || !confirm_password){
//         return res.status(422).json({error:"plz filled the field properly"})
//     }
//     User.findOne({email:email})
//     .then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error:"email already exist"})
//         }
//         const user=new User({name,picture,email,password,confirm_password})
//         user.save().then(()=>{
//             res.status(201).json({message:"user registered successfully"})
//         }).catch((err)=>
//             res.status(500).json({error:"failed to registered"}))
        
//     }).catch(err =>{
//         console.log(err)
//     })
// })

// app.post("/login",login)

app.use(cookieSession(
    {
        name:"session",
        keys:["lama"],
        maxAge:18

    }
))

app.use(passport.initialize());
app.use(passport.session())

 app.use(cors({
     origin:"http://localhost:3000",
     method:"GET,POST,PUT,DELETE",
     Credential:true
 }))

 app.use("/auth",authRoute)
module.exports=app
// app.listen("3000", ()=>{
//     console.log("server is running")
// })