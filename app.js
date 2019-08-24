/**
 * API Service
 * ---
 * @module api
 */

// RFE: Add unit testing

const path = require('path');

// RFE: Support different environment configurations
// require('dotenv').config();

const Koa = require('koa');
const Subdomain = require('koa-subdomain');
const Router = require('koa-router');

const app = new Koa();
const subdomain = new Subdomain();
const router = new Router();
const serve = require('koa-static');

/** @const {module:api/routes} */
const routes = require( path.join(__dirname, '/api/routes.js') );

//
// Definitions
//

// If external service defines port, then so be it
const port = process.env.PORT || 9000;
// This is used to log URLs of relevant resources
// WARN: This is a real domain…
const hostname = "animal.farm";

// Directories
const staticDir = './public';
const docsDir = './docs';

//
// Application
//

// Routes
router.get('/', async ctx => {
  routes.get( ctx );
});
router.get('/:term', async ctx => {
  routes.getFiltered( ctx, ctx.params.term );
});
// API requests must be sent to `api.domain.tld`; others may use any sub-domain
subdomain.use( 'www', serve( staticDir ));
subdomain.use( 'docs', serve( docsDir ));
subdomain.use( 'api', router.routes());

// WARN: Subdomain routes must be "used" first, or static server overrides them
app.use( subdomain.routes());
app.use( serve( staticDir ));

// Allow Koa to use default service configuration
app.listen( port, ( err ) => {
  if ( err ) throw err;

  console.log(`Listening on port ${port}`);

  console.log(`Client app is available at http://${hostname}:${port}`);
  // console.log(`Client app docs are available at http://${hostname}:${port}/docs`);
  console.log(`Server app docs are available at http://docs.${hostname}:${port}`);
  console.log(`Web API is available at http://api.${hostname}:${port}`);
  console.log(`Web API docs are available at http://docs.${hostname}:${port}/tutorial-API.html`);
});
