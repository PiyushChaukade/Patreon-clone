const mongoose=require("mongoose")
const bcrypt=require("bcryptjs")
const { type } = require("express/lib/response")
const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    picture:{type:String,required:false},
    email:{type:String,required:false,unique:true},
    password:{type:String,required:false},
    confirm_Password:{type:String,required:false},

},
    {
        versionKey:false,
        timestamps:true
    }
)
userSchema.pre("save", function(next){
    if(!this.isModified("password")) return next()
 
    this.password=bcrypt.hashSync(this.password,8)
    return next()
})

userSchema.methods.checkPassword=function (password){
   
    return bcrypt.compareSync(password,this.password)
  
}
module.exports=mongoose.model("user",userSchema)