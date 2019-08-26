/**
 * App Entry Point
 * ---
 * - Renders [App component]{@link module:app}
 * @module index
 */

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import './index.css';
// !!!: Do NOT do this on production!
import './test.css';

ReactDOM.render( <App />, document.getElementById('root'));
