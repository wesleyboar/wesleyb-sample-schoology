/**
 * API Service - Routes
 * ---
 * @module api/routes
 */

const path = require('path');

// RFE: Get data from external source
// - committed external list (static-ish, maintenance concern)
// - API call (dynamic, reliability concern)
// - saved results of API call (dynamic-ish, low maintenance, reliability concern)
const data = require( path.join(__dirname, '/../data/farm-animals.json') );

//
// Helper Functions
//

/** Filter given array by string
 * @param {Array.<String>} list
 * @param {String} keyString
 * @private
*/
function _filterListByString( list, keyString ) {
  const newList = list.filter( item => {
     return ( item.includes( keyString ) );
  });

  return newList;
}

//
// Export
//

/** Get all data
 * @param {KoaAppContext} ctx
 */
exports.get = function ( ctx ) {
  ctx.body = data;
};

/** Get data, filtered by given term
 *
 * Requirements
 * - term length **must** be at least 2 characters and at most than 20 characters
 * - characters **must** be [ISO basic Latin alphabet](https://en.wikipedia.org/wiki/ISO_basic_Latin_alphabet)
 * @param {KoaAppContext} ctx
 * @param {String} term
 */
exports.getFiltered = function ( ctx, term ) {
  const list = _filterListByString( data, term );
  const hasData = ( list.length > 0 );
  const isTermLengthValid = ( term.length < 21 && term.length > 1 );
  const isTermCharsetValid = new RegExp('^[a-zA-Z]+$').test( term );

  // RFE: Isolate user-entry assertions to simplify route logic
  // RFE: Pull messages from object
  // RFE: Pull assertions variables (like message length limits) from object
  ctx.assert( isTermLengthValid, 400, 'Search term is outside length restriction; minimum is 1 character, maximum is 20 characters.');
  ctx.assert( isTermCharsetValid, 400, 'Search term has invalid characters; only the "ISO basic Latin alphabet" is supported.');

  ctx.assert( hasData, 404, 'No animals found.');

  ctx.body = list;
};
