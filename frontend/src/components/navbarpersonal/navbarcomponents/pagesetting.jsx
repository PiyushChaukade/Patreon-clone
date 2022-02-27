
import { Navbar } from "../navbarper"
import {Link} from "react-router-dom"
import "./pagesetting.css"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from "react";
import { blueGrey, green ,cyan } from '@mui/material/colors';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Example } from "./texteditor/texteditor";
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Countryshower from "./countryshower/country"
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';

import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import App2 from "./popupform/popupform"









import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { blue, red } from '@mui/material/colors';
import twitch from "../../../assests/images/twitch.png"




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




export const Pagesetting =()=>{

  
  
 
  
    
   

    const[color1,setColor1]=useState(true)

    const[color2,setColor2]=useState(false)
    const[color3,setColor3]=useState(false)
    const[color4,setColor4]=useState(false)
    const[color5,setColor5]=useState(false)
    
    function show1(){
      
        if(color1==true){
            setColor1(false)
        }
        else {
            setColor1(true)
            setColor2(false)
            setColor3(false)
            setColor4(false)
             setColor5(false)
          
        }
    
    }
    
    function show2(){
      
        if(color2==true){
            setColor2(false)
        }
        else {
            setColor2(true)
            setColor1(false)
            setColor3(false)
            setColor4(false)
             setColor5(false)
        }
    }
    
    function show3(){
      
        if(color3==true){
            setColor3(false)
        }
        else {
            setColor3(true)
            setColor1(false)
            setColor2(false)
            setColor4(false)
             setColor5(false)
        }
    }
    
    function show4(){
      
        if(color4==true){
            setColor4(false)
        }
        else {
            setColor4(true)
            setColor1(false)
            setColor3(false)
            setColor2(false)
             setColor5(false)
        }
    }
    
    function show5(){
      
        if(color5==true){
            setColor5(false)
        }
        else {
            setColor5(true)
            setColor1(false)
            setColor3(false)
            setColor4(false)
             setColor2(false)
        }
    }

    const [anchorEl, setAnchorEl] = React.useState(null);

      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    
      const open = Boolean(anchorEl);
      const id = open ? 'simple-popover' : undefined;

const [color, setColor] = useColor("hex", "#121212");

    return(
        
              <div id="navrbarcont"> <Navbar/>
         <div className="contaier">
             <div id="basic">
                 
            
             </div>

             <div id="basic">
 
               <h1>Page Settings</h1>
               <p>Set your creator details and make a great first impression</p>
            </div>
         <div id="pagecontainer">
             <div id="pagecontainer1">

                <div id="pagecontainer1_1"> 
                
                <span>Creator Account Details<p>This account information will not appear on your public page.</p></span>

                  <div id="pagediv1">
                    
                   <span>Legal First Name<p>required</p></span>
                   <span>
                   <input type="text" id="pagename" name="pagename" required placeholder="Legal First Name"
                    minlength="4" maxlength="8" size="10"/>
                   </span>

                   </div>
                
                   <div id="pagediv1">

                   <span>Legal Last Name<p>required</p></span>
                   <span>
                   <input type="text" id="pagename" name="pagename" required placeholder="Legal Last Name"
                    minlength="4" maxlength="8" size="10"/>
                   </span>
                   
                   </div>

                     <div id="pagediv1">

                   <span>Country of Residence<p>required</p></span>
                   <span >
                   <Countryshower />
                   {/* //paste here */}
                   </span>
                   
                   </div>
                 
                 </div>


             <div id="pagecontainer1_2"> 

                   <div id="pagediv1">

                   <span id="extend">Custom brand color<p>Choose the color visitors will see for 
                       links and buttons on your page.</p></span>
                   <span id="shorten" >

                    <div id="div1" onClick={()=>{ show1()}}> {color1 ? <DoneIcon  id="doneicon1"/> : null}</div>
                    <div id="div2" onClick={() => {show2()}}>{color2 ? <DoneIcon  id="doneicon" /> : null} </div>
                    <div id="div3" onClick={() => {show3()}}>{color3 ? <DoneIcon  id="doneicon" /> : null}</div>
                    <div id="div4" onClick={() => {show4()}}>{color4 ? <DoneIcon  id="doneicon" /> : null}</div>
                      <div id="div5" onClick={() => {show5()}}>{color5 ? <DoneIcon  id="doneicon" /> : null}</div>
                      
                      <div id="div6" aria-describedby={id} variant="contained" onClick={handleClick}><EditIcon id="edit"  /></div>
      {/* <Button >
        Open Popover
      </Button> */}
      <Popover
        
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}><ColorPicker width={456} height={228} color={color} onChange={setColor} hideHSV dark /></Typography>
      </Popover>
                      
                      <Button id="editbutt" variant="contained"> <UploadFileIcon/>Preview page with color</Button>

{/* 
                      <div id='checkbox'>

<div id='div1' onClick={()=>{ show1()}}>{color1 ? <DoneIcon sx={{ color: pink[500] }}/> : null} </div>

<div id='div2' onClick={() => {show2()}}>{color2 ? <DoneIcon sx={{ color: pink[500] }}/> : null} </div>

<div id='div3' onClick={show}>   </div>
<div id='div4' onClick={show}>    </div>

        </div> */}
                          <p style={{marginTop:"10px"}}>Suggested colors are based on your profile and cover photos. Choose any color—provided it’s dark enough to be legible—by
                              clicking on the option with the pencil icon.</p>
                        </span>
                   
                      </div>
                
                 </div>


                   <div id="pagecontainer1_2"> 

                   <div id="pagediv1">

                   <span id="extend" >Earnings visibility</span>
                   <span id="extendform" >
                   <FormControl>
  
                       <RadioGroup
                         defaultValue="is Creating"
                         aria-labelledby="demo-customized-radios"
                         name="customized-radios"
                          >
                            <FormControlLabel value="is Creating" id="labelsetting" control={<BpRadio />} label="Public (recommended)" />
                            <p id="labelsettingp">Anyone who visits your page will see how much you earn per month.</p>

                             <FormControlLabel value="are Creating"  id="labelsetting" control={<BpRadio />} label="Private" />
                             <p id="labelsettingp">Only you can see how much you earn. Your earnings will be hidden from your page and goals.</p>
     
       
                        </RadioGroup>
                     </FormControl>
                   </span>
                   
                   </div>

                    <div id="pagediv1">

                   <span   id="extend">Patronage visibility</span>
                   <span  id="extendform">
                   <FormControl>
  
                       <RadioGroup
                         defaultValue="is Creating"
                         aria-labelledby="demo-customized-radios"
                         name="customized-radios"
                          >
                            <FormControlLabel  id="labelsetting" value="is Creating" control={<BpRadio />} label="Public (recommended)" />
                            <p id="labelsettingp">Anyone who visits your page will see how many patrons you have. We recommend this so that fans know there are others supporting you.</p>

                             <FormControlLabel  id="labelsetting" value="are Creating" control={<BpRadio />} label="Private" />
                             <p id="labelsettingp">Only you can see how many patrons you have. The number of patrons you have will be hidden from your page and goals.</p>
       
                        </RadioGroup>
                     </FormControl>
                   </span>
                   
                   </div>
                
                 </div>



                 <div id="pagecontainer1_3"> 
                            <div id="pagecontainer1_3_1">
                            <div id="text">
                              <span>Local business</span>
                              
                              <p>Add your address if you want to display your location(s) on your public page and
                                   to appear in search results for local businesses.</p>


                            </div>

                          <div id="addresspagebut">
                            <App2 />
                         
                          </div>
                            
                           
                   </div>

                  </div>

                  
                 <div id="pagecontainer1_3"> 
                            <div id="pagecontainer1_3_1">
                            <div id="text">
                              <span>Social links</span>
                              
                              <p>Give your patrons confidence - securely verify your accounts and display
                                 links on your page. We’ll never post on your behalf.</p>


                            </div>

                            <div id='tablediv12'>

<div>

  <span><FacebookRoundedIcon sx={{ color: blue[500] }}/></span>
  <span>Facebook</span>
  <span>Connect</span>

</div>

<div>
<span><InstagramIcon/></span>
  <span>Instagram</span>
  <span>Connect</span>

</div>

<div>

<span><img id='twitch' src={twitch}  alt="twitch"/></span>
  <span>Twitch</span>
  <span>Connect</span>
</div>

<div>

<span><TwitterIcon sx={{ color: blue[500] }}/></span>
  <span>Twitter</span>
  <span>Connect</span>
</div>

<div>

<span><YouTubeIcon sx={{ color: red[500] }}/></span>
  <span>Youtube</span>
  <span>Connect</span>
</div>


</div>

                            
                           
      </div>

        </div>


                  <div id="pagecontainer1_4"> 
                            <div id="pagecontainer1_4_1">
                            <div id="text12">
                              <span>Adult content</span>
                              
                            </div>

                         <div id="inputtagpage">
                         <FormControlLabel control={<Checkbox defaultChecked />} label="Does your work contain adult themes
                          such as nudity or dangerous activities?"
                         sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                         />
                         <p>“Adult content” means material that features nudity, dangerous activities or
                            anything not suitable for audiences under 18 years old. Patreon is a place where all types of artists can express themselves freely. At the same time, we need to ensure that the browsing experience is sensitive to different age groups, cultures and contexts. Please help us keep Patreon
                            a welcoming place for everyone and tag your content appropriately. <a href="gvf">Learn More</a></p>
                         </div>
                            
                           
                        </div>

                  </div>

                  <div id="pagecontainer1_5"> 
                            <div id="pagecontainer1_5_1">
                            <div id="text123">
                              <span>Google Analytics ID</span>
                              <br/>
                              <a href="fv">Learn more</a>
                              
                            </div>

                         <div id="inputtagpage12">
                        
                         <div class="form-text">
                   <input type="text" placeholder="1234567-1" id="youridhere"/>
                          <label for="youridhere" id="adherid" class="static-value">UA-</label>
                      </div> 
                      <p>Send page visitor data to your Google Analytics account.</p>
                         </div>
                            
                           
                        </div>

                  </div>

                  <div id="pagecontainer1_4"> 
                            <div id="pagecontainer1_4_1">
                            <div id="text12">
                              <span>RSS audio feed</span>
                              <br/>
                              <a href="fv">Learn more</a>
                            </div>

                         <div id="inputtagpage">
                         <FormControlLabel control={<Checkbox defaultChecked />} label="Enable RSS audio feed."
                         sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                         />
                         <p>Provide individual, patron-only podcast feeds.</p>
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
                         <Checkbox label="Label" sx={{  color: green[800], '&.Mui-checked': {color: green[600]}}}/>
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