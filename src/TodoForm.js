import React from 'react';

class TodoForm extends React.Component {
  state = {
    inputText: ''
  };

  render() {
    return (
      <form>
        <input type="text" value={this.state.inputText} onChange={this.handleInputChange}/>
        <button type="submit" onClick={this.handleFormSubmit}>Add</button>
      </form>
    );
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.triggerAddTodo(this.state.inputText);
    this.setState({
      ...this.state,
      inputText: ''
    });
  }

  handleInputChange = (e) => {
    const value = e.target.value;
    this.setState({
      inputText: value
    });
  }
}

export default TodoForm;
