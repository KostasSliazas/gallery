/*jshint esversion: 11 */
// Use JSHint to enforce ECMAScript version 11 (ES2020) syntax rules.
import { w } from './helpers';

/**
 * Sets up event listeners for user interactions, enabling keyboard and click actions.
 * Optional touch-based swiping support is included but commented out.
 *
 * @function listeners
 * @memberof UI
 * @this UI
 *
 * @description
 * - Maps keyboard and click events to specific actions for autoplay, navigation, closing, and downloading.
 * - Handles user input to control the UI state based on key presses or element interactions.
 *
 * @example
 * const ui = new UI();
 * ui.listeners(); // Activates event listeners for this instance.
 */
export function listeners() {
  const that = this;

  /**
   * Action map for key presses and clicks, linking to UI functionality.
   * @type {Object.<string, Function>}
   */
  const k = {
    play7() {
      that.autoPlayLoop();
    }, // Play/pause action
    left7() {
      that.lefts().show();
    }, // Move left action
    rigt7() {
      that.right().show();
    }, // Move right action
    clos7() {
      that.close();
    }, // Close action
    wdow7() {
      that.downloads();
    }, // Download action
  };

  // Map additional keys to specific actions
  k[` `] = k.play7; // Space for play/pause
  k[`ArrowLeft`] = k.left7; // Left arrow for left navigation
  k[`ArrowRight`] = k.rigt7; // Right arrow for right navigation
  // k[`Escape`] = k.clos7; // Escape for close action

  /**
   * Handles keyboard and click events, invoking the appropriate action.
   *
   * @param {KeyboardEvent|MouseEvent} e - The event object.
   */
  const switcher = e => {
    // Get the event key or target ID
    const ev = e.key || e.target.id;
    // for escape button only just close immediately
    if (ev === 'Escape' || ev === 'clos7') that.close();

    if (!k[ev] || that.isAutoPlayOn || !that.isActive || e.isComposing || e.key === 229) {
      // Execute the corresponding action or clear the state if no match
      that.clear();
      return;
    }

    k[ev]();

    // Prevent default behavior and stop event propagation
    e.preventDefault();
    e.stopImmediatePropagation();
  };

  // Optional touch handling (commented out)
  // Uncomment and implement touchStart and touchEnd if needed for swipe actions

  // const minHorizontalMove = 30;
  // const maxVerticalMove = 30;
  // const withinMs = 1000;
  // let startXPos, startYPos, startTime;
  //
  // // Record starting position and time on touch start
  // function touchStart(e) {
  //   const touch = e.touches[0];
  //   startXPos = touch.pageX;
  //   startYPos = touch.pageY;
  //   startTime = new Date();
  // }
  //
  // // Check for swipe left/right on touch end and trigger corresponding action
  // function touchEnd(e) {
  //   const touch = e.changedTouches[0];
  //   const endXPos = touch.pageX;
  //   const endYPos = touch.pageY;
  //   const endTime = new Date();
  //
  //   const moveX = endXPos - startXPos;
  //   const moveY = endYPos - startYPos;
  //   const elapsedTime = endTime - startTime;
  //
  //   const isHorizontalMove = Math.abs(moveX) > minHorizontalMove;
  //   const isVerticalMove = Math.abs(moveY) < maxVerticalMove;
  //   const isWithinTime = elapsedTime < withinMs;
  //
  //   if (isHorizontalMove && isVerticalMove && isWithinTime) {
  //     k[moveX < 0 ? 'rigt7' : 'left7']();
  //   }
  // }
  //
  // // Attach event listeners to relevant DOM elements and the window
  // that.imag.addEventListener('touchstart', touchStart, { passive: true });
  // that.imag.addEventListener('touchend', touchEnd);

  // Attach event listeners for click and keyboard events
  that.imag.addEventListener('click', switcher.bind(that));
  window.addEventListener('keyup', switcher.bind(that));
}
