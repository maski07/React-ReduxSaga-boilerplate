import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { IState } from '../Types/State'
import RootReducer from './RootReducer'

export default function configureStore(initialState: IState) {
    // Note: passing middleware as the last argument to createStore requires redux@>=3.1.0
    const sagaMiddleware = createSagaMiddleware();
    return {
        ...createStore(
            RootReducer,
            initialState,
            applyMiddleware(/* other middleware, */sagaMiddleware)
        ),
        runSaga: sagaMiddleware.run
    };
};