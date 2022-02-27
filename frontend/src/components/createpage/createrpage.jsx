import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'
import "./createpage.css"
import Button from '@mui/material/Button';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import createrpage from "../../assests/images/createrpage.png"
import {Link} from "react-router-dom"


export const Createrpage = () => {



   return (
       <div>
        <div className='createpage'>
           <div  className='creatediv'>
  
           <div className='creatediv1'>
            <p>STEP 1 OF 5</p>
           <h1>What describes your content?</h1>

           <span id='span1'>You can pick up to two categories</span>
           </div>
           <br/>
              <div className='checkboxdiv'>
                
                  <FormControlLabel  control={<Checkbox />} label="Podcasts"  sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
                  <FormControlLabel control={<Checkbox />} label="Videos"   sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}/>
                  <FormControlLabel control={<Checkbox />} label="Illustration & Animation"  sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
                  <FormControlLabel control={<Checkbox />} label="Writing & Journalism"  sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
                  <FormControlLabel control={<Checkbox />} label="Music"  sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
                   <FormControlLabel control={<Checkbox />} label="Games & Software"  sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
                   <FormControlLabel control={<Checkbox />} label="Communities"   sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}/>
                    <FormControlLabel control={<Checkbox />} label="Photography"   sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}/>
                     <FormControlLabel control={<Checkbox />} label="Local Business (restaurant, yoga studio, venue, etc.)"   sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}/>
                     <FormControlLabel control={<Checkbox />} label="Other"   sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}/>
            {/* <FormControlLabel disabled control={<Checkbox />} label="Disabled" /> */}
                
           </div>

           <ButtonUnstyled variant="contained" id='buttoncr' 
           > <Link id='link1'  to="/create/adult">Continue </Link></ButtonUnstyled>
           
           </div>
           <div className='createpageimgdiv'><img src={createrpage}  alt="createpage1"></img></div>
          </div>


       </div>
   ) 
}