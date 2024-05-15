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

    // micro optimization but we use it twice in code :/
    const containerLength = container.length
    // Loop through elements and add to array
    for (let i = 0; i < containerLength; i++) that.imagesArray.push.apply(that.imagesArray, container[i].getElementsByTagName('img'));

    const clickHandler = function (e) { that.listenForIG(e);}.bind(that);

    if (container[0] && container[0].tagName === 'BODY') d.body.onclick = clickHandler;     // Set click handler on the body if the container is the body
    else for (let i = 0; i < containerLength; i++) container[i].onclick = clickHandler; // Set click handler on each container element
  }

  init() {
    const that = this;
    // add link CSS to head with base64 string
    const resource = element('link', 'rel', 'stylesheet', 'href', 'data:text/css;base64,QC13ZWJraXQta2V5ZnJhbWVzIHJ7dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1Aa2V5ZnJhbWVzIHJ7dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX0jaW1hZzd7dXNlci1zZWxlY3Q6bm9uZTtiYWNrZ3JvdW5kOiMyMjM7Y29sb3I6Izc3Nztwb3NpdGlvbjpmaXhlZDt6LWluZGV4Ojk5OTk5OTt0cmFuc2l0aW9uOi4ycyB0cmFuc2Zvcm19I2luc2k3IGltZ3tiYWNrZ3JvdW5kOiMzMzQ7bWF4LWhlaWdodDoxMDAlO21heC13aWR0aDoxMDAlfSNpbWFnNyAqLCNpbWFnNyA6OmFmdGVyLCNpbWFnNyA6OmJlZm9yZXtmb250OjEycHgvNCBzYW5zLXNlcmlmO3Bvc2l0aW9uOmFic29sdXRlO2JveC1zaXppbmc6Ym9yZGVyLWJveH0jaW1hZzcgYnV0dG9uICp7ei1pbmRleDotMTtwb2ludGVyLWV2ZW50czpub25lfSNpbnNpN3t0ZXh0LWFsaWduOmNlbnRlcn0jZm9vdDcsI29ub3c3e3RleHQtaW5kZW50OjUwcHg7d2hpdGUtc3BhY2U6bm93cmFwO2JvdHRvbToyNHB4O2hlaWdodDo0OHB4fSNhbHRzN3tyaWdodDo1MHB4fSNhbHRzNywjaW5zaTcsI2luc2k3IGltZywjc3RhdDd7cG9zaXRpb246cmVsYXRpdmV9I2xlZnQ3LCNyaWd0N3t3aWR0aDoyMCU7bWluLXdpZHRoOjk2cHg7Ym9yZGVyOjA7YmFja2dyb3VuZDowIDA7aGVpZ2h0OjEwMCV9I2lsZWY3OjphZnRlciwjaXJpZzc6OmFmdGVye3BhZGRpbmc6OXB4O3RvcDoxNHB4fSNpbGVmNzo6YWZ0ZXJ7Ym9yZGVyLXdpZHRoOjJweCAwIDAgMnB4O2xlZnQ6MTRweH0jaXJpZzc6OmFmdGVye3JpZ2h0OjE0cHg7Ym9yZGVyLXdpZHRoOjJweCAycHggMCAwfSNsZWZ0Nzpob3ZlciAjaWxlZjc6OmFmdGVye2xlZnQ6OXB4fSNyaWd0Nzpob3ZlciAjaXJpZzc6OmFmdGVye3JpZ2h0OjlweH0jY2xvczc6OmFmdGVyLCNjbG9zNzo6YmVmb3Jle2JvcmRlci13aWR0aDowIDAgMCAycHg7aGVpZ2h0OjMwcHg7bGVmdDoyM3B4O3RvcDoxMHB4fSNwbGF5Nzo6YmVmb3JlLCNzcG57Ym9yZGVyLXJhZGl1czo1MCU7aGVpZ2h0OjI0cHg7d2lkdGg6MjRweH0jc3Buey13ZWJraXQtYW5pbWF0aW9uOnIgLjNzIGxpbmVhciBpbmZpbml0ZTthbmltYXRpb246ciAuM3MgbGluZWFyIGluZmluaXRlO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCAjYWFhO2xlZnQ6NTAlO21hcmdpbjotMTJweCAwIDAtMTJweDt0b3A6NTAlfSNkb3duN3tib3JkZXItcmFkaXVzOjAgMCAycHggMnB4O3RvcDoyN3B4O2hlaWdodDo2cHg7d2lkdGg6MjRweDtib3JkZXItdG9wOjB9I3BsYXk3OjpiZWZvcmV7dHJhbnNpdGlvbjouMnMgYm9yZGVyLXJhZGl1czt0b3A6MTJweH0jcGxheTcuYXRjOjpiZWZvcmV7Ym9yZGVyLXJhZGl1czo0cHh9I3BsYXk3OjphZnRlcntib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgI2ZmZjtib3JkZXItd2lkdGg6NXB4IDAgNXB4IDEycHg7bGVmdDoxOXB4O3RvcDoxOXB4O3dpZHRoOjEwcHh9I3BsYXk3LmF0Yzo6YWZ0ZXJ7Ym9yZGVyLXdpZHRoOjAgMnB4O3BhZGRpbmctdG9wOjEwcHh9I3dkb3c3OjphZnRlcntib3JkZXItd2lkdGg6MCAwIDJweCAycHg7Ym90dG9tOjIxcHg7aGVpZ2h0OjEycHg7bGVmdDoxOHB4O3dpZHRoOjEycHh9I3dkb3c3OjpiZWZvcmV7YmFja2dyb3VuZDojZmZmO2hlaWdodDoxOHB4O2xlZnQ6MjNweDt0b3A6OXB4O3dpZHRoOjJweH0jY2xvczd7dG9wOjI0cHh9I2Rvd243LCNwbGF5Nzo6YmVmb3Jle2xlZnQ6MTJweH0jY2xvczcsI2lyaWc3LCNvbm93N3tyaWdodDoyNHB4O3RleHQtYWxpZ246cmlnaHR9I2Zvb3Q3LCNpbGVmN3tsZWZ0OjI0cHh9I2luc2k3IGltZywudHJue3RvcDo1MCU7ei1pbmRleDotMTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9LnJ0cDo6YWZ0ZXIsLnJ0cDo6YmVmb3Jley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9LnJ0bTo6YWZ0ZXJ7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfS5oZGl7b3BhY2l0eTowfS5zY2F7dHJhbnNmb3JtOnNjYWxlKDApfS53MTB7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJX0uYm9yLC5icmE6OmFmdGVyLC5icmI6OmJlZm9yZXtib3JkZXI6MnB4IHNvbGlkICNmZmZ9LmJ1dHtiYWNrZ3JvdW5kOnJnYmEoNzcsNzcsNzcsLjIpO2hlaWdodDo0OHB4O3dpZHRoOjQ4cHg7Ym9yZGVyLXJhZGl1czo1MCU7Ym9yZGVyOjA7Y3Vyc29yOnBvaW50ZXJ9LmJ1dDo6YWZ0ZXIsLmJ1dDo6YmVmb3Jle2NvbnRlbnQ6IiJ9LmJ1dDpmb2N1cywuYnV0OmhvdmVyLC5idXQ6aG92ZXIgc3BhbntiYWNrZ3JvdW5kOnJnYmEoNyw3LDcsLjEpO291dGxpbmU6MDtvcGFjaXR5OjF9LmJ1dDphY3RpdmV7b3BhY2l0eTouM30uZmZme292ZXJmbG93OmhpZGRlbiFpbXBvcnRhbnR9LmRwbntkaXNwbGF5Om5vbmV9Lm9wYXtvcGFjaXR5Oi43fS50cG97dG9wOjB9LmxmdHtsZWZ0OjB9LnJndHtyaWdodDowfQ==');
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
    that.imgs = element('img', 'src', 'src="data:,"', 'alt', 'alt');
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
