import React, { Component } from 'react';
import axios from 'axios';

class FirstCall extends Component {
    constructor(){
        super();
        this.state = {
users :[]

        }
    }
componentDidMount(){

    fetch('https://randomuser.me/api/?results=10&inc=name,registered&nat=fr')
    .then(results => results.json())
    .then(response => {
        const users = response.results;
        this.setState({users})
    })

}

    render() { 
        return ( 
        
        <div><h3>List Data</h3>

        <ol>
            {this.state.users.map(user => {
                return (
                    <li key={user.id}>{user.name.title}. {user.name.first} {user.name.last} <br/>
                    {user.registered.date} {user.registered.age}</li>
                )
            })}
            </ol>
</div>
        
         );
    }
}
 
export default FirstCall;