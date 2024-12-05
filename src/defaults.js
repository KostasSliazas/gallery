/*jshint esversion: 11 */
// Use JSHint to enforce ECMAScript version 11 (ES2020) syntax rules.

/**
 * @fileOverview Default configuration settings for the application.
 * @version 1.0.0
 * @author Kostas Šliažas
 */

/**
 * Default configuration object for the application.
 * @namespace defaults
 * @property {number} delaySeconds - Delay time in milliseconds before the next action.
 * @property {string} folder - Folder name or image prefix (prefix should not include '/').
 * @property {string} imageContainer - Class name for the image container. If empty, all images are selected.
 * @property {number} showButtons - Determines if buttons are displayed (1 = true, 0 = false).
 * @property {number} showButtonsOnPlay - Determines if buttons are displayed during autoplay (1 = true, 0 = false).
 * @property {string} extension - Additional extension for high-resolution images. Empty string uses the same extension.
 */
export const defaults = {
  delaySeconds: 1033, // Delay time in milliseconds before the next action.
  folder: 'l/', // Folder name or image prefix (prefix should not include '/').
  imageContainer: 'images', // Class name for the image container. If empty, all images are selected.
  showButtons: 1, // Display buttons by default. (true = 1 and false = 0)
  showButtonsOnPlay: 1, // Display buttons when autoplay is active.
  extension: '', // Additional extension for large resolution (empty = same image extension).
};
