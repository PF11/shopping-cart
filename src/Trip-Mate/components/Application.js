import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './Nav';
import {TripsList} from './trips/TripsList';
import {TripsCount} from './trips/TripsCount';
import {AddTrip} from './trips/AddTrip';
import {Error404} from './Error404';

export class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      allTrips: [
        {
          place: "Delhi",
          date: "2018-10-26",
          type: "Trek"
        },
        {
          place: "Mumbai",
          date: "2018-12-25",
          type: "club"
        },
        {
          place: "Almora",
          date: "2018-8-10",
          type: "Tropic"
        }
      ]
    };
  }

  render() {
    return (
      <div className="application">
        <Router>
          <div className="route-container">
            <NavBar />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <TripsCount
                    {...props}
                    total={this.countDays()}
                    trek={this.countDays("Trek")}
                    tropic={this.countDays("Tropic")}
                    club={this.countDays("Club")}
                  />
                )}
              />
              <Route
                path="list/:filter"
                render={props => (
                  <TripsList {...props} days={this.state.allTrips} />
                )}
              />
              <Route
                path="/list"
                render={props => (
                  <TripsList {...props} days={this.state.allTrips} />
                )}
              />
              <Route
                path="/add"
                render={props => (
                <AddTrip {...props} newTrip={this.addTrip} />
                )}
              />
              <Route component={Error404} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
