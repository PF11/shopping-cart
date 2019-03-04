import React, { Component } from "react";
import axios from "axios";

class Calling1 extends Component {
  constructor() {
    super();

    this.state = {
      masha: []
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      const bear = response.data;
      this.setState({ masha: bear });
      console.log("Response", response);
    });
  }

  render() {
    return (
      <ol>
        {this.state.masha.map(party =>  <li key={party.id}>Name: {party.name} <br/>Address: {party.address.street} | {party.address.city} | {party.address.geo.lat} <br/> Phone: {party.phone} <br/> Company: {party.company.name} | {party.company.bs}</li>
        )}
      </ol>
    );
  }
}

export default Calling1;
