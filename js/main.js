!function(){"use strict";var t=document,a=t.documentElement,n=function(t){for(var a=0;a<(arguments.length<=1?0:arguments.length-1);a++)t.appendChild(a+1<1||arguments.length<=a+1?void 0:arguments[a+1])},e=function(a){for(var n=t.createElement(a),e=0;e<(arguments.length<=1?0:arguments.length-1);e+=2)n.setAttribute(e+1<1||arguments.length<=e+1?void 0:arguments[e+1],e+1+1<1||arguments.length<=e+1+1?void 0:arguments[e+1+1]);return n},i=function(t,a){return setTimeout(t,a)};function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function l(t,a){for(var n=0;n<a.length;n++){var e=a[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,o(e.key),e)}}function o(t){var a=function(t){if("object"!=c(t)||!t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var n=a.call(t,"string");if("object"!=c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==c(a)?a:a+""}var s=function(){return a=function t(a){!function(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}(this,t);var n=this;Object.assign(n,a),n.imagesArray=[],n.indexOfImage=null,n.isAutoPlayOn=!1,n.isActive=!1,n.timeOut=0},i=[{key:"addImagesToArray",value:function(){for(var a=this,n=t.getElementsByClassName(a.imageContainer).length>0?t.getElementsByClassName(a.imageContainer):t.getElementsByTagName("body"),e=n.length,i=0;i<e;i++)a.imagesArray.push.apply(a.imagesArray,n[i].getElementsByTagName("img"));var c=function(t){a.listenForIG(t)}.bind(a);if(n[0]&&"BODY"===n[0].tagName)t.body.onclick=c;else for(var l=0;l<e;l++)n[l].onclick=c;return a.imagesArray.length}},{key:"init",value:function(){var a=this,i=e("link","rel","stylesheet","href","data:text/css;base64,QC13ZWJraXQta2V5ZnJhbWVzIHJ7dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1Aa2V5ZnJhbWVzIHJ7dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX0jaW1hZzd7dXNlci1zZWxlY3Q6bm9uZTtiYWNrZ3JvdW5kOnZhcigtLWNvbG9yMiwjMjIzKTtjb2xvcjojNzc3O3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6OTk5OTk5O3RyYW5zaXRpb246LjJzIHRyYW5zZm9ybX0jaW1hZzcgI2luc2k3IGltZ3tiYWNrZ3JvdW5kOnZhcigtLWNvbG9yMSwjMzM0KTttYXgtaGVpZ2h0OjEwMCU7bWF4LXdpZHRoOjEwMCV9I2ltYWc3ICosI2ltYWc3IDo6YWZ0ZXIsI2ltYWc3IDo6YmVmb3Jle2ZvbnQ6MTJweC80IHNhbnMtc2VyaWY7cG9zaXRpb246YWJzb2x1dGU7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6aW5saW5lLWJsb2NrfSNpbWFnNyBidXR0b24gKnt6LWluZGV4Oi0xO3BvaW50ZXItZXZlbnRzOm5vbmV9I2ltYWc3ICNpbnNpN3t0ZXh0LWFsaWduOmNlbnRlcn0jaW1hZzcgI2Zvb3Q3LCNpbWFnNyAjb25vdzd7dGV4dC1pbmRlbnQ6NTBweDt3aGl0ZS1zcGFjZTpub3dyYXA7Ym90dG9tOjI0cHg7aGVpZ2h0OjQ4cHh9I2ltYWc3ICNhbHRzN3tyaWdodDo1MHB4fSNpbWFnNyAjYWx0czcsI2ltYWc3ICNpbnNpNywjaW1hZzcgI2luc2k3IGltZywjaW1hZzcgI3N0YXQ3e3Bvc2l0aW9uOnJlbGF0aXZlfSNpbWFnNyAjc3RhdDd7dGV4dC1pbmRlbnQ6MH0jaW1hZzcgI2xlZnQ3LCNpbWFnNyAjcmlndDd7d2lkdGg6MjAlO21pbi13aWR0aDo5NnB4O2JvcmRlcjowO2JhY2tncm91bmQ6MCAwO2hlaWdodDoxMDAlfSNpbWFnNyAjaWxlZjc6OmFmdGVyLCNpbWFnNyAjaXJpZzc6OmFmdGVye3BhZGRpbmc6OXB4O3RvcDoxNHB4fSNpbWFnNyAjaWxlZjc6OmFmdGVye2JvcmRlci13aWR0aDoycHggMCAwIDJweDtsZWZ0OjE0cHh9I2ltYWc3ICNpcmlnNzo6YWZ0ZXJ7cmlnaHQ6MTRweDtib3JkZXItd2lkdGg6MnB4IDJweCAwIDB9I2ltYWc3ICNsZWZ0Nzpob3ZlciAjaWxlZjc6OmFmdGVye2xlZnQ6OXB4fSNpbWFnNyAjcmlndDc6aG92ZXIgI2lyaWc3OjphZnRlcntyaWdodDo5cHh9I2ltYWc3ICNjbG9zNzo6YWZ0ZXIsI2ltYWc3ICNjbG9zNzo6YmVmb3Jle2JvcmRlci13aWR0aDowIDAgMCAycHg7aGVpZ2h0OjMwcHg7bGVmdDoyM3B4O3RvcDoxMHB4fSNpbWFnNyAjcGxheTc6OmJlZm9yZSwjaW1hZzcgI3Nwbntib3JkZXItcmFkaXVzOjUwJTtoZWlnaHQ6MjRweDt3aWR0aDoyNHB4fSNpbWFnNyAjc3Buey13ZWJraXQtYW5pbWF0aW9uOnIgLjNzIGxpbmVhciBpbmZpbml0ZTthbmltYXRpb246ciAuM3MgbGluZWFyIGluZmluaXRlO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCAjYWFhO2xlZnQ6NTAlO21hcmdpbjotMTJweCAwIDAtMTJweDt0b3A6NTAlfSNpbWFnNyAjZG93bjd7Ym9yZGVyLXJhZGl1czowIDAgMnB4IDJweDt0b3A6MjdweDtoZWlnaHQ6NnB4O3dpZHRoOjI0cHg7Ym9yZGVyLXRvcDowfSNpbWFnNyAjcGxheTc6OmJlZm9yZXt0cmFuc2l0aW9uOi4ycyBib3JkZXItcmFkaXVzO3RvcDoxMnB4fSNpbWFnNyAjcGxheTcuYXRjOjpiZWZvcmV7Ym9yZGVyLXJhZGl1czo0cHh9I2ltYWc3ICNwbGF5Nzo6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50ICNmZmY7Ym9yZGVyLXdpZHRoOjVweCAwIDVweCAxMnB4O2xlZnQ6MTlweDt0b3A6MTlweDt3aWR0aDoxMHB4fSNpbWFnNyAjcGxheTcuYXRjOjphZnRlcntib3JkZXItd2lkdGg6MCAycHg7cGFkZGluZy10b3A6MTBweH0jaW1hZzcgI3dkb3c3OjphZnRlcntib3JkZXItd2lkdGg6MCAwIDJweCAycHg7Ym90dG9tOjIxcHg7aGVpZ2h0OjEycHg7bGVmdDoxOHB4O3dpZHRoOjEycHh9I2ltYWc3ICN3ZG93Nzo6YmVmb3Jle2JhY2tncm91bmQ6I2ZmZjtoZWlnaHQ6MThweDtsZWZ0OjIzcHg7dG9wOjlweDt3aWR0aDoycHh9I2ltYWc3ICNjbG9zN3t0b3A6MjRweH0jaW1hZzcgI2Rvd243LCNpbWFnNyAjcGxheTc6OmJlZm9yZXtsZWZ0OjEycHh9I2ltYWc3ICNjbG9zNywjaW1hZzcgI2lyaWc3LCNpbWFnNyAjb25vdzd7cmlnaHQ6MjRweDt0ZXh0LWFsaWduOnJpZ2h0fSNpbWFnNyAjZm9vdDcsI2ltYWc3ICNpbGVmN3tsZWZ0OjI0cHh9I2ltYWc3ICNpbnNpNyBpbWcsI2ltYWc3IC50cm57dG9wOjUwJTt6LWluZGV4Oi0xOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKX0jaW1hZzcgLnJ0cDo6YWZ0ZXIsI2ltYWc3IC5ydHA6OmJlZm9yZXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpfSNpbWFnNyAucnRtOjphZnRlcnstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9I2ltYWc3IC53MTAsI2ltYWc3LncxMHtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlfSNpbWFnNyAuYm9yLCNpbWFnNyAuYnJhOjphZnRlciwjaW1hZzcgLmJyYjo6YmVmb3Jle2JvcmRlcjoycHggc29saWQgI2ZmZn0jaW1hZzcgLmJ1dHtiYWNrZ3JvdW5kOnJnYmEoNzcsNzcsNzcsLjIpO2hlaWdodDo0OHB4O3dpZHRoOjQ4cHg7Ym9yZGVyLXJhZGl1czo1MCU7Ym9yZGVyOjA7Y3Vyc29yOnBvaW50ZXI7dHJhbnNpdGlvbjouMnN9I2ltYWc3IC5idXQ6OmFmdGVyLCNpbWFnNyAuYnV0OjpiZWZvcmV7Y29udGVudDoiIn0jaW1hZzcgLmJ1dDpmb2N1cywjaW1hZzcgLmJ1dDpob3ZlciwjaW1hZzcgLmJ1dDpob3ZlciBzcGFue2JhY2tncm91bmQ6cmdiYSg3LDcsNywuMSk7b3V0bGluZTowO29wYWNpdHk6MX0jaW1hZzcgLmJ1dDphY3RpdmV7b3BhY2l0eTouM30jaW1hZzcgLmRwbnt2aXNpYmlsaXR5OmhpZGRlbn0jaW1hZzcgLmhkaSwjaW1hZzcuaGRpe29wYWNpdHk6MH0jaW1hZzcgLm9wYXtvcGFjaXR5Oi43fSNpbWFnNyAucmd0e3JpZ2h0OjB9I2ltYWc3IC50cG8sI2ltYWc3LnRwb3t0b3A6MH0jaW1hZzcgLmxmdCwjaW1hZzcubGZ0e2xlZnQ6MH0jaW1hZzcgLmZmZiwjaW1hZzcuZmZmLGh0bWwuZmZme292ZXJmbG93OmhpZGRlbiFpbXBvcnRhbnR9I2ltYWc3LnNjYXt0cmFuc2Zvcm06c2NhbGUoMCl9QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjRweCl7I2ltYWc3Om5vdCg6aG92ZXIpICNjZW50N35kaXYsI2ltYWc3Om5vdCg6aG92ZXIpICNpbnNpN35idXR0b257b3BhY2l0eTowfX0=");n(t.getElementsByTagName("head")[0],i);var c="button",l="span",o="div",s="aria-label",m="class",r="id";a.clos=e(c,r,"clos7",m,"bra rtp opa but rtm brb",s,"Close","title","Press Esc to close"),a.ilef=e(l,r,"ilef7",m,"bra rtm opa trn but"),a.irig=e(l,r,"irig7",m,"bra rtp opa but trn"),a.imag=e(o,r,"imag7",m,"sca hdi fff w10 tpo lft","role","dialog",s,"imag7"),a.cent=e(o,r,"cent7",m,"tpo lft w10"),a.left=e(c,r,"left7",m,"but tpo lft",s,"Previous"),a.rigt=e(c,r,"rigt7",m,"but tpo rgt",s,"Next"),a.insi=e(o,r,"insi7",m,"w10"),a.spin=e(o,r,"spn",m,"dpn"),a.imgs=e("img","src","data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACwAAAAAAQABAEACAkQBADs=","alt","","loading","lazy"),n(a.insi,a.imgs),n(a.rigt,a.irig),n(a.left,a.ilef),n(a.cent,a.insi,a.rigt,a.left,a.clos),n(a.imag,a.cent,a.spin),n(t.body,a.imag),a.showButtons&&(a.wdow=e(c,r,"wdow7",m,"tpo rgt bra rtm opa but",s,"download"),a.play=e(c,r,"play7",m,"tpo lft bra brb opa but",s,"play"),a.foot=e(o,r,"foot7"),a.onow=e(o,r,"onow7"),a.alts=e(l,r,"alts7",m,"fff"),a.fine=e(l,r,"stat7"),a.down=e(l,r,"down7",m,"bor"),n(a.onow,a.alts,a.wdow),n(a.imag,a.onow,a.foot),n(a.foot,a.play,t.createTextNode("Image "),a.fine,t.createTextNode(" of "+a.imagesArray.length)),n(a.wdow,a.down))}}],i&&l(a.prototype,i),Object.defineProperty(a,"prototype",{writable:!1}),a;var a,i}(),m={autoPlayLoop:function(){var t=this;this.isAutoPlayOn=!0,this.showButtons&&(this.play.className="but bra brb opa tpo lft atc"),this.timeOut=i((function(){t.right().show(),t.showButtonsOnPlay||(t.left.className=t.rigt.className=t.clos.className="dpn",t.showButtons&&(t.foot.className=t.onow.className="dpn")),t.indexOfImage===t.imagesArray.length-1&&t.clear()}),this.delaySeconds)},loadComplete:function(){this.spin.className="dpn",this.isAutoPlayOn&&this.autoPlayLoop()},downloads:function(){var t=e("a","rel","noopener","download",this.imgs.src.split("/").pop(),"href",this.imgs.src,"target","_blank");t.click(),t.remove()},lefts:function(){return this.indexOfImage=this.indexOfImage>0?this.indexOfImage-1:this.imagesArray.length-1,this},right:function(){return this.indexOfImage=this.indexOfImage<this.imagesArray.length-1?this.indexOfImage+1:0,this},clear:function(){return clearTimeout(this.timeOut),this.isAutoPlayOn=!1,this.showButtons&&(this.foot.className=this.onow.className="",this.play.className="but bra brb opa tpo lft"),this.showButtonsOnPlay||(this.clos.className="but bra brb opa rtm rtp"),this},close:function(){this.imag.className="sca hdi w10 tpo lft",this.isActive=!1,a.className=a.className.split("fff").join("").trim()},leftRigthBtnsShow:function(){this.left.className=0===this.indexOfImage?"dpn":"but tpo hvr lft",this.rigt.className=this.indexOfImage===this.imagesArray.length-1?"dpn":"but tpo hvr rgt"},show:function(){var t=this.imagesArray[this.indexOfImage],c=t.src,l=c.split("/").pop(),o=l.split("."),s=o[0]+"."+(this.extension||o[1]),m="svg"===o?c:c.replace(l,this.folder+s);this.isActive||(this.isActive=!0,i((function(){a.className=a.className?a.className+" fff":"fff"}),34),this.imag.className="fff w10 tpo lft"),this.imgs.src!==m&&this.imgs.src!==c&&(this.leftRigthBtnsShow(),this.spin.className="bor",this.insi.removeChild(this.imgs),this.imgs=e("img","src","svg"!==o[1]?m:c,"alt",t.alt+" selected"),this.imgs.onload=function(t){this.showButtons&&(this.alts.innerText=t.target.src.split("/").pop()),this.loadComplete()}.bind(this),this.imgs.onerror=function(t){t.target.onerror=null,t.target.src=c},this.fine.innerText=Number(this.indexOfImage)+1,n(this.insi,this.imgs))},listenForIG:function(t){var a=t.target;"IMG"===a.tagName&&(this.indexOfImage=this.imagesArray.indexOf(a)>-1?this.imagesArray.indexOf(a):0,this.show(),t.stopImmediatePropagation())}};Object.assign(s.prototype,m);var r=new s({delaySeconds:1033,folder:"l/",imageContainer:"images",showButtons:1,showButtonsOnPlay:1,extension:""});r.addImagesToArray()&&(r.init(),function(){var t=this,a={play7:function(){t.isAutoPlayOn?t.clear():t.autoPlayLoop()},left7:function(){t.clear().lefts().show()},rigt7:function(){t.clear().right().show()},clos7:function(){t.clear().close()},wdow7:function(){t.clear().downloads()}};function n(n){if(t.isActive&&!n.isComposing&&229!==n.key){var e=n.key||n.target.id;if(!a[e])return t.clear();a[e](),n.preventDefault(),n.stopImmediatePropagation()}}a[" "]=a.play7,a.ArrowLeft=a.left7,a.ArrowRight=a.rigt7,a.Escape=a.clos7,t.imag.addEventListener("click",n.bind(t)),window.addEventListener("keyup",n.bind(t))}.call(r))}();