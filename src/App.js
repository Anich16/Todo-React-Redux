import React, { Component } from 'react';
import './App.css';
import TodoList from "./components/TodoList/TodoList";

let App = (props) => {
  let state = props.state;
    return (
      <div className="App">
        <TodoList state={state} store={props.store}/>
      </div>
    );

};

export default App;
