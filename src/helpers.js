/*jshint esversion: 11 */
// Use JSHint to enforce ECMAScript version 11 (ES2020) syntax rules.

// Select the document and document element for convenient use
const d = document;
const de = d.documentElement;

// Helper function to append multiple child elements to a parent element
const append = (parentElement, ...childElements) => {
    for (let i = 0; i < childElements.length; i++) {
        parentElement.appendChild(childElements[i]);
    }
};

// Helper function to create an HTML element with attributes
const element = (tagName, ...attributes) => {
    const newElement = d.createElement(tagName);
    for (let i = 0; i < attributes.length; i += 2) {
        newElement.setAttribute(attributes[i], attributes[i + 1]);
    }
    return newElement;
};

// Helper function to introduce a delay before executing a callback function
const delay = (callback, milliseconds) => setTimeout(callback, milliseconds);

// Export the helper functions for use in other modules or scripts
export { element, append, d, de, delay };
