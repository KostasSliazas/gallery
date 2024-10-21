/*jshint esversion: 11 */
import { element, append, d, delay } from './helpers';
// let _isLoaded = false
class UI {
  constructor(conf) {
    // Constructor to initialize UI instance with configuration
    // if (_isLoaded) { return }
    // _isLoaded = true
    const that = this;
    Object.assign(that, conf);
    that.imagesArray = []; // all elements array
    that.indexOfImage = null;
    that.isAutoPlayOn = false;
    that.isActive = false;
    that.timeOut = 0;
  }

  addImagesToArray() {
    const that = this;
    const container = d.getElementsByClassName(that.imageContainer).length > 0 ? d.getElementsByClassName(that.imageContainer) : d.getElementsByTagName('body');

    // micro optimization but we use it twice in code
    const containerLength = container.length
    // Loop through elements and add to array
    for (let i = 0; i < containerLength; i++) that.imagesArray.push.apply(that.imagesArray, container[i].getElementsByTagName('img'));

    const clickHandler = function (e) { that.listenForIG(e);}.bind(that);

    if (container[0] && container[0].tagName === 'BODY') d.body.onclick = clickHandler;     // Set click handler on the body if the container is the body
    else for (let i = 0; i < containerLength; i++) container[i].onclick = clickHandler; // Set click handler on each container element
    return that.imagesArray.length
  }

