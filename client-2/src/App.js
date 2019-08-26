/**
 * Client application wrapper
 * @module app
 */

import React from 'react';
// import logo from './logo.svg';
import './App.css';
import DataList from './DataList.js';

class App extends React.Component {
  render() {
    return (
      <DataList />
    );
  }
}

export default App;
