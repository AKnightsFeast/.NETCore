import * as React from 'react';
//import { compose, lifecycle } from 'recompose';
import { Link, Route, Switch } from 'react-router-dom';

import * as Menus from 'Menus';
import Home from 'Components/home';
import About from 'Components/about';
import Friends from 'Components/friends';
import Calendar from 'Components/calendar';
import Policies from 'Components/policies';
import Testimonials from 'Components/testimonials';
import GiftCertificates from 'Components/giftcertificates';

export default () =>
    <div>
        <Switch>
            <Route exact path='/About' component={About} />
            <Route exact path='/Friends' component={Friends} />
            <Route exact path='/Policies' component={Policies} />
            <Route exact path="/Menus/Calendar" component={Calendar} />
            <Route exact path='/Menus/Themed' component={Menus.ThemedMenu} />
            <Route exact path='/Menus/Freezer' component={Menus.FreezerMenu} />
            <Route exact path='/Menus/Personal' component={Menus.PersonalMenu} />
            <Route exact path='/Testimonials' component={Testimonials} />
            <Route exact path='/GiftCertificates' component={GiftCertificates} />
            <Route exact path='/' component={Home} />
        </Switch>

        <div className="fixed-action-btn" style={[{ "bottom": "45px" }, {"right": "24px;"}]}>
            <a id="scrolltop" className="btn-floating pink" title="Scroll to top">
			    <i className="material-icons">keyboard_arrow_up</i>
		    </a>
	    </div>

	    <footer id="footernav" className="page-footer light-green">
		    <div className="container">
			    <div className="row">
				    <div className="col l6 s12">
					    <h5 className="white-text">A Knight's Feast Personal Chef Service</h5>
					    <p className="grey-text text-lighten-4">
						    We are a team of college students working on this project like it's our full time job. 
						    Any amount would help support and continue development on this project and is greatly appreciated.
					    </p>
				    </div>
				    <div className="col l3 s12 white-text">
					    <h5>Links</h5>
					    <ul className="footer-ul">
						    <li>Menus</li>
						    <li>
                                <ul style={[{ "margin-left": "15px;" }]}>
                                    <li title="Monthly Menus">
                                        <Link to="/Calendar" className="waves-effect white-text">Monthly</Link>
                                    </li>
                                    <li title="Personal Menus">
                                        <Link to="/Personal" className="waves-effect white-text">Personal</Link>
                                    </li>
                                    <li title="Menus for Themed Events">
                                        <Link to="/Themed" className="waves-effect white-text">Themed Events</Link>
                                    </li>
                                    <li title="Pack Your Freezer">
                                        <Link to="/Freezer" className="waves-effect white-text">Pack Your Freezer</Link>
                                    </li>
							    </ul>
						    </li>
                            <li title="Chef Laura's Policies">
                                <Link to="/Policies" className="waves-effect white-text">Policies</Link>
                            </li>
                            <li title="Hear what people are saying!">
                                <Link to="/Testimonials" className="waves-effect white-text">Testimonials</Link>
                            </li>
                            <li title="About Chef Laura">
                                <Link to="/About" className="waves-effect white-text">About Chef Laura</Link>
                            </li>
                            <li title="Friends of Chef Laura">
                                <Link to="/Friends" className="waves-effect white-text">Friends</Link>
                            </li>
                            <li><div className="divider"></div></li>
                            <li title="Weekly Service Client Assessment Form">
                                <Link to="/Assessment" className="waves-effect white-text">Assessment</Link>
                            </li>
					    </ul>
				    </div>
				    <div className="col l3 s12 white-text">
					    <h5>Connect</h5>
					    <ul className="footer-ul">
						    <li>
							    <a className="waves-effect white-text" href="https://twitter.com/chefknight" target="_blank">
                                    <svg style={[{ "width": "24px" }, {"height": "24px"}]} viewBox="0 0 24 24">
									    <path fill="#ffffff" d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18 7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33Z" />
								    </svg>
							    </a>
							    <a className="waves-effect white-text" href="https://facebook.com/aknightsfeast" target="_blank">
                                    <svg style={[{ "width": "24px" }, {"height": "24px" }]} viewBox="0 0 24 24">
									    <path fill="#ffffff" d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z" />
								    </svg>
							    </a>
						    </li>
						    <li><a className="waves-effect white-text" href="http://www.lacademie.com/" id="lacadamie" target="_blank">L'Academie de Cuisine</a></li>
						    <li><a className="waves-effect white-text" href="http://www.personalchef.com/" id="appca" target="_blank">Personal Chef Association</a></li>
						    <li><a className="waves-effect white-text" href="https://www.servsafe.com/" id="servsafe" target="_blank">ServSafe</a></li>
					    </ul>
				    </div>
			    </div>
		    </div>
		    <div className="footer-copyright">
			    <div className="container">
				    Made by <a className="brown-text text-lighten-3" href="http://materializecss.com">Materialize</a>
			    </div>
		    </div>
	    </footer>
    </div>