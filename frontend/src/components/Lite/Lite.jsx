import "./Lite.css"
import { Link } from 'react-router-dom';


export const LitePage =() => {
    return (
        <div>
            <div className="container_1">
                <div className="box_1">

                    <img className="inside_box1_1" src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/product-lite-01-header_2x.png" alt="" />

                    <div className="inside_box1_2">
                        <h3>PATREON LITE</h3>
                        <h1 className="h1">Just the basics</h1>
                        <p className="p">Simple tools to set up recurring support from your fans and run a membership business.</p>
                        <button className="button1"><Link to="/first"> Get Started</Link></button>
                    </div>


                </div>

            </div>
            <div className="container_2">
                <div className="box_2">

                    <img className="inside_box2_1_" src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/product-lite-02-features_2x.png"></img>

                    <div className="inside_box2_2_">
                        <div> <h1 id="black">Membership essentials</h1></div>
                        <div className="box3_1" >
                            <h2 className="box_3_2_">Hosted creator page</h2>
                            <p className="black">Your creator page on patreon.com is where you invite fans to become patrons and post updates and content just for them.</p>

                        </div>

                        <div className="box3_1">
                            <h2 className="box_3_2_">Patron communication tools</h2>
                            <p className="black">You own the relationship with patrons. Communicate directly via email, posts on your page, or with direct messaging.</p>

                        </div>
                        <div className="box3_1">
                            <h2 className="box_3_2_">Patreon workshops</h2>
                            <p className="black">Learn from our Creator Success team about how to set up your page, what to offer, how to talk about Patreon, and more.</p>

                        </div>

                    </div>

                </div>
            </div>




            <div id="container_3_">
                <div className="box4_">
                    <div className="box4_1_">
                        <img className="box4_1_1_" src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/lite-avatar-bay-12_2x-1.png" ></img>
                        <p className="box4_1_2_">TARN & ZACH , BAY 12 GAMES </p>
                        <p className="box4_1_3_"> Video Game Creator</p>

                    </div>
                    <div className="box4_2_">
                        Our patrons support us because they want us to keep releasing our video game. They’re not massively motivated by a huge list of benefits so we don’t need multiple tiers. We just offer a single level of support and patrons can choose the amount. This works great for us.

                    </div>

                </div>
            </div>




            <div id="container_4_">
                <div id="box5_">
                    <div id="box5_1_">
                        <div id="box5_1_1_">All plans include:</div>
                        <button id="button_">Compare All Plans</button>
                        {/* <div className="box5_2_2_1"></div> */}
                    </div>
                    <div id="box5_2_">
                        <div className="box5_2_1_">
                            <div className="logo_"></div>
                            <div className="headline_">Direct relationships</div>
                            <div className="box5_2_2_1_">
                                Develop relationships with your patrons  through patron-only posts, messages, or directly via email.
                            </div>
                        </div>
                        <div className="box5_2_1_">
                            <div className="logo_"></div>
                            <div className="headline_">Business tools</div>
                            <div className="box5_2_2_1_">
                                Track patron payments, lifetime value, &nbsp; and  notes to help manage relationships with them directly.
                            </div>
                        </div>
                        <div className="box5_2_1_">
                            <div className="logo_"></div>
                            <div className="headline_">Flexible payments</div>
                            <div className="box5_2_2_1_">
                                Pay yourself whenever you want, or receive monthly auto payouts from your creator balance via direct deposit, PayPal, or Payoneer.
                            </div>
                        </div>

                        <div className="box5_2_2_">
                            <div className="logo_"></div>
                            <div className="headline_">Patron support</div>
                            <div className="box5_2_2_1_">
                                Rest easy knowing we handle your &nbsp; patrons’ questions, payments and &nbsp; concerns to ensure they’re taken care of.
                            </div>
                        </div>
                        <div className="box5_2_2_">
                            <div className="logo_"></div>
                            <div className="headline_">Creator-first education</div>
                            <div className="box5_2_2_1_">
                                Learn how to effectively run your creative business with our workshops, world-class knowledge base and creator resources.
                            </div>
                        </div>
                        <div className="box5_2_2_">
                            <div className="logo_"></div>
                            <div className="headline_">Mobile app</div>
                            <div className="box5_2_2_1_">
                                Message your patrons and monitor your membership business with our native iOS and Android apps.
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div id="container_5">
                <div id="box6">
                    <div id="box6_1">
                        Join 200,000+ creators using Patreon today
                    </div>
                    <button id="btn"> Get Started With Lite </button>


                </div>

            </div>

        </div>

    )


}