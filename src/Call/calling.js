import React, { Component } from 'react';

const urlForUsername = login => 
'https://api.github.com/users/${login}'

class ApiCalling extends Component {
    constructor(props) {
        super(props);
        this.state = {
           requestFailed: false
        }
    }

    componentDidMount() {
        fetch(urlForUsername (this.props.login))
        .then (response => {
            if (!response.ok) {
                throw Error ("Network request failed")
            }
            return response
        })
        .then(d => d.json())
        .then(d => {
            this.setState({
                githubData: d
            })
        }, () => {
            this.setState({
                requestFailed: true
            })
        })
    }

    render() { 

if (this.state.requestFailed) return <p>Failed!</p>
if (!this.state.githubData) return <p>Loading...</p>

        return ( 
            <div>
                <h2>{this.state.githubData.login}</h2>
                </div>
         );
    }
}
 
export default ApiCalling;