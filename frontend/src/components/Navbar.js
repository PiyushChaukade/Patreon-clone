import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import SearchIcon from '@mui/icons-material/Search';
function Navbar() {

  const logout=()=>{
    window.open("http://localhost:3000/auth/logout","_self")
  }

 const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
 
  const closeMobileMenu = () => setClick(true);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    // if (window.innerWidth < 960) {
    //   setDropdown(true);
    // } else {
    //   setDropdown(false);
    // }
  };

  return (
     <div  id="navbar">
        <div className="div1"> <Link className="link" to="/"  onClick={closeMobileMenu} ><img className="logo1" src="https://seeklogo.com/images/P/patreon-logo-93191455CE-seeklogo.com.png" alt="" /></Link></div>
        <div className="div1"> <Link className="link"  onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} to="/" onClick={closeMobileMenu}>Product</Link> {dropdown && <Dropdown />} </div>
       <div className="div1"> <Link className="link"  onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} to="/" onClick={closeMobileMenu} >For creators</Link>{dropdown && <Dropdown />}</div>
       <div className="div1"> <Link className="link" to="/" onClick={closeMobileMenu} >Pricing</Link></div>
        <div className="div1"><Link className="link" to="/" onClick={closeMobileMenu} style={{margin:"5px"}}>Resources</Link></div>
        <div className="div1"> <Link className="link" to="/" onClick={closeMobileMenu} style={{margin:"5px"}}>Starter-kits</Link></div>
          <input id='input1' type="search" placeholder='Find a Creator'  />
        <div className="login"> <Link className="link" to="/Login.jsx">Login</Link></div>
        <div className="div2"> <Link  to="/SignUp.jsx" className="signup1" onClick={closeMobileMenu} >Create on Patreon</Link></div>
        <div className='div1' id='logout' onClick={logout} >logout</div>
    </div>
     
  );
}

export default Navbar;
