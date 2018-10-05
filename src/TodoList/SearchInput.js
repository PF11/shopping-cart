import React, { PureComponent } from 'react';

import './SearchInput.css';

class SearchInput extends PureComponent {
    handelChange =(e)=>{
        this.props.textChange(e);
    }
    
    render() { 
        return ( 

<div className="component-search-input">
<div>
    <input onChange={this.handelChange}/>
    </div>
</div>

         );
    }
}
 
export default SearchInput;