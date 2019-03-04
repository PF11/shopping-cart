import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import HomeIcon from 'react-icons';
import AddDayIcon from 'react-icons';
import ListDaysIcon from 'react-icons';


class NavBar extends Component {
    render() { 
        return ( 

<div>
<nav className="nav">
    <Link to="/"><HomeIcon/></Link>
    <Link to="/add"><AddDayIcon/></Link>
    <Link to="/list"><ListDaysIcon/></Link>
    </nav>
    </div>

         );
    }
}
 
export default NavBar;
   

    
