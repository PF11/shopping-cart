import React, { PureComponent } from 'react';
import './Header.css';

class Headerr extends PureComponent {
    state = {  }
    render() { 
        return ( 

<header className="component-header">
<img src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
width="32"
height="32"
alt=""
/>
Emoji Search
<img src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
width="32"
height="32"
alt=""/>

</header>

         );
    }
}
 
export default Headerr;