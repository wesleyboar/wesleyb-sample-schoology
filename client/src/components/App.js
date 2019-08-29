/**
 * App Root
 * ---
 * @module app
 */

import React from 'react';

import DataListEntry from './DataListEntry.js';

const port = process.env.PORT;
const hostname = process.env.HOSTNAME;

// FAQ: Only use for JavaScript-specific classes require styling
// import './App.css';

/** @constructor */
class App extends React.Component {
  /**
   * Get all farm animals
   * @return {Promise.<FarmAnimalList>}
   */
  getFarmAnimals() {
    return fetch(`http://api.${hostname}:${port}/animals`)
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

  // HACK: If markup becomes re-usable, consider the following components:
  // - Header
  // - Form
  render() {
    /* HACK: An `o-app` block and children should be defined in one file */
    return (
      <>
        <header className="c-intro--minor o-app__head">
          <h2>Farm Creation</h2>
          <p className="c-intro__major-text">Add elements to your farm.</p>
        </header>
        <form className="s-form o-app__body">
          <fieldset className="c-intro">
            <legend>Animal Selection</legend>
            <small className="c-intro__minor-text">The purpose of your choices here are for us to know and you to find out.</small>
            <DataListEntry tagName="div"
                          className="c-datalist c-field"
                          nameAttr="farm_animal"
                          getData={this.getFarmAnimals} />
          </fieldset>
        </form>
      </>
    );
  }
}

export default App;
