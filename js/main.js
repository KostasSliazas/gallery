!function(){"use strict";var t=document,i=t.documentElement,a=function(t){for(var i=0;i<(arguments.length<=1?0:arguments.length-1);i++)t.appendChild(i+1<1||arguments.length<=i+1?void 0:arguments[i+1])},e=function(i){for(var a=t.createElement(i),e=0;e<(arguments.length<=1?0:arguments.length-1);e+=2)a.setAttribute(e+1<1||arguments.length<=e+1?void 0:arguments[e+1],e+1+1<1||arguments.length<=e+1+1?void 0:arguments[e+1+1]);return a};function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function c(t,i){for(var a=0;a<i.length;a++){var e=i[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,(void 0,c=function(t,i){if("object"!==n(t)||null===t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var e=a.call(t,"string");if("object"!==n(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(e.key),"symbol"===n(c)?c:String(c)),e)}var c}var l=function(){function i(t){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,i);var a=this;Object.assign(a,t),a.imagesArray=[],a.indexOfImage=null,a.isAutoPlayOn=!1,a.isActive=!1,a.timeOut=0}var n,l;return n=i,(l=[{key:"addImagesToArray",value:function(){for(var i=this,a=t.getElementsByClassName(i.imageContainer).length>0?t.getElementsByClassName(i.imageContainer):t.getElementsByTagName("body"),e=a.length,n=0;n<e;n++)i.imagesArray.push.apply(i.imagesArray,a[n].getElementsByTagName("img"));var c=function(t){i.listenForIG(t)}.bind(i);if(a[0]&&"BODY"===a[0].tagName)t.body.onclick=c;else for(var l=0;l<e;l++)a[l].onclick=c}},{key:"init",value:function(){var i=this,n=e("link","rel","stylesheet","href","data:text/css;base64,QC13ZWJraXQta2V5ZnJhbWVzIHJ7dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1Aa2V5ZnJhbWVzIHJ7dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX0jaW1hZzd7dXNlci1zZWxlY3Q6bm9uZTtiYWNrZ3JvdW5kOiMyMjM7Y29sb3I6Izc3Nztwb3NpdGlvbjpmaXhlZDt6LWluZGV4Ojk5OTk5OTt0cmFuc2l0aW9uOi4ycyB0cmFuc2Zvcm19I2ltYWc3ICNpbnNpNyBpbWd7YmFja2dyb3VuZDojMzM0O21heC1oZWlnaHQ6MTAwJTttYXgtd2lkdGg6MTAwJX0jaW1hZzcgKiwjaW1hZzcgOjphZnRlciwjaW1hZzcgOjpiZWZvcmV7Zm9udDoxMnB4LzQgc2Fucy1zZXJpZjtwb3NpdGlvbjphYnNvbHV0ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9I2ltYWc3IGJ1dHRvbiAqe3otaW5kZXg6LTE7cG9pbnRlci1ldmVudHM6bm9uZX0jaW1hZzcgI2luc2k3e3RleHQtYWxpZ246Y2VudGVyfSNpbWFnNyAjZm9vdDcsI2ltYWc3ICNvbm93N3t0ZXh0LWluZGVudDo1MHB4O3doaXRlLXNwYWNlOm5vd3JhcDtib3R0b206MjRweDtoZWlnaHQ6NDhweH0jaW1hZzcgI2FsdHM3e3JpZ2h0OjUwcHh9I2ltYWc3ICNhbHRzNywjaW1hZzcgI2luc2k3LCNpbWFnNyAjaW5zaTcgaW1nLCNpbWFnNyAjc3RhdDd7cG9zaXRpb246cmVsYXRpdmV9I2ltYWc3ICNsZWZ0NywjaW1hZzcgI3JpZ3Q3e3dpZHRoOjIwJTttaW4td2lkdGg6OTZweDtib3JkZXI6MDtiYWNrZ3JvdW5kOjAgMDtoZWlnaHQ6MTAwJX0jaW1hZzcgI2lsZWY3OjphZnRlciwjaW1hZzcgI2lyaWc3OjphZnRlcntwYWRkaW5nOjlweDt0b3A6MTRweH0jaW1hZzcgI2lsZWY3OjphZnRlcntib3JkZXItd2lkdGg6MnB4IDAgMCAycHg7bGVmdDoxNHB4fSNpbWFnNyAjaXJpZzc6OmFmdGVye3JpZ2h0OjE0cHg7Ym9yZGVyLXdpZHRoOjJweCAycHggMCAwfSNpbWFnNyAjbGVmdDc6aG92ZXIgI2lsZWY3OjphZnRlcntsZWZ0OjlweH0jaW1hZzcgI3JpZ3Q3OmhvdmVyICNpcmlnNzo6YWZ0ZXJ7cmlnaHQ6OXB4fSNpbWFnNyAjY2xvczc6OmFmdGVyLCNpbWFnNyAjY2xvczc6OmJlZm9yZXtib3JkZXItd2lkdGg6MCAwIDAgMnB4O2hlaWdodDozMHB4O2xlZnQ6MjNweDt0b3A6MTBweH0jaW1hZzcgI3BsYXk3OjpiZWZvcmUsI2ltYWc3ICNzcG57Ym9yZGVyLXJhZGl1czo1MCU7aGVpZ2h0OjI0cHg7d2lkdGg6MjRweH0jaW1hZzcgI3Nwbnstd2Via2l0LWFuaW1hdGlvbjpyIC4zcyBsaW5lYXIgaW5maW5pdGU7YW5pbWF0aW9uOnIgLjNzIGxpbmVhciBpbmZpbml0ZTtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgI2FhYTtsZWZ0OjUwJTttYXJnaW46LTEycHggMCAwLTEycHg7dG9wOjUwJX0jaW1hZzcgI2Rvd243e2JvcmRlci1yYWRpdXM6MCAwIDJweCAycHg7dG9wOjI3cHg7aGVpZ2h0OjZweDt3aWR0aDoyNHB4O2JvcmRlci10b3A6MH0jaW1hZzcgI3BsYXk3OjpiZWZvcmV7dHJhbnNpdGlvbjouMnMgYm9yZGVyLXJhZGl1czt0b3A6MTJweH0jaW1hZzcgI3BsYXk3LmF0Yzo6YmVmb3Jle2JvcmRlci1yYWRpdXM6NHB4fSNpbWFnNyAjcGxheTc6OmFmdGVye2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCAjZmZmO2JvcmRlci13aWR0aDo1cHggMCA1cHggMTJweDtsZWZ0OjE5cHg7dG9wOjE5cHg7d2lkdGg6MTBweH0jaW1hZzcgI3BsYXk3LmF0Yzo6YWZ0ZXJ7Ym9yZGVyLXdpZHRoOjAgMnB4O3BhZGRpbmctdG9wOjEwcHh9I2ltYWc3ICN3ZG93Nzo6YWZ0ZXJ7Ym9yZGVyLXdpZHRoOjAgMCAycHggMnB4O2JvdHRvbToyMXB4O2hlaWdodDoxMnB4O2xlZnQ6MThweDt3aWR0aDoxMnB4fSNpbWFnNyAjd2Rvdzc6OmJlZm9yZXtiYWNrZ3JvdW5kOiNmZmY7aGVpZ2h0OjE4cHg7bGVmdDoyM3B4O3RvcDo5cHg7d2lkdGg6MnB4fSNpbWFnNyAjY2xvczd7dG9wOjI0cHh9I2ltYWc3ICNkb3duNywjaW1hZzcgI3BsYXk3OjpiZWZvcmV7bGVmdDoxMnB4fSNpbWFnNyAjY2xvczcsI2ltYWc3ICNpcmlnNywjaW1hZzcgI29ub3c3e3JpZ2h0OjI0cHg7dGV4dC1hbGlnbjpyaWdodH0jaW1hZzcgI2Zvb3Q3LCNpbWFnNyAjaWxlZjd7bGVmdDoyNHB4fSNpbWFnNyAjaW5zaTcgaW1nLCNpbWFnNyAudHJue3RvcDo1MCU7ei1pbmRleDotMTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9I2ltYWc3IC5ydHA6OmFmdGVyLCNpbWFnNyAucnRwOjpiZWZvcmV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKX0jaW1hZzcgLnJ0bTo6YWZ0ZXJ7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfSNpbWFnNyAudzEwLCNpbWFnNy53MTB7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJX0jaW1hZzcgLmJvciwjaW1hZzcgLmJyYTo6YWZ0ZXIsI2ltYWc3IC5icmI6OmJlZm9yZXtib3JkZXI6MnB4IHNvbGlkICNmZmZ9I2ltYWc3IC5idXR7YmFja2dyb3VuZDpyZ2JhKDc3LDc3LDc3LC4yKTtoZWlnaHQ6NDhweDt3aWR0aDo0OHB4O2JvcmRlci1yYWRpdXM6NTAlO2JvcmRlcjowO2N1cnNvcjpwb2ludGVyfSNpbWFnNyAuYnV0OjphZnRlciwjaW1hZzcgLmJ1dDo6YmVmb3Jle2NvbnRlbnQ6IiJ9I2ltYWc3IC5idXQ6Zm9jdXMsI2ltYWc3IC5idXQ6aG92ZXIsI2ltYWc3IC5idXQ6aG92ZXIgc3BhbntiYWNrZ3JvdW5kOnJnYmEoNyw3LDcsLjEpO291dGxpbmU6MDtvcGFjaXR5OjF9I2ltYWc3IC5idXQ6YWN0aXZle29wYWNpdHk6LjN9I2ltYWc3IC5kcG57dmlzaWJpbGl0eTpoaWRkZW59I2ltYWc3IC5oZGksI2ltYWc3LmhkaXtvcGFjaXR5OjB9I2ltYWc3IC5vcGF7b3BhY2l0eTouN30jaW1hZzcgLnJndHtyaWdodDowfSNpbWFnNyAudHBvLCNpbWFnNy50cG97dG9wOjB9I2ltYWc3IC5sZnQsI2ltYWc3LmxmdHtsZWZ0OjB9I2ltYWc3IC5mZmYsI2ltYWc3LmZmZixodG1sLmZmZntvdmVyZmxvdzpoaWRkZW4haW1wb3J0YW50fSNpbWFnNy5zY2F7dHJhbnNmb3JtOnNjYWxlKDApfUBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI0cHgpeyNpbWFnNzpub3QoOmhvdmVyKSAjY2VudDd+ZGl2LCNpbWFnNzpub3QoOmhvdmVyKSAjaW5zaTd+YnV0dG9ue29wYWNpdHk6MH19");a(t.getElementsByTagName("head")[0],n);var c="button",l="span",o="div",s="aria-label",m="class",r="id";i.clos=e(c,r,"clos7",m,"bra rtp opa but rtm brb",s,"Close","title","Press Esc to close"),i.ilef=e(l,r,"ilef7",m,"bra rtm opa trn but"),i.irig=e(l,r,"irig7",m,"bra rtp opa but trn"),i.imag=e(o,r,"imag7",m,"sca hdi fff w10 tpo lft","role","dialog",s,"imag7"),i.cent=e(o,r,"cent7",m,"tpo lft w10"),i.left=e(c,r,"left7",m,"but tpo lft",s,"Previous"),i.rigt=e(c,r,"rigt7",m,"but tpo rgt",s,"Next"),i.insi=e(o,r,"insi7",m,"w10"),i.spin=e(o,r,"spn",m,"dpn"),i.imgs=e("img","src",i.imagesArray[0].src,"alt","alt"),a(i.insi,i.imgs),a(i.rigt,i.irig),a(i.left,i.ilef),a(i.cent,i.insi,i.rigt,i.left,i.clos),a(i.imag,i.cent,i.spin),a(t.body,i.imag),i.showButtons&&(i.wdow=e(c,r,"wdow7",m,"tpo rgt bra rtm opa but",s,"download"),i.play=e(c,r,"play7",m,"tpo lft bra brb opa but",s,"play"),i.foot=e(o,r,"foot7"),i.onow=e(o,r,"onow7"),i.alts=e(l,r,"alts7",m,"fff"),i.fine=e(l,r,"stat7"),i.down=e(l,r,"down7",m,"bor"),a(i.onow,i.alts,i.wdow),a(i.imag,i.onow,i.foot),a(i.foot,i.play,t.createTextNode("Image "),i.fine,t.createTextNode(" of "+i.imagesArray.length)),a(i.wdow,i.down))}}])&&c(n.prototype,l),Object.defineProperty(n,"prototype",{writable:!1}),i}(),o={autoPlayLoop:function(){var t,i,a=this;this.isAutoPlayOn=!0,this.showButtons&&(this.play.className="but bra brb opa tpo lft atc"),this.timeOut=(t=function(){a.right().show(),a.showButtonsOnPlay||(a.left.className=a.rigt.className=a.clos.className="dpn",a.showButtons&&(a.foot.className=a.onow.className="dpn")),a.indexOfImage===a.imagesArray.length-1&&a.clear()},i=this.delaySeconds,setTimeout(t,i))},loadComplete:function(){this.spin.className="dpn",this.isAutoPlayOn&&this.autoPlayLoop()},downloads:function(){var t=e("a","rel","noopener","download",this.imgs.src.split("/").pop(),"href",this.imgs.src,"target","_blank");t.click(),t.remove()},lefts:function(){return this.indexOfImage=this.indexOfImage>0?this.indexOfImage-1:this.imagesArray.length-1,this},right:function(){return this.indexOfImage=this.indexOfImage<this.imagesArray.length-1?this.indexOfImage+1:0,this},clear:function(){return clearTimeout(this.timeOut),this.isAutoPlayOn=!1,this.showButtons&&(this.foot.className=this.onow.className="",this.play.className="but bra brb opa tpo lft"),this.showButtonsOnPlay||(this.clos.className="but bra brb opa rtm rtp"),this},close:function(){this.imag.className="sca hdi w10 tpo lft",this.isActive=!1,i.className=i.className.split("fff").join("").trim()},leftRigthBtnsShow:function(){this.left.className=0===this.indexOfImage?"dpn":"but tpo hvr lft",this.rigt.className=this.indexOfImage===this.imagesArray.length-1?"dpn":"but tpo hvr rgt"},show:function(){var t=this.imagesArray[this.indexOfImage],n=t.src,c=n.split("/").pop(),l=c.split("."),o=l[0]+"."+(this.extension||l[1]),s="svg"===l?n:n.replace(c,this.folder+o);this.isActive||(this.isActive=!0,i.className=i.className?i.className+" fff":"fff",this.imag.className="fff w10 tpo lft"),this.imgs.src!==s&&this.imgs.src!==n&&(this.leftRigthBtnsShow(),this.spin.className="bor",this.insi.removeChild(this.imgs),this.imgs=e("img","src","svg"!==l[1]?s:n,"alt",t.alt+" image gallery"),this.imgs.onload=function(t){this.showButtons&&(this.alts.innerText=t.target.src.split("/").pop()),this.loadComplete()}.bind(this),this.imgs.onerror=function(t){t.target.onerror=null,t.target.src=n},this.fine.innerText=Number(this.indexOfImage)+1,a(this.insi,this.imgs))},listenForIG:function(t){var i=t.target;"IMG"===i.tagName&&(this.indexOfImage=this.imagesArray.indexOf(i)>-1?this.imagesArray.indexOf(i):0,this.show(),t.stopImmediatePropagation())}};Object.assign(l.prototype,o);var s=new l({delaySeconds:1033,folder:"l/",imageContainer:"images",showButtons:1,showButtonsOnPlay:1,extension:""});s.addImagesToArray(),s.init(),function(){var t=this,i={play7:function(){t.isAutoPlayOn?t.clear():t.autoPlayLoop()},left7:function(){t.clear().lefts().show()},rigt7:function(){t.clear().right().show()},clos7:function(){t.clear().close()},wdow7:function(){t.clear().downloads()}};function a(a){if(t.isActive&&!a.isComposing&&229!==a.key){var e=a.key||a.target.id;if(!i[e])return t.clear();i[e](),a.preventDefault(),a.stopImmediatePropagation()}}i[" "]=i.play7,i.ArrowLeft=i.left7,i.ArrowRight=i.rigt7,i.Escape=i.clos7,t.imag.addEventListener("click",a.bind(t)),window.addEventListener("keyup",a.bind(t))}.call(s)}();