  init() {
    const that = this;
    // add link CSS to head with base64 string
    const resource = element('link', 'rel', 'stylesheet', 'href', 'data:text/css;base64,QC13ZWJraXQta2V5ZnJhbWVzIHJ7dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1Aa2V5ZnJhbWVzIHJ7dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX0jaW1hZzd7dXNlci1zZWxlY3Q6bm9uZTtiYWNrZ3JvdW5kOiMyMjM7Y29sb3I6Izc3Nztwb3NpdGlvbjpmaXhlZDt6LWluZGV4Ojk5OTk5OTt0cmFuc2l0aW9uOi4ycyB0cmFuc2Zvcm19I2ltYWc3ICNpbnNpNyBpbWd7YmFja2dyb3VuZDojMzM0O21heC1oZWlnaHQ6MTAwJTttYXgtd2lkdGg6MTAwJX0jaW1hZzcgKiwjaW1hZzcgOjphZnRlciwjaW1hZzcgOjpiZWZvcmV7Zm9udDoxMnB4LzQgc2Fucy1zZXJpZjtwb3NpdGlvbjphYnNvbHV0ZTtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTppbmxpbmUtYmxvY2t9I2ltYWc3IGJ1dHRvbiAqe3otaW5kZXg6LTE7cG9pbnRlci1ldmVudHM6bm9uZX0jaW1hZzcgI2luc2k3e3RleHQtYWxpZ246Y2VudGVyfSNpbWFnNyAjZm9vdDcsI2ltYWc3ICNvbm93N3t0ZXh0LWluZGVudDo1MHB4O3doaXRlLXNwYWNlOm5vd3JhcDtib3R0b206MjRweDtoZWlnaHQ6NDhweH0jaW1hZzcgI2FsdHM3e3JpZ2h0OjUwcHh9I2ltYWc3ICNhbHRzNywjaW1hZzcgI2luc2k3LCNpbWFnNyAjaW5zaTcgaW1nLCNpbWFnNyAjc3RhdDd7cG9zaXRpb246cmVsYXRpdmV9I2ltYWc3ICNzdGF0N3t0ZXh0LWluZGVudDowfSNpbWFnNyAjbGVmdDcsI2ltYWc3ICNyaWd0N3t3aWR0aDoyMCU7bWluLXdpZHRoOjk2cHg7Ym9yZGVyOjA7YmFja2dyb3VuZDowIDA7aGVpZ2h0OjEwMCV9I2ltYWc3ICNpbGVmNzo6YWZ0ZXIsI2ltYWc3ICNpcmlnNzo6YWZ0ZXJ7cGFkZGluZzo5cHg7dG9wOjE0cHh9I2ltYWc3ICNpbGVmNzo6YWZ0ZXJ7Ym9yZGVyLXdpZHRoOjJweCAwIDAgMnB4O2xlZnQ6MTRweH0jaW1hZzcgI2lyaWc3OjphZnRlcntyaWdodDoxNHB4O2JvcmRlci13aWR0aDoycHggMnB4IDAgMH0jaW1hZzcgI2xlZnQ3OmhvdmVyICNpbGVmNzo6YWZ0ZXJ7bGVmdDo5cHh9I2ltYWc3ICNyaWd0Nzpob3ZlciAjaXJpZzc6OmFmdGVye3JpZ2h0OjlweH0jaW1hZzcgI2Nsb3M3OjphZnRlciwjaW1hZzcgI2Nsb3M3OjpiZWZvcmV7Ym9yZGVyLXdpZHRoOjAgMCAwIDJweDtoZWlnaHQ6MzBweDtsZWZ0OjIzcHg7dG9wOjEwcHh9I2ltYWc3ICNwbGF5Nzo6YmVmb3JlLCNpbWFnNyAjc3Bue2JvcmRlci1yYWRpdXM6NTAlO2hlaWdodDoyNHB4O3dpZHRoOjI0cHh9I2ltYWc3ICNzcG57LXdlYmtpdC1hbmltYXRpb246ciAuM3MgbGluZWFyIGluZmluaXRlO2FuaW1hdGlvbjpyIC4zcyBsaW5lYXIgaW5maW5pdGU7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50ICNhYWE7bGVmdDo1MCU7bWFyZ2luOi0xMnB4IDAgMC0xMnB4O3RvcDo1MCV9I2ltYWc3ICNkb3duN3tib3JkZXItcmFkaXVzOjAgMCAycHggMnB4O3RvcDoyN3B4O2hlaWdodDo2cHg7d2lkdGg6MjRweDtib3JkZXItdG9wOjB9I2ltYWc3ICNwbGF5Nzo6YmVmb3Jle3RyYW5zaXRpb246LjJzIGJvcmRlci1yYWRpdXM7dG9wOjEycHh9I2ltYWc3ICNwbGF5Ny5hdGM6OmJlZm9yZXtib3JkZXItcmFkaXVzOjRweH0jaW1hZzcgI3BsYXk3OjphZnRlcntib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgI2ZmZjtib3JkZXItd2lkdGg6NXB4IDAgNXB4IDEycHg7bGVmdDoxOXB4O3RvcDoxOXB4O3dpZHRoOjEwcHh9I2ltYWc3ICNwbGF5Ny5hdGM6OmFmdGVye2JvcmRlci13aWR0aDowIDJweDtwYWRkaW5nLXRvcDoxMHB4fSNpbWFnNyAjd2Rvdzc6OmFmdGVye2JvcmRlci13aWR0aDowIDAgMnB4IDJweDtib3R0b206MjFweDtoZWlnaHQ6MTJweDtsZWZ0OjE4cHg7d2lkdGg6MTJweH0jaW1hZzcgI3dkb3c3OjpiZWZvcmV7YmFja2dyb3VuZDojZmZmO2hlaWdodDoxOHB4O2xlZnQ6MjNweDt0b3A6OXB4O3dpZHRoOjJweH0jaW1hZzcgI2Nsb3M3e3RvcDoyNHB4fSNpbWFnNyAjZG93bjcsI2ltYWc3ICNwbGF5Nzo6YmVmb3Jle2xlZnQ6MTJweH0jaW1hZzcgI2Nsb3M3LCNpbWFnNyAjaXJpZzcsI2ltYWc3ICNvbm93N3tyaWdodDoyNHB4O3RleHQtYWxpZ246cmlnaHR9I2ltYWc3ICNmb290NywjaW1hZzcgI2lsZWY3e2xlZnQ6MjRweH0jaW1hZzcgI2luc2k3IGltZywjaW1hZzcgLnRybnt0b3A6NTAlO3otaW5kZXg6LTE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpfSNpbWFnNyAucnRwOjphZnRlciwjaW1hZzcgLnJ0cDo6YmVmb3Jley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9I2ltYWc3IC5ydG06OmFmdGVyey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX0jaW1hZzcgLncxMCwjaW1hZzcudzEwe2hlaWdodDoxMDAlO3dpZHRoOjEwMCV9I2ltYWc3IC5ib3IsI2ltYWc3IC5icmE6OmFmdGVyLCNpbWFnNyAuYnJiOjpiZWZvcmV7Ym9yZGVyOjJweCBzb2xpZCAjZmZmfSNpbWFnNyAuYnV0e2JhY2tncm91bmQ6cmdiYSg3Nyw3Nyw3NywuMik7aGVpZ2h0OjQ4cHg7d2lkdGg6NDhweDtib3JkZXItcmFkaXVzOjUwJTtib3JkZXI6MDtjdXJzb3I6cG9pbnRlcjt0cmFuc2l0aW9uOi4yc30jaW1hZzcgLmJ1dDo6YWZ0ZXIsI2ltYWc3IC5idXQ6OmJlZm9yZXtjb250ZW50OiIifSNpbWFnNyAuYnV0OmZvY3VzLCNpbWFnNyAuYnV0OmhvdmVyLCNpbWFnNyAuYnV0OmhvdmVyIHNwYW57YmFja2dyb3VuZDpyZ2JhKDcsNyw3LC4xKTtvdXRsaW5lOjA7b3BhY2l0eToxfSNpbWFnNyAuYnV0OmFjdGl2ZXtvcGFjaXR5Oi4zfSNpbWFnNyAuZHBue3Zpc2liaWxpdHk6aGlkZGVufSNpbWFnNyAuaGRpLCNpbWFnNy5oZGl7b3BhY2l0eTowfSNpbWFnNyAub3Bhe29wYWNpdHk6Ljd9I2ltYWc3IC5yZ3R7cmlnaHQ6MH0jaW1hZzcgLnRwbywjaW1hZzcudHBve3RvcDowfSNpbWFnNyAubGZ0LCNpbWFnNy5sZnR7bGVmdDowfSNpbWFnNyAuZmZmLCNpbWFnNy5mZmYsaHRtbC5mZmZ7b3ZlcmZsb3c6aGlkZGVuIWltcG9ydGFudH0jaW1hZzcuc2Nhe3RyYW5zZm9ybTpzY2FsZSgwKX1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNHB4KXsjaW1hZzc6bm90KDpob3ZlcikgI2NlbnQ3fmRpdiwjaW1hZzc6bm90KDpob3ZlcikgI2luc2k3fmJ1dHRvbntvcGFjaXR5OjB9fQ==');
    // Append the stylesheet to the document head
    append(d.getElementsByTagName('head')[0], resource);
    // Shortened variable names for HTML elements
    const b = 'button'
    const s = 'span'
    const v = 'div'
    const a = 'aria-label'
    const c = 'class'
    const i = 'id'
    // All elements for UI rendering; first letter for element, other pairs are attributes
    that.clos = element(b, i, 'clos7', c, 'bra rtp opa but rtm brb', a, 'Close', 'title', 'Press Esc to close');
    that.ilef = element(s, i, 'ilef7', c, 'bra rtm opa trn but');
    that.irig = element(s, i, 'irig7', c, 'bra rtp opa but trn');
    that.imag = element(v, i, 'imag7', c, 'sca hdi fff w10 tpo lft','role','dialog', a, 'imag7');
    that.cent = element(v, i, 'cent7', c, 'tpo lft w10');
    that.left = element(b, i, 'left7', c, 'but tpo lft', a, 'Previous');
    that.rigt = element(b, i, 'rigt7', c, 'but tpo rgt', a, 'Next');
    that.insi = element(v, i, 'insi7', c, 'w10');
    that.spin = element(v, i, 'spn', c, 'dpn');
    that.imgs = element('img', 'src', 'src="data:image/gif;base64,R0lGODlhAQABAAAAACw="', 'alt', '');
    // that.imgs = element('img', 'src', 'src="data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAgA0JaQAA3AA/vuUAAA="', 'alt', 'alt'); // set first image src
    append(that.insi, that.imgs);
    append(that.rigt, that.irig);
    append(that.left, that.ilef);
    append(that.cent, that.insi, that.rigt, that.left, that.clos);
    append(that.imag, that.cent, that.spin);
    append(d.body, that.imag);

    // Show download and autoplay buttons if (true = default) otherwise not render
    if (that.showButtons) {
      that.wdow = element(b, i, 'wdow7', c, 'tpo rgt bra rtm opa but', a, 'download');
      that.play = element(b, i, 'play7', c, 'tpo lft bra brb opa but', a, 'play');
      that.foot = element(v, i, 'foot7');
      that.onow = element(v, i, 'onow7');
      that.alts = element(s, i, 'alts7', c, 'fff');
      that.fine = element(s, i, 'stat7');
      that.down = element(s, i, 'down7', c, 'bor');
      append(that.onow, that.alts, that.wdow);
      append(that.imag, that.onow, that.foot);
      append(that.foot, that.play, d.createTextNode('Image '),that.fine, d.createTextNode(' of ' + that.imagesArray.length));
      append(that.wdow, that.down);
    }
    // Remove last class name (.dpn = display none) some time (220ms) because 'black' squere shows (it's hack :( )
    // delay(() => that.imag.className = 'sca hdi fff w10 tpo lft', 220);
  }
}

export { UI };
