import * as React from 'react';
import { Route } from 'react-router-dom';

import Layout from 'Layouts/Main';
import Home from 'Components/home';
import Themed from 'Components/themed';
import Freezer from 'Components/freezer';
import Calendar from 'Components/calendar';
import Personal from 'Components/personal';
import GiftCertificates from 'Components/giftcertificates';

export default () =>
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/Themed' component={Themed} />
        <Route path='/Freezer' component={Freezer} />
        <Route path='/Calendar' component={Calendar} />
        <Route path='/Personal' component={Personal} />
        <Route path='/GiftCertificates' component={GiftCertificates} />
        <Route path='/fetchdata/:startDateIndex?' component={FetchData} />
    </Layout>;