import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

class App extends React.Component {
  state = {
    todos: []
  };

  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) {
      this.setState({
        todos
      });
    }
  }

  render() {
    return (
      <div className="App">
        <TodoForm triggerAddTodo={this.addTodo} />
        <TodoList
          todos={this.state.todos}
          triggerRemoveTodo={this.removeTodo}
          triggerMarkCompleted={this.markCompleted}
        />
      </div>
    );
  }

  componentDidUpdate() {
    const todos = JSON.stringify(this.state.todos);
    localStorage.setItem("todos", todos);
  }

  addTodo = todo => {
    const { todos } = this.state;
    const createdAt = Date.now();
    todos.push({ text: todo, createdAt, isCompleted: false });
    this.setState({
      todos
    });
  };

  removeTodo = todo => {
    const todos = this.state.todos.filter(t => todo !== t);
    this.setState({ todos });
  };

  markCompleted = todo => {
    const todos = this.state.todos.map(t => {
      return t !== todo ? t : { ...t, isCompleted: true };
    });
    this.setState({
      todos
    });
  };
}

export default App;
