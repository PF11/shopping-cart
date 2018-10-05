import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './List.css';

class Todo extends Component {
   constructor(props){
       super(props);
       this.state={
           items:[],
           data:''
       }

this.handelChange = this.handelChange.bind(this);
this.handelSubmit = this.handelSubmit.bind(this);

   }
   handelChange=(e)=>{
    this.setState({data:e.target.value})
}
handelSubmit(e){
    e.preventDefault();
    if(!this.state.data.length){return ;}

const newItem = {
id: Date.now(),
data: this.state.data,
}
this.setState(prev => ({
    items: prev.items.concat(newItem),
}));

}
    
    render() { 
        return (
        <div>
            <TodoList items={this.state.items}/>
            <form onSubmit={this.handelSubmit}>
            <input onChange={this.handelChange} value={this.state.data}/>
            <button>Add#{this.state.items.length + 1}
            </button>
            </form>
            </div> );
    }

}


class TodoList extends React.Component{
    render(){
        return(
            <ul>
                {this.props.items.map(item =>(
                    <li key={item.id}>{item.data}</li>
                ))}
                </ul>
        )
    }
}
 
export default Todo;