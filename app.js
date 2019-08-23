/**
 * WES - Static Web Server
 * @module app
 */

// RFE: Support different environment configurations
// require('dotenv').config();

const Koa = require('koa');
const Subdomain = require('koa-subdomain');
const Router = require('koa-router');

const app = new Koa();
const subdomain = new Subdomain();
const router = new Router();

const serve = require('koa-static');

//
// Definitions
//

const root = './public';
// If external service defines port, then so be it
const port = process.env.PORT || 9000;

//
// Application
//

// Routes
router.get('/', async ctx => {
  ctx.body = {test: 'success'};
});
// RFE: Support passing a string
// router.get('/', async ctx => {
//   ctx.body = {test: 'success'};
// });

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
