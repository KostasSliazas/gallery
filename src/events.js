export function listeners () {
  // to variable this
  const that = this

  // chaining methods to handle
  const k = {
    play7() { that.isAutoPlayOn ? that.clear() : that.autoPlayLoop() },
    left7() { that.clear().lefts().show() },
    rigt7() { that.clear().right().show() },
    clos7() { that.clear().close() },
    wdow7() { that.clear().downloads() }
  };

  // methods for arrow keys escape and tab to k object
  k[' '] = k['play7'] // eslint-disable-line
  k['ArrowLeft'] = k['left7'] // eslint-disable-line
  k['ArrowRight'] = k['rigt7'] // eslint-disable-line
  k['Escape'] = k['clos7'] // eslint-disable-line

  function switcher (e) {
    if (!that.isActive || e.isComposing || e.key === 229) return
    // event key or target id
    const ev = e.key || e.target.id
    if (!k[ev]) return that.clear()
    k[ev]()
    e.preventDefault()
    e.stopImmediatePropagation()
  }


  // everything to handle swipe left/right
  // https://code-maven.com/swipe-left-right-vanilla-javascript
const minHorizontalMove = 30;
const maxVerticalMove = 30;
const withinMs = 1000;
let startXPos, startYPos, startTime;

function touchStart(e) {
  const touch = e.touches[0];
  startXPos = touch.pageX;
  startYPos = touch.pageY;
  startTime = new Date();
}

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

  that.imag.addEventListener('touchstart', touchStart, { passive: true })
  that.imag.addEventListener('touchend', touchEnd)
  that.imag.addEventListener('click', switcher.bind(that))
  window.addEventListener('keyup', switcher.bind(that))
}
