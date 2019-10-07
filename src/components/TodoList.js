import React from "react";

class TodoList extends React.Component {
  handleRemove = todo => {
    this.props.triggerRemoveTodo(todo);
  };

  handleMarkCompleted = todo => {
    this.props.triggerMarkCompleted(todo);
  };

  render() {
    const { todos } = this.props;
    return (
      <div>
        <ul>
          {todos.map(todo => (
            <li key={todo.createdAt}>
              {todo.isCompleted ? <del>{todo.text}</del> : todo.text}
              <button
                onClick={() => {
                  this.handleRemove(todo);
                }}
              >
                Remove
              </button>
              <button
                onClick={() => {
                  this.handleMarkCompleted(todo);
                }}
              >
                Mark completed
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
