import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { createBrowserHistory, History } from 'history';
//import { ConnectedRouter } from 'react-router-redux';
import { ConnectedRouter } from 'connected-react-router';

import { Routes } from 'Components/routes';
import CreateStore, { IApplicationState } from 'Stores';

let hotRoutes = Routes;

import 'jquery';
import 'materialize-css';

import './assets/css/site.css';

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')!;
const browserHistory = createBrowserHistory({ basename: baseUrl }) as History;

// Get the application-wide store instance, prepopulating with state from the server where available.
const initialState = (window as any).initialReduxState as IApplicationState;
const store = CreateStore(browserHistory, initialState);

const RenderApp = () =>
    render(
        <AppContainer>
            <Provider store={store}>
                <ConnectedRouter history={browserHistory} children={hotRoutes} />
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    );

RenderApp();

// Allow Hot Module Replacement
if (module.hot) {
    module.hot.accept('Components/routes', () => {
        hotRoutes = require<typeof Routes>('Components/routes');
        RenderApp();
    });
}