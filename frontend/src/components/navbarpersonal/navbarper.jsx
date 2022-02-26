import {Link} from "react-router-dom"
import VisibilityIcon from '@mui/icons-material/Visibility';
import { cyan  } from '@mui/material/colors';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import ReactDOM from 'react-dom'
import Button from '@mui/material/Button';
import "./navbarper.css"
import * as React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useContext } from "react"
import {CartContext} from "./navbarcomponents/context/Cartcontextprovider"
export const Navbar =()=>{
  const {cart}=useContext(CartContext);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };



    return(
        <div>
        <div id="navbarpage">
            <Link className="link" to="/create/navbar/edit/basic" >Basics</Link>
            <Link  className="link" to="/create/navbar/edit/tiers" >Tiers</Link>
            <Link  className="link" to="/create/navbar/edit/merch"  >Merch</Link>
            <Link className="link" to="/create/navbar/edit/gettingpaid"  >Getting Paid</Link>
            <Link className="link" to="/create/navbar/edit/pagesetting"  >Page Settings</Link>
            <Link  className="link" to="/create/navbar/edit/preview"  >Preview</Link>
            {/* <Link  className="link" to="/create/navbar/edit/advanced"  >Advanced


            </Link> */}
<Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Advanced
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
        <MenuItem onClick={handleClose}>Welcome Notes</MenuItem>
        <MenuItem onClick={handleClose}>Goals</MenuItem>
        <MenuItem onClick={handleClose}>Offers</MenuItem>
      </Menu>

            <Link  className="link1" to="/create/navbar/edit/previewicon"   ><FontAwesomeIcon icon={faEye} />Preview</Link>


            <Link className="link2" to="/create/navbar/edit/previewicon" >
              <Button variant="contained" 
               id={cart %2 ===0 ? "purple" : "orange"} 
              > <Link to="/create-home" style={{textDecoration:"none"}}>    Launch </Link></Button></Link>  


         </div>
        </div>
    )
}