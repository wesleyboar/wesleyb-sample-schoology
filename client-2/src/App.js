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
      <form>
        <fieldset>
          <legend>Animal Selection</legend>
          <DataListEntry tagName="div" />
          <small>The purpose of your choice is for us to know and your to find out.</small>
        </fieldset>
      </form>
    );
  }
}

export default App;
