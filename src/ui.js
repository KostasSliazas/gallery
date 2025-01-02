/*jshint esversion: 11 */
// Use JSHint to enforce ECMAScript version 11 (ES2020) syntax rules.
import { element, append, d/*, delay*/ } from './helpers';

class UI {
  constructor(conf) {
    /**
     * Constructor initializes the UI instance with configuration.
     * @param {Object} conf - Configuration object containing user-defined settings.
     */
    const that = this;
    Object.assign(that, conf);
    that.imagesArray = []; // Stores all `img` elements found in the container
    that.indexOfImage = null; // Index of the current image being viewed
    that.isAutoPlayOn = false; // State to track autoplay functionality
    that.isActive = false; // State to check if UI is active
    that.timeOut = 0; // Autoplay timeout
  }

  addImagesToArray() {
    /**
     * Adds all `img` elements from the container to `imagesArray`.
     * Sets up event listeners for image click detection.
     * @returns {number} The number of images found and added to the array.
     */
    const that = this;
    const container = d.getElementsByClassName(that.imageContainer).length > 0 ? d.getElementsByClassName(that.imageContainer) : d.getElementsByTagName('body');
    const containerLength = container.length;

    for (let i = 0; i < containerLength; i++) {
      that.imagesArray.push(...container[i].getElementsByTagName('img'));
    }

    const clickHandler = e => {
      that.listenForIG(e);
    };

    if (container[0] && container[0].tagName === 'BODY') {
      d.body.onclick = clickHandler;
    } else {
      for (let i = 0; i < containerLength; i++) {
        container[i].onclick = clickHandler;
      }
    }

    return that.imagesArray.length;
  }

