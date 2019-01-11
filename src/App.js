import React, { Component } from 'react';
import NavBar from './components/Views/NavBar';
import './App.css';
import MainTitle from './components/Views/MainTitle';
import Cards from './components/Views/Cards';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
            <MainTitle />
            <Cards />
        </div>
      </div>
    );
  }
}

export default App;
