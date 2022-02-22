import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';

import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import createrpage1 from "../../assests/images/createrpage1.png"

import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {Link} from "react-router-dom"
import Checkbox from '@mui/material/Checkbox';
import "./createpage1.css"

export const Createrpage1= () => {

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
        <div className='createpage'>
           <div  className='creatediv'>
 <div id='inline'>
           <div className='creatediv1'>
           <p>STEP 2 OF 5</p>
           <h1>Does your work contain 18+ themes such as real or illustrated nudity?</h1>

           {/* <span id='span1'>You can pick up to two categories</span> */}
           <span id='span1'>Patreon is a place where all types of artists can express themselves freely.
               At the same time, we need to ensure that the browsing experience is sensitive to different age groups, cultures, and contexts. "18+" means material that features real or illustrated nudity, or other creations that may be considered 
              inappropriate for people under 18 years old. <a href='vfv'>Learn More.</a></span>
           
           </div>
           <div className='create'>   <span className='createpageimgdiv'>
          <img src={createrpage1}  alt="createpage1"></img></span></div>
          </div>
      
           <br/>
              <div className='checkboxdiv'>
              <FormControl>
     
      <RadioGroup
        defaultValue="female"
        aria-labelledby="demo-customized-radios"
        name="customized-radios"
      >
        <FormControlLabel   onClick={ onClick1 } value="female" control={<BpRadio />}  label="No, my work does not contain real or illustrated nudity." />
        <FormControlLabel onClick={ onClick } value="male" control={<BpRadio />}  label="Yes, my work contains real or illustrated nudity." />
      
      
      </RadioGroup>
    </FormControl>
    
    {/* onClick={onClick} />
     */}
            <br/>
             
                { showResults ? <Results /> : null }
                   
                 
                  
                  
           </div >
           <div id='linlbutt'>
            <Link to='/' style={{marginRight:"20px", fontSize:"17px"}}> Back </Link> 
           <ButtonUnstyled variant="contained" id='button' 
           ><Link id='link1'  to="/create/currency">Continue </Link></ButtonUnstyled>
         </div>
           </div>
           
          </div>

          

       </div>
   ) 
}

const Results = () => (
   <div id="results" className="search-results">
     <span><FormControlLabel control={<Checkbox  />} label="I attest that, where my content depicts images or video of real people, I have verified the identity of the participants in my content, that each is the age of majority, 
                   that I have sought, received, and stored their written consent to participate and to have their image uploaded to, viewed, and downloaded from, this platform, 
                   and I agree to comply with the. Terms of Use, Privacy Policy, and Community Guidelines"  sx={{ '& .MuiSvgIcon-root':{ fontSize: 28 } }}  /></span>
   </div>
 )