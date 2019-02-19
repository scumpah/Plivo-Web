import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FullWidthTabs from '../src/components/SmsType';
import Country from '../src/components/countries';
import Calculator from '../src/components/Calculator';
import RangeSelector from '../src/components/RangeSelector';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <p style={{fontSize: '25px', color:'#040692'}}>Please enter values to calculate pricing</p>
          <Country />
          <RangeSelector />
          <Calculator />
          <div style= {{ position: 'static',padding: '50px' }}>
          <FullWidthTabs/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
