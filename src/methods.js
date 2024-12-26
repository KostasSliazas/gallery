/*jshint esversion: 11 */
// Use JSHint to enforce ECMAScript version 11 (ES2020) syntax rules.

// Import necessary utilities
import { element, append, de, delay } from './helpers';

// Define methods for the UI prototype
export const methods = {
  // Start auto-play loop with a delay
  autoPlayLoop() {
    if (!this.isAutoPlayOn) {
      //set the play button active for first time (playing)
      if (this.showButtons) this.play.className = 'but bra brb opa tpo lft atc';
      if (!this.showButtonsOnPlay) {
        // Hide buttons if configured not to show during auto-play
        if (this.showButtons) {
          this.foot.className = this.onow.className = 'dpn';
        }
        this.left.className = this.rigt.className = this.clos.className = 'dpn';
      }
    }

    clearTimeout(this.timeOut);
    this.isAutoPlayOn = true;

    // Set a timeout to move to the next image after a specified delay
    this.timeOut = setTimeout(() => {
      if (this.isAutoPlayOn) {
        this.right().show();

        // Clear auto-play if the last image is reached
        if (this.indexOfImage === this.imagesArray.length - 1) return this.clear();
        this.autoPlayLoop();
      }
    }, this.delaySeconds);
  },

  // Trigger download of the current image
  downloads() {
    const a = element('a', 'rel', 'noopener', 'download', this.imgs.src.split('/').pop(), 'href', this.imgs.src, 'target', '_blank');
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
    //same classes names
    const classNames = 'but bra brb opa';
    // if show buttons compiled display them
    if (this.showButtons) {
      this.foot.className = this.onow.className = '';
      this.play.className = classNames + ' tpo lft';
    }
    // always show close button on clear
    this.clos.className = classNames + ' rtm rtp';
    this.leftRightButtonsVisibility();
    this.isAutoPlayOn = false;
    return this;
  },

  leftRightButtonsVisibility() {
    // Adjust visibility of left and right buttons based on the current image index
    this.left.className = this.indexOfImage === 0 ? 'dpn' : 'but tpo hvr lft';
    this.rigt.className = this.indexOfImage === this.imagesArray.length - 1 ? 'dpn' : 'but tpo hvr rgt';
  },

  // Close the image viewer
  close() {
    this.isActive = false;
    this.imag.className = 'sca hdi w10 tpo lft';
    de.className = de.className.split('fff').join('').trim();
  },

  // Show the current image
  show() {
    const index = this.imagesArray[this.indexOfImage];
    const imageSource = index.src;

    // Generate full file path with folder and extension
    const fileName = imageSource.split('/').pop();
    const arrayFileName = fileName.split('.');
    const fileNameWithExtension = arrayFileName[0] + '.' + (this.extension || arrayFileName[1]);
    const fullNamePrefixed = arrayFileName === 'svg' ? imageSource : imageSource.replace(fileName, this.folder + fileNameWithExtension);

    // Activate the UI if not active
    if (!this.isActive) {
      this.isActive = true;

      // delay(() => {
        de.className = de.className ? de.className + ' fff' : 'fff';
      // }, 34); // Delay for smoother fullscreen transition

      this.imag.className = 'fff w10 tpo lft';
    }

    // Prevent reloading if the current image matches the source
    if (this.imgs.src === fullNamePrefixed || this.imgs.src === imageSource) return;

    // Update UI state and trigger image loading
    this.spin.className = 'bor';

    // Remove old image and append the new one
    this.insi.removeChild(this.imgs);
    this.imgs = element('img', 'src', arrayFileName[1] !== 'svg' ? fullNamePrefixed : imageSource, 'alt', index.alt + ' selected');

    this.imgs.onload = e => {
      // Hide the spinner
      this.spin.className = 'dpn';
      // Resume auto-play if it was active

      if (this.showButtons) {
        this.alts.innerText = e.target.src.split('/').pop();
      }
    };

    this.imgs.onerror = e => {
      e.target.onerror = null;
      e.target.src = imageSource;
    };

    if (this.fine) this.fine.innerText = Number(this.indexOfImage) + 1;
    append(this.insi, this.imgs);

    // don't change left right visibility'
    if (this.isAutoPlayOn && !this.showButtonsOnPlay) return;

    this.leftRightButtonsVisibility();
  },

  // Listen for clicks on images and show the corresponding image
  listenForIG(e) {
    const target = e.target;
    if (target.tagName === 'IMG') {
      this.indexOfImage = this.imagesArray.indexOf(target) > -1 ? this.imagesArray.indexOf(target) : 0;
      this.show();
      e.stopImmediatePropagation();
    }
  },
};
