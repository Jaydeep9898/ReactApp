import React, { Component } from 'react';
import './App.css';
import {Student} from './student';
import {Student2} from './student2';

class App extends Component {

  render() {
    return (
      <div style={{
        backgroundColor:'#85C1E9',
      }}>
      <h1 align ='right' style={{
        width: '50%',
        fontFamily:'arial',
        fontWeight: 'bold',
        margin: '0px 0px 1px 0px'
      }}> Doggo and Kitty</h1>
        <Student /> 
        <Student2 />
      </div>
    );
  }
}

export default App;
