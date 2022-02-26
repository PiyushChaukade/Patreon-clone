

import {Link} from "react-router-dom"
import { Navbar } from "../navbarper"
import "./preview.css"
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import fox from "../../../assests/images/fox.jpg"
import preview from "../../../assests/images/preview.png"
import previewimg1 from "../../../assests/images/previewimg1.png"
import previewimg2 from "../../../assests/images/previewimg2.png"
import { blueGrey, green } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Example } from "./texteditor/texteditor";
import Button from '@mui/material/Button';
import { useContext } from "react"
import Checkbox from '@mui/material/Checkbox';
import { useState } from "react";
import { CartContext } from"../navbarcomponents/context/Cartcontextprovider"
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


export const Preview =()=>{

    const {handleCart} =useContext(CartContext)
    const {cart}=useContext(CartContext);

  const[counter,setcounter] =useState(0)
  
  const clickfun=(e)=>{
     
    if(counter+e <= 100000 ) setcounter(counter+e)
     
      //console.log(counter+e)
  }




    return(

        <div id="navrbarcont"> <Navbar/>
         <div >
             <div id="preview">
 
               <h1>Preview</h1>
               <p>See what your creator page looks like</p>
            </div>
         <div id="previewtcontainer">
         <div id="previewtcontainer1">
             <img src={preview} alt="preview" />
         </div>
              
             {/* //main container 1  div end */}


               <div id="previewtcontainer2" >
                  <div id="previewtcontainer2_1" >

                     

                       <div id="previewtcontainer2_2">
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
                         <Checkbox 
                          onClick={()=>{ handleCart(1)  }}
                         label="Label" sx={{  color: green[800], '&.Mui-checked': {color: green[600]}}}/>
                         Finish account details Required
                         </span>
                      
                      


                       </div>

                       <div id="previewtcontainer2_1_buttondiv">
                        
                       <Button variant="contained"
                        id={cart %2 ===0 ? "purple" : "orange"}    >
                      <Link to="/create-home" style={{textDecoration:"none"}}>    Launch </Link> </Button>
                       <p>When you launch we review your content. Reviews usually take minutes, although some content takes
                            up to 3 days to review. You can continue editing your page after you launch.</p>
                      </div>
                       
                      <div id="previewtcontainer2_2">
                       <img src={previewimg1} alt="img"/>
                       <img src={previewimg2} alt="img"/>
                      </div>

                   </div>
                </div>
                {/* //main container 2  div end */}



            
                
              </div>

           </div>



         </div>
        
    )
}

