/**
 * Provide URLs
 * ---
 * @module data/urls
 */

//
// Definitions
//

/**
 * URL strings
 * @typedef {Object} Strings
 * @property {URL.href} api - Server-Side Web API
 * @property {URL.href} client - Client-Side Web App
 * @property {URL.href} docs - Dev & User Documentation
 */

/**
 * URL interfaces
 * @typedef {Object} Interfaces
 * @property {URL} api - Server-Side Web API
 * @property {URL} client - Client-Side Web App
 * @property {URL} docs - Dev & User Documentation
 */

/** A set of URLs for project services */
class URLs {
    /**
     * Create a URL set
     * @param {URL.hostname} hostname
     * @param {URL.port} port
     */
    constructor( hostname, port ) {
        this._hostname = hostname;
        this._port = ':' + port || '';
    }

    /** Get `URL` strings
     * @return {module:urls~Strings}
     */
    getAsStrings () {
        return {
            api: new URL(`http://api.${this._hostname}${this._port}`).toString(),
            client: new URL(`http://www.${this._hostname}${this._port}`).toString(),
            docs: new URL(`http://docs.${this._hostname}${this._port}`).toString(),
        };
    }

    /** Get `URL` objects
     * @return {module:urls~Interfaces}
     */
    getAsObjects () {
        return {
            api: new URL('api', `http://${this._hostname}:${this._port}`).toString(),
            client: new URL('client', `http://${this._hostname}:${this._port}`).toString(),
            docs: new URL('docs', `http://${this._hostname}:${this._port}`).toString(),
        };
    }
}

//
// Export
//

module.exports = URLs;
