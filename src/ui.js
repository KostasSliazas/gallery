/*jshint esversion: 11 */
import { element, append, d, delay } from "./helpers";
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
    const container = d.getElementsByClassName(that.imageContainer).length > 0 ? d.getElementsByClassName(that.imageContainer) : d.getElementsByTagName("body");

    // micro optimization but we use it twice in code :/
    const containerLength = container.length
    // Loop through elements and add to array
    for (let i = 0; i < containerLength; i++) that.imagesArray.push.apply(that.imagesArray, container[i].getElementsByTagName("img"));

    const clickHandler = function (e) { that.listenForIG(e);}.bind(that);

    if (container[0] && container[0].tagName === "BODY") d.body.onclick = clickHandler;     // Set click handler on the body if the container is the body
    else for (let i = 0; i < containerLength; i++) container[i].onclick = clickHandler; // Set click handler on each container element
  }

  init() {
    const that = this;
    // add link CSS to head with base64 string
    const resource = element("link", "rel", "stylesheet", "href", "data:text/css;base64,QC13ZWJraXQta2V5ZnJhbWVzIHJ7dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1Aa2V5ZnJhbWVzIHJ7dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1ib2R5e292ZXJmbG93OmluaGVyaXQhaW1wb3J0YW50O21hcmdpbjowfSNpbWFnN3t1c2VyLXNlbGVjdDpub25lO2JhY2tncm91bmQ6IzIyMztjb2xvcjojNzc3O3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6OTk5OTk5O3RyYW5zaXRpb246LjJzIHRyYW5zZm9ybSwuMXMgb3BhY2l0eX0jaW5zaTcgaW1ne2JhY2tncm91bmQ6IzMzNDttYXgtaGVpZ2h0OjEwMCU7bWF4LXdpZHRoOjEwMCV9I2ltYWc3ICosI2ltYWc3IDo6YWZ0ZXIsI2ltYWc3IDo6YmVmb3Jle2ZvbnQ6MTJweC80IHNhbnMtc2VyaWY7cG9zaXRpb246YWJzb2x1dGU7Ym94LXNpemluZzpib3JkZXItYm94O21hcmdpbjowfSNpbWFnNyBidXR0b24gKnt6LWluZGV4Oi0xO3BvaW50ZXItZXZlbnRzOm5vbmV9I2luc2k3e3RleHQtYWxpZ246Y2VudGVyO3RyYW5zaXRpb246LjJzIG9wYWNpdHl9LmJvciwuYnJhOjphZnRlciwuYnJiOjpiZWZvcmV7Ym9yZGVyOjJweCBzb2xpZCAjZmZmfS5idXR7YmFja2dyb3VuZDpyZ2JhKDc3LDc3LDc3LC4yKTtoZWlnaHQ6NDhweDt3aWR0aDo0OHB4O2JvcmRlci1yYWRpdXM6NTAlO2JvcmRlcjowfS5idXQ6Zm9jdXMsLmJ1dDpob3ZlciwuaHZyOmhvdmVyIHNwYW57YmFja2dyb3VuZDpyZ2JhKDcsNyw3LC4xKTtvdXRsaW5lOjA7b3BhY2l0eToxO2N1cnNvcjpwb2ludGVyfSNsZWZ0NzphY3RpdmUsI3JpZ3Q3OmFjdGl2ZSwuYnV0OmFjdGl2ZXtvcGFjaXR5Oi4zfSNmb290Nywjb25vdzd7dGV4dC1pbmRlbnQ6NTBweDt3aGl0ZS1zcGFjZTpub3dyYXA7Ym90dG9tOjI0cHg7aGVpZ2h0OjQ4cHh9I2FsdHM3e3JpZ2h0OjUwcHh9I2FsdHM3LCNpbnNpNywjaW5zaTcgaW1nLCNzdGF0N3twb3NpdGlvbjpyZWxhdGl2ZX0jbGVmdDcsI3JpZ3Q3e2N1cnNvcjpwb2ludGVyO3dpZHRoOjIwJTttaW4td2lkdGg6OTZweDtib3JkZXI6MDtiYWNrZ3JvdW5kOjAgMDtoZWlnaHQ6MTAwJX0jaWxlZjc6OmFmdGVyLCNpcmlnNzo6YWZ0ZXJ7cGFkZGluZzo5cHg7dG9wOjE0cHh9I2luc2k3IGltZywudHJue3RvcDo1MCU7ei1pbmRleDotMTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9LnJ0cDo6YWZ0ZXIsLnJ0cDo6YmVmb3Jley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9LnJ0bTo6YWZ0ZXJ7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfSNpbGVmNzo6YWZ0ZXJ7Ym9yZGVyLXdpZHRoOjJweCAwIDAgMnB4O2xlZnQ6MTRweH0jaXJpZzc6OmFmdGVye3JpZ2h0OjE0cHg7Ym9yZGVyLXdpZHRoOjJweCAycHggMCAwfSNsZWZ0Nzpob3ZlciAjaWxlZjc6OmFmdGVye2xlZnQ6OXB4fSNyaWd0Nzpob3ZlciAjaXJpZzc6OmFmdGVye3JpZ2h0OjlweH0jY2xvczc6OmFmdGVyLCNjbG9zNzo6YmVmb3Jle2JvcmRlci13aWR0aDowIDAgMCAycHg7aGVpZ2h0OjMwcHg7bGVmdDoyM3B4O3RvcDoxMHB4fSNwbGF5Nzo6YmVmb3JlLCNzcG57Ym9yZGVyLXJhZGl1czo1MCU7aGVpZ2h0OjI0cHg7d2lkdGg6MjRweH0jc3Buey13ZWJraXQtYW5pbWF0aW9uOnIgLjNzIGxpbmVhciBpbmZpbml0ZTthbmltYXRpb246ciAuM3MgbGluZWFyIGluZmluaXRlO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCAjYWFhO2xlZnQ6NTAlO21hcmdpbjotMTJweCAwIDAtMTJweDt0b3A6NTAlfSNkb3duN3tib3JkZXItcmFkaXVzOjAgMCAycHggMnB4O3RvcDoyN3B4O2hlaWdodDo2cHg7d2lkdGg6MjRweDtib3JkZXItdG9wOjB9I3BsYXk3OjpiZWZvcmV7dHJhbnNpdGlvbjouMnMgYm9yZGVyLXJhZGl1czt0b3A6MTJweH0jcGxheTcuYXRjOjpiZWZvcmV7Ym9yZGVyLXJhZGl1czo0cHh9I3BsYXk3OjphZnRlcntib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgI2ZmZjtib3JkZXItd2lkdGg6NXB4IDAgNXB4IDEycHg7bGVmdDoxOXB4O3RvcDoxOXB4O3dpZHRoOjEwcHh9I3BsYXk3LmF0Yzo6YWZ0ZXJ7Ym9yZGVyLXdpZHRoOjAgMnB4O3BhZGRpbmctdG9wOjEwcHh9I3dkb3c3OjphZnRlcntib3JkZXItd2lkdGg6MCAwIDJweCAycHg7Ym90dG9tOjIxcHg7aGVpZ2h0OjEycHg7bGVmdDoxOHB4O3dpZHRoOjEycHh9I3dkb3c3OjpiZWZvcmV7YmFja2dyb3VuZDojZmZmO2hlaWdodDoxOHB4O2xlZnQ6MjNweDt0b3A6OXB4O3dpZHRoOjJweH0jY2xvczd7dG9wOjI0cHh9I2Rvd243LCNwbGF5Nzo6YmVmb3Jle2xlZnQ6MTJweH0jY2xvczcsI2lyaWc3LCNvbm93N3tyaWdodDoyNHB4O3RleHQtYWxpZ246cmlnaHR9I2Zvb3Q3LCNpbGVmN3tsZWZ0OjI0cHh9LmhkaXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlKDApfS5mZmZ7b3ZlcmZsb3c6aGlkZGVuIWltcG9ydGFudH0uZHBue2Rpc3BsYXk6bm9uZX0udzEwe2hlaWdodDoxMDAlO3dpZHRoOjEwMCV9Lm9wYXtvcGFjaXR5Oi43fS50cG97dG9wOjB9LmxmdHtsZWZ0OjB9LnJndHtyaWdodDowfS5idXQ6OmFmdGVyLC5idXQ6OmJlZm9yZXtjb250ZW50OiIifQ==");
    // Append the stylesheet to the document head
    append(d.getElementsByTagName("head")[0], resource);
    // Shortened variable names for HTML elements
    const b = 'button'
    const s = 'span'
    const v = 'div'
    const a = 'aria-label'
    const c = 'class'
    const i = 'id'
    // All elements for UI rendering; first letter for element, other pairs are attributes
    that.clos = element(b, i, "clos7", c, "bra rtp opa but rtm brb", a, "Close", "title", "Press Esc to close");
    that.ilef = element(s, i, "ilef7", c, "bra rtm opa trn but");
    that.irig = element(s, i, "irig7", c, "bra rtp opa but trn");
    that.imag = element(v, i, "imag7", c, "hdi fff w10 tpo lft dpn","role","dialog", a, "imag7");
    that.cent = element(v, i, "cent7", c, "tpo lft w10");
    that.left = element(b, i, "left7", c, "tpo lft hvr", a, "Previous");
    that.rigt = element(b, i, "rigt7", c, "tpo rgt hvr", a, "Next");
    that.insi = element(v, i, "insi7", c, "w10");
    that.spin = element(v, i, "spn", c, "dpn");
    that.imgs = element("img", 'src', 'src="data:,"', 'alt', 'alt');
    append(that.insi, that.imgs);
    append(that.rigt, that.irig);
    append(that.left, that.ilef);
    append(that.cent, that.insi, that.rigt, that.left, that.clos);
    append(that.imag, that.cent, that.spin);
    append(d.body, that.imag);

    // Show download and autoplay buttons if (true = default) otherwise not render
    if (that.showButtons) {
      that.wdow = element(b, i, "wdow7", c, "tpo rgt bra rtm opa but", a, "download");
      that.play = element(b, i, "play7", c, "tpo lft bra brb opa but", a, "play");
      that.foot = element(v, i, "foot7");
      that.onow = element(v, i, "onow7");
      that.alts = element(s, i, "alts7", c, "fff");
      that.fine = element(s, i, "stat7");
      that.down = element(s, i, "down7", c, "bor");
      append(that.onow, that.alts, that.wdow);
      append(that.imag, that.onow, that.foot);
      append(that.foot, that.play, d.createTextNode(that.imagesArray.length + "("), that.fine, d.createTextNode(")"));
      append(that.wdow, that.down);
    }
    // Remove last class name (.dpn = display none) some time (220ms) because 'black' squere shows (it's hack :( )
    delay(() => that.imag.className = 'hdi fff w10 tpo lft', 220);
  }
}

export { UI };
