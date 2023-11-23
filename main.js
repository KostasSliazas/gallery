!function(){"use strict";var t=document,i=t.documentElement,e=function(t){for(var i=arguments.length,e=new Array(i>1?i-1:0),a=1;a<i;a++)e[a-1]=arguments[a];return e.forEach((function(i){return t.appendChild(i)}))},a=function(t){for(var i=arguments.length,e=new Array(i>1?i-1:0),a=1;a<i;a++)e[a-1]=arguments[a];return e.forEach((function(i,a){return a%2==0&&t.setAttribute(i,e[a+1])}))},n=function(i){return t.createElement(i)};function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function o(t,i){for(var e=0;e<i.length;e++){var a=i[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,(void 0,n=function(t,i){if("object"!==s(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var a=e.call(t,"string");if("object"!==s(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(a.key),"symbol"===s(n)?n:String(n)),a)}var n}var l=function(){function i(t){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,i);var e=this;Object.assign(e,t),e.imagesArray=[],e.indexOfImage=null,e.isAutoPlayOn=!1,e.isActive=!1,e.timeOut=0}var s,l;return s=i,(l=[{key:"addImagesToArray",value:function(){for(var i=this,e=t.getElementsByClassName(i.imageContainer).length>0?t.getElementsByClassName(i.imageContainer):t.getElementsByTagName("body"),a=function(t){i.listenForIG(t)}.bind(i),n=e.length-1;n>=0;n--)for(var s=e[n].getElementsByTagName("img"),o=0;o<s.length;o++)i.imagesArray.push(s[o]);if(e[0]&&"BODY"===e[0].tagName)t.body.onclick=a;else for(var l=e.length-1;l>=0;l--)e[l].onclick=a}},{key:"init",value:function(){var i=this,s=n("link");a(s,"rel","stylesheet","href","data:text/css;base64,QC13ZWJraXQta2V5ZnJhbWVzIHJ7dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1Aa2V5ZnJhbWVzIHJ7dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1ib2R5e292ZXJmbG93OmluaGVyaXQhaW1wb3J0YW50O21hcmdpbjowfSNpbWFnN3t1c2VyLXNlbGVjdDpub25lO2JhY2tncm91bmQ6IzIyMztjb2xvcjojNzc3O3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6OTk5OTk5fSNpbnNpNyBpbWd7YmFja2dyb3VuZDojMzM0O21heC1oZWlnaHQ6MTAwJTttYXgtd2lkdGg6MTAwJX0jaW1hZzcgKiwjaW1hZzcgOjphZnRlciwjaW1hZzcgOjpiZWZvcmV7Zm9udDoxMnB4LzQgc2Fucy1zZXJpZjtwb3NpdGlvbjphYnNvbHV0ZTtib3gtc2l6aW5nOmJvcmRlci1ib3g7bWFyZ2luOjB9I2ltYWc3IGJ1dHRvbiAqe3otaW5kZXg6LTE7cG9pbnRlci1ldmVudHM6bm9uZX0jaW5zaTd7dGV4dC1hbGlnbjpjZW50ZXJ9LmJvciwuYnJhOjphZnRlciwuYnJiOjpiZWZvcmV7Ym9yZGVyOjJweCBzb2xpZCAjZmZmfS5idXR7YmFja2dyb3VuZDpyZ2JhKDc3LDc3LDc3LC4yKTtoZWlnaHQ6NDhweDt3aWR0aDo0OHB4O2JvcmRlci1yYWRpdXM6NTAlO2JvcmRlcjowfS5idXQ6Zm9jdXMsLmJ1dDpob3ZlciwuaHZyOmhvdmVyIHNwYW57YmFja2dyb3VuZDpyZ2JhKDcsNyw3LC4xKTtvdXRsaW5lOjA7b3BhY2l0eToxO2N1cnNvcjpwb2ludGVyfSNsZWZ0NzphY3RpdmUsI3JpZ3Q3OmFjdGl2ZSwuYnV0OmFjdGl2ZXtvcGFjaXR5Oi4zfSNmb290Nywjb25vdzd7dGV4dC1pbmRlbnQ6NTBweDt3aGl0ZS1zcGFjZTpub3dyYXA7Ym90dG9tOjI0cHg7aGVpZ2h0OjQ4cHh9I2FsdHM3e3JpZ2h0OjUwcHh9I2FsdHM3LCNpbnNpNywjaW5zaTcgaW1nLCNzdGF0N3twb3NpdGlvbjpyZWxhdGl2ZX0jbGVmdDcsI3JpZ3Q3e2N1cnNvcjpwb2ludGVyO3dpZHRoOjIwJTttaW4td2lkdGg6OTZweDtib3JkZXI6MDtiYWNrZ3JvdW5kOjAgMDtoZWlnaHQ6MTAwJX0jaWxlZjc6OmFmdGVyLCNpcmlnNzo6YWZ0ZXJ7cGFkZGluZzo5cHg7dG9wOjE0cHh9I2luc2k3IGltZywudHJue3RvcDo1MCU7ei1pbmRleDotMTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9LnJ0cDo6YWZ0ZXIsLnJ0cDo6YmVmb3Jley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9LnJ0bTo6YWZ0ZXJ7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfSNpbGVmNzo6YWZ0ZXJ7Ym9yZGVyLXdpZHRoOjJweCAwIDAgMnB4O2xlZnQ6MTRweH0jaXJpZzc6OmFmdGVye3JpZ2h0OjE0cHg7Ym9yZGVyLXdpZHRoOjJweCAycHggMCAwfSNsZWZ0Nzpob3ZlciAjaWxlZjc6OmFmdGVye2xlZnQ6OXB4fSNyaWd0Nzpob3ZlciAjaXJpZzc6OmFmdGVye3JpZ2h0OjlweH0jY2xvczc6OmFmdGVyLCNjbG9zNzo6YmVmb3Jle2JvcmRlci13aWR0aDowIDAgMCAycHg7aGVpZ2h0OjMwcHg7bGVmdDoyM3B4O3RvcDoxMHB4fSNwbGF5Nzo6YmVmb3JlLCNzcG57Ym9yZGVyLXJhZGl1czo1MCU7aGVpZ2h0OjI0cHg7d2lkdGg6MjRweH0jc3Buey13ZWJraXQtYW5pbWF0aW9uOnIgLjNzIGxpbmVhciBpbmZpbml0ZTthbmltYXRpb246ciAuM3MgbGluZWFyIGluZmluaXRlO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCAjYWFhO2xlZnQ6NTAlO21hcmdpbjotMTJweCAwIDAtMTJweDt0b3A6NTAlfSNkb3duN3tib3JkZXItcmFkaXVzOjAgMCAycHggMnB4O3RvcDoyN3B4O2hlaWdodDo2cHg7d2lkdGg6MjRweDtib3JkZXItdG9wOjB9I3BsYXk3OjpiZWZvcmV7dHJhbnNpdGlvbjouMnMgYm9yZGVyLXJhZGl1czt0b3A6MTJweH0jcGxheTcuYXRjOjpiZWZvcmV7Ym9yZGVyLXJhZGl1czo0cHh9I3BsYXk3OjphZnRlcntib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgI2ZmZjtib3JkZXItd2lkdGg6NXB4IDAgNXB4IDEycHg7bGVmdDoxOXB4O3RvcDoxOXB4O3dpZHRoOjEwcHh9I3BsYXk3LmF0Yzo6YWZ0ZXJ7Ym9yZGVyLXdpZHRoOjAgMnB4O3BhZGRpbmctdG9wOjEwcHh9I3dkb3c3OjphZnRlcntib3JkZXItd2lkdGg6MCAwIDJweCAycHg7Ym90dG9tOjIxcHg7aGVpZ2h0OjEycHg7bGVmdDoxOHB4O3dpZHRoOjEycHh9I3dkb3c3OjpiZWZvcmV7YmFja2dyb3VuZDojZmZmO2hlaWdodDoxOHB4O2xlZnQ6MjNweDt0b3A6OXB4O3dpZHRoOjJweH0jY2xvczd7dG9wOjI0cHh9I2Rvd243LCNwbGF5Nzo6YmVmb3Jle2xlZnQ6MTJweH0jY2xvczcsI2lyaWc3LCNvbm93N3tyaWdodDoyNHB4O3RleHQtYWxpZ246cmlnaHR9I2Zvb3Q3LCNpbGVmN3tsZWZ0OjI0cHh9LnRyYXt0cmFuc2l0aW9uOi4xcyB0cmFuc2Zvcm19LmhkaXt0cmFuc2Zvcm06c2NhbGUoMCl9LmZmZntvdmVyZmxvdzpoaWRkZW4haW1wb3J0YW50fS5kcG57ZGlzcGxheTpub25lfS53MTB7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJX0ub3Bhe29wYWNpdHk6Ljd9LnRwb3t0b3A6MH0ubGZ0e2xlZnQ6MH0ucmd0e3JpZ2h0OjB9LmJ1dDo6YWZ0ZXIsLmJ1dDo6YmVmb3Jle2NvbnRlbnQ6IiJ9"),e(t.getElementsByTagName("head")[0],s),i.clos=n("button"),i.ilef=n("span"),i.irig=n("span"),i.imag=n("div"),i.cent=n("div"),i.left=n("button"),i.rigt=n("button"),i.insi=n("div"),i.spin=n("div"),a(i.clos,"id","clos7","class","bra brb rtm rtp opa but","aria-label","Close","title","Press Esc to close"),a(i.ilef,"id","ilef7","class","bra rtm opa trn but"),a(i.irig,"id","irig7","class","bra rtp opa trn but"),a(i.cent,"id","cent7","class","tpo lft w10"),a(i.rigt,"id","rigt7","class","tpo rgt hvr","aria-label","Next"),a(i.left,"id","left7","class","tpo lft hvr","aria-label","Previous"),a(i.imag,"id","imag7","class","hdi fff w10 tra tpo lft","style","display:none"),a(i.spin,"id","spn","class","dpn"),a(i.insi,"id","insi7","class","w10"),e(i.rigt,i.irig),e(i.left,i.ilef),e(i.cent,i.insi,i.rigt,i.left,i.clos,i.spin),e(i.imag,i.cent),e(t.body,i.imag),i.showButtons&&(i.wdow=n("button"),i.play=n("button"),i.foot=n("div"),i.onow=n("div"),i.alts=n("span"),i.fine=n("span"),i.down=n("span"),a(i.play,"id","play7","class","tpo lft bra brb opa but","aria-label","play"),a(i.down,"id","down7","class","bor"),a(i.wdow,"id","wdow7","class","tpo rgt bra rtm opa but","aria-label","download"),a(i.alts,"id","alts7","class","fff"),i.foot.id="foot7",i.onow.id="onow7",i.fine.id="stat7",e(i.onow,i.alts,i.wdow),e(i.imag,i.onow,i.foot),e(i.foot,i.play,t.createTextNode(i.imagesArray.length+"("),i.fine,t.createTextNode(")")),e(i.wdow,i.down)),setTimeout((function(){return i.imag.removeAttribute("style")}),220)}}])&&o(s.prototype,l),Object.defineProperty(s,"prototype",{writable:!1}),i}(),c={autoPlayLoop:function(){var t=this;this.isAutoPlayOn=!0,this.showButtons&&(this.play.className="but tpo lft bra brb opa atc"),this.timeOut=setTimeout((function(){t.right().show(),t.showButtonsOnPlay||(t.left.className=t.rigt.className=t.clos.className="dpn",t.showButtons&&(t.foot.className=t.onow.className="dpn")),t.indexOfImage===t.imagesArray.length-1&&t.clear()}),this.delaySeconds)},loadComplete:function(){this.spin.className="dpn",this.isAutoPlayOn&&this.autoPlayLoop()},downloads:function(){var t=n("a");a(t,"rel","noopener","download",this.imgs.src.split("/").pop(),"href",this.imgs.src,"target","_blank"),t.click(),t.remove()},lefts:function(){return this.indexOfImage=this.indexOfImage>0?this.indexOfImage-1:this.imagesArray.length-1,this},right:function(){return this.indexOfImage=this.indexOfImage<this.imagesArray.length-1?this.indexOfImage+1:0,this},clear:function(){return clearTimeout(this.timeOut),this.isAutoPlayOn=!1,this.showButtons&&(this.foot.className=this.onow.className="",this.play.className="but tpo lft bra brb opa"),this.showButtonsOnPlay||(this.clos.className="but bra brb rtm rtp opa"),this.leftRigthBtnsShow(),this},close:function(){this.imag.className="hdi w10 tra tpo lft",this.isActive=!1,i.className=i.className.split("fff").join("").trim()},leftRigthBtnsShow:function(){this.left.className=0===this.indexOfImage?"dpn":"tpo lft hvr",this.rigt.className=this.indexOfImage===this.imagesArray.length-1?"dpn":"tpo rgt hvr"},show:function(){var t=this,a=this.imagesArray[this.indexOfImage].src,s=a.split("/").pop(),o=s.split("."),l=o[0]+"."+(this.extension||o[1]),c="svg"===o?a:a.replace(s,this.folder+l);if(this.isActive||(this.isActive=!0,setTimeout((function(){i.className=i.className?i.className+" fff":"fff",t.imag.className="fff w10 tpo lft"}),90),this.imag.className="fff w10 tra tpo lft"),this.showButtons&&(this.alts.innerText="svg"===o[1]?o.join("."):l,this.fine.innerText=Number(this.indexOfImage)+1),this.imgs&&(this.imgs.src===a||this.imgs.src===c))return!1;this.insi.getElementsByTagName("img").length>0&&this.insi.removeChild(this.imgs),this.spin.className="bor",this.leftRigthBtnsShow(),this.imgs=n("img"),this.imgs.onerror=function(t){t.target.onerror=null,t.target.src=a},this.imgs.onload=function(t){var i=this.imgs.src;this.showButtons&&c!==i&&(this.alts.innerText=i.split("/").pop()),this.loadComplete()}.bind(this),"svg"!==o[1]?this.imgs.src=c:this.imgs.src=a,e(this.insi,this.imgs)},listenForIG:function(t){var i=t.target;"IMG"===i.tagName&&(this.indexOfImage=this.imagesArray.indexOf(i)>-1?this.imagesArray.indexOf(i):0,this.show(),t.stopImmediatePropagation())}};Object.assign(l.prototype,c);var r=new l({delaySeconds:1033,folder:"s/",imageContainer:"images",showButtons:!0,showButtonsOnPlay:!0,extension:""});r.addImagesToArray(),r.init(),function(){var t,i,e,a=this,n={play7:function(){a.isAutoPlayOn?a.clear():a.autoPlayLoop()},left7:function(){a.clear().lefts().show()},rigt7:function(){a.clear().right().show()},clos7:function(){a.clear().close()},wdow7:function(){a.clear().downloads()}};function s(t){if(a.isActive&&!t.isComposing&&229!==t.key){var i=t.key||t.target.id;if(!n[i])return a.clear();n[i](),t.preventDefault(),t.stopImmediatePropagation()}}n[" "]=n.play7,n.ArrowLeft=n.left7,n.ArrowRight=n.rigt7,n.Escape=n.clos7,a.imag.addEventListener("touchstart",(function(a){var n=a.touches[0];t=n.pageX,i=n.pageY,e=new Date}),{passive:!0}),a.imag.addEventListener("touchend",(function(a){var s=a.changedTouches[0],o=s.pageX,l=s.pageY,c=new Date,r=o-t,m=l-i,d=c-e,h=Math.abs(r)>30,p=Math.abs(m)<30;h&&p&&d<1e3&&n[r<0?"rigt7":"left7"]()})),a.imag.addEventListener("click",s.bind(a)),window.addEventListener("keyup",s.bind(a))}.call(r)}();