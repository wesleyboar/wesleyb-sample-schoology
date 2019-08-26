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

ReactDOM.render( <App />, document.getElementById('root'));
