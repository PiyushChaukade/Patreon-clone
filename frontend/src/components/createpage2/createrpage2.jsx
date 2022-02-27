import * as React from 'react';

import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import {Link} from "react-router-dom"
import "./createrpage2.css"
import { useState } from "react"
export const Createrpage2 = () => {


    const [showResults, setShowResults] =useState("Australian Dollars")

   const onClick = () => setShowResults("Australian Dollars")
   const onClick1 = () => setShowResults("Canadian Dollars")
   const onClick2 = () => setShowResults("Czech Koruna")
   const onClick3 = () => setShowResults("Danish Krone")
   const onClick4 = () => setShowResults("Euro")
   const onClick5 = () => setShowResults("British Pounds")
   const onClick6 = () => setShowResults("Hong Kong Dollars")
   const onClick7 = () => setShowResults("Hungarian Forint")
   const onClick8 = () => setShowResults("Norwegian Kroner")
   const onClick9 = () => setShowResults("New Zealand Dollars")
   const onClick10 = () => setShowResults("Polish Zloty")
   const onClick11 = () => setShowResults("Swedish Krona")
   const onClick12 = () => setShowResults("Singapore Dollars")
   const onClick13 = () => setShowResults("US Dollars")
  

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
      

   return (
       <div>
        <div id='creatpage2'>
           <div  className='creatediv2'>
  
           <div className='creatediv3'>
            <p>STEP 3 OF 5</p>
           <h1>Pick your currency</h1>
           <div> The currency you choose here is what you will price your membership and be paid in.
                Your patrons can pay in any of these currencies. We’ll automatically 
                convert your tier prices to show potential patrons their native currency on your page,
                if it is one of these currencies. If not, we will show prices in your default currency.</div>
             <br/>
           <span id='span1'>You will price your membership and be paid in   { showResults }</span>
           </div>
           <br/>
             
                
              <FormControl>
      
    <RadioGroup
        defaultValue="Australian Dollars"
        aria-labelledby="demo-customized-radios"
        name="customized-radios"
      >
           <div id='checkboxdiv3'>
        <FormControlLabel  onClick={onClick} value="Australian Dollars"  control={<BpRadio />} label="Australian Dollars" />
        <FormControlLabel onClick={onClick1} value="Canadian Dollars" control={<BpRadio />} label="Canadian Dollars" />
        <FormControlLabel onClick={onClick2} value="Czech Koruna" control={<BpRadio />} label="Czech Koruna" />
       
        <FormControlLabel onClick={onClick3} value="Danish Krone" control={<BpRadio />} label="Danish Krone" />
        <FormControlLabel onClick={onClick4} value="Euro" control={<BpRadio />} label="Euro" />
        
        <FormControlLabel onClick={onClick5} value="British Pounds" control={<BpRadio />} label="British Pounds" />
        <FormControlLabel onClick={onClick6} value="Hong Kong Dollars" control={<BpRadio />} label="Hong Kong Dollars" />

        <FormControlLabel  onClick={onClick7}value="Hungarian Forint" control={<BpRadio />} label="Hungarian Forint" />
        <FormControlLabel onClick={onClick8} value="Norwegian Kroner" control={<BpRadio />} label="Norwegian Kroner" />
        
        <FormControlLabel onClick={onClick9} value="New Zealand Dollars" control={<BpRadio />} label="New Zealand Dollars" />
        <FormControlLabel  onClick={onClick10}value="Polish Zloty" control={<BpRadio />} label="Polish Zloty" />

        <FormControlLabel  onClick={onClick11} value="Swedish Krona" control={<BpRadio />} label="Swedish Krona" />
        <FormControlLabel  onClick={onClick12} value="Singapore Dollars" control={<BpRadio />} label="Singapore Dollars" />
        <FormControlLabel  onClick={onClick13} value="US Dollars" control={<BpRadio />} label="US Dollars" />
        </div>
      </RadioGroup>
    </FormControl>
                
           

          
            <div id='linlbutt'>
            <Link to='/create/adult' style={{marginRight:"20px", fontSize:"17px"}}> Back </Link> 
           <ButtonUnstyled variant="contained" id='buttoncr' 
           ><Link id='link1'  to="/create/merch">Continue </Link></ButtonUnstyled>
         </div>
           </div>
        
          </div>


       </div>
   ) 
}


const Results = () => (
    <div id="results" className="search-results">
      here
    </div>
  )