import React, { Component } from "react";
import axios from "axios";

class MovieName extends Component {
  constructor() {
    super();
    this.state = {
      film: []
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")

      .then(response => {
        const film = response.data;
        this.setState({ film });
      });
  }

  render() {
    console.log("film");
    return (
      <ul>
        {this.state.film.map(m => (
          <li key={m.id}>
            Name:- {m.name} <br /> Address:- {m.address.city}
          </li>
        ))}
      </ul>
    );
  }
}

export default MovieName;
