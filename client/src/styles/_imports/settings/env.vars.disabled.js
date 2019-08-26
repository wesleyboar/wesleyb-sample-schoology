/**
 * Calculate environmental variables
 * @module settings/environmentVariables
 */
/* WARNING: This file produces a bug during any relevant NPM script. The results of a past calculation are in `env.vars.json`. */
/* WARNING: Define in `postcss.config.js`, for now */
"use strict";

const phi = 1.618;

const widthNarrow = 300;
const widthMedium = getBiggerWidth( widthNarrow );
const widthWide = getBiggerWidth( widthMedium );

const widthNarrowMedium = getAverageWidth( widthNarrow, widthMedium );
const widthMediumWide = getAverageWidth( widthMedium, widthWide );

/**
 * Round a number to a nearest multiple
 * @param {number} number - Number to round
 * @param {number} multiple - Multiple to which to round the number
 * @see https://stackoverflow.com/a/14197029
 */
function roundToNearstMultiple( number, multiple ) {
  return ( multiple * ( Math.round( number / multiple )));
}

/**
 * Get the next "biggest" width
 *
 * 1. Multiply width by "φ".
 * 2. Round to nearest multiple of 5.
 * @param {number} width - The smaller width
 */
function getBiggerWidth( width ) {
  const value = width / phi * 2 + width;
  return roundToNearstMultiple( value, 5 );
}

/**
 * Get average of two widths
 *
 * 1. Average two widths.
 * 2. Round to nearest multiple of 5.
 * @param {number} widthA - A width
 * @param {number} widthB - Another width
 */
function getAverageWidth( widthA, widthB ) {
  const value = ( widthA + widthB ) / 2;
  return roundToNearstMultiple( value, 5 );
}

module.exports = {
  environmentVariables: {
    '--phi': phi.toString(),

    '--vw--narrow': widthNarrow + 'px',
    '--vw--narrow-medium': widthNarrowMedium + 'px',
    '--vw--medium': widthMedium + 'px',
    '--vw--medium-wide': widthMediumWide + 'px',
    '--vw--wide': widthWide + 'px',

    // from Chris B at PHM (original source never provided)
    // '--space--xxx-small': '0.3rem',
    // '--space--xx-small': '0.6rem',
    // '--space--x-small': '1.2rem',
    // '--space--small': '1.8rem',
    // '--space--normal': '2.4rem',
    // '--space--large': '4.8rem',
    // '--space--x-large': '6.0rem',
    // '--space--xx-large': '8.4rem',

    // from Wes B via Golden Ratio (approximate values)
    '--space--xxx-small': '0.25rem',
    '--space--xx-small': '0.4rem',
    '--space--x-small': '0.6rem',
    '--space--small': '1.0rem',
    '--space--normal': '1.8rem',
    '--space--large': '3.0rem', /* baseline, like `env(--vw--narrow)` */
    '--space--x-large': '4.8rem',
    '--space--xx-large': '8.0rem',
  }
};