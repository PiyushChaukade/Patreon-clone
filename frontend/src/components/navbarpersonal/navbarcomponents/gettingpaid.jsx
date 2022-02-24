import { Navbar } from "../navbarper"
import Button from '@mui/material/Button';
import { pink, green } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import "./gettingpaid.css"
import {Link} from "react-router-dom"

import TextField from '@mui/material/TextField';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import fox from "../../../assests/images/fox.jpg"
import uploadimage from "../../../assests/images/uploadimage.png"
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Example } from "./texteditor/texteditor";


const Input = styled('input')({
    display: 'none',
  });
  
  const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 0 0 1px rgb(16 22 26 / 40%)'
        : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
    backgroundImage:
      theme.palette.mode === 'dark'
        ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
        : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background:
        theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
    },
  }));
  
  const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  });
  
  // Inspired by blueprintjs
  function BpRadio(props) {
    return (
      <Radio
        sx={{
          '&:hover': {
            bgcolor: 'transparent',
          },
        }}
        disableRipple
        color="default"
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        {...props}
      />
    );
  }
  
  function BpCheckbox(props) {
    return (
      <Checkbox
        sx={{
          '&:hover': { bgcolor: 'transparent' },
        }}
        disableRipple
        color="default"
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        inputProps={{ 'aria-label': 'Checkbox demo' }}
        {...props}
      />
    );
  }

export const Gettingpaid =()=>{
    return(
        <div > <Navbar/>
            <div>
                     <div id="basic">
                      <h1> Getting Paid</h1> 
                      <p>Let’s get you paid.</p>                 
                     </div>

              <div id="inputcontainer">

                <div id="inputcontainer1" >

                       <div id="inputcontainer1_1"> 

                
                  
                         <div id="inputdiv1">

                          <span>Payment schedule<p>Required</p></span>
                          <span>
                        <FormControl>
  
                         <RadioGroup
                         defaultValue="is Creating"
                         aria-labelledby="demo-customized-radios"
                         name="customized-radios"
                          >
                            <FormControlLabel value="is Creating" control={<BpRadio />} label="Monthly" />
                            <div><p id="tagp">Charge my patrons at the start of every month.</p>

                            <FormControlLabel disabled control={<Checkbox />}
                            
                             label="Charge Patrons up front" />

                             <Button id="buttonotp" variant="contained">Verify to enable charge up front</Button>
                             <p id="tagp2">New patrons will be charged the day they become a patron, then on the 1st of the month going forward.
                                  <a href="nhn">Learn more</a></p>

                            </div>



                             <FormControlLabel 
                             sx={{
                                '& .MuiSvgIcon-root': {
                                  fontSize: 28,
                                },
                              }}
                              value="Per Creation" disabled  control={<BpRadio />} label="Per Creation" />
                             <div><p id="tagp1">Charge my patrons at the start of every month.</p>
                             <p id="tagp">Your plan only supports a monthly payment schedule.</p>
                             </div>
       
                        </RadioGroup>
                     </FormControl>
                   </span>
                   
                     </div>
    
                 </div>


               <div id="inputcontainer1_1"> 
                         <div id="inputdiv1">

                          <span>Your currency<p>Required</p></span>
                          <span>
                          New Zealand Dollars (NZD) - NZD
                          <p>You are setting tiers in and getting paid out in NZD. Patrons will see prices in their local currency. 
                              If Patreon doesn't support a patron's currency, they will see your NZD prices</p>
                              <Button id="paidbutton" variant="contained">Change Currency</Button>
                           </span>
                   
                     </div>
    
                 </div>


                 
               <div id="inputcontainer1_1"> 
                         <div id="inputdiv1">

                          <span>Edit payout settings <br/><br/><a href="bg" style={{fontSize:"14px"}}>Learn more</a></span>

                          <span>
                          <p>Once your creator page is launched, you can edit your payout settings,
                               including how you'd like to get paid and your tax information.</p>
                              
                           </span>
                   
                     </div>
    
                 </div>


                </div>
           


            <div id="inputcontainer2" >
                  <div id="inputcontainer2_1" >

                      <div id="inputcontainer2_1_buttondiv">
                       <Button variant="contained" disabled>Save Changes </Button>
                      </div>

                       <div id="inputcontainer2_2">
                         <p>CHECKLIST</p>
                         <span>
                         <Checkbox  defaultChecked label="Label" sx={{  color: green[800], '&.Mui-checked': {color: green[600]}}}/>
                         Set your page name
                         </span>

                         <span>
                         <Checkbox defaultChecked label="Label" sx={{  color: green[800], '&.Mui-checked': {color: green[600]}}}/>
                         Create your headline Required
 
                         </span>

                         <span>
                         <Checkbox defaultChecked label="Label" sx={{  color: green[800], '&.Mui-checked': {color: green[600]}}}/>
                         Verify email address
                         </span>

                         <span>
                         <Checkbox defaultChecked label="Label" sx={{  color: green[800], '&.Mui-checked': {color: green[600]}}}/>
                         Upload profile picture
                         </span>

                         <span>
                         <Checkbox defaultChecked label="Label" sx={{  color: green[800], '&.Mui-checked': {color: green[600]}}}/>
                         Upload cover image Required
                         </span>

                         <span>
                         <Checkbox defaultChecked label="Label" sx={{  color: green[800], '&.Mui-checked': {color: green[600]}}}/>
                         Create about sectionRequired
                         </span>

                         <span>
                         <Checkbox defaultChecked label="Label" sx={{  color: green[800], '&.Mui-checked': {color: green[600]}}}/>
                         Finish account details Required
                         </span>
                      
                        <div id="inputcontainer2_3">
                            <p>LEARN MORE</p>  
                                   <ul>
                                         <li>Membership 101: Best Practices</li>
                                         <li>How to choose your business model</li>
                                         <li>How to talk about Patreon to your audience</li>
                                         <li>Knowing your worth as a creator</li>
                                         
                                  </ul> 
                         </div>


                       </div>
                       
                     </div>
                 </div>
               </div>
           </div>
        </div>
    )
}