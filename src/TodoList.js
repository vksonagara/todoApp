import React from 'react';

class TodoList extends React.Component {
  state = {
    todos: []
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.todos.map((todo) => <li>{todo}</li>)}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    this.setState({...this.state, todos: this.props.todos});
  }

  componentWillReceiveProps({todos}) {
    this.setState({...this.state, todos});
  }
}

export default TodoList;
