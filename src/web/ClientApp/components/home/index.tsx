import * as React from 'react';
import { Link } from 'react-router-dom';

import 'Assets/css/home.css';
import 'Assets/css/timeline.css';

export default () =>
    <div>
        <div className="cover">
            <div className="container">
                <div className="content section no-pad-bot">
                    <div className="coverblock covercontent">
                        <div className="row center">
                            <img src="Images/logo.png" />
                        </div>
                        <div className="row center">
                            <a href="http://materializecss.com/getting-started.html" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">Let's Get Started!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="divider"></div>

        { /* Question and Answer Section */}
        <div className="container">
            <div className="section question valign-wrapper">
                <div className="row">
                    <ul id="question">
                        <li>
                            <div>
                                <div className="col s12 m2">
                                    <h2 className="top-zero light-green-text text-darken-3">Q?</h2>
                                </div>
                                <div className="col s12 m10 flow-text">
                                    Have you and your family become too reliant on carryout meals, mass-produced restaurant food, or boxed dinners
                                    with minimal nutritional value? Do you want to eat healthier but lack the time to plan, shop for and cook meals
                                    that are good for you?
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="section">
                <div className="row">
                    <div className="divider"></div>
                </div>
            </div>
            <div className="section answer valign-wrapper">
                <div className="row">
                    <ul id="answer">
                        <li>
                            <div className="col s12 m2">
                                <h2 className="top-zero pink-text">A!</h2>
                            </div>
                            <div className="col s12 m10 flow-text">
                                <b className="pink-text">A Knight's Feast Personal Chef Service</b> prepares your choice of meals - made fresh in your own kitchen - and packages
                                them with easy-to-follow heating instructions. We create meals that meet your specific dietary and nutritional needs
                                and appeal to your personal tastes.  <b className="pink-text"><u>What can I do for you?</u></b>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="parallax-container valign-wrapper">
            <div className="section no-pad-bot">
                <div className="container coverblock teal-text quote">
                    <div className="row">
                        <h5 className="header col s12 light">
                            <i>
                                "A personal chef service is for anyone looking for a few nights off from worrying
                                about what's for dinner."
                            </i>
                        </h5>
                    </div>
                    <div className="row">
                        <h5 className="header col s12 light right-align">Chef Laura</h5>
                    </div>
                </div>
            </div>
            <div className="parallax"><img src="/Images/bgcands.jpg" /></div>
        </div>

        { /* How it Works */ }
        <section className="light-green lighten-4">
            <div className="container white-text">
                <div className="section">
                    <div className="row">
                        <div className="col s12 center-align">
                            <h3 className="light-green-text text-darken-3">How It Works</h3>
                        </div>
                    </div>
                </div>
            </div>

            <section id="cd-timeline" className="cd-container green-text text-darken-4">
                <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-picture">
                        <i className="material-icons">people</i>
                    </div>
                    <div className="cd-timeline-content">
                        <h2>1. Chat</h2>
                        <p>First I meet with you to discuss your dining wants and needs.</p>
                        <ul>
                            <li>What are your favorite foods, flavors, and textures?</li>
                            <li>Do you have a family favorite that you just don’t have time to prepare?</li>
                            <li>Do you want to follow a diet plan?</li>
                            <li>Do you have any allergies or foods you don’t like?</li>
                            <li>What international foods do you enjoy?</li>
                        </ul>
                        <p className="justify highlight normal">
                            You can also complete a <Link to="/Assessment" className="waves-effect white-text"><i className="fa fa-edit"></i> Client Assessment Form</Link> online so I can come up with a menu for you quicker!
                        </p>
                    </div>
                </div> { /* chat */ }

                <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-location">
                        <i className="material-icons">create</i>
                    </div>
                    <div className="cd-timeline-content">
                        <h2>2. Design</h2>
                        <p className="justify normal">Your menu is designed and sent to you for approval.</p>
                        <p className="justify normal">
                            A list of suggestions will be sent you.  It must be approved within 48 hours of your cook date.  Feel free to make suggestions of what you’re craving!
                        </p>
                    </div>
                </div> { /* design */ }

                <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-picture">
                        <i className="material-icons">shopping_cart</i>
                    </div>
                    <div className="cd-timeline-content">
                        <h2>3. Shop</h2>
                        <p className="justify normal">Your food is purchased fresh the day of your cook date.</p>
                        <p className="justify normal">
                            Chef Laura will shop at the best local grocery stores and local farmers’ markets to ensure your meals are produced from the absolute freshest ingredients.
                        </p>
                    </div>
                </div> { /* shop */ }

                <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-location">
                        <i className="material-icons">whatshot</i>
                    </div>
                    <div className="cd-timeline-content">
                        <h2>4. Cook</h2>
                        <p className="justify normal">Your food will be prepared fresh by Chef Laura for delivery to your home.</p>
                    </div>
                </div> { /* cook */ }

                <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-picture">
                        <i className="material-icons">kitchen</i>
                    </div>
                    <div className="cd-timeline-content">
                        <h2>5. Pack</h2>
                        <p className="justify normal">
                            All meals will be packaged with instructions on how to serve. Your kitchen will be clean of all evidence of your chef being there — all except for the pleasant smell of fresh food.
                        </p>
                        <p className="justify normal">
                            I want this to be a food delivery service for the whole family where meals can be individually packed, family style, or a mix of the two.
                        </p>
                    </div>
                </div> { /* pack */ }
            </section>

            <div className="container white-text">
                <div className="section">
                    <div className="row flow-text">
                        <div className="s12 center"><h2 className="light-green-text text-darken-3">It's that easy!!!</h2></div>
                    </div>
                </div>
            </div>
        </section>

        <div className="parallax-container valign-wrapper">
            <div className="section no-pad-bot">
                <div className="container coverblock deep-orange-text text-darken-2 quote">
                    <div className="row">
                        <h5 className="header col s12 light">
                            <i>
                                "One cannot think well, love well, sleep well, if one has not dined well."
                            </i>
                        </h5>
                    </div>
                    <div className="row">
                        <h5 className="header col s12 light right-align">
                            Virginia Woolf
                        </h5>
                    </div>
                </div>
            </div>
            <div className="parallax"><img src="/Images/bgfishstew.jpg" /></div>
        </div>

        <div className="divider"></div>
            { /* Prices */ }
            <div id="prices" className="container">
                <div className="section">
                    <div className="row">
                        <div className="col s12 center">
                            <h3 className="light-green-text text-darken-3">Prices</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 flow-text">
                            <p>
                                <b>A Knight's Feast Personal Chef Service is now a delivery service!</b> I've secured a kitchen for Mondays and will be making deliveries will be on Tuesdays starting immediately.
                            </p>

                            <p>
                                The route will start in South Alexandria and go through Northern VA to Potomac, Bethesda and Chevy Chase, down through DC to Capital Hill and back to Old Town via 295 and 495.
                            </p>

                            <p>
                                I can deliver to your home, small office, yoga or other type of fitness studio if you have refrigeration.
                            </p>

                            <p>
                                The main menu will be high end Paleo meals with some family favorites that may include dairy and carbs.  There will be 10 choices each week, but feel free to make requests.
                            </p>

                            <p>
                                <b>Individually Packaged:</b>
                            </p>
                            <ul>
                                <li>$200 minimum order for up to 10 meals</li>
                                <li>10 meals could be lunch and dinner for one or five dinners for two</li>
                                <li>Extra meals are $20 each</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>