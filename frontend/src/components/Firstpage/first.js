

import "./firstStyle.css"

import { Link } from 'react-router-dom';

function First ()  {
    return(
<div className="firstd">
         <div id="firsttd1">
                <img alt="a" id="myfitpic" src="https://c10.patreonusercontent.com/4/patreon-media/p/user/65634918/d54ff5815eab49b4b863c09d6e0deae3/eyJ3IjoyMDB9/1.jpeg?token-time=2145916800&token-hash=KPJaMu4g03PnAso5nb4ddmddxi131i-qDo1wnU7y0jY%3D"></img>
                <h3 id="myh2pic">Keshav Mishra</h3>
                <hr/>
                 <h3 id="myh2pic1" >SUPPORTING</h3>
                 <hr/>
                 <p>You aren’t supporting any creators yet.</p>
         </div>
         <div id="firsttd2">
             <div>
               
             </div>
             <hr/>
             <div className="findcrea">
             <div id="allspn">
                 <span>
                 <span className="stylebold" >Support</span>
                 <span> or </span>
                 <span className="stylebold">follow</span>
               
                 <span> creators to see posts in your feed.</span>
                 </span>
                 </div> 

                 <div id="btndiv">
            <button id="btnsecdiv">Find Creaters You Love</button>
                 </div>
                 <div>
                     <img id="mysecpicd" alt="" src="https://c5.patreon.com/external/home/empty-stream-illustration.png"></img>
                 </div>
             </div>
         </div>
         <div id="firsttd3">
             <div id="d3b1">
               <h4 className="myh4i" >BECOME A CREATOR</h4>
               <hr/>
               <p className="thirdchildp">You're almost there! Complete your page and take it live.</p>
           
            <button className="thirdchildbtn1">Become a creator</button>
            
             </div>
             <div id="d3b2">
                 <h4 className="myh4i">FIND CREATORS YOU LOVE</h4>
                 <hr/>
                 <p className="thirdchildp">The creators you already love may be on Patreon – connect your social media to find them.</p>

            <button className="thirdchildbtn"><Link to="/createpage">Find Creators</Link></button>
             </div>
         </div>
</div>
    )
}

export default First