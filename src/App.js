import React, { Component } from "react";
import logo from "./logo.svg";

import Game from "./TicTacToe/TicTac";
import MarkdownEditor from './markdown-editor/Markdown'
import Events from './Todo/Events';
import {Application} from './Trip-Mate/components/Application';
import FirstPage from './TodoList/FirstPage';
import FirstEmo from './TodoList/FirstEmo';
import Counter from './Counterss/counter';
import CApp from "./Counterss/CApp";
import FirstCall from "./APICall/FirstCall";

import Calling2 from "./APICall/Calling2";
import ApiCalling from "./Call/calling";
import MovieName from "./Call/name";
import AddData from "./Call/insert";
import Calling1 from "./APICall/calling1";



class App extends Component {
  render() {
    return (
      <div className="App">
      <Calling2/>  
      </div>
    );
  }
}

export default App;
