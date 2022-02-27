import React from "react";
import "./payments.css"
import myproimg from "./myproimg.png"
import LockOpenIcon from '@mui/icons-material/LockOpen';
export function Payment(){
    return (
        <div>
    <div id="container">
        <div id="a1">
            <h3>Complete your monthly payment to Keshav Mishra</h3>
        </div>
        <div id="sasmas">
            <div id="washing">
            <div id="firstdiv">
                <div id="tryit">
                  <p className="alpha11">Choose what you pay</p>
                </div>
                <div id="tryit23">
                    <div id="hellodud">
                         <div id="aaaaaa">
                              <div id="qsa"><p>$</p></div>
                             <div id="qsaa"><input id="intr"></input></div> 
                         </div>
                    </div>
             </div>              
            </div>
            <div id="mainhome1">
            <div id="tryit11">
                  <p className="alpha11">Payment details</p>
           </div>
           <div id="tryit2311">
                  <div id="card">
                      <span id="mra">
                          <img alt="" src=""></img>
                      </span>
                      <h3 id="card">Card</h3>
                  </div>
                  <div>
                      <p className="namesfd">Name</p>
                      <input className="iiaappe" placeholder="Name on card"></input>
                  </div>
                  <div>
                  <p className="namesfd"> Card Number </p>
                      <input className="iiaappe1" placeholder="Credit Card Number"></input>
                  </div>
                  <div id="apple123">
                      <div>
                         <p className="hello12">Expiration</p>
                         <input className="classisa" placeholder="09/24"/>
                      </div>
                      <div>
                      <p className="hello12">CVV</p>
                         <input className="classisa" placeholder="123"/>
                      </div>
                      <div>
                      <p className="hello12" >Postal Code</p>
                         <input className="classisa" placeholder="12345"/>
                      </div>
                  </div>
                  <div>
                  <button id="vfieri">Pay With Card</button>
                  </div>
                  <div id="alaoa"></div>
                  <div>
                      <button id="btn12"></button>
                      <img alt="a" id="mypaypal" src="https://c5.patreon.com/external/patron_checkout/paypal-logo-wordmark.png"/></div>
                </div>   
               
            </div>
            <div id="aooa">
            <LockOpenIcon id="lockico"/>
            <p id="seqr">Secure checkout</p>
            </div>
           
            </div>
            <div  id="aoooing">
                  <img id="apple12" alt="aa" src={myproimg}></img>
            </div>

        </div>
        <p id="applexx">Patreon does not issue refunds on behalf of creators. Learn more.</p>
       </div>
        </div>
    )
}