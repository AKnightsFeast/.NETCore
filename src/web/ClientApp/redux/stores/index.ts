import { History } from 'history';
import { createEpicMiddleware } from 'redux-observable';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import {
    Store,
    compose,
    createStore,
    applyMiddleware,
    combineReducers,
    ReducersMapObject,
    GenericStoreEnhancer,
    StoreEnhancerStoreCreator
} from 'redux';

//import * as StoreModule from './store';
//import { ApplicationState, reducers } from './store';
import epic from "Epics/index.ts";
import reducer from 'Reducers/index.ts';

import CalendarStore, { ICalendar } from './Calendar';

export interface IApplicationState
{
    assessment: object,
    monthlymenu: ICalendar
}

function buildRootReducer(allReducers: ReducersMapObject) {
    return combineReducers<IApplicationState>(Object.assign({}, reducer, { routing: routerReducer }));
}

export default (history: History, initialState?: IApplicationState) => {
    // Build middleware. These are functions that can process the actions before they reach the store.
    const windowIfDefined = typeof window === 'undefined' ? null : window as any;

    // If devTools is installed, connect to it
    const devToolsExtension = windowIfDefined && windowIfDefined.devToolsExtension as () => GenericStoreEnhancer;

    const createStoreWithMiddleware = (reducer: any, state?: IApplicationState) => compose(
        applyMiddleware(
            createEpicMiddleware(epic),
            routerMiddleware(history)
        ),
        devToolsExtension ? devToolsExtension() : <S>(next: StoreEnhancerStoreCreator<S>) => next
    )(createStore);

    const enhancedStore = createStoreWithMiddleware(reducer, initialState) as Store<IApplicationState>;

    // Enable Webpack hot module replacement for reducers
    if (module.hot) {
        module.hot.accept('./store', () => {
            const nextRootReducer = require<typeof StoreModule>('./store');
            enhancedStore.replaceReducer(buildRootReducer(nextRootReducer.reducers));
        });
    }

    return enhancedStore;
}