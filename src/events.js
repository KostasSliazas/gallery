// Function to set up event listeners for user interactions
export function listeners() {
  // Save reference to 'this' in a variable for later use
  const that = this;

  // Define methods for various actions triggered by key presses or clicks
  const k = {
    play7() { that.isAutoPlayOn ? that.clear() : that.autoPlayLoop() }, // Play/pause action
    left7() { that.clear().lefts().show() }, // Move left action
    rigt7() { that.clear().right().show() }, // Move right action
    clos7() { that.clear().close() }, // Close action
    wdow7() { that.clear().downloads() } // Download action
  };

  // Map spacebar and arrow keys to corresponding methods
  k[' '] = k['play7'];
  k['ArrowLeft'] = k['left7'];
  k['ArrowRight'] = k['rigt7'];
  k['Escape'] = k['clos7'];

  // Function to handle key events and execute the corresponding action
  function switcher(e) {
    if (!that.isActive || e.isComposing || e.key === 229) return;

    // Determine the event key or target ID
    const ev = e.key || e.target.id;

    // Execute the corresponding action or clear if not found
    if (!k[ev]) return that.clear();
    k[ev]();

    // Prevent default behavior and stop propagation
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  // Touch event handling for swipe left/right
  const minHorizontalMove = 30;
  const maxVerticalMove = 30;
  const withinMs = 1000;
  let startXPos, startYPos, startTime;

  // Record starting position and time on touch start
  function touchStart(e) {
    const touch = e.touches[0];
    startXPos = touch.pageX;
    startYPos = touch.pageY;
    startTime = new Date();
  }

  // Check for swipe left/right on touch end and trigger corresponding action
  function touchEnd(e) {
    const touch = e.changedTouches[0];
    const endXPos = touch.pageX;
    const endYPos = touch.pageY;
    const endTime = new Date();

    const moveX = endXPos - startXPos;
    const moveY = endYPos - startYPos;
    const elapsedTime = endTime - startTime;

    const isHorizontalMove = Math.abs(moveX) > minHorizontalMove;
    const isVerticalMove = Math.abs(moveY) < maxVerticalMove;
    const isWithinTime = elapsedTime < withinMs;

    if (isHorizontalMove && isVerticalMove && isWithinTime) {
      k[moveX < 0 ? 'rigt7' : 'left7']();
    }
  }

  // Attach event listeners to relevant DOM elements and the window
  that.imag.addEventListener('touchstart', touchStart, { passive: true });
  that.imag.addEventListener('touchend', touchEnd);
  that.imag.addEventListener('click', switcher.bind(that));
  window.addEventListener('keyup', switcher.bind(that));
}
