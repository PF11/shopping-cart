import React, { Component } from "react";
import Counters from "./counters";
import NavBar from './navbar';

class CApp extends Component {
  state = {
    counters: [
      { id: 1, value: 10 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 7 }
    ]
  };
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    console.log("Increment");
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
    console.log("Reset", counters);
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
    console.log("Delete");
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
        totalCounters = {this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default CApp;
