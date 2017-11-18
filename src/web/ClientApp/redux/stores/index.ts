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

import epic from "Epics";
import reducer from 'Reducers';

import initialCalendarStore, { ICalendar } from './Calendar';

export interface IApplicationState
{
    //assessment: object,
    monthlymenu: ICalendar
}

function buildRootReducer(allReducers: ReducersMapObject) {
    return combineReducers<IApplicationState>(Object.assign({}, reducer, { routing: routerReducer }));
}

export default (history: any, initialState?: IApplicationState) => {
    if (initialState == null)
        initialState = {
            //assessment: {},
            monthlymenu: initialCalendarStore
        } as IApplicationState;

    // Build middleware. These are functions that can process the actions before they reach the store.
    const windowIfDefined = typeof window === 'undefined' ? null : window as any;

    // If devTools is installed, connect to it
    const devToolsExtension = windowIfDefined && windowIfDefined.devToolsExtension as () => GenericStoreEnhancer;

    const createStoreWithMiddleware: any = compose(
        applyMiddleware(
            createEpicMiddleware(epic),
            routerMiddleware(history)
        ),
        devToolsExtension ? devToolsExtension() : <S>(next: StoreEnhancerStoreCreator<S>) => next
    )(createStore);

    const enhancedStore = createStoreWithMiddleware(reducer, initialState) as Store<IApplicationState>;

/*
    // Enable Webpack hot module replacement for reducers
    if (module.hot) {
        module.hot.accept('Reducers', () => {
            const nextRootReducer = require<ReducersMapObject>('Reducers');
            enhancedStore.replaceReducer(buildRootReducer(nextRootReducer));
        });
    }
*/

    return enhancedStore;
}