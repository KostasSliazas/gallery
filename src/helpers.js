/*jshint esversion: 11 */
// Use JSHint to enforce ECMAScript version 11 (ES2020) syntax rules.

// Select the document and document element for convenient use
// const w = window; // Reference to the global window object
const d = document; // Reference to the document object
const de = d.documentElement; // Reference to the root <html> element

// Helper function to append multiple child elements to a parent element
const append = (parentElement, ...childElements) => {
  // Iterate over all child elements passed to the function
  for (let i = 0; i < childElements.length; i++) {
    parentElement.appendChild(childElements[i]); // Append each child to the parent
  }
};

// Helper function to create an HTML element with attributes
const element = (tagName, ...attributes) => {
  // Create a new element with the specified tag name
  const newElement = d.createElement(tagName);

  // Loop through the provided attributes and add them to the element
  for (let i = 0; i < attributes.length; i += 2) {
    // attributes are passed in pairs (attribute name and value)
    newElement.setAttribute(attributes[i], attributes[i + 1]);
  }
  return newElement; // Return the created element
};

// Helper function to introduce a delay before executing a callback function
// const delay = (callback, milliseconds) => setTimeout(callback, milliseconds);

// Export the helper functions for use in other modules or scripts
export { element, append,/* w,*/ d, de/*, delay */};
