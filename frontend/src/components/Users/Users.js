import './Users.css'
import down1 from "./down1.png"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link } from 'react-router-dom';
function Users()  {
    return (
        <div>
       <div id="background">
       <img id='propi' alt='a' src='https://miro.medium.com/freeze/max/1000/1*QpzxtD3ZLSVc1wDC5JGxqg.gif'></img>
           </div>     
       <div id="propic">
           <img id='propic12' alt='a' src='https://c10.patreonusercontent.com/4/patreon-media/p/user/65634918/d54ff5815eab49b4b863c09d6e0deae3/eyJ3IjoyMDB9/1.jpeg?token-time=2145916800&token-hash=KPJaMu4g03PnAso5nb4ddmddxi131i-qDo1wnU7y0jY%3D'></img>
       </div>
       <div id='myname'>
            <h4 id='SAS'>Keshav Mishra</h4>
            <p id='aoo'> is creating video </p>
       </div>
            <div id='fgwf'>
                <h2>0</h2>
                <span>PATRONS</span>
            </div>
            <div id='bin1'>
                <div id='bin1child'>
                    <button id='btnapple'> <Link to="/payment">Become a patron</Link></button>
                </div>
                <div id='secondc'>
                    <button id='second12'>Share</button>
                    <button id='second13'>Follow</button>
             
              <MoreHorizIcon id="mydot"/>
              
                </div>
            </div>
             <div id='showpro'>
                  <h1 id='apple'>About KeshavKumar Mishra</h1>
                  <div id='apps'>
                        <p id='aappoo'>Hi there! My name is Keshav Mishra and I am an aspiring web developer and  writers at freelancer! I moved to the US recently for grad school.
                             My projects revolve mostly around decolonizing and decentralizing ideas about narrative and experience. Parts of it are highly experimental, and in general I tend to drive my projects 
                             towards specific people, close to me, or towards my own curiosities and ideas. 
<p>My current work in progress is a three-channel installation for my best friend involving landscapes and 
cityscapes, and exploring the change in love-language that so often comes with displacement and distance. </p>
                </p>
                </div>
             </div>
             
             <div id='imgpic'>
                 <img alt='' id='dsaa' src={down1} ></img>
             </div>

        </div>
    )
}

export default Users 