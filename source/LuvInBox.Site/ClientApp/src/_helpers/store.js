import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import reducers from '../_reducers';

export default function Store(history) {
    const middleware = [
        thunk,
        routerMiddleware(history)
    ];

    const newReducers = combineReducers({
        reducers,
        router: connectRouter(history)
    });

    const enhancers = [];
    const windowIfDefined = typeof window === 'undefined' ? null : window;
    if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
        enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
    }

    return createStore(
        newReducers,
        {},
        compose(applyMiddleware(...middleware), ...enhancers)
    );
}

