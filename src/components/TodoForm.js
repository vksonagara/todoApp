import React from "react";

class TodoForm extends React.Component {
  state = {
    inputText: ""
  };

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.inputText}
          onChange={this.handleInputChange}
        />
        <button type="submit" onClick={this.handleFormSubmit}>
          Add
        </button>
      </form>
    );
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const value = this.state.inputText.trim();
    if (value === "") {
      return;
    }
    this.props.triggerAddTodo(value);
    this.setState({
      inputText: ""
    });
  };

  handleInputChange = event => {
    this.setState({
      inputText: event.target.value
    });
  };
}

export default TodoForm;
