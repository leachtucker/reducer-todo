import React, { useReducer } from 'react';
import { initialState, reducer } from './reducers/reducer'

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './App.css';



function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList todos={state.todos} dispatch={dispatch}/>
      <TodoForm dispatch={dispatch}/>
    </div>
  );
}

export default App;
