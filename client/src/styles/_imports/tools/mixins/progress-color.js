/**
 * Color a `<progress>` element
 * @module mixins/progress-color
 */

 /**
 * Set colors properties of `<progress>` element
 * @see [source code](https://github.com/scottaohara/a11y_styled_form_controls/blob/master/src/assets/css/progress-bar.css)
 * @see [code tutorial](https://scottaohara.github.io/a11y_styled_form_controls/src/progress-bar/)
 */
function progressColor( mixin, selector, fill, background, border ) {
  const cssObject = {};
  const nullValue = 'null';

  // FAQ: Past experience taught me that if I combine vendor prefixes
  //      in selectors, then some browsers fail to apply styles

  // Fill
  if ( fill !== nullValue ) {
    cssObject[selector + '::-ms-fill'] = {
      'background': fill
    };
    cssObject[selector + '::-moz-progress-bar'] = {
      'background': fill
    };
    cssObject[selector + '::-webkit-progress-value'] = {
      'background': fill
    };

    // Indeterminate
    cssObject[selector + ':indeterminate::-ms-fill'] = {
      'background': 'transparent'
    };
    cssObject[selector + ':indeterminate::-moz-progress-bar'] = {
      'background': 'transparent'
    };
    cssObject[selector + ':indeterminate::-webkit-progress-value'] = {
      'background': 'transparent'
    };
  }

  // Background & Border
  // FAQ: Prepare objects to be added to, so properties are not overwritten
  if ( background !== nullValue
      || border !== nullValue ) {
    cssObject[selector] = {};
    cssObject[selector + ':indeterminate'] = {};
  }

  // Background
  if ( background !== nullValue ) {
    cssObject[selector]['background'] = background;
    cssObject[selector + '::-webkit-progress-bar'] = {
      'background': background
    };

    // Indeterminate
    cssObject[selector + ':indeterminate']['background'] = 'transparent';
    cssObject[selector + ':indeterminate::-webkit-progress-bar'] = {
      'background': 'transparent'
    };
  }

  // Border
  if ( border !== nullValue ) {
    cssObject[selector]['border-color'] = border;

    // Indeterminate
    cssObject[selector + ':indeterminate']['border-color'] = 'transparent';
  }

  return cssObject;
}

module.exports = progressColor;