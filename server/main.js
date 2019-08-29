//
// Dependencies
//

require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');
const Subdomain = require('koa-subdomain');

const app = new Koa();
const subdomain = new Subdomain();
const serve = require('koa-static');
const cors = require('@koa/cors');
const path = require('path');

const URLs = require('../data/dynamic/urls.js');
const apiRouter = require('../api/main.js').koaRouter;
const clientRouter = new Router();

//
// Definitions
//

// Environmental
const port = process.env.PORT;
const hostname = process.env.HOSTNAME;

// Directories
const staticDir = path.resolve( __dirname, '../dist/public');
const docsDir = path.resolve( __dirname, '../dist/docs');

// URLs
const URL = ( new URLs( hostname, port )).getAsStrings();

// Options
const corsOpts = {
    // The `Access-Control-Allow-Origin` must not have a trailing slash
    origin:        URL.client.replace(/\/$/, ''),
    allowMethods:  'GET,HEAD',
}

//
// Router
//

clientRouter.get('/', async ctx => {
    ctx.status = 307;
    ctx.redirect( URL.client );
    ctx.body = 'Redirecting to primary website';
});

//
// Application
//

// API requests must be sent to `api.domain.tld`; others may use any sub-domain
subdomain.use( 'api', apiRouter.routes());
subdomain.use( 'docs', serve( docsDir ));
subdomain.use( 'www', serve( staticDir ));
subdomain.use( '', clientRouter.routes());

// WARN: Subdomain routes must be "used" before static server to prevent being overridden
app.use( cors( corsOpts ));
app.use( subdomain.routes());
app.use( serve( staticDir ));

// Allow Koa to use default service configuration
app.listen( port, ( err ) => {
    if ( err ) throw err;

    console.log(`Listening on port ${port}`);

    // RFE: Support client dev server and API on same port, so CORS is not an issue
    console.log(`Client-Side Web App is available at ${URL.client}`);
    console.log(`Server-Side Web API is available at ${URL.api}`);
    console.log(`User and Dev Docs are available at ${URL.docs}`);
});
