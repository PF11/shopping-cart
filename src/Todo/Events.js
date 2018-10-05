import React, { Component } from 'react';

class Events extends Component {
    constructor(){
        super();
        this.state = {
            eventCount: ''
        }
    }
  
handleIncrement = () => {
    this.setState({
        eventCount:this.state.eventCount + 1
    })
}

    render() { 
        return ( 
        <div>
            <p>There have been {this.state.eventCount} events</p>
            <p><button onClick={this.handleIncrement}>*</button></p>
            <p>You typed: {this.state.username}</p>
            <p><input onChange={This.handleUpdateUsername}/></p>
            </div> );
    }
}
 
export default Events;