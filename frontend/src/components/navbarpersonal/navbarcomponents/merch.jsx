import merch from "../../../assests/images/Merch.png"
import { Navbar } from "../navbarper"
import "./merch.css"
import Button from '@mui/material/Button';

export const Merch =()=>{
    return(
        <div><Navbar/>
        <div>
        <div id="basic">
 
              <h1>Merch</h1>
              <div id="merchcont">

                  <div>
                  <img src={merch} alt="merchimg"/>
                  </div>

                  <div id="merchcont2">
                      <p>Merch takes the headache out of offering physical rewards to your patrons</p>
                      <p>Make things easier for yourself and your creative business. Pick an item, submit a design, and assign it to a tier. Patreon will deal with production, global shipping and support so you can save time and get back to what you do best
                      — creating. <a href="vfv">Learn More.</a></p>
                      <Button id="merchbutton" variant="contained">Create Merch</Button>
                  </div>
                 
              </div>
        </div>
            
        </div>
        </div>
    )
}