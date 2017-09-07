import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React with Redux</h2>
        </div>
        <div className="Todo-App">
          <TodoForm />
          <TodoList />
        </div>
      </div>
    );
  }
}


// const mapStateToProps = (state) => {
//   return state;
// }

// const mapDispatchToProps = { updateCurrent };

export default App;

//right now we are using connect to wire up our redux store with our top level component, anytime change in store, render calls app, you don't want to connect the root component, because that would make unnecessary renders to states that haven't changed, ie todoList