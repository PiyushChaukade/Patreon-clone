import React from 'react';
 import "./signup.css"
 import { useState} from 'react';
export default function SignUp() {

  const google=()=>{
    window.open("http://localhost:3000/auth/google","_self")
  }

  // const signup=()=>{
  //   window.open("http://localhost:3001/")
  // }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password,setConfirm_password]=useState("")

   // States for checking the errors
   const [submitted, setSubmitted] = useState(false);
   const [error, setError] = useState(false);

    // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };


   // Handling the password change
   const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleConfirmPassword = (e) => {
    setConfirm_password(e.target.value);
    setSubmitted(false);
  };
  // 
  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '' || confirm_password==='') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };


   // Showing success message
  const successMessage = () => {
     
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
         
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };
 
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };
  

  return (
    <div>
      <h3>We use cookis for something......</h3>
      <h3 id='h3' >Sign up</h3>
      <div className='signupDiv'>
      <div>
        <h1>User Registration</h1>
      </div>
 
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
      <div id='googlewith' onClick={google} >signup with google
      </div>
      <form >
      <div id='facebookwith'>Sign-Up with Facebook</div>
      <div id='hr'><div className='line'></div> <div id='or'>Or</div> <div className='line'></div></div>
      <p></p>
      <input onChange={handleName} className="input"
          value={name} type="text"  placeholder='enter your name'/> <br></br>
      <input onChange={handleEmail} className="input"
          value={email} type="email" placeholder='enter your email' /><br></br>
    <input onChange={handlePassword} className="input"
          value={password} type="password" placeholder='enter your password' /><br></br>
           <input  onChange={handleConfirmPassword} className="input"
          value={password} type="password"   placeholder='confirm password' /><br></br>
   <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
    </form>
      </div>
    </div>
  );
}
