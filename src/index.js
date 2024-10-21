/*jshint esversion: 11 */
// Use JSHint to enforce ECMAScript version 11 (ES2020) syntax rules.

// Import necessary modules
import { UI } from './ui';
import { listeners } from './events';
import { methods } from './methods';
import { defaults } from './defaults';

// Assign methods from the 'methods' module to the UI prototype
Object.assign(UI.prototype, methods);

// Create a new UI (user interface) instance with default configurations
const ui = new UI(defaults);

// Populate the UI instance with images retrieved from the DOM
const lenthOfImages = ui.addImagesToArray();

// if found images add other stuff
if(lenthOfImages){
// Initialize the UI, setting up initial configurations and state
ui.init();

// Add event listeners to enable user interactions
listeners.call(ui);
}
