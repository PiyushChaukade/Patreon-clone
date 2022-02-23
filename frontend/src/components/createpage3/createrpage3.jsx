import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';

import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import createrpage2 from "../../assests/images/createrpage2.png"

import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {Link} from "react-router-dom"
import Checkbox from '@mui/material/Checkbox';
import "./createrpage3.css"

export const Createrpage3= () => {

   const [showResults, setShowResults] = React.useState(false)

   const onClick = () => setShowResults(true)
   const onClick1 = () => setShowResults(false)
  
   
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

   

   return (
       <div>
        <div className='createpage3'>
           <div  className='creatediv3_1'>
 <div id='inline'>
           <div className='creatediv3_2'>
           <p>STEP 4 OF 5</p>
           <h1>Do you want to offer exclusive Merch?</h1>

           {/* <span id='span1'>You can pick up to two categories</span> */}
           <span id='span1'>Design your patron-only merch and assign it to a tier.
            Patreon will handle production, global shipping and support.<a href='vfv'>Learn More.</a></span>
            <br/>
            <br/>
            
           <div>Merch for Membership adds 3% to your Patreon plan fee.</div>
           </div>
           <div className='create'>   <span className='createpageimgdiv3'>
          <img src={createrpage2}  alt="createpage2"></img></span></div>
          </div>
      
           <br/>
              <div className='checkboxdiv3'>
              <FormControl>
     
      <RadioGroup
        defaultValue="female"
        aria-labelledby="demo-customized-radios"
        name="customized-radios"
      >
        <FormControlLabel   onClick={ onClick1 } value="female" control={<BpRadio />}  label="Yes, I want Merch for Membership (recommended)" />
        <FormControlLabel onClick={ onClick } value="male" control={<BpRadio />}  label="No, I do not want Merch for Membership" />
      
      
      </RadioGroup>
    </FormControl>
    
    {/* onClick={onClick} />
     */}
            <br/>
             
           
                   
                 
                  
                  
           </div >
           <div id='linlbutt3'>
            <Link to='/create/currency' style={{marginRight:"20px", fontSize:"17px"}}> Back </Link> 
           <ButtonUnstyled variant="contained" id='button' 
           ><Link id='link1'  to="/create/socials">Continue </Link></ButtonUnstyled>
           </div>
           <p id='linlbutt3p' >Merch for Membership <a href='f'>Terms of Use.</a></p>

           </div>
        
          </div>

          

       </div>
   ) 
}

