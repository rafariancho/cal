import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Components/Calendar/Calendar'
import Calendar from './Components/Calendar/Calendar';

class App extends Component {
  render() {
    return (
      <Calendar />
    );
  }
}

export default App;
