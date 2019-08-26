/**
 * Data List
 * ---
 * A list of asynchronously-acquired data that the user may filter.
 * @module component/dataListEntry
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
/** The tag name to use if {@link module:component/dataListEntry.props.tagName} is not defined
 * @type {String}
 */
const defaultTagName = 'span';

/**
 * An item representation i.e. a name
 * @typedef {String} Item
 */

/**
 * A list of items
 * @typedef {Array.<module:component/dataListEntry~Item>} ItemList
 */

//
// Export
//

class DataListEntry extends React.Component {
  /**
   * @param {Object} props
   * @property {Function} getData - The function to retrieve data (must return a Promise)
   * @property {String} [className] - The `class` attribute for the element wrapper
   * @property {String} [nameAttr] - The `name` attribute for the user-entry element of the form
   * @property {String} [tagName="span"] - The type of tag with which to wrap the component elements
   */
  constructor( props ) {
    super( props );

    /** @type {Object} */
    this.state = {
      /** The list of datum
       * @type {ItemList}
       * @memberOf module:component/dataListEntry.state
       */
      list: [],
      /** Whether the data for the list is available
       * @type {Boolean}
       * @memberOf module:component/dataListEntry.state
       */
      isLoading: true,
      /** An error, if one occurred
       * @type {Error}
       * @memberOf module:component/dataListEntry.state
       */
      error: null
    };
  }

  componentDidMount() {
    this.props.getData()
      .then( data => this.setState({ list: data }))
      .catch( err => this.setState({ error: err }))
      .finally( () => this.setState({ isLoading: false }));
  }

  /** Create a list of option elements per list datum
   * @param {ItemList}
   */
  createOptionElements( data ) {
    return data.map(( item, i ) => {
      const value = item;
      const label = item;

      return(
        <option value={value} label={label} key={i} />
      );
    });
  }

  render() {
    const { list, isLoading, error } = this.state;
    const { nameAttr, tagName=defaultTagName } = this.props;
    let   { className } = this.props;

    const optionElements = this.createOptionElements( list );
    // RFE: For a full-fledged project, create an error component
    const errorMessage = ( error ) ? error.message : '';

    const listId = 'comp-datalist-list-' + count++;
    const inputId = 'comp-datalist-input-' + count++;
    // TODO: Also, support no tag name, because markup experts have opinions
    // HACK: For a full-fledged project, abstract this because it would be used again
    const Tag = ({ level, children, ...props }) => {
      return React.createElement( tagName, props , children );
    }

    // FAQ: All CSS classes defined here will be attached, except for empty strings
    const classNames = {
      prop: className,
      jsId: 'js-datalist',
      hasError: ( error != undefined ) ? 'has-error' : '', // eslint-disable-line eqeqeq
      // NOTE: Semantically, this is an assumption; but `isLoading: false` after component "has data"
      isLoading: ( ! isLoading ) ? 'has-data' : ''
    };
    className = Object.values( classNames ).filter( name => name ).join(' ');

    return (
      <Tag className={className}>
        <span className="c-loading">Loading</span>
        <span className="c-error">{errorMessage}</span>

        <label htmlFor={inputId}>Farm Animal</label>
        <input list={listId} id={inputId} name={nameAttr} />

        <datalist id={listId}>
          {optionElements}
        </datalist>
      </Tag>
    );
  }
}

export default DataListEntry;
