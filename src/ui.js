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
    const resource = element('link', 'rel', 'stylesheet', 'href', 'data:text/css;base64,QC13ZWJraXQta2V5ZnJhbWVzIHJ7dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1Aa2V5ZnJhbWVzIHJ7dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX0jaW1hZzd7dXNlci1zZWxlY3Q6bm9uZTtiYWNrZ3JvdW5kOiMyMjM7Y29sb3I6Izc3Nztwb3NpdGlvbjpmaXhlZDt6LWluZGV4Ojk5OTk5OX0jaW1hZzcgI2luc2k3IGltZ3tiYWNrZ3JvdW5kOiMzMzQ7bWF4LWhlaWdodDoxMDAlO21heC13aWR0aDoxMDAlfSNpbWFnNyAqLCNpbWFnNyA6OmFmdGVyLCNpbWFnNyA6OmJlZm9yZXtmb250OjEycHgvNCBzYW5zLXNlcmlmO3Bvc2l0aW9uOmFic29sdXRlO2JveC1zaXppbmc6Ym9yZGVyLWJveH0jaW1hZzcgYnV0dG9uICp7ei1pbmRleDotMTtwb2ludGVyLWV2ZW50czpub25lfSNpbWFnNyAjaW5zaTd7dGV4dC1hbGlnbjpjZW50ZXJ9I2ltYWc3ICNmb290NywjaW1hZzcgI29ub3c3e3RleHQtaW5kZW50OjUwcHg7d2hpdGUtc3BhY2U6bm93cmFwO2JvdHRvbToyNHB4O2hlaWdodDo0OHB4fSNpbWFnNyAjYWx0czd7cmlnaHQ6NTBweH0jaW1hZzcgI2FsdHM3LCNpbWFnNyAjaW5zaTcsI2ltYWc3ICNpbnNpNyBpbWcsI2ltYWc3ICNzdGF0N3twb3NpdGlvbjpyZWxhdGl2ZX0jaW1hZzcgI2xlZnQ3LCNpbWFnNyAjcmlndDd7d2lkdGg6MjAlO21pbi13aWR0aDo5NnB4O2JvcmRlcjowO2JhY2tncm91bmQ6MCAwO2hlaWdodDoxMDAlfSNpbWFnNyAjaWxlZjc6OmFmdGVyLCNpbWFnNyAjaXJpZzc6OmFmdGVye3BhZGRpbmc6OXB4O3RvcDoxNHB4fSNpbWFnNyAjaWxlZjc6OmFmdGVye2JvcmRlci13aWR0aDoycHggMCAwIDJweDtsZWZ0OjE0cHh9I2ltYWc3ICNpcmlnNzo6YWZ0ZXJ7cmlnaHQ6MTRweDtib3JkZXItd2lkdGg6MnB4IDJweCAwIDB9I2ltYWc3ICNsZWZ0Nzpob3ZlciAjaWxlZjc6OmFmdGVye2xlZnQ6OXB4fSNpbWFnNyAjcmlndDc6aG92ZXIgI2lyaWc3OjphZnRlcntyaWdodDo5cHh9I2ltYWc3ICNjbG9zNzo6YWZ0ZXIsI2ltYWc3ICNjbG9zNzo6YmVmb3Jle2JvcmRlci13aWR0aDowIDAgMCAycHg7aGVpZ2h0OjMwcHg7bGVmdDoyM3B4O3RvcDoxMHB4fSNpbWFnNyAjcGxheTc6OmJlZm9yZSwjaW1hZzcgI3Nwbntib3JkZXItcmFkaXVzOjUwJTtoZWlnaHQ6MjRweDt3aWR0aDoyNHB4fSNpbWFnNyAjc3Buey13ZWJraXQtYW5pbWF0aW9uOnIgLjNzIGxpbmVhciBpbmZpbml0ZTthbmltYXRpb246ciAuM3MgbGluZWFyIGluZmluaXRlO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCAjYWFhO2xlZnQ6NTAlO21hcmdpbjotMTJweCAwIDAgLTEycHg7dG9wOjUwJX0jaW1hZzcgI2Rvd243e2JvcmRlci1yYWRpdXM6MCAwIDJweCAycHg7dG9wOjI3cHg7aGVpZ2h0OjZweDt3aWR0aDoyNHB4O2JvcmRlci10b3A6MH0jaW1hZzcgI3BsYXk3OjpiZWZvcmV7dHJhbnNpdGlvbjouMnMgYm9yZGVyLXJhZGl1czt0b3A6MTJweH0jaW1hZzcgI3BsYXk3LmF0Yzo6YmVmb3Jle2JvcmRlci1yYWRpdXM6NHB4fSNpbWFnNyAjcGxheTc6OmFmdGVye2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCAjZmZmO2JvcmRlci13aWR0aDo1cHggMCA1cHggMTJweDtsZWZ0OjE5cHg7dG9wOjE5cHg7d2lkdGg6MTBweH0jaW1hZzcgI3BsYXk3LmF0Yzo6YWZ0ZXJ7Ym9yZGVyLXdpZHRoOjAgMnB4O3BhZGRpbmctdG9wOjEwcHh9I2ltYWc3ICN3ZG93Nzo6YWZ0ZXJ7Ym9yZGVyLXdpZHRoOjAgMCAycHggMnB4O2JvdHRvbToyMXB4O2hlaWdodDoxMnB4O2xlZnQ6MThweDt3aWR0aDoxMnB4fSNpbWFnNyAjd2Rvdzc6OmJlZm9yZXtiYWNrZ3JvdW5kOiNmZmY7aGVpZ2h0OjE4cHg7bGVmdDoyM3B4O3RvcDo5cHg7d2lkdGg6MnB4fSNpbWFnNyAjY2xvczd7dG9wOjI0cHh9I2ltYWc3ICNkb3duNywjaW1hZzcgI3BsYXk3OjpiZWZvcmV7bGVmdDoxMnB4fSNpbWFnNyAjY2xvczcsI2ltYWc3ICNpcmlnNywjaW1hZzcgI29ub3c3e3JpZ2h0OjI0cHg7dGV4dC1hbGlnbjpyaWdodH0jaW1hZzcgI2Zvb3Q3LCNpbWFnNyAjaWxlZjd7bGVmdDoyNHB4fSNpbWFnNyAjaW5zaTcgaW1nLCNpbWFnNyAudHJue3RvcDo1MCU7ei1pbmRleDotMTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9I2ltYWc3IC5ydHA6OmFmdGVyLCNpbWFnNyAucnRwOjpiZWZvcmV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKX0jaW1hZzcgLnJ0bTo6YWZ0ZXJ7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfSNpbWFnNyAudzEwLCNpbWFnNy53MTB7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJX0jaW1hZzcgLmJvciwjaW1hZzcgLmJyYTo6YWZ0ZXIsI2ltYWc3IC5icmI6OmJlZm9yZXtib3JkZXI6MnB4IHNvbGlkICNmZmZ9I2ltYWc3IC5idXR7YmFja2dyb3VuZDpyZ2JhKDc3LDc3LDc3LC4yKTtoZWlnaHQ6NDhweDt3aWR0aDo0OHB4O2JvcmRlci1yYWRpdXM6NTAlO2JvcmRlcjowO2N1cnNvcjpwb2ludGVyfSNpbWFnNyAuYnV0OjphZnRlciwjaW1hZzcgLmJ1dDo6YmVmb3Jle2NvbnRlbnQ6IiJ9I2ltYWc3IC5idXQ6Zm9jdXMsI2ltYWc3IC5idXQ6aG92ZXIsI2ltYWc3IC5idXQ6aG92ZXIgc3BhbntiYWNrZ3JvdW5kOnJnYmEoNyw3LDcsLjEpO291dGxpbmU6MDtvcGFjaXR5OjF9I2ltYWc3IC5idXQ6YWN0aXZle29wYWNpdHk6LjN9I2ltYWc3IC5kcG57dmlzaWJpbGl0eTpoaWRkZW59I2ltYWc3IC5oZGksI2ltYWc3LmhkaXtvcGFjaXR5OjB9I2ltYWc3IC5vcGF7b3BhY2l0eTouN30jaW1hZzcgLnJndHtyaWdodDowfSNpbWFnNyAudHBvLCNpbWFnNy50cG97dG9wOjB9I2ltYWc3IC5sZnQsI2ltYWc3LmxmdHtsZWZ0OjB9I2ltYWc3IC5mZmYsI2ltYWc3LmZmZixodG1sLmZmZntvdmVyZmxvdzpoaWRkZW4haW1wb3J0YW50fSNpbWFnNy5zY2F7dHJhbnNmb3JtOnNjYWxlKDApfUBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI0cHgpeyNpbWFnNzpub3QoOmhvdmVyKSAjY2VudDd+ZGl2LCNpbWFnNzpub3QoOmhvdmVyKSAjaW5zaTd+YnV0dG9ue29wYWNpdHk6MH19');
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
    that.imgs = element('img', 'src', 'data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACwAAAAAAQABAEACAkQBADs=', 'alt', '', 'loading','lazy');
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
