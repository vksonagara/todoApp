import React from "react";

class TodoFilter extends React.Component {
  state = {
    filterValue: "all"
  };

  render() {
    return (
      <div>
        <label htmlFor="filterValue">Filter:</label>
        <select name="filterValue" onChange={this.handleChange}>
          <option value="all">All</option>
          <option value="not-completed">Not completed</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    );
  }

  handleChange = event => {
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      () => {
        this.props.triggerFilterTodos(this.state.filterValue);
      }
    );
  };
}

export default TodoFilter;
