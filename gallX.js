!function(){"use strict";var t=document,e=t.documentElement,i=function(t){for(var e=0;e<(arguments.length<=1?0:arguments.length-1);e++)t.appendChild(e+1<1||arguments.length<=e+1?void 0:arguments[e+1])},a=function(e){for(var i=t.createElement(e),a=0;a<(arguments.length<=1?0:arguments.length-1);a+=2)i.setAttribute(a+1<1||arguments.length<=a+1?void 0:arguments[a+1],a+1+1<1||arguments.length<=a+1+1?void 0:arguments[a+1+1]);return i},n=function(t,e){return setTimeout(t,e)};function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function s(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,(void 0,n=function(t,e){if("object"!==o(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var a=i.call(t,"string");if("object"!==o(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(a.key),"symbol"===o(n)?n:String(n)),a)}var n}var l=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var i=this;Object.assign(i,t),i.imagesArray=[],i.indexOfImage=null,i.isAutoPlayOn=!1,i.isActive=!1,i.timeOut=0}var o,l;return o=e,(l=[{key:"addImagesToArray",value:function(){for(var e=this,i=t.getElementsByClassName(e.imageContainer).length>0?t.getElementsByClassName(e.imageContainer):t.getElementsByTagName("body"),a=i.length,n=0;n<a;n++)e.imagesArray.push.apply(e.imagesArray,i[n].getElementsByTagName("img"));var o=function(t){e.listenForIG(t)}.bind(e);if(i[0]&&"BODY"===i[0].tagName)t.body.onclick=o;else for(var s=0;s<a;s++)i[s].onclick=o}},{key:"init",value:function(){var e=this,o=a("link","rel","stylesheet","href","data:text/css;base64,QC13ZWJraXQta2V5ZnJhbWVzIHJ7dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1Aa2V5ZnJhbWVzIHJ7dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1ib2R5e292ZXJmbG93OmluaGVyaXQhaW1wb3J0YW50O21hcmdpbjowfSNpbWFnN3t1c2VyLXNlbGVjdDpub25lO2JhY2tncm91bmQ6IzIyMztjb2xvcjojNzc3O3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6OTk5OTk5O3RyYW5zaXRpb246LjJzIHRyYW5zZm9ybSwuMXMgb3BhY2l0eX0jaW5zaTcgaW1ne2JhY2tncm91bmQ6IzMzNDttYXgtaGVpZ2h0OjEwMCU7bWF4LXdpZHRoOjEwMCV9I2ltYWc3ICosI2ltYWc3IDo6YWZ0ZXIsI2ltYWc3IDo6YmVmb3Jle2ZvbnQ6MTJweC80IHNhbnMtc2VyaWY7cG9zaXRpb246YWJzb2x1dGU7Ym94LXNpemluZzpib3JkZXItYm94O21hcmdpbjowfSNpbWFnNyBidXR0b24gKnt6LWluZGV4Oi0xO3BvaW50ZXItZXZlbnRzOm5vbmV9I2luc2k3e3RleHQtYWxpZ246Y2VudGVyO3RyYW5zaXRpb246LjJzIG9wYWNpdHl9LmJvciwuYnJhOjphZnRlciwuYnJiOjpiZWZvcmV7Ym9yZGVyOjJweCBzb2xpZCAjZmZmfS5idXR7YmFja2dyb3VuZDpyZ2JhKDc3LDc3LDc3LC4yKTtoZWlnaHQ6NDhweDt3aWR0aDo0OHB4O2JvcmRlci1yYWRpdXM6NTAlO2JvcmRlcjowfS5idXQ6Zm9jdXMsLmJ1dDpob3ZlciwuaHZyOmhvdmVyIHNwYW57YmFja2dyb3VuZDpyZ2JhKDcsNyw3LC4xKTtvdXRsaW5lOjA7b3BhY2l0eToxO2N1cnNvcjpwb2ludGVyfSNsZWZ0NzphY3RpdmUsI3JpZ3Q3OmFjdGl2ZSwuYnV0OmFjdGl2ZXtvcGFjaXR5Oi4zfSNmb290Nywjb25vdzd7dGV4dC1pbmRlbnQ6NTBweDt3aGl0ZS1zcGFjZTpub3dyYXA7Ym90dG9tOjI0cHg7aGVpZ2h0OjQ4cHh9I2FsdHM3e3JpZ2h0OjUwcHh9I2FsdHM3LCNpbnNpNywjaW5zaTcgaW1nLCNzdGF0N3twb3NpdGlvbjpyZWxhdGl2ZX0jbGVmdDcsI3JpZ3Q3e2N1cnNvcjpwb2ludGVyO3dpZHRoOjIwJTttaW4td2lkdGg6OTZweDtib3JkZXI6MDtiYWNrZ3JvdW5kOjAgMDtoZWlnaHQ6MTAwJX0jaWxlZjc6OmFmdGVyLCNpcmlnNzo6YWZ0ZXJ7cGFkZGluZzo5cHg7dG9wOjE0cHh9I2luc2k3IGltZywudHJue3RvcDo1MCU7ei1pbmRleDotMTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9LnJ0cDo6YWZ0ZXIsLnJ0cDo6YmVmb3Jley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9LnJ0bTo6YWZ0ZXJ7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfSNpbGVmNzo6YWZ0ZXJ7Ym9yZGVyLXdpZHRoOjJweCAwIDAgMnB4O2xlZnQ6MTRweH0jaXJpZzc6OmFmdGVye3JpZ2h0OjE0cHg7Ym9yZGVyLXdpZHRoOjJweCAycHggMCAwfSNsZWZ0Nzpob3ZlciAjaWxlZjc6OmFmdGVye2xlZnQ6OXB4fSNyaWd0Nzpob3ZlciAjaXJpZzc6OmFmdGVye3JpZ2h0OjlweH0jY2xvczc6OmFmdGVyLCNjbG9zNzo6YmVmb3Jle2JvcmRlci13aWR0aDowIDAgMCAycHg7aGVpZ2h0OjMwcHg7bGVmdDoyM3B4O3RvcDoxMHB4fSNwbGF5Nzo6YmVmb3JlLCNzcG57Ym9yZGVyLXJhZGl1czo1MCU7aGVpZ2h0OjI0cHg7d2lkdGg6MjRweH0jc3Buey13ZWJraXQtYW5pbWF0aW9uOnIgLjNzIGxpbmVhciBpbmZpbml0ZTthbmltYXRpb246ciAuM3MgbGluZWFyIGluZmluaXRlO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCAjYWFhO2xlZnQ6NTAlO21hcmdpbjotMTJweCAwIDAtMTJweDt0b3A6NTAlfSNkb3duN3tib3JkZXItcmFkaXVzOjAgMCAycHggMnB4O3RvcDoyN3B4O2hlaWdodDo2cHg7d2lkdGg6MjRweDtib3JkZXItdG9wOjB9I3BsYXk3OjpiZWZvcmV7dHJhbnNpdGlvbjouMnMgYm9yZGVyLXJhZGl1czt0b3A6MTJweH0jcGxheTcuYXRjOjpiZWZvcmV7Ym9yZGVyLXJhZGl1czo0cHh9I3BsYXk3OjphZnRlcntib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgI2ZmZjtib3JkZXItd2lkdGg6NXB4IDAgNXB4IDEycHg7bGVmdDoxOXB4O3RvcDoxOXB4O3dpZHRoOjEwcHh9I3BsYXk3LmF0Yzo6YWZ0ZXJ7Ym9yZGVyLXdpZHRoOjAgMnB4O3BhZGRpbmctdG9wOjEwcHh9I3dkb3c3OjphZnRlcntib3JkZXItd2lkdGg6MCAwIDJweCAycHg7Ym90dG9tOjIxcHg7aGVpZ2h0OjEycHg7bGVmdDoxOHB4O3dpZHRoOjEycHh9I3dkb3c3OjpiZWZvcmV7YmFja2dyb3VuZDojZmZmO2hlaWdodDoxOHB4O2xlZnQ6MjNweDt0b3A6OXB4O3dpZHRoOjJweH0jY2xvczd7dG9wOjI0cHh9I2Rvd243LCNwbGF5Nzo6YmVmb3Jle2xlZnQ6MTJweH0jY2xvczcsI2lyaWc3LCNvbm93N3tyaWdodDoyNHB4O3RleHQtYWxpZ246cmlnaHR9I2Zvb3Q3LCNpbGVmN3tsZWZ0OjI0cHh9LmhkaXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlKDApfS5mZmZ7b3ZlcmZsb3c6aGlkZGVuIWltcG9ydGFudH0uZHBue2Rpc3BsYXk6bm9uZX0udzEwe2hlaWdodDoxMDAlO3dpZHRoOjEwMCV9Lm9wYXtvcGFjaXR5Oi43fS50cG97dG9wOjB9LmxmdHtsZWZ0OjB9LnJndHtyaWdodDowfS5idXQ6OmFmdGVyLC5idXQ6OmJlZm9yZXtjb250ZW50OiIifQ==");i(t.getElementsByTagName("head")[0],o);var s="button",l="span",c="div",m="aria-label",r="class",d="id";e.clos=a(s,d,"clos7",r,"bra rtp opa but rtm brb",m,"Close","title","Press Esc to close"),e.ilef=a(l,d,"ilef7",r,"bra rtm opa trn but"),e.irig=a(l,d,"irig7",r,"bra rtp opa but trn"),e.imag=a(c,d,"imag7",r,"hdi fff w10 tpo lft dpn","role","dialog",m,"imag7"),e.cent=a(c,d,"cent7",r,"tpo lft w10"),e.left=a(s,d,"left7",r,"tpo lft hvr",m,"Previous"),e.rigt=a(s,d,"rigt7",r,"tpo rgt hvr",m,"Next"),e.insi=a(c,d,"insi7",r,"w10"),e.spin=a(c,d,"spn",r,"dpn"),e.imgs=a("img","src",'src="data:,"',"alt","alt"),i(e.insi,e.imgs),i(e.rigt,e.irig),i(e.left,e.ilef),i(e.cent,e.insi,e.rigt,e.left,e.clos),i(e.imag,e.cent,e.spin),i(t.body,e.imag),e.showButtons&&(e.wdow=a(s,d,"wdow7",r,"tpo rgt bra rtm opa but",m,"download"),e.play=a(s,d,"play7",r,"tpo lft bra brb opa but",m,"play"),e.foot=a(c,d,"foot7"),e.onow=a(c,d,"onow7"),e.alts=a(l,d,"alts7",r,"fff"),e.fine=a(l,d,"stat7"),e.down=a(l,d,"down7",r,"bor"),i(e.onow,e.alts,e.wdow),i(e.imag,e.onow,e.foot),i(e.foot,e.play,t.createTextNode(e.imagesArray.length+"("),e.fine,t.createTextNode(")")),i(e.wdow,e.down)),n((function(){return e.imag.className="hdi fff w10 tpo lft"}),220)}}])&&s(o.prototype,l),Object.defineProperty(o,"prototype",{writable:!1}),e}(),c={autoPlayLoop:function(){var t=this;this.isAutoPlayOn=!0,this.showButtons&&(this.play.className="but tpo lft bra brb opa atc"),this.timeOut=n((function(){t.right().show(),t.showButtonsOnPlay||(t.left.className=t.rigt.className=t.clos.className="dpn",t.showButtons&&(t.foot.className=t.onow.className="dpn")),t.indexOfImage===t.imagesArray.length-1&&t.clear()}),this.delaySeconds)},loadComplete:function(){this.spin.className="dpn",this.isAutoPlayOn&&this.autoPlayLoop()},downloads:function(){var t=a("a","rel","noopener","download",this.imgs.src.split("/").pop(),"href",this.imgs.src,"target","_blank");t.click(),t.remove()},lefts:function(){return this.indexOfImage=this.indexOfImage>0?this.indexOfImage-1:this.imagesArray.length-1,this},right:function(){return this.indexOfImage=this.indexOfImage<this.imagesArray.length-1?this.indexOfImage+1:0,this},clear:function(){return clearTimeout(this.timeOut),this.isAutoPlayOn=!1,this.showButtons&&(this.foot.className=this.onow.className="",this.play.className="but tpo lft bra brb opa"),this.showButtonsOnPlay||(this.clos.className="but bra brb rtm rtp opa"),this.leftRigthBtnsShow(),this},close:function(){this.imag.className="hdi w10 tpo lft",this.isActive=!1,e.className=e.className.split("fff").join("").trim()},leftRigthBtnsShow:function(){this.left.className=0===this.indexOfImage?"dpn":"tpo lft hvr",this.rigt.className=this.indexOfImage===this.imagesArray.length-1?"dpn":"tpo rgt hvr"},show:function(){var t=this,i=this.imagesArray[this.indexOfImage].src,a=i.split("/").pop(),o=a.split("."),s=o[0]+"."+(this.extension||o[1]),l="svg"===o?i:i.replace(a,this.folder+s);this.isActive||(this.isActive=!0,n((function(){e.className=e.className?e.className+" fff":"fff"}),90),this.imag.className="fff w10 tpo lft"),this.leftRigthBtnsShow(),this.spin.className="bor",this.imgs.onerror=function(t){t.target.onerror=null,t.target.src=i},this.insi.className="hdi w10",n((function(){t.insi.className="w10"}),232),this.imgs.removeAttribute("src"),this.imgs.src!==l&&this.imgs.src!==i&&(this.imgs.onload=function(t){this.showButtons&&(this.alts.innerText=t.target.src.split("/").pop(),this.fine.innerText=Number(this.indexOfImage)+1),this.loadComplete()}.bind(this),"svg"!==o[1]?this.imgs.src=l:this.imgs.src=i)},listenForIG:function(t){var e=t.target;"IMG"===e.tagName&&(this.indexOfImage=this.imagesArray.indexOf(e)>-1?this.imagesArray.indexOf(e):0,this.show(),t.stopImmediatePropagation())}};Object.assign(l.prototype,c);var m=new l({delaySeconds:1033,folder:"s/",imageContainer:"images",showButtons:!0,showButtonsOnPlay:!0,extension:""});m.addImagesToArray(),m.init(),function(){var t,e,i,a=this,n={play7:function(){a.isAutoPlayOn?a.clear():a.autoPlayLoop()},left7:function(){a.clear().lefts().show()},rigt7:function(){a.clear().right().show()},clos7:function(){a.clear().close()},wdow7:function(){a.clear().downloads()}};function o(t){if(a.isActive&&!t.isComposing&&229!==t.key){var e=t.key||t.target.id;if(!n[e])return a.clear();n[e](),t.preventDefault(),t.stopImmediatePropagation()}}n[" "]=n.play7,n.ArrowLeft=n.left7,n.ArrowRight=n.rigt7,n.Escape=n.clos7,a.imag.addEventListener("touchstart",(function(a){var n=a.touches[0];t=n.pageX,e=n.pageY,i=new Date}),{passive:!0}),a.imag.addEventListener("touchend",(function(a){var o=a.changedTouches[0],s=o.pageX,l=o.pageY,c=new Date,m=s-t,r=l-e,d=c-i,h=Math.abs(m)>30,p=Math.abs(r)<30;h&&p&&d<1e3&&n[m<0?"rigt7":"left7"]()})),a.imag.addEventListener("click",o.bind(a)),window.addEventListener("keyup",o.bind(a))}.call(m)}();