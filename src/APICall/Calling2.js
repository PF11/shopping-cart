import React, { Component } from "react";

class Calling2 extends Component {
  constructor() {
    super();
    this.state = {
      motu: []
    };
  }

  componentDidMount() {
    fetch("https://facebook.github.io/react-native/movies.json")
      .then(results => results.json())
      .then(json => {
        const patlu = json.results
        this.setState({ motu: patlu });
      });
  }
  render() {
    return (<div>
      <h4>data</h4>
      <ul>
        {this.state.motu.map(jodi => {
        return (<li key={jodi.id}>{jodi.title}</li>
         ) }
         )}
      </ul>
      </div>
    );
  }
}

export default Calling2;
