import React, { Component } from 'react';
import counter from './counter';
import Counter from './counter';

class Counters extends Component {
  
    render() { 

const {onDelete, onIncrement, onReset, counters} = this.props;

        return ( 

<div>
   
{counters.map(counter =>
<Counter
key={counter.id}
onDelete={onDelete}
onIncrement={onIncrement}
counter={counter}
/>
)}

 <button onClick={onReset} className="btn btn-success btn-sm m2">
    Reset
    </button>

</div>

         );
    }
}
 
export default Counters;