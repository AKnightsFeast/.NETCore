import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { createBrowserHistory, History } from 'history';
import { ConnectedRouter } from 'react-router-redux';
import { Router } from 'react-router-dom';
//import { ConnectedRouter } from 'connected-react-router';

import Site from 'Components/site';
import CreateStore, { IApplicationState } from 'Stores';

//let hotRoutes = Routes;

import * as $ from 'jquery';
import 'materialize-css';

import './assets/css/site.css';
import 'materialize-css/dist/css/materialize.css';

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')!;
const browserHistory = createBrowserHistory({ basename: baseUrl }) as History;

// Get the application-wide store instance, prepopulating with state from the server where available.
const initialState = (window as any).initialReduxState as IApplicationState;
const store = CreateStore(browserHistory, initialState);

const RenderApp = (site: any) =>
    render(
        <AppContainer>
            <Provider store={store}>
                <Router history={browserHistory}>
                    {site}
                </Router>
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    );

RenderApp(<Site />);

$(function () {
    let $window = $(window);

    $("a#scrolltop").click(function () {
        $window.scrollTop(0);
    });

    $('.sidenav-activator').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
    });
});

// Allow Hot Module Replacement
if (module.hot) {
    module.hot.accept('Components/site', () => {
        //hotRoutes = require<typeof Routes>('Components/routes');
        const NextSite = require('Components/site').default;
        RenderApp(<NextSite />);
    });
}