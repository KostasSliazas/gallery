/*jshint esversion: 11 */
import { element, atribute, append, d } from "./helpers";
// let _isLoaded = false
class UI {
  constructor(conf) {
    // create UI instance only once
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

    const clickHandler = function (e) {
      that.listenForIG(e);
    }.bind(that);

    // Loop through elements and add to array
    for (let i = container.length - 1; i >= 0; i--) {
      const img = container[i].getElementsByTagName("img");
      for (let j = 0; j < img.length; j++) {
        that.imagesArray.push(img[j]);
      }
    }

    // Set click handler on the body if the container is the body
    if (container[0] && container[0].tagName === "BODY") {
      d.body.onclick = clickHandler;
    } else {
      // Set click handler on each container element
      for (let k = container.length - 1; k >= 0; k--) {
        container[k].onclick = clickHandler;
      }
    }
  }

  init() {
    const that = this;
    // add link CSS to head
    const resource = element("link");
    // add css with base64 string
    atribute(resource, "rel", "stylesheet", "href", "data:text/css;base64,QC13ZWJraXQta2V5ZnJhbWVzIHJ7dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1Aa2V5ZnJhbWVzIHJ7dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1ib2R5e292ZXJmbG93OmluaGVyaXQhaW1wb3J0YW50O21hcmdpbjowfSNpbWFnN3t1c2VyLXNlbGVjdDpub25lO2JhY2tncm91bmQ6IzIyMztjb2xvcjojNzc3O3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6OTk5OTk5fSNpbnNpNyBpbWd7YmFja2dyb3VuZDojMzM0O21heC1oZWlnaHQ6MTAwJTttYXgtd2lkdGg6MTAwJX0jaW1hZzcgKiwjaW1hZzcgOjphZnRlciwjaW1hZzcgOjpiZWZvcmV7Zm9udDoxMnB4LzQgc2Fucy1zZXJpZjtwb3NpdGlvbjphYnNvbHV0ZTtib3gtc2l6aW5nOmJvcmRlci1ib3g7bWFyZ2luOjB9I2ltYWc3IGJ1dHRvbiAqe3otaW5kZXg6LTE7cG9pbnRlci1ldmVudHM6bm9uZX0jaW5zaTd7dGV4dC1hbGlnbjpjZW50ZXJ9LmJvciwuYnJhOjphZnRlciwuYnJiOjpiZWZvcmV7Ym9yZGVyOjJweCBzb2xpZCAjZmZmfS5idXR7YmFja2dyb3VuZDpyZ2JhKDc3LDc3LDc3LC4yKTtoZWlnaHQ6NDhweDt3aWR0aDo0OHB4O2JvcmRlci1yYWRpdXM6NTAlO2JvcmRlcjowfS5idXQ6Zm9jdXMsLmJ1dDpob3ZlciwuaHZyOmhvdmVyIHNwYW57YmFja2dyb3VuZDpyZ2JhKDcsNyw3LC4xKTtvdXRsaW5lOjA7b3BhY2l0eToxO2N1cnNvcjpwb2ludGVyfSNsZWZ0NzphY3RpdmUsI3JpZ3Q3OmFjdGl2ZSwuYnV0OmFjdGl2ZXtvcGFjaXR5Oi4zfSNmb290Nywjb25vdzd7dGV4dC1pbmRlbnQ6NTBweDt3aGl0ZS1zcGFjZTpub3dyYXA7Ym90dG9tOjI0cHg7aGVpZ2h0OjQ4cHh9I2FsdHM3e3JpZ2h0OjUwcHh9I2FsdHM3LCNpbnNpNywjaW5zaTcgaW1nLCNzdGF0N3twb3NpdGlvbjpyZWxhdGl2ZX0jbGVmdDcsI3JpZ3Q3e2N1cnNvcjpwb2ludGVyO3dpZHRoOjIwJTttaW4td2lkdGg6OTZweDtib3JkZXI6MDtiYWNrZ3JvdW5kOjAgMDtoZWlnaHQ6MTAwJX0jaWxlZjc6OmFmdGVyLCNpcmlnNzo6YWZ0ZXJ7cGFkZGluZzo5cHg7dG9wOjE0cHh9I2luc2k3IGltZywudHJue3RvcDo1MCU7ei1pbmRleDotMTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9LnJ0cDo6YWZ0ZXIsLnJ0cDo6YmVmb3Jley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9LnJ0bTo6YWZ0ZXJ7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfSNpbGVmNzo6YWZ0ZXJ7Ym9yZGVyLXdpZHRoOjJweCAwIDAgMnB4O2xlZnQ6MTRweH0jaXJpZzc6OmFmdGVye3JpZ2h0OjE0cHg7Ym9yZGVyLXdpZHRoOjJweCAycHggMCAwfSNsZWZ0Nzpob3ZlciAjaWxlZjc6OmFmdGVye2xlZnQ6OXB4fSNyaWd0Nzpob3ZlciAjaXJpZzc6OmFmdGVye3JpZ2h0OjlweH0jY2xvczc6OmFmdGVyLCNjbG9zNzo6YmVmb3Jle2JvcmRlci13aWR0aDowIDAgMCAycHg7aGVpZ2h0OjMwcHg7bGVmdDoyM3B4O3RvcDoxMHB4fSNwbGF5Nzo6YmVmb3JlLCNzcG57Ym9yZGVyLXJhZGl1czo1MCU7aGVpZ2h0OjI0cHg7d2lkdGg6MjRweH0jc3Buey13ZWJraXQtYW5pbWF0aW9uOnIgLjNzIGxpbmVhciBpbmZpbml0ZTthbmltYXRpb246ciAuM3MgbGluZWFyIGluZmluaXRlO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCAjYWFhO2xlZnQ6NTAlO21hcmdpbjotMTJweCAwIDAtMTJweDt0b3A6NTAlfSNkb3duN3tib3JkZXItcmFkaXVzOjAgMCAycHggMnB4O3RvcDoyN3B4O2hlaWdodDo2cHg7d2lkdGg6MjRweDtib3JkZXItdG9wOjB9I3BsYXk3OjpiZWZvcmV7dHJhbnNpdGlvbjouMnMgYm9yZGVyLXJhZGl1czt0b3A6MTJweH0jcGxheTcuYXRjOjpiZWZvcmV7Ym9yZGVyLXJhZGl1czo0cHh9I3BsYXk3OjphZnRlcntib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgI2ZmZjtib3JkZXItd2lkdGg6NXB4IDAgNXB4IDEycHg7bGVmdDoxOXB4O3RvcDoxOXB4O3dpZHRoOjEwcHh9I3BsYXk3LmF0Yzo6YWZ0ZXJ7Ym9yZGVyLXdpZHRoOjAgMnB4O3BhZGRpbmctdG9wOjEwcHh9I3dkb3c3OjphZnRlcntib3JkZXItd2lkdGg6MCAwIDJweCAycHg7Ym90dG9tOjIxcHg7aGVpZ2h0OjEycHg7bGVmdDoxOHB4O3dpZHRoOjEycHh9I3dkb3c3OjpiZWZvcmV7YmFja2dyb3VuZDojZmZmO2hlaWdodDoxOHB4O2xlZnQ6MjNweDt0b3A6OXB4O3dpZHRoOjJweH0jY2xvczd7dG9wOjI0cHh9I2Rvd243LCNwbGF5Nzo6YmVmb3Jle2xlZnQ6MTJweH0jY2xvczcsI2lyaWc3LCNvbm93N3tyaWdodDoyNHB4O3RleHQtYWxpZ246cmlnaHR9I2Zvb3Q3LCNpbGVmN3tsZWZ0OjI0cHh9LnRyYXt0cmFuc2l0aW9uOi4xcyB0cmFuc2Zvcm19LmhkaXt0cmFuc2Zvcm06c2NhbGUoMCl9LmZmZntvdmVyZmxvdzpoaWRkZW4haW1wb3J0YW50fS5kcG57ZGlzcGxheTpub25lfS53MTB7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJX0ub3Bhe29wYWNpdHk6Ljd9LnRwb3t0b3A6MH0ubGZ0e2xlZnQ6MH0ucmd0e3JpZ2h0OjB9LmJ1dDo6YWZ0ZXIsLmJ1dDo6YmVmb3Jle2NvbnRlbnQ6IiJ9");
    // append to document head
    append(d.getElementsByTagName("head")[0], resource);
    // all elements for UI rendering
    that.clos = element("button");
    that.ilef = element("span");
    that.irig = element("span");
    that.imag = element("div");
    that.cent = element("div");
    that.left = element("button");
    that.rigt = element("button");
    that.insi = element("div");
    that.spin = element("div");
    atribute(that.clos, "id", "clos7", "class", "bra brb rtm rtp opa but", "aria-label", "Close", "title", "Press Esc to close");
    atribute(that.ilef, "id", "ilef7", "class", "bra rtm opa trn but");
    atribute(that.irig, "id", "irig7", "class", "bra rtp opa trn but");
    atribute(that.cent, "id", "cent7", "class", "tpo lft w10");
    atribute(that.rigt, "id", "rigt7", "class", "tpo rgt hvr", "aria-label", "Next");
    atribute(that.left, "id", "left7", "class", "tpo lft hvr", "aria-label", "Previous");
    atribute(that.imag, "id", "imag7", "class", "hdi fff w10 tra tpo lft", "style", "display:none");
    atribute(that.spin, "id", "spn", "class", "dpn");
    atribute(that.insi, "id", "insi7", "class", "w10");
    append(that.rigt, that.irig);
    append(that.left, that.ilef);
    append(that.cent, that.insi, that.rigt, that.left, that.clos, that.spin);
    append(that.imag, that.cent);
    append(d.body, that.imag);

    // show download and autoplay buttons if (true = default) otherwise not render
    if (that.showButtons) {
      that.wdow = element("button");
      that.play = element("button");
      that.foot = element("div");
      that.onow = element("div");
      that.alts = element("span");
      that.fine = element("span");
      that.down = element("span");
      atribute(that.play, "id", "play7", "class", "tpo lft bra brb opa but", "aria-label", "play");
      atribute(that.down, "id", "down7", "class", "bor");
      atribute(that.wdow, "id", "wdow7", "class", "tpo rgt bra rtm opa but", "aria-label", "download");
      atribute(that.alts, "id", "alts7", "class", "fff");
      that.foot.id = "foot7";
      that.onow.id = "onow7";
      that.fine.id = "stat7";
      append(that.onow, that.alts, that.wdow);
      append(that.imag, that.onow, that.foot);
      append(that.foot, that.play, d.createTextNode(that.imagesArray.length + "("), that.fine, d.createTextNode(")"));
      append(that.wdow, that.down);
    }

    // remove style atribute after some time (220ms) because 'black' squere shows (it's hack :( )
    setTimeout(() => that.imag.removeAttribute("style"), 220);
  }
}

export { UI };
