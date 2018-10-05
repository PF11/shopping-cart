import React, { Component } from 'react';


class FirstPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:'',
            item:[]
        }
    }
   
    render() { 
        return ( 
            <div>
                <form className="first" item={this.state.item} onSubmit={this.handelSubmit}>
                <input type="text" onChange={this.handelChange} value={this.state.data}/>
                <button>Add</button>
                </form>
                <ul>
        {this.props.item.map(items => {
          <li key={items.id}>{items.text}</li>
    })}
      </ul>
                </div>
         );
    }
}
 
export default FirstPage;

