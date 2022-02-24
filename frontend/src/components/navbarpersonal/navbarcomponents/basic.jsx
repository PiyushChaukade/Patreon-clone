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
import FormLabel from '@mui/material/FormLabel';

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

        <div> <Navbar/>
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

                



                

                       </div>

             </div>


             <div id="inputcontainer2" ></div>
         </div>


         </div>
        </div>
    )
}

