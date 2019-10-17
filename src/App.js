import React, { Component } from 'react';
import './styles.css';
import Header from './Components/Header/Header';
import Main from "./pages/main/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Main></Main>
      </div>
    );
  }
}
export default App;