  init() {
    /**
     * Initializes the UI by setting up necessary DOM elements and styles.
     */
    const that = this;

    // Add inline CSS using base64 string
    const resource = element('link', 'rel', 'stylesheet', 'href', 'data:text/css;base64,QGtleWZyYW1lcyBye3Rve3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19I2ltYWc3e3VzZXItc2VsZWN0Om5vbmU7YmFja2dyb3VuZDp2YXIoLS1jb2xvcjIsIzIyMyk7Y29sb3I6I2FhYTtwb3NpdGlvbjpmaXhlZDt6LWluZGV4Ojk5OTk5OTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnN9I2ltYWc3ICNpbnNpNyBpbWd7YmFja2dyb3VuZDp2YXIoLS1jb2xvcjEsIzMzNCk7bWF4LWhlaWdodDoxMDAlO21heC13aWR0aDoxMDAlfSNpbWFnNyAqLCNpbWFnNyA6OmFmdGVyLCNpbWFnNyA6OmJlZm9yZXtmb250OjEycHgvNCBzYW5zLXNlcmlmO3Bvc2l0aW9uOmFic29sdXRlO2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmlubGluZS1ibG9ja30jaW1hZzcgYnV0dG9uICp7ei1pbmRleDotMTtwb2ludGVyLWV2ZW50czpub25lfSNpbWFnNyAjaW5zaTd7dGV4dC1hbGlnbjpjZW50ZXJ9I2ltYWc3ICNmb290NywjaW1hZzcgI29ub3c3e3RleHQtaW5kZW50OjUwcHg7d2hpdGUtc3BhY2U6bm93cmFwO2JvdHRvbToyNHB4O2hlaWdodDo0OHB4fSNpbWFnNyAjYWx0czd7cmlnaHQ6NTBweH0jaW1hZzcgI2FsdHM3LCNpbWFnNyAjaW5zaTcsI2ltYWc3ICNpbnNpNyBpbWcsI2ltYWc3ICNzdGF0N3twb3NpdGlvbjpyZWxhdGl2ZX0jaW1hZzcgI3N0YXQ3e3RleHQtaW5kZW50OjB9I2ltYWc3ICNsZWZ0NywjaW1hZzcgI3JpZ3Q3e3dpZHRoOjIwJTttaW4td2lkdGg6OTZweDtib3JkZXI6MDtoZWlnaHQ6MTAwJTtib3JkZXItcmFkaXVzOjB9I2ltYWc3ICNpbGVmNzo6YWZ0ZXIsI2ltYWc3ICNpcmlnNzo6YWZ0ZXJ7cGFkZGluZzo5cHg7dG9wOjE0cHh9I2ltYWc3ICNpbGVmNzo6YWZ0ZXJ7Ym9yZGVyLXdpZHRoOjJweCAwIDAgMnB4O2xlZnQ6MTRweH0jaW1hZzcgI2lyaWc3OjphZnRlcntyaWdodDoxNHB4O2JvcmRlci13aWR0aDoycHggMnB4IDAgMH0jaW1hZzcgI2xlZnQ3OmhvdmVyICNpbGVmNzo6YWZ0ZXJ7bGVmdDo5cHh9I2ltYWc3ICNyaWd0Nzpob3ZlciAjaXJpZzc6OmFmdGVye3JpZ2h0OjlweH0jaW1hZzcgI2Nsb3M3OjphZnRlciwjaW1hZzcgI2Nsb3M3OjpiZWZvcmV7Ym9yZGVyLXdpZHRoOjAgMCAwIDJweDtoZWlnaHQ6MzBweDtsZWZ0OjIzcHg7dG9wOjEwcHh9I2ltYWc3ICNwbGF5Nzo6YmVmb3JlLCNpbWFnNyAjc3Bue2JvcmRlci1yYWRpdXM6NTAlO2hlaWdodDoyNHB4O3dpZHRoOjI0cHh9I2ltYWc3ICNzcG57YW5pbWF0aW9uOnIgLjNzIGxpbmVhciBpbmZpbml0ZTtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgI2FhYTtsZWZ0OjUwJTttYXJnaW46LTEycHggMCAwLTEycHg7dG9wOjUwJX0jaW1hZzcgI2Rvd243e2JvcmRlci1yYWRpdXM6MCAwIDJweCAycHg7dG9wOjI3cHg7aGVpZ2h0OjZweDt3aWR0aDoyNHB4O2JvcmRlci10b3A6MH0jaW1hZzcgI3BsYXk3OjpiZWZvcmV7dHJhbnNpdGlvbjouMnMgYm9yZGVyLXJhZGl1czt0b3A6MTJweH0jaW1hZzcgI3BsYXk3LmF0Yzo6YmVmb3Jle2JvcmRlci1yYWRpdXM6NHB4fSNpbWFnNyAjcGxheTc6OmFmdGVye2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCAjZmZmO2JvcmRlci13aWR0aDo1cHggMCA1cHggMTJweDtsZWZ0OjE5cHg7dG9wOjE5cHg7d2lkdGg6MTBweH0jaW1hZzcgI3BsYXk3LmF0Yzo6YWZ0ZXJ7Ym9yZGVyLXdpZHRoOjAgMnB4O3BhZGRpbmctdG9wOjEwcHh9I2ltYWc3ICN3ZG93Nzo6YWZ0ZXJ7Ym9yZGVyLXdpZHRoOjAgMCAycHggMnB4O2JvdHRvbToyMXB4O2hlaWdodDoxMnB4O2xlZnQ6MThweDt3aWR0aDoxMnB4fSNpbWFnNyAjd2Rvdzc6OmJlZm9yZXtiYWNrZ3JvdW5kOiNmZmY7aGVpZ2h0OjE4cHg7bGVmdDoyM3B4O3RvcDo5cHg7d2lkdGg6MnB4fSNpbWFnNyAjY2xvczd7dG9wOjI0cHh9I2ltYWc3ICNkb3duNywjaW1hZzcgI3BsYXk3OjpiZWZvcmV7bGVmdDoxMnB4fSNpbWFnNyAjY2xvczcsI2ltYWc3ICNpcmlnNywjaW1hZzcgI29ub3c3e3JpZ2h0OjI0cHg7dGV4dC1hbGlnbjpyaWdodH0jaW1hZzcgI2Zvb3Q3LCNpbWFnNyAjaWxlZjd7bGVmdDoyNHB4fSNpbWFnNyAjaW5zaTcgaW1nLCNpbWFnNyAudHJue3RvcDo1MCU7ei1pbmRleDotMTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKX0jaW1hZzcgLnJ0cDo6YWZ0ZXIsI2ltYWc3IC5ydHA6OmJlZm9yZXt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKX0jaW1hZzcgLnJ0bTo6YWZ0ZXJ7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfSNpbWFnNyAudzEwLCNpbWFnNy53MTB7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJX0jaW1hZzcgLmJvciwjaW1hZzcgLmJyYTo6YWZ0ZXIsI2ltYWc3IC5icmI6OmJlZm9yZXtib3JkZXI6MnB4IHNvbGlkICNmZmZ9I2ltYWc3IC5idXR7YmFja2dyb3VuZDowIDA7aGVpZ2h0OjQ4cHg7d2lkdGg6NDhweDtib3JkZXItcmFkaXVzOjUwJTtib3JkZXI6MDtjdXJzb3I6cG9pbnRlcjt0cmFuc2l0aW9uOi4yc30jaW1hZzcgLmJ1dDo6YWZ0ZXIsI2ltYWc3IC5idXQ6OmJlZm9yZXtjb250ZW50OiIifSNpbWFnNyAuYnV0OmZvY3VzLCNpbWFnNyAuYnV0OmhvdmVyLCNpbWFnNyAuYnV0OmhvdmVyIHNwYW57YmFja2dyb3VuZDpyZ2JhKDcsNyw3LC4xKTtvcGFjaXR5OjE7b3V0bGluZTowfSNpbWFnNyAuYnV0OmFjdGl2ZXtvcGFjaXR5Oi4zfSNpbWFnNyAuZHBue2Rpc3BsYXk6bm9uZX0jaW1hZzcgLmhkaSwjaW1hZzcuaGRpe29wYWNpdHk6MH0jaW1hZzcgLm9wYXtvcGFjaXR5Oi43fSNpbWFnNyAucmd0e3JpZ2h0OjB9I2ltYWc3IC50cG8sI2ltYWc3LnRwb3t0b3A6MH0jaW1hZzcgLmxmdCwjaW1hZzcubGZ0e2xlZnQ6MH0jaW1hZzcgLmZmZiwjaW1hZzcuZmZmLGh0bWwuZmZme292ZXJmbG93OmhpZGRlbiFpbXBvcnRhbnR9I2ltYWc3LnNjYXt0cmFuc2Zvcm06c2NhbGUoMCl9');
    append(d.getElementsByTagName('head')[0], resource);

    // DOM elements setup
    that.clos = element('button', 'id', 'clos7', 'class', 'bra rtp opa but rtm brb', 'aria-label', 'Close', 'title', 'Press Esc to close');
    that.ilef = element('span', 'id', 'ilef7', 'class', 'bra rtm opa trn but');
    that.irig = element('span', 'id', 'irig7', 'class', 'bra rtp opa but trn');
    that.imag = element('div', 'id', 'imag7', 'class', 'sca hdi fff w10 tpo lft', 'role', 'dialog', 'aria-label', 'imag7');
    that.cent = element('div', 'id', 'cent7', 'class', 'tpo lft w10');
    that.left = element('button', 'id', 'left7', 'class', 'but tpo lft', 'aria-label', 'Previous');
    that.rigt = element('button', 'id', 'rigt7', 'class', 'but tpo rgt', 'aria-label', 'Next');
    that.insi = element('div', 'id', 'insi7', 'class', 'w10');
    that.spin = element('div', 'id', 'spn', 'class', 'dpn');
    that.imgs = element('img', 'src', 'data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACwAAAAAAQABAEACAkQBADs=', 'alt', '', 'loading', 'lazy');

    append(that.insi, that.imgs);
    append(that.rigt, that.irig);
    append(that.left, that.ilef);
    append(that.cent, that.insi, that.rigt, that.left, that.clos);
    append(that.imag, that.cent, that.spin);
    append(d.body, that.imag);

    if (that.showButtons) {
      // Additional elements for buttons (Download, Play, etc.)
      that.wdow = element('button', 'id', 'wdow7', 'class', 'tpo rgt bra rtm opa but', 'aria-label', 'download');
      that.play = element('button', 'id', 'play7', 'class', 'tpo lft bra brb opa but', 'aria-label', 'play');
      that.foot = element('div', 'id', 'foot7');
      that.onow = element('div', 'id', 'onow7');
      that.alts = element('span', 'id', 'alts7', 'class', 'fff');
      that.fine = element('span', 'id', 'stat7');
      that.down = element('span', 'id', 'down7', 'class', 'bor');

      append(that.onow, that.alts, that.wdow);
      append(that.imag, that.onow, that.foot);
      append(that.foot, that.play, d.createTextNode('Image '), that.fine, d.createTextNode(' of ' + that.imagesArray.length));
      append(that.wdow, that.down);
    }

    // Delay class change to prevent rendering glitches
    // delay(() => (that.imag.className = 'sca hdi fff w10 tpo lft'), 220);
  }
}

export { UI };
