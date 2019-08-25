import React, {useEffect, useState} from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [ options, setOptions ] = useState(null);

  // RFE: Consider using a class, so you don't feel wierd about let
  // /** @type {module:api~AnimalList} */
  // let list = null;

  const getOptionData = () => {
    return fetch('http://api.animal.farm:9000/').then( response => {
      return response.json();
    });
  }

  const createOptions = ( data ) => {
    return data.map(( item, i ) => {
      return(
        <option value={item} key={i} /> 
      );
    });
  }

  useEffect(() => {
    getOptionData().then( data => {
      const optionElements = createOptions( data );
      setOptions( optionElements );
    });
  }/*, [ list ]*/); // SEE: https://github.com/facebook/create-react-app/issues/6903
                // FAQ: With empty array, this `useEffect` will be fired more than expected (learn more)

  return (
    <form>
      <label htmlFor="ice-cream-choice">Choose a flavor:</label>
      <input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />

      <datalist id="ice-cream-flavors">
          {options}
      </datalist>
    </form>
  );
}

export default App;
