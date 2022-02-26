// import logo from './logo.svg';
// import './App.css';
// import { Createrpage } from './components/createpage/createrpage';
// import { Route, Routes } from 'react-router-dom';
// import { Createrpage1 } from './components/createpage1/createrpage1';
// import { Createrpage2 } from './components/createpage2/createrpage2';
// import {BrowserRouter} from 'react-router-dom'
// import { Createrpage3 } from './components/createpage3/createrpage3';
// import { Createrpage4 } from './components/createrpage4/createrpage4';
// import { Navbar } from './components/navbarpersonal/navbarper';
// import { Basic } from './components/navbarpersonal/navbarcomponents/basic';
// import { Tiers } from './components/navbarpersonal/navbarcomponents/tiers';
// import { Merch } from './components/navbarpersonal/navbarcomponents/merch';
// import { Gettingpaid } from './components/navbarpersonal/navbarcomponents/gettingpaid';
// import { Pagesetting } from './components/navbarpersonal/navbarcomponents/pagesetting';
// import { Preview } from './components/navbarpersonal/navbarcomponents/preview';
// import { Advanced } from './components/navbarpersonal/navbarcomponents/advanced';
// import Footer from './components/Footer/Footer';
// import { Creatorhome1 } from './components/navbarpersonal/navbarcomponents/Creator_home/Creatorhome1/Creatorhome1';


// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
     
//        <Routes>

//          <Route path='/' element={<Createrpage/>}></Route>
//          <Route  path='/create/adult' element={<Createrpage1/>}></Route>
//          <Route  path='/create/currency' element={<Createrpage2/>}></Route>
//          <Route  path='/create/merch' element={<Createrpage3/>}></Route>
//          <Route  path='/create/socials' element={<Createrpage4/>}></Route>

         
         
         
//          <Route  path='/create/navbar/edit/basic' element={<Basic/>}></Route>
//          <Route  path='/create/navbar/edit/tiers' element={<Tiers/>}></Route>
//          <Route  path='/create/navbar/edit/merch' element={<Merch/>}></Route>
//          <Route  path='/create/navbar/edit/gettingpaid' element={<Gettingpaid/>}></Route>
//          <Route  path='/create/navbar/edit/pagesetting' element={<Pagesetting/>}></Route>
//          <Route  path='/create/navbar/edit/preview' element={<Preview/>}></Route>
//          <Route  path='/create/navbar/edit/advanced' element={<Advanced/>}></Route>
//          <Route  path='/create/navbar/edit/previewicon' element={<Preview/>}></Route>
        
         
//          <Route  path='/create-home' element={<Creatorhome1/>}></Route>


         
//         </Routes>
    
//         <Footer/>

//    </BrowserRouter>
   
  

//     </div>
//   );
// }

// export default App;

import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import './App.css';
// import Home from './components/pages/Home';
import Home from './components/Home/Home.jsx'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Consulting from './components/pages/Consulting';
import Login from './components/pages/Login';
import Footer from './components/Footer/Footer';
import {LitePage} from "./components/Lite/Lite.jsx"
import First from "./components/Firstpage/first"
import { Createrpage } from './components/createpage/createrpage';
import { Createrpage1 } from './components/createpage1/createrpage1';
import {BrowserRouter} from 'react-router-dom'
import { Createrpage2 } from './components/createpage2/createrpage2';
import { Createrpage3 } from './components/createpage3/createrpage3';
import { Createrpage4 } from './components/createrpage4/createrpage4';
import { Basic } from './components/navbarpersonal/navbarcomponents/basic';
import { Tiers } from './components/navbarpersonal/navbarcomponents/tiers';
import { Merch } from './components/navbarpersonal/navbarcomponents/merch';
import { Gettingpaid } from './components/navbarpersonal/navbarcomponents/gettingpaid';
import { Pagesetting } from './components/navbarpersonal/navbarcomponents/pagesetting';
import { Preview } from './components/navbarpersonal/navbarcomponents/preview';
import { Advanced } from './components/navbarpersonal/navbarcomponents/advanced';
// import Footer from './components/Footer/Footer';
import { Creatorhome1 } from './components/navbarpersonal/navbarcomponents/Creator_home/Creatorhome1/Creatorhome1';

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
    <div className="App">
    
    <Router>
      <Navbar />
      
      <Routes>
        <Route path='/'  element={<Home/>} ></Route>
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/contact-us' component={ContactUs} />
        
        <Route path='/consulting' element={<Consulting />}></Route>
        <Route path='/Login.jsx' element={ user ? <Navigate to= "/" /> :  <Login />}></Route>
        <Route path='/SignUp.jsx' element={<SignUp />}> </Route>
      

        <Route path='/Lite' element={<LitePage/>}> </Route>
        <Route path='/first' element={<First/>}> </Route>

         <Route path='/createpage' element={<Createrpage/>}> </Route>
         {/* <Route path='/create/adult' element={<Createrpage1/>}> </Route> */}
         <Route  path='/create/adult' element={<Createrpage1/>}></Route>
         <Route  path='/create/currency' element={<Createrpage2/>}></Route>
         <Route  path='/create/merch' element={<Createrpage3/>}></Route>
         <Route  path='/create/socials' element={<Createrpage4/>}></Route>

                  <Route  path='/create/navbar/edit/basic' element={<Basic/>}></Route>
         <Route  path='/create/navbar/edit/tiers' element={<Tiers/>}></Route>
          <Route  path='/create/navbar/edit/merch' element={<Merch/>}></Route>
          <Route  path='/create/navbar/edit/gettingpaid' element={<Gettingpaid/>}></Route>
         <Route  path='/create/navbar/edit/pagesetting' element={<Pagesetting/>}></Route>
         <Route  path='/create/navbar/edit/preview' element={<Preview/>}></Route>        
          <Route  path='/create/navbar/edit/advanced' element={<Advanced/>}></Route>
         <Route  path='/create/navbar/edit/previewicon' element={<Preview/>}></Route>
        
         
         <Route  path='/create-home' element={<Creatorhome1/>}></Route>

        
      </Routes>
      <Footer/>
    </Router>
    
    </div>
    
  );
}

export default App;


