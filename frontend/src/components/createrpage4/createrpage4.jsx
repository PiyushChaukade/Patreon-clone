import * as React from 'react';
import styled from "styled-components";

import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import createrpage4 from "../../assests/images/createrpage4.png"
import twitch from "../../assests/images/twitch.png"
import {Link} from "react-router-dom"
import "./createrpage4.css"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { blue, red } from '@mui/material/colors';
export const Createrpage4= () => {

//    const [showResults, setShowResults] = React.useState(false)

//    const onClick = () => setShowResults(true)
//    const onClick1 = () => setShowResults(false)
const TableMain = styled.div`
&{
    margin: auto;
  
    width: 100%;
    
}
`;


const Table = styled.table`
& {
    width: 90%;
    border-collapse: collapse;
  }

  td {
  
    border-bottom:1px solid #e5e3dd;
  
    padding-bottom: 15px;
    padding-top: 15px;
  }

  tbody {
    text-align: left;
    cursor: pointer;
  }

  tbody > tr>td:nth-child(3):hover {
   text-decoration: underline;
   
  }
  tbody > tr>td:nth-child(3) {
 
   padding-left:20%;
  }


  tbody > tr {
   width: 100%;
    
  }
`;


   
   

   

   return (
       <div>
        <div className='createpage4'>
           <div  className='creatediv4_1'>
 <div id='inline'>
           <div className='creatediv4_2'>
           <p>STEP 5 OF 5</p>
           <h1>Want to reserve a custom URL for your Patreon page?</h1>
           <p>(example: patreon.com/issarae)</p>
           {/* <span id='span1'>You can pick up to two categories</span> */}
           <span id='span1'>Connect at least 1 social media account where we can verify your identity as a creator.
            You'll be able to set your custom URL before you launch.</span>
            <br/>
            <br/>
            <div id='tablediv'>

            <TableMain>
            <Table>
                  <tbody>
                     <tr>
                        <td>   <FacebookRoundedIcon sx={{ color: blue[500] }}/></td>
                        <td>Facebook</td>
                        <td>Connect</td>
                     </tr>

                     <tr>
                     <td> <InstagramIcon/></td>
                     <td>Instagram</td>
                     <td>Connect</td>
                     </tr>

                     <tr>
                        <td><img id='twitch' src={twitch} alt="twitch"/></td>
                        <td>Twitch</td>
                        <td>Connect</td>
                     </tr>

                     <tr>
                        <td><TwitterIcon sx={{ color: blue[500] }}/></td>
                        <td>Twitter</td>
                        <td>Connect</td>
                     </tr>

                     <tr>
                        <td> <YouTubeIcon sx={{ color: red[500] }}/></td>
                         <td>Youtube</td>
                        <td>Connect</td>
                     </tr>

                     
                     </tbody>
                     </Table>
                     </TableMain>

          
           
      
           </div>
           </div>
           <div className='create'>   <span className='createpageimgdiv4'>
          <img src={createrpage4}  alt="createpage2"></img></span></div>
          </div>
      
           <br/>
            
           <div id='linlbutt4'>
            <Link to='/create/merch' style={{marginRight:"20px", fontSize:"17px"}}> Back </Link> 
           <ButtonUnstyled variant="contained" id='buttoncr' 
           ><Link id='link1'  to="/create/navbar/edit/basic">Continue </Link></ButtonUnstyled>
           </div>
          

           </div>
        
          </div>

          

       </div>
   ) 
}

