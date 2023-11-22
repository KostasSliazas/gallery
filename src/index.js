/*jshint esversion: 11 */

import { UI } from "./ui";
import { listeners } from "./events";
import { methods } from "./methods";
import { defaults } from "./defaults";

// Assign methods to UI prototype
Object.assign(UI.prototype, methods);

// Create UI (user interface)
const ui = new UI(defaults);

// Get all images into an array
ui.addImagesToArray();

// Initialize UI
ui.init();

// Add event listeners
listeners.call(ui);

