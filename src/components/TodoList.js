import React from 'react';
import { connect } from 'react-redux';

const TodoItem = ({id, name, isComplete}) => {
  return (
    <li>
      <input type="checkbox" defaultChecked={isComplete} /> 
      {name}
    </li>
  )
}

const TodoList = (props) => {
  return (
    <div className="Todo-List">
      <ul>
        {props.todos.map(todo => <TodoItem key={todo.id} {...todo}/>)}
      </ul>
    </div>
  );
};

//export default TodoList;
export default connect(
  (state) => ({ todos: state.todos })
)(TodoList);