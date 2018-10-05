import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Game from "./TicTacToe/TicTac";
import MarkdownEditor from './markdown-editor/Markdown'
import Events from './Todo/Events';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Events />
      </div>
    );
  }
}

export default App;
