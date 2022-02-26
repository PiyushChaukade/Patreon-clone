import React from 'react';
 import "./signup.css"
 
export default function Login() {
  return (
    <div>
      <h3>We use cookis for something......</h3>
      <h3 id='h3' >Sign up</h3>
      <div className='signupDiv'>
      
      <div id='hr'><div className='line'></div> <div id='or'>Or</div> <div className='line'></div></div>
      <p>hhj</p>
       <input type="text" placeholder='enter your name' /> <br></br>
       <input type="text" placeholder='enter your email' /><br></br>
    <input type="text" placeholder='confirm email' /><br></br>
    <input type="password" placeholder='enter your password' /><br></br>
    <input type="submit" />
    <div id='googlewith'>signup with google
      </div>
      <div id='facebookwith'>Sign-Up with Facebook</div>
      </div>
    </div>
  );
}