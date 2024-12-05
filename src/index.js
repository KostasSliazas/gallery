/*jshint esversion: 11 */
// Use JSHint to enforce ECMAScript version 11 (ES2020) syntax rules.

// Import necessary modules
import { UI } from './ui'; // Import the UI class for managing the user interface
import { listeners } from './events'; // Import event listeners for handling user interactions
import { methods } from './methods'; // Import the methods module, which contains the image viewer functionality
import { defaults } from './defaults'; // Import default configuration settings for the UI

// Assign methods from the 'methods' module to the UI prototype
// This allows the UI instance to have access to methods defined in 'methods.js'
Object.assign(UI.prototype, methods);

// Create a new UI (user interface) instance with default configurations
const ui = new UI(defaults);

// Populate the UI instance with images retrieved from the DOM
const lengthOfImages = ui.addImagesToArray();

// if found images, initialize the UI and add event listeners
if (lengthOfImages) {
  // Initialize the UI, setting up initial configurations and state
  ui.init();

  // Add event listeners to enable user interactions like clicks on images
  listeners.call(ui);
}
