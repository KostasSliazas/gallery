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
    play7() { that.isAutoPlayOn ? that.clear() : that.autoPlayLoop(); }, // Play/pause action
    left7() { that.clear().lefts().show(); }, // Move left action
    rigt7() { that.clear().right().show(); }, // Move right action
    clos7() { that.clear().close(); }, // Close action
    wdow7() { that.clear().downloads(); } // Download action
  };

  // Map additional keys to specific actions
  k[' '] = k.play7;          // Spacebar for play/pause
  k['ArrowLeft'] = k.left7;  // Left arrow for left navigation
  k['ArrowRight'] = k.rigt7; // Right arrow for right navigation
  k['Escape'] = k.clos7;     // Escape for close action

  /**
   * Handles keyboard and click events, invoking the appropriate action.
   *
   * @param {KeyboardEvent|MouseEvent} e - The event object.
   */
  function switcher(e) {
    if (!that.isActive || e.isComposing || e.key === 229) return;

    // Get the event key or target ID
    const ev = e.key || e.target.id;

    // Execute the corresponding action or clear the state if no match
    if (!k[ev]) return that.clear();
    k[ev]();

    // Prevent default behavior and stop event propagation
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  // Optional touch handling (commented out)
  // Uncomment and implement touchStart and touchEnd if needed for swipe actions

  // Attach event listeners for click and keyboard events
  that.imag.addEventListener('click', switcher.bind(that));
  w.addEventListener('keyup', switcher.bind(that));
}
