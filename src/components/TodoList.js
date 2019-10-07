import React from "react";
import moment from "moment";

class TodoList extends React.Component {
  state = {
    filterValue: "all"
  };

  handleRemove = todo => {
    this.props.triggerRemoveTodo(todo);
  };

  handleMarkCompleted = todo => {
    this.props.triggerMarkCompleted(todo);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    let { todos } = this.props;
    const { filterValue } = this.state;

    if (filterValue === "not-completed") {
      todos = todos.filter(todo => {
        return todo.isCompleted === false;
      });
    }
    if (filterValue === "completed") {
      todos = todos.filter(todo => {
        return todo.isCompleted === true;
      });
    }
    return (
      <div>
        <label htmlFor="filterValue">Filter:</label>
        <select name="filterValue" onChange={this.handleChange}>
          <option value="all">All</option>
          <option value="not-completed">Not completed</option>
          <option value="completed">Completed</option>
        </select>
        <ul>
          {todos.map(todo => (
            <li key={todo.createdAt}>
              {todo.isCompleted ? <del>{todo.text}</del> : todo.text} :{" "}
              {moment(todo.createdAt).fromNow()}
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
