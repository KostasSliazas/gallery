/*jshint esversion: 11 */
// Use JSHint to enforce ECMAScript version 11 (ES2020) syntax rules.

// Default configurations
export const defaults = {
  delaySeconds: 1033, // Delay time in milliseconds before the next action.
  folder: 'l/', // Folder name or image prefix(prefix should be without'/') for image resources.
  imageContainer: 'images', // className for the container.When '' all images will be selected.
  showButtons: 1, // Display buttons by default. (true = 1 and false = 0)
  showButtonsOnPlay: 1, // Display buttons when autoplay is active.
  extension: '' // Additional extension for large resolution ('' = same image extension).
};
