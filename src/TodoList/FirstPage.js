import React, { Component } from 'react';


class FirstPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data1:'',
            data:'',
            item:[]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
   handleChange = (e) => {

    this.setState({data:e.target.value})
    console.log(this.state.data)
   }

handleSubmit = () => {
    const list = this.state.item;
    list.push(this.state.data1);
    this.setState({item : list});
    console.log('');

}

    render() { 
        return ( 
            <div>
                <form className="first" onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} value={this.state.data}/>
                <button>Add</button>
            
                </form>
                <ul>
        {this.state.item.map(items => {
            return(
          <li key={items.id}>{items.text}</li>
    )
})}
      </ul>
                </div>
         );
    }
}
 
export default FirstPage;

