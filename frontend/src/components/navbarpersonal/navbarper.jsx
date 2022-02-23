import {Link} from "react-router-dom"
import VisibilityIcon from '@mui/icons-material/Visibility';
import { cyan  } from '@mui/material/colors';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import ReactDOM from 'react-dom'
import Button from '@mui/material/Button';
import "./navbarper.css"

export const Navbar =()=>{
    return(
        <div>
        <div id="navbarpage">
            <Link className="link" to="/create/navbar/edit/basic" >Basics</Link>
            <Link  className="link" to="/create/navbar/edit/tiers" >Tiers</Link>
            <Link  className="link" to="/create/navbar/edit/merch"  >Merch</Link>
            <Link className="link" to="/create/navbar/edit/gettingpaid"  >Getting Paid</Link>
            <Link className="link" to="/create/navbar/edit/pagesetting"  >Page Settings</Link>
            <Link  className="link" to="/create/navbar/edit/preview"  >Preview</Link>
            <Link  className="link" to="/create/navbar/edit/advanced"  >Advanced</Link>
            <Link  className="link1" to="/create/navbar/edit/previewicon"   ><FontAwesomeIcon icon={faEye} />Preview</Link>
            <Link className="link2" to="/create/navbar/edit/previewicon" ><Button variant="contained" disabled>Launch</Button></Link>  


         </div>
        </div>
    )
}