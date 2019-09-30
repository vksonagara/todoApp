import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class App extends React.Component {
  state = {
    todos: []
  };
  render() {
    return (
      <div className="App">
        <TodoForm triggerAddTodo={this.addTodo}/>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }

  addTodo = (todo) => {
    const todos = this.state.todos;
    todos.push(todo);
    this.setState({
      ...this.state,
      todos
    });
  };
}

export default App;
