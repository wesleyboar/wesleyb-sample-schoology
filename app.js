/**
 * API Service
 * @module api
 */

// RFE: Add unit testing

// RFE: Support different environment configurations
// require('dotenv').config();

const Koa = require('koa');
const Subdomain = require('koa-subdomain');
const Router = require('koa-router');

const app = new Koa();
const subdomain = new Subdomain();
const router = new Router();
const serve = require('koa-static');

// RFE: Get data from external source
// - committed external list (static-ish, maintenance concern)
// - API call (dynamic, reliability concern)
// - saved results of API call (dynamic-ish, low maintenance, reliability concern)
const data = require('./data/farm-animals.json');

//
// Definitions
//

const root = './public';
// If external service defines port, then so be it
const port = process.env.PORT || 9000;

//
// Functions
//

/** Get data (by matching string to any item)
 * @param {String} keyString
*/
function getData( keyString ) {
  const list = data.filter( datum => {
    console.log({
      datum: datum,
      keyString: keyString
    });

     return ( datum.includes( keyString ) );
  });

  return list;
}

//
// Application
//

// Routes
router.get('/', async ctx => {
  ctx.body = data;
});
router.get('/:term([a-zA-Z]*)', async ctx => {
  const term = ctx.params.term;
  const data = getData( term );
  const hasData = ( data.length > 0 );
  const isTermLengthValid = ( term.length < 20 && term.length > 1 );

  // RFE: Isolate assertions to simplify route logic
  // RFE: Pull messages from JSON object
  ctx.assert( hasData, 404, 'No animals found.');
  ctx.assert( isTermLengthValid, 400, 'Search term is outside length restriction; minimum is 20 characters, maximum is 20 characters.');

  ctx.body = data;
});

// API requests must be sent to `api.domain.tld`; others may use any sub-domain
subdomain.use( 'www', serve( root ));
subdomain.use( 'api', router.routes());

// Static files must be served at the root; subdomains follow their rules
// WARN: Subdomain routes must be "used" first, or static server overrides them
app.use( subdomain.routes());
app.use( serve( root ));

// Allow Koa to manage service details
app.listen( port );
console.log(`Listening on port ${port}`);
