/**
 * Client application wrapper
 * @module app
 */

import React from 'react';
// import logo from './logo.svg';
import './App.css';
import DataListEntry from './DataListEntry.js';

class App extends React.Component {
  render() {
    return (
      <DataListEntry tagName="div" />
    );
  }
}

export default App;
