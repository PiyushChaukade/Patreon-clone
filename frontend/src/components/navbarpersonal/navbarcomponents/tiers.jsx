
import { Navbar } from "../navbarper" 
import tier1 from "../../../assests/images/tier1.png"
import Button from '@mui/material/Button';

import "./tiers.css"
export const Tiers =()=>{
    return(<div><Navbar/>
        <div>
          <div>
          <div id="basic">
 
               <h1>Tiers</h1>
                <p>Choose what to offer your patrons</p>
              </div>

              <div id="tiersmaindiv">
                    <h1>Start by choosing a fully customizable tier starter kit: <div class="dropdown">
                    <button class="dropbtn">Local Buisness</button>
                     <div class="dropdown-content">
                    <a href="#">Video</a>
                    <a href="#">Music</a>
                    <a href="#">Prodcasts</a>
                    <a href="#">Visual art</a>
                    <a href="#">Writing</a>
                    <a href="#">Local Buisness</a>
                    <a href="#">All Creators</a>
                    </div>

                     </div>
                     </h1>
                     <p>The starter tiers below include the benefits your fans 
                         are most likely to love.</p>

                 <div id="tiersmaindiv1">

                 <div  id="tier1div">
                     <img src={tier1} alt="tier1"/>
                     <h3>Patreon pays NZD5 per month</h3>
                     <p>INCLUDES</p>
                     <h3>Good karma</h3>
                     <h3>Exclusive patron-only Prodcasts and newsletter</h3>

                      </div>

                      <div  id="tier1div">
                     <img src={tier1} alt="tier1"/>
                     <h3>Patreon pays NZD20 per month</h3>
                     <p>ALL PREVIOUS TIERS PLUS</p>
                     
                     <h3>Discount or store credit on your next visit</h3>

                      </div>
                      <div  id="tier1div">
                     <img src={tier1} alt="tier1"/>
                     <h3>Patreon pays NZD54 per month</h3>
                     <p>ALL PREVIOUS TIERS PLUS</p>
                    
                     <h3>Exclusive patron-only Prodcasts and newsletter</h3>

                      </div>

                  </div>
                  <Button  id="buttontier"variant="contained">Customize</Button>

              </div>

               </div>
           </div>
        </div>
    )
}