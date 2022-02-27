import {Link} from "react-router-dom"
import { Navbar } from "../navbarper"
import "./basic.css"
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import fox from "../../../assests/images/fox.jpg"
import uploadimage from "../../../assests/images/uploadimage.png"
import { blueGrey, green } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Example } from "./texteditor/texteditor";
import Button from '@mui/material/Button';

import Checkbox from '@mui/material/Checkbox';

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


export const Basic =()=>{
    return(

        <div id="navrbarcont"> <Navbar/>
         <div className="contaier">
             <div id="basic">
 
               <h1>Basics</h1>
               <p>Set your creator details</p>
            </div>
         <div id="inputcontainer">
             <div id="inputcontainer1">

                <div id="inputcontainer1_1"> 

                  <div id="inputdiv1">

                   <span>Name of Patreon page<p>required</p></span>
                   <span>
                   <input type="text" id="name" name="name" required placeholder="band name, personal name,whatever"
                    minlength="4" maxlength="8" size="10"/>
                   </span>

                   </div>
                
                   <div id="inputdiv1">

                   <span>What are you creating?<p>required</p></span>
                   <span>
                   <input type="text" id="name" name="name" required placeholder="Music Videos,Water painting,This American Life"
                    minlength="4" maxlength="8" size="10"/>
                   </span>
                   
                   </div>
                    <div id="inputdiv1">

                   <span>Which sounds more correct?<p>required</p></span>
                   <span>
                   <FormControl>
  
                       <RadioGroup
                         defaultValue="is Creating"
                         aria-labelledby="demo-customized-radios"
                         name="customized-radios"
                          >
                            <FormControlLabel value="is Creating" control={<BpRadio />} label="is Creating" />
                             <FormControlLabel value="are Creating" control={<BpRadio />} label="are Creating" />
     
       
                        </RadioGroup>
                     </FormControl>
                   </span>
                   
                   </div>
                 </div>


                 <div id="inputcontainer1_2"> 

                 <div id="inputdiv2">

                    <span>Profile photo<p>Required</p> <p>We recommend a 256px by 256px image.</p></span>
                          <div class="container">
                            <img src={fox} alt="Avatar" class="image"/>
                               <div class="overlay">
                                   <div class="text">
                                      <label htmlFor="icon-button-file"  >
                                           <Input accept="image/*" id="icon-button-file" type="file" />
                                           <IconButton color="primary" aria-label="upload picture" component="span">
                                           <PhotoCamera  sx={{ color: blueGrey[50] }} />
                                           </IconButton> <br/>
                                            Edit
                                      </label>
                                   </div>
                               </div>
                           </div> 

                        </div>


                        <div id="inputdiv2">

                                <span>Cover photo<p>Required</p> <p>We recommend an image at least 1600px wide and 400px tall.</p></span>
                                <div class="container1">
                                    <img src={uploadimage} alt="Avatar" class="image1"/>
                                      <div class="overlay1">
                                         <div class="text1">
                                           <label htmlFor="icon-button-file"  >
                                                <Input accept="image/*" id="icon-button-file" type="file" />
                                                  <IconButton color="primary" aria-label="upload picture" component="span">
                                                  <PhotoCamera  sx={{ color: blueGrey[50] }} />
                                               </IconButton> <br/>
                                                Edit Cover Photo
                                                <p style={{fontSize:"10px"}}>(1,600px X 400px)</p>
                                            </label>
                                           </div>
                                      </div>
                                </div> 
        
                        </div>
                         <div id="inputdiv2">

                                            <span>Patreon page URL</span>
                                          <span>
                                          patreon.com/<input type="text" id="name1" name="name" required placeholder="creatoraccount"
                                          minlength="3" maxlength="15" size="10"/>
                                         </span>
                   
                                </div>
                
                 </div>



                 <div id="inputcontainer1_3"> 
                            <div id="inputcontainer1_3_1">
                            <div id="text">
                              <span>About your Patreon page</span>
                              <p>Required</p>
                              <p>This is the first thing potential patrons will see when they land on your page,
                                 so make sure you paint a compelling picture of how they can join you on this journey.</p>
                            </div>


                            <div id="texteditor">
                            <Example/>
                            </div>
                             <div id="inputdiv1">

                                       <span>Intro video<p>Don't worry — this is optional and it's okay to launch without a video.</p></span>
                                         <span>
                                       <input type="text" id="name" name="name" required placeholder="Video URL"
                                     minlength="4" maxlength="8" size="10"/>
                                  </span>

                          </div>
                           
                   </div>

                  </div>

             </div> 
             {/* //main container 1  div end */}


               <div id="inputcontainer2" >
                  <div id="inputcontainer2_1" >

                      <div id="inputcontainer2_1_buttondiv">
                       <Button variant="contained" disabled>Save Changes </Button>
                      </div>

                       <div id="inputcontainer2_2">
                         <p>CHECKLIST</p>
                         <span>
                         <Checkbox   label="Label" sx={{  color: green[800], '&.Mui-checked': {color: green[600]}}}/>
                         Set your page name
                         </span>

                         <span>
                         <Checkbox  label="Label" sx={{  color: green[800], '&.Mui-checked': {color: green[600]}}}/>
                         Create your headline Required
 
                         </span>

                         <span>
                         <Checkbox defaultChecked label="Label" sx={{  color: green[800], '&.Mui-checked': {color: green[600]}}}/>
                         Verify email address
                         </span>

                         <span>
                         <Checkbox  label="Label" sx={{  color: green[800], '&.Mui-checked': {color: green[600]}}}/>
                         Upload profile picture
                         </span>

                         <span>
                         <Checkbox  label="Label" sx={{  color: green[800], '&.Mui-checked': {color: green[600]}}}/>
                         Upload cover image Required
                         </span>

                         <span>
                         <Checkbox  label="Label" sx={{  color: green[800], '&.Mui-checked': {color: green[600]}}}/>
                         Create about sectionRequired
                         </span>

                         <span>
                         <Checkbox  label="Label" sx={{  color: green[800], '&.Mui-checked': {color: green[600]}}}/>
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
                {/* //main container 2  div end */}



            
                
              </div>

           </div>



         </div>
        
    )
}

