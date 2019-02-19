import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";
import TodoListReducer from "./redux/TodoListReducer";

let store = createStore(TodoListReducer);

store.subscribe(()=>{
    let state = store.getState();
    renderAll(state);
});

let renderAll = () => {
    ReactDOM.render(<App state={store.getState()}
                          store={store}/>,
        document.getElementById('root'));
};

renderAll();



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
