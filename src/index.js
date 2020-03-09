import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,combineReducers , applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import reducer from "./store/reducer";
import {Provider} from 'react-redux'
import resultsReducer from './store/reducers/results'
import counterReducer from './store/reducers/counter'


const RootReducers = combineReducers({
    counter:counterReducer,
    results:resultsReducer
})

const logger=(store)=>{ // Middleware
    return next => {
        return action => {
            console.log('[MiddleWare] dispatching',action)
            const result = next(action)
            console.log(('[MiddleWare] next state ',store.getState()))
            return result
        }
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const Store = createStore(RootReducers,composeEnhancers(applyMiddleware(logger,thunk)))
// const Store = createStore(reducer)

ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
