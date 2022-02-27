
       import * as React from 'react';

          import "./Creatorhome2.css" 
          import MessageIcon from '@mui/icons-material/Message';
          import BorderColorIcon from '@mui/icons-material/BorderColor';
          import SettingsIcon from '@mui/icons-material/Settings';
          import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
          import HomeIcon from '@mui/icons-material/Home';
          import PostAddIcon from '@mui/icons-material/PostAdd';
          import GroupsIcon from '@mui/icons-material/Groups';
          import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
          import CampaignIcon from '@mui/icons-material/Campaign';
          import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
          import TextFieldsIcon from '@mui/icons-material/TextFields';
        import {Example} from "../../texteditor/texteditor"
        import Button from '@mui/material/Button';
        import { styled } from '@mui/material/styles';
import createhome2 from "../../../../../assests/images/createhome2.png"
import AttachFileIcon from '@mui/icons-material/AttachFile';
import StyleIcon from '@mui/icons-material/Style';


import TextField from '@mui/material/TextField';
         const Input = styled('input')({
          display: 'none',
        });

        export const Creatorhome2=()=> {
          
         
            
              return (
                  <div id="leftsidebar123"> 
                      <div id="leftsidebar">
          
          
                      <div id="leftsidebar1">
          
                          <img  src="https://c10.patreonusercontent.com/4/patreon-media/p/user/65634918/d54ff5815eab49b4b863c09d6e0deae3/eyJ3IjoyMDB9/1.jpeg?token-time=2145916800&token-hash=KPJaMu4g03PnAso5nb4ddmddxi131i-qDo1wnU7y0jY%3D" alt="google img"/>
                          <p>Keshav Mishra <p>Create account</p></p>
                          
          
                          <div id="leftsidebaricon" >
          
                          <span id="leftsidebaricon1" ><MessageIcon sx={{ fontSize: 15 }}/></span>
                          <span id="leftsidebaricon2"><BorderColorIcon sx={{ fontSize: 15 }}/></span>
                          <span id="leftsidebaricon3"><SettingsIcon sx={{ fontSize: 15 }}/></span>
          
                          </div>
          
                      </div>
          
          
                      <div  id="leftsidebar2">
          
                      <div><HomeIcon id="icons"/>  Home</div>
          
                      <div><PostAddIcon id="icons"/>   Posts</div>
          
                      <div><GroupsIcon id="icons"/>   Patrons</div>
          
                      <div><LibraryBooksIcon id="icons"/>   Page</div>
          
                      <div><CampaignIcon id="icons"/>   Promote</div>
          
                      <div><MonetizationOnIcon id="icons"/>   Income</div>
          
                       <div> Create Resources <button id="iconbutt"> 8 </button></div>
          
                      </div>
          
                      </div>
  
  
                      <div id="mainpage">
  
                     
                    
                    <div id="mainpagecont">
  
  
                         <div id="mainpageco1">
                           <p>Write Your Post Here</p>     
                             <p> <TextFieldsIcon/>Text </p>               
                           <Example/>
                           <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" />
        
        <span><AttachFileIcon id="uploadicon" /> </span><span id="nametag">ATTACHMENTS</span>
        
        <a id="upload" >Upload </a>
        
      </label>

      <hr id="hrbig"/>
      <span><StyleIcon id="tagicon" /> </span><span id="nametag1">TAGS</span>

      {/* <div id="tagicon"><StyleIcon/></div> */}

     <br/>
     <div id="inputtt">
      <TextField id="outlined-basic" label="Tags" variant="outlined" />
      </div>
  
                         </div>
                         
  
                    <div id="mainpageco2">
  
                          <div id="mainpagecont2_1">
                             
                            <div  id="mainpagecont2_222">
                            <Button  id="mainpagecont2_222butt" variant="contained">Published now</Button>
                            </div>
                          </div>
  
                          <div id="mainpagecont2_1">
                              
                            
                           <img src={createhome2} alt=""/>
                            

                          </div>
                          
                           
  
                         </div>
  
                    </div>
  
                      </div>
  
  
                  </div>
                  
                  
              )
          
          
          }
          
              
  
           
              
  
      