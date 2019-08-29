/**
 * Combine Data for Simple Access
 * ---
 * @module api/data
 */

const URLs = require('../../data/dynamic/urls.js');

// RFE: Get data from external source
// SEE: ../data/README.md
/** List of animal names
 * @const {module:api~AnimalList}
 */
const animals = require('../../data/static/animals.json');
/** List of animal food types
 * @const {module:api~FoodList}
 */
const food = require('../../data/static/food.json');

//
// Definitions
//

// Environmental
const port = process.env.PORT;
const hostname = process.env.HOSTNAME;

/** Set of URL strings
 * @const {module:url~Strings}
 */
const URL = ( new URLs( hostname, port )).getAsStrings();

/**
 * A collection of reference material for directing users
 * @const {Object} Reference
 */
const referenceObjects = {
    intro: {
        message: 'This is the entrypoint of the Farm Animal API.',
        documentation: `${URL.docs}api/tutorial-Server-Side%20Web%20API.html`,
        resources: {
            animals: `${URL.api}animals/`,
            food: `${URL.api}food/`,
        }
    }
}

/**
 * A farm animal name
 * @typedef {String} Animal
 */
/**
 * A list of farm animal names
 * @typedef {Array.<module:api/data~Animal>} AnimalList
 */

/**
 * A food type (for a farm animal)
 * @typedef {String} Food
 */
/**
 * A list of food types (for farm animals)
 * @typedef {Array.<module:api/data~Food>} FoodList
 */

/**
 * A simple collection of data lists (and reference material)
 *
 * _This storage does not contain any relationship between the lists._
 * @typedef {Object} Data
 * @property {module:api/data~AnimalList} animals - List of names of animals
 * @property {module:api/data~FoodList} food - List of types of animal food
 * @property {module:api/data~Reference} ref - Reference data for users
 */

//
// Export
//

module.exports = {
    animals: animals,
    food: food,
    ref: referenceObjects
};
