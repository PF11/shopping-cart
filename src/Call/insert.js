import React, { Component } from "react";
import axios from "axios";

class AddData extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const user = {
      name: this.state.name
    };

    axios
      .post("https://jsonplaceholder.typicode.com/users", { user })
      .then(response => {
        console.log(response);
        console.log(response.data);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input onChange={this.handleChange} />
        </label>
        <button> Click </button>
      </form>
    );
  }
}

export default AddData;
