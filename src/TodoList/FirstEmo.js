import React, { Component } from 'react';
import SearchInput from './SearchInput';
import EmojiResults from './EmojiResults';
import filterEmoji from './FilterEmoji';
import Headerr from './Header';


class FirstEmo extends Component {
   constructor(props){
       super(props);
       this.state = {
           filteredEmoji: filterEmoji("", 20)
       };
   }
   handelSearchChange =(e) => {
       this.setState({
           filteredEmoji: filterEmoji(e.target.value, 20)
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