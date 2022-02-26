import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import Dropdown from './Dropdown';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Dropdown from 'react-bootstrap/Dropdown'
import 'bootstrap/dist/css/bootstrap.min.css';
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
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
     <div  id="navbar">
        <div className="div1"> <Link className="link" to="/"  onClick={closeMobileMenu} ><img className="logo1" src="https://seeklogo.com/images/P/patreon-logo-93191455CE-seeklogo.com.png" alt="" /></Link></div>

        {/* <Button 
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}

      >
        Products
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        
        <MenuItem onClick={handleClose} id="menu1"> 
        Lite 
       
        Simple tools to set up recurring support from your fans
        </MenuItem>
        
        <MenuItem onClick={handleClose} id="menu1"><div>Pro</div>
        <br/>
        <p>All the tools to build and grow a thriving membership business</p>
        </MenuItem>
        <MenuItem onClick={handleClose} id="menu1"><div> Premium</div>
         
        <br/>
        <p>For established creatorsand creative business</p>
        </MenuItem>
      </Menu> */}
       
 <Dropdown id="dropdown-basic">
  <Dropdown.Toggle  id="dropdown-basic">
    
  Products
  
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item > <Link to="/Lite">Action</Link></Dropdown.Item>
    <Dropdown.Item >Another action</Dropdown.Item>
    <Dropdown.Item >Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

        {/* <div className="div1"> <Link className="link"  onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} to="/" onClick={closeMobileMenu}>Product</Link> {dropdown && <Dropdown />} </div> */}

       <div className="div1"> <Link className="link"  onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} to="/" onClick={closeMobileMenu} >For creators</Link></div>
     
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
