import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,combineReducers} from "redux";
import reducer from "./store/reducer";
import {Provider} from 'react-redux'
import resultsReducer from './store/reducers/results'
import counterReducer from './store/reducers/counter'


const RootReducers = combineReducers({
    counter:counterReducer,
    results:resultsReducer
})
const Store = createStore(RootReducers)
// const Store = createStore(reducer)

ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
