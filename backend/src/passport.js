//const app=require("express").app()
const User=require("./models/user.model")
const GoogleStrategy=require("passport-google-oauth20").Strategy
const passport=require("passport")

const GOOGLE_CLIENT_ID ="947963755126-bkhbe6c7073ifhjalfs8959d4ggsdfa9.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET="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"

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function (accessToken, refreshToken, profile, done) {
   // user.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    console.log(profile._json)
    SetData(profile._json)
    //console.log(User)
    done(null,profile)
    }
  
));
passport.serializeUser((user,done)=>{
    console.log("user")
    done(null,user)
})
passport.deserializeUser((user,done)=>{
    done(null,user)
})

async function SetData(user){
    let {name,picture}=user
    console.log(name,picture)
  try{
     const Data=await User.create({name,picture})
     console.log(Data)
  }
  catch(err){
      console.log(err)
  }
}