import logo from './logo.svg';
import './App.css';
import { Createrpage } from './components/createpage/createrpage';
import { Route, Routes } from 'react-router-dom';
import { Createrpage1 } from './components/createpage1/createrpage1';
import { Createrpage2 } from './components/createpage2/createrpage2';
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
         <Route path='/' element={<Createrpage/>}></Route>
         <Route  path='/create/adult' element={<Createrpage1/>}></Route>
         <Route  path='/create/currency' element={<Createrpage2/>}></Route>
        </Routes>
   </BrowserRouter>

    </div>
  );
}

export default App;
