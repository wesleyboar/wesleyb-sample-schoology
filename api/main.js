/**
 * Server-Side Web API Service
 * ---
 * @module api
 * @tutorial Server-Side Web API
 */

const Router = require('koa-router');
const router = new Router();

/** Collection of data
 * @const {module:api/data~Data}
 */
const data = require('./lib/data.js');

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
// Route Functions
//

/** Get all data
 * @param {KoaAppContext} ctx
 * @param {*} list
 */
get = function ( ctx, list ) {
    ctx.body = list;
};

/** Get data, filtered by given term
 *
 * Requirements
 * - term length **must** be at least 2 characters and at most than 20 characters
 * - characters **must** be [ISO basic Latin alphabet](https://en.wikipedia.org/wiki/ISO_basic_Latin_alphabet)
 * @param {KoaAppContext} ctx
 * @param {*} list
 * @param {String} term
 */
getFiltered = function ( ctx, list, term ) {
    const filteredList = _filterListByString( list, term );
    const hasData = ( filteredList.length > 0 );
    const isTermLengthValid = ( term.length < 21 && term.length > 1 );
    const isTermCharsetValid = new RegExp('^[a-zA-Z]+$').test( term );

    // RFE: Isolate user-entry assertions to simplify route logic
    // RFE: Pull messages from object
    // RFE: Pull assertions variables (like message length limits) from object
    ctx.assert( isTermLengthValid, 400, 'Search term is outside length restriction; minimum is 2 characters, maximum is 20 characters.');
    ctx.assert( isTermCharsetValid, 400, 'Search term has invalid characters; only the "ISO basic Latin alphabet" is supported.');

    ctx.assert( hasData, 404, 'No animals found.');

    ctx.body = filteredList;
};

//
// Router
// NOTE: As more similar endpoints are added, use loop(s) to reduce repition
//

router.get('urls', '/urls/', async ctx => {
    getFiltered( ctx, data.food, ctx.params.type );
});

router.get('allAnimals', '/animals/', async ctx => {
    get( ctx, data.animals );
});
router.get('filteredAnimals', '/animals/:name', async ctx => {
    getFiltered( ctx, data.animals, ctx.params.name );
});

router.get('allFood', '/food/', async ctx => {
    get( ctx, data.food );
});
router.get('filteredFood', '/food/:type', async ctx => {
    getFiltered( ctx, data.food, ctx.params.type );
});

// Root of API may be expected to explain the API
router.get('root', '/', async ctx => {
    ctx.status = 200;
    ctx.body = data.ref.intro;
});
// User must be lost, so lets explain the API
router.get('unknown', '*', async ctx => {
    ctx.status = 404;
    ctx.body = data.ref.intro;
});


//
// Export
//

module.exports = {
    koaRouter: router
};
