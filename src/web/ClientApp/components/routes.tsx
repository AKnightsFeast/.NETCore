import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import * as Menus from 'Menus';
import Layout from 'Layouts/Main';
import Home from 'Components/home';
import About from 'Components/about';
import Friends from 'Components/friends';
import Calendar from 'Components/calendar';
import Policies from 'Components/policies';
import Testimonials from 'Components/testimonials';
import GiftCertificates from 'Components/giftcertificates';

export default () =>
    <Route path="/" component={Layout}>
        <Route exact path='/' component={Home} />
        <Route exact path='/About' component={About} />
        <Route exact path='/Friends' component={Friends} />
        <Route exact path='/Policies' component={Policies} />
        <Route exact path="/Menus/Calendar" component={Calendar} />
        <Route exact path='/Menus/Themed' component={Menus.ThemedMenu} />
        <Route exact path='/Menus/Freezer' component={Menus.FreezerMenu} />
        <Route exact path='/Menus/Personal' component={Menus.PersonalMenu} />
        <Route exact path='/Testimonials' component={Testimonials} />
        <Route exact path='/GiftCertificates' component={GiftCertificates} />
    </Route>