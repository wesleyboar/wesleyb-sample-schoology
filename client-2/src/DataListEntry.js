/**
 * Data List (that user can filter)
 * ---
 * @module component/dataList
 */

import React from 'react';
import './DataListEntry.css';

//
// Definitions
//

/** Counter (for creating unique component IDs)
 * @type {Number}
 */
let count = 0;

// FAQ: The `<span>` tag is chosen, because all child elements are inline or invisible
/** The tag name to use if {@link module:component/dataList.props.tagName} is not defined
 * @type {String}
 */
const defaultTagName = 'span';

/**
 * An item name
 * @typedef {String} Name
 */

/**
 * A list of item names
 * @typedef {Array.<module:component/dataList~Name>} NameList
 */

//
// Export
//
class DataList extends React.Component {
  /**
   * @param {Object} props
   * @property {String} [className] - The `class` attribute for the element wrapper
   * @property {String} [nameAttr] - The `name` attribute for the user-entry element of the form
   * @property {String} [tagName="span"] - The type of tag with which to wrap the component elements
   */
  constructor( props ) {
    super( props );

    /** @type {Object} state */
    this.state = {
      /** The data for the list
       * @memberOf module:component/dataList.state
       */
      list: [],
      /** Whether the data for the list is available
       * @memberOf module:component/dataList.state
       */
      isLoading: true,
      /** An error, if one occurred
       * @memberOf module:component/dataList.state
       */
      error: null
    };
  }

  getData() {
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

  componentDidMount() {
    this.getData()
      .then( data => this.setState({ list: data }))
      .catch( err => this.setState({ error: err }))
      .finally( () => this.setState({ isLoading: false }));
  }

  createOptions( data ) {
    return data.map(( item, i ) => {
      const value = item;
      const label = item;

      return(
        <option value={value} label={label} key={i} />
      );
    });
  }

  render() {
    const { list, error } = this.state;
    const options = this.createOptions( list );
    // RFE: For a full-fledged project, create an error component
    const errorMessage = ( error ) ? error.message : '';

    const listId = 'comp-datalist-list-' + count++;
    const inputId = 'comp-datalist-input-' + count++;
    const nameAttr = this.props.nameAttr;
    // HACK: For a full-fledged project, abstract this because it would be used again
    const Tag = ({ level, children, ...props }) => {
      return React.createElement( this.props.tagName || defaultTagName, props , children );
    }

    // FAQ: All CSS classes defined here will be attached, except for empty strings
    const className = {
      prop: this.props.className,
      jsId: 'js-datalist',
      hasError: ( error != undefined ) ? 'has-error' : '', // eslint-disable-line eqeqeq
      // NOTE: Semantically, this is an assumption; but `isLoading: false` after component "has data"
      isLoading: ( ! this.state.isLoading ) ? 'has-data' : ''
    };
    const classNames = Object.values( className ).filter( name => name ).join(' ');

    // TODO: Support a custom tag name, because markup experts have opinions
    return (
      <Tag className={classNames}>
        <span className="c-loading">Loading</span>
        <span className="c-error">{errorMessage}</span>

        <label htmlFor={inputId}>Select the desired farm animal</label>
        <input list={listId} id={inputId} name={nameAttr} />

        <datalist id={listId}>
          {options}
        </datalist>
      </Tag>
    );
  }
}

export default DataList;
