import React, { Component } from 'react';
import SearchInput from './SearchInput';
import EmojiResults from '.TodoList/EmojiResults';
import FilterEmoji from './TodoList/FilterEmoji';
import Headerr from './Header';


class FirstEmo extends Component {
   constructor(props){
       super(props);
       this.state = {
           filteredEmoji: FilterEmoji("", 20)
       };
   }
   handelSearchChange =(e) => {
       this.setState({
           filteredEmoji: FilterEmoji(e.target.value, 20)
       })
   }
    render() { 
        return ( 

<div>
   <Headerr/>
<SearchInput textChange={this.handelSearchChange}/>
<EmojiResults emojiData={this.state.filteredEmoji}/>
    </div>

         );
    }
}
 
export default FirstEmo;