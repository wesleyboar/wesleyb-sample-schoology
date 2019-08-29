//
// Dependencies
//

// RFE: Support different environment configurations
// require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');
const Subdomain = require('koa-subdomain');

const app = new Koa();
const subdomain = new Subdomain();
const serve = require('koa-static');
const cors = require('@koa/cors');
const path = require('path');

const apiRouter = require('../api/main.js').koaRouter;
const clientRouter = new Router();

//
// Definitions
//

// If external service defines port, then so be it
const port = process.env.PORT || 9000;
// This is used to log URLs of relevant resources
// WARN: This is a real domain…
const hostname = "animal.farm";

// Directories
const staticDir = path.resolve( __dirname, '../dist/public');
const docsDir = path.resolve( __dirname, '../dist/docs');

// URLs
const URL = {
    api: `http://api.${hostname}:${port}`,
    client: `http://www.${hostname}:${port}`,
    docs: `http://docs.${hostname}:${port}`,
}

// Options
const corsOpts = {
    origin:        `http://www.${hostname}:${port}`,
    allowMethods:  'GET,HEAD',
}

//
// Router
//

clientRouter.get('/', async ctx => {
    ctx.status = 302;
    ctx.redirect( URL.client );
    ctx.body = 'Redirecting to primary website';
});

//
// Application
//

// API requests must be sent to `api.domain.tld`; others may use any sub-domain
subdomain.use( '', clientRouter.routes());
subdomain.use( 'www', serve( staticDir ));
subdomain.use( 'docs', serve( docsDir ));
subdomain.use( 'api', apiRouter.routes());

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
