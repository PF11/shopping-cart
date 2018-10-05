import React, { Component } from 'react';

const List = (props) => (

<ul>
    {
        props.items.map(item =>{

     <li>{item}</li>
        })
    }
</ul>

);

export default List;