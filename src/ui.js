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
    const resource = element('link', 'rel', 'stylesheet', 'href', 'data:text/css;base64,QGtleWZyYW1lcyBye3Rve3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19I2ltYWc3e3VzZXItc2VsZWN0Om5vbmU7YmFja2dyb3VuZDp2YXIoLS1jb2xvcjIsIzIyMyk7Y29sb3I6I2FhYTtwb3NpdGlvbjpmaXhlZDt6LWluZGV4Ojk5OTk5OTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnN9I2ltYWc3ICNpbnNpNyBpbWd7YmFja2dyb3VuZDp2YXIoLS1jb2xvcjEsIzMzNCk7bWF4LWhlaWdodDoxMDAlO21heC13aWR0aDoxMDAlfSNpbWFnNyAqLCNpbWFnNyA6OmFmdGVyLCNpbWFnNyA6OmJlZm9yZXtmb250OjEycHgvNCBzYW5zLXNlcmlmO3Bvc2l0aW9uOmFic29sdXRlO2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmlubGluZS1ibG9ja30jaW1hZzcgYnV0dG9uICp7ei1pbmRleDotMTtwb2ludGVyLWV2ZW50czpub25lfSNpbWFnNyAjaW5zaTd7dGV4dC1hbGlnbjpjZW50ZXJ9I2ltYWc3ICNmb290NywjaW1hZzcgI29ub3c3e3RleHQtaW5kZW50OjUwcHg7d2hpdGUtc3BhY2U6bm93cmFwO2JvdHRvbToyNHB4O2hlaWdodDo0OHB4fSNpbWFnNyAjYWx0czd7cmlnaHQ6NTBweH0jaW1hZzcgI2FsdHM3LCNpbWFnNyAjaW5zaTcsI2ltYWc3ICNpbnNpNyBpbWcsI2ltYWc3ICNzdGF0N3twb3NpdGlvbjpyZWxhdGl2ZX0jaW1hZzcgI3N0YXQ3e3RleHQtaW5kZW50OjB9I2ltYWc3ICNsZWZ0NywjaW1hZzcgI3JpZ3Q3e3dpZHRoOjIwJTttaW4td2lkdGg6OTZweDtib3JkZXI6MDtiYWNrZ3JvdW5kOjAgMDtoZWlnaHQ6MTAwJX0jaW1hZzcgI2lsZWY3OjphZnRlciwjaW1hZzcgI2lyaWc3OjphZnRlcntwYWRkaW5nOjlweDt0b3A6MTRweH0jaW1hZzcgI2lsZWY3OjphZnRlcntib3JkZXItd2lkdGg6MnB4IDAgMCAycHg7bGVmdDoxNHB4fSNpbWFnNyAjaXJpZzc6OmFmdGVye3JpZ2h0OjE0cHg7Ym9yZGVyLXdpZHRoOjJweCAycHggMCAwfSNpbWFnNyAjbGVmdDc6aG92ZXIgI2lsZWY3OjphZnRlcntsZWZ0OjlweH0jaW1hZzcgI3JpZ3Q3OmhvdmVyICNpcmlnNzo6YWZ0ZXJ7cmlnaHQ6OXB4fSNpbWFnNyAjY2xvczc6OmFmdGVyLCNpbWFnNyAjY2xvczc6OmJlZm9yZXtib3JkZXItd2lkdGg6MCAwIDAgMnB4O2hlaWdodDozMHB4O2xlZnQ6MjNweDt0b3A6MTBweH0jaW1hZzcgI3BsYXk3OjpiZWZvcmUsI2ltYWc3ICNzcG57Ym9yZGVyLXJhZGl1czo1MCU7aGVpZ2h0OjI0cHg7d2lkdGg6MjRweH0jaW1hZzcgI3NwbnthbmltYXRpb246ciAuM3MgbGluZWFyIGluZmluaXRlO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCAjYWFhO2xlZnQ6NTAlO21hcmdpbjotMTJweCAwIDAtMTJweDt0b3A6NTAlfSNpbWFnNyAjZG93bjd7Ym9yZGVyLXJhZGl1czowIDAgMnB4IDJweDt0b3A6MjdweDtoZWlnaHQ6NnB4O3dpZHRoOjI0cHg7Ym9yZGVyLXRvcDowfSNpbWFnNyAjcGxheTc6OmJlZm9yZXt0cmFuc2l0aW9uOi4ycyBib3JkZXItcmFkaXVzO3RvcDoxMnB4fSNpbWFnNyAjcGxheTcuYXRjOjpiZWZvcmV7Ym9yZGVyLXJhZGl1czo0cHh9I2ltYWc3ICNwbGF5Nzo6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50ICNmZmY7Ym9yZGVyLXdpZHRoOjVweCAwIDVweCAxMnB4O2xlZnQ6MTlweDt0b3A6MTlweDt3aWR0aDoxMHB4fSNpbWFnNyAjcGxheTcuYXRjOjphZnRlcntib3JkZXItd2lkdGg6MCAycHg7cGFkZGluZy10b3A6MTBweH0jaW1hZzcgI3dkb3c3OjphZnRlcntib3JkZXItd2lkdGg6MCAwIDJweCAycHg7Ym90dG9tOjIxcHg7aGVpZ2h0OjEycHg7bGVmdDoxOHB4O3dpZHRoOjEycHh9I2ltYWc3ICN3ZG93Nzo6YmVmb3Jle2JhY2tncm91bmQ6I2ZmZjtoZWlnaHQ6MThweDtsZWZ0OjIzcHg7dG9wOjlweDt3aWR0aDoycHh9I2ltYWc3ICNjbG9zN3t0b3A6MjRweH0jaW1hZzcgI2Rvd243LCNpbWFnNyAjcGxheTc6OmJlZm9yZXtsZWZ0OjEycHh9I2ltYWc3ICNjbG9zNywjaW1hZzcgI2lyaWc3LCNpbWFnNyAjb25vdzd7cmlnaHQ6MjRweDt0ZXh0LWFsaWduOnJpZ2h0fSNpbWFnNyAjZm9vdDcsI2ltYWc3ICNpbGVmN3tsZWZ0OjI0cHh9I2ltYWc3ICNpbnNpNyBpbWcsI2ltYWc3IC50cm57dG9wOjUwJTt6LWluZGV4Oi0xO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpfSNpbWFnNyAucnRwOjphZnRlciwjaW1hZzcgLnJ0cDo6YmVmb3Jle3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpfSNpbWFnNyAucnRtOjphZnRlcnt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9I2ltYWc3IC53MTAsI2ltYWc3LncxMHtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlfSNpbWFnNyAuYm9yLCNpbWFnNyAuYnJhOjphZnRlciwjaW1hZzcgLmJyYjo6YmVmb3Jle2JvcmRlcjoycHggc29saWQgI2ZmZn0jaW1hZzcgLmJ1dHtiYWNrZ3JvdW5kOnJnYmEoNzcsNzcsNzcsLjIpO2hlaWdodDo0OHB4O3dpZHRoOjQ4cHg7Ym9yZGVyLXJhZGl1czo1MCU7Ym9yZGVyOjA7Y3Vyc29yOnBvaW50ZXI7dHJhbnNpdGlvbjouMnN9I2ltYWc3IC5idXQ6OmFmdGVyLCNpbWFnNyAuYnV0OjpiZWZvcmV7Y29udGVudDoiIn0jaW1hZzcgLmJ1dDpmb2N1cywjaW1hZzcgLmJ1dDpob3ZlciwjaW1hZzcgLmJ1dDpob3ZlciBzcGFue2JhY2tncm91bmQ6cmdiYSg3LDcsNywuMSk7b3V0bGluZTowO29wYWNpdHk6MX0jaW1hZzcgLmJ1dDphY3RpdmV7b3BhY2l0eTouM30jaW1hZzcgLmRwbnt2aXNpYmlsaXR5OmhpZGRlbn0jaW1hZzcgLmhkaSwjaW1hZzcuaGRpe29wYWNpdHk6MH0jaW1hZzcgLm9wYXtvcGFjaXR5Oi43fSNpbWFnNyAucmd0e3JpZ2h0OjB9I2ltYWc3IC50cG8sI2ltYWc3LnRwb3t0b3A6MH0jaW1hZzcgLmxmdCwjaW1hZzcubGZ0e2xlZnQ6MH0jaW1hZzcgLmZmZiwjaW1hZzcuZmZmLGh0bWwuZmZme292ZXJmbG93OmhpZGRlbiFpbXBvcnRhbnR9I2ltYWc3LnNjYXt0cmFuc2Zvcm06c2NhbGUoMCl9QG1lZGlhIChtaW4td2lkdGg6MTAyNHB4KXsjaW1hZzc6bm90KDpob3ZlcikgI2NlbnQ3fmRpdiwjaW1hZzc6bm90KDpob3ZlcikgI2luc2k3fmJ1dHRvbntvcGFjaXR5OjB9fQ==');
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
