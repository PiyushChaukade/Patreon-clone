import logo from './logo.svg';
import './App.css';
import { Createrpage } from './components/createpage/createrpage';
import { Route, Routes } from 'react-router-dom';
import { Createrpage1 } from './components/createpage1/createrpage1';
import { Createrpage2 } from './components/createpage2/createrpage2';
import {BrowserRouter} from 'react-router-dom'
import { Createrpage3 } from './components/createpage3/createrpage3';
import { Createrpage4 } from './components/createrpage4/createrpage4';
import { Navbar } from './components/navbarpersonal/navbarper';
import { Basic } from './components/navbarpersonal/navbarcomponents/basic';
import { Tiers } from './components/navbarpersonal/navbarcomponents/tiers';
import { Merch } from './components/navbarpersonal/navbarcomponents/merch';
import { Gettingpaid } from './components/navbarpersonal/navbarcomponents/gettingpaid';
import { Pagesetting } from './components/navbarpersonal/navbarcomponents/pagesetting';
import { Preview } from './components/navbarpersonal/navbarcomponents/preview';
import { Advanced } from './components/navbarpersonal/navbarcomponents/advanced';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
       <Routes>

         <Route path='/' element={<Createrpage/>}></Route>
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
        
         
        </Routes>
    
        <Footer/>

   </BrowserRouter>
   
  

    </div>
  );
}

export default App;
