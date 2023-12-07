/*jshint esversion: 11 */
// Use JSHint to enforce ECMAScript version 11 (ES2020) syntax rules.

// Import necessary utilities
import { element, append, de, delay } from "./helpers";

// Define methods for the UI prototype
export const methods = {
  // Start auto-play loop with a delay
  autoPlayLoop() {
    this.isAutoPlayOn = true;

    // Update play button's class if necessary
    if (this.showButtons) this.play.className = "but tpo lft bra brb opa atc";

    // Set a timeout to move to the next image after a specified delay
    this.timeOut = delay(() => {
      this.right().show();

      // Hide buttons if configured not to show during auto-play
      if (!this.showButtonsOnPlay) {
        this.left.className = this.rigt.className = this.clos.className = "dpn";
        if (this.showButtons) this.foot.className = this.onow.className = "dpn";
      }

      // Clear auto-play if the last image is reached
      if (this.indexOfImage === this.imagesArray.length - 1) this.clear();
    }, this.delaySeconds);
  },

  // Callback when image loading is complete
  loadComplete() {
    // Hide the spinner
    this.spin.className = "dpn";

    // Resume auto-play if it was active
    if (this.isAutoPlayOn) this.autoPlayLoop();
  },

  // Trigger download of the current image
  downloads() {
    const a = element("a", "rel", "noopener", "download", this.imgs.src.split("/").pop(), "href", this.imgs.src, "target", "_blank");
    a.click();
    a.remove();
  },

  // Move to the previous image
  lefts() {
    this.indexOfImage = this.indexOfImage > 0 ? this.indexOfImage - 1 : this.imagesArray.length - 1;
    return this;
  },

  // Move to the next image
  right() {
    this.indexOfImage = this.indexOfImage < this.imagesArray.length - 1 ? this.indexOfImage + 1 : 0;
    return this;
  },

  // Clear auto-play and reset UI state
  clear() {
    clearTimeout(this.timeOut);
    this.isAutoPlayOn = false;

    // Reset button and UI visibility
    if (this.showButtons) {
      this.foot.className = this.onow.className = "";
      this.play.className = "but tpo lft bra brb opa";
    }
    if (!this.showButtonsOnPlay) this.clos.className = "but bra brb rtm rtp opa";

    // Adjust visibility of left and right buttons
    this.leftRigthBtnsShow();
    return this;
  },

  // Close the image viewer
  close() {
    this.imag.className = "hdi w10 tpo lft";
    this.isActive = false;
    de.className = de.className.split("fff").join("").trim();
  },

  // Adjust visibility of left and right buttons based on the current image index
  leftRigthBtnsShow() {
    this.left.className = this.indexOfImage === 0 ? "dpn" : "tpo lft hvr";
    this.rigt.className = this.indexOfImage === this.imagesArray.length - 1 ? "dpn" : "tpo rgt hvr";
  },

  // Show the current image
  show() {
    const index = this.imagesArray[this.indexOfImage];
    const imageSource = index.src;

    // Generate full file path with folder and extension
    const fileName = imageSource.split("/").pop();
    const arrayFileName = fileName.split(".");
    const fileNameWithExtension = arrayFileName[0] + "." + (this.extension || arrayFileName[1]);
    const fullNamePrefixed = arrayFileName === "svg" ? imageSource : imageSource.replace(fileName, this.folder + fileNameWithExtension);

    // Activate the UI if not active
    if (!this.isActive) {
      this.isActive = true;
      delay(() => { de.className = de.className ? de.className + " fff" : "fff"; }, 90);
      this.imag.className = "fff w10 tpo lft";
    }

    // Check if the image source matches the current image; if so, do nothing
    if (this.imgs.src === fullNamePrefixed || this.imgs.src === imageSource) return;

    // Update UI state and trigger image loading
    this.leftRigthBtnsShow();
    this.spin.className = "bor";
    this.insi.className = 'hdi w10';

    delay(() => { this.insi.className = "w10"; }, 232);

    this.imgs.removeAttribute('src');

    // Handle errors during image loading by resetting and retrying
    this.imgs.onerror = function (e) {
      e.target.onerror = null;
      e.target.src = imageSource;
    };

    // Load the image source
    this.imgs.onload = function (e) {
      // Update UI elements with image information
      if (this.showButtons) {
        this.alts.innerText = e.target.src.split("/").pop();
        this.fine.innerText = Number(this.indexOfImage) + 1;
      }

      // Complete image loading
      this.loadComplete();
    }.bind(this);

    // Set the image source based on the file type
    if (arrayFileName[1] !== "svg") this.imgs.src = fullNamePrefixed;
    else this.imgs.src = imageSource;
  },

  // Listen for clicks on images and show the corresponding image
  listenForIG(e) {
    const target = e.target;
    if (target.tagName === "IMG") {
      this.indexOfImage = this.imagesArray.indexOf(target) > -1 ? this.imagesArray.indexOf(target) : 0;
      this.show();
      e.stopImmediatePropagation();
    }
  }
};
