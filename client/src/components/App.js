/**
 * App Root
 * ---
 * @module app
 */

import React from 'react';

import DataListEntry from './DataListEntry.js';

// FAQ: Only use for JavaScript-specific classes require styling
// import './App.css';

/** @constructor */
class App extends React.Component {
  /**
   * Get all farm animals
   * @return {Promise.<FarmAnimalList>}
   */
  getFarmAnimals() {
    return fetch('http://api.animal.farm:9000')
      .then( response => {
        if ( response.ok ) {
          return response.json();
        } else {
          // RFE: For a full-fledged project, create an error component
          throw new Error('Something went wrong ...', response );
        }
      })
      .catch( err => { throw err; });
  }

  render() {
    return (
      <form>
        <fieldset>
          <legend>Animal Selection</legend>
          <small>The purpose of your choice is for us to know and your to find out.</small>
          <DataListEntry tagName="div"
                         className="c-datalist"
                         nameAttr="farm_animal"
                         getData={this.getFarmAnimals} />
        </fieldset>
      </form>
    );
  }
}

export default App;
