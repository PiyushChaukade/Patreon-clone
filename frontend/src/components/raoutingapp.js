import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Marketing from './components/pages/Marketing';
import Consulting from './components/pages/Consulting';
import Login from './components/pages/Login';
 

function App() {
  const [user,setUser]=useState(null)

     useEffect(()=>{
       getUser()
     },[]);
     
     const getUser= ()=>{
      fetch("http://localhost:3000/auth/login/succes",{
        method:"GET",
        credentials:"include",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json",
          "Access-Control-Allow-Credentials":true,
        },
      }).then(response =>{
       return response.json()
       
      })
      .then((response)=>{
        console.log(response)
       //  setUser(resObject.user)
      })
      .catch((err)=>{
        console.log(err)
      })
    };
     //console.log(user)

  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/marketing' element={<Marketing />}></Route>
        <Route path='/consulting' element={<Consulting />}></Route>
        <Route path='/Login.jsx' element={ user ? <Navigate to= "/" /> :  <Login />}></Route>
        <Route path='/SignUp.jsx' element={<SignUp />}> </Route>
      </Routes>
    </Router>
  );
}

export default App;

