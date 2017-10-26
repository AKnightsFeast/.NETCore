import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory, History } from 'history';
import { AppContainer } from 'react-hot-loader';
import { ConnectedRouter } from 'react-router-redux';

import CreateStore from 'Stores/index.ts';
import * as RoutesModule from './routes';
import { IApplicationState }  from 'Stores/index.ts';

import './css/site.css';

let routes = RoutesModule.routes;

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
                <ConnectedRouter history={browserHistory} children={routes} />
            </Provider>
        </AppContainer>,
        document.getElementById('react-app')
    );

RenderApp();

// Allow Hot Module Replacement
if (module.hot) {
    module.hot.accept('./routes', () => {
        routes = require<typeof RoutesModule>('./routes').routes;
        RenderApp();
    });
}
