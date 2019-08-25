import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <form>
      <label for="ice-cream-choice">Choose a flavor:</label>
      <input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />

      <datalist id="ice-cream-flavors">
          <option value="Chocolate" />
          <option value="Coconut" />
          <option value="Mint" />
          <option value="Strawberry" />
          <option value="Vanilla" />
      </datalist>
    </form>
  );
}

export default App;
