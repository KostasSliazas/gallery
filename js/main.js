((t,s)=>{"use strict";const a=s.documentElement,i=(t,...s)=>{for(let a=0;a<s.length;a++)t.appendChild(s[a])},l=(t,...a)=>{const i=s.createElement(t);for(let t=0;t<a.length;t+=2)i.setAttribute(a[t],a[t+1]);return i},e=(t,s)=>setTimeout(t,s);class c{constructor(t){const s=this;Object.assign(s,t),s.imagesArray=[],s.indexOfImage=null,s.isAutoPlayOn=!1,s.isActive=!1,s.timeOut=0}addImagesToArray(){const t=this,a=s.getElementsByClassName(t.imageContainer).length>0?s.getElementsByClassName(t.imageContainer):s.getElementsByTagName("body"),i=a.length;for(let s=0;s<i;s++)t.imagesArray.push(...a[s].getElementsByTagName("img"));const l=s=>{t.listenForIG(s)};if(a[0]&&"BODY"===a[0].tagName)s.body.onclick=l;else for(let t=0;t<i;t++)a[t].onclick=l;return t.imagesArray.length}init(){const t=this,a=l("link","rel","stylesheet","href","data:text/css;base64,QGtleWZyYW1lcyBye3Rve3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19I2ltYWc3e3VzZXItc2VsZWN0Om5vbmU7YmFja2dyb3VuZDp2YXIoLS1jb2xvcjIsIzIyMyk7Y29sb3I6I2FhYTtwb3NpdGlvbjpmaXhlZDt6LWluZGV4Ojk5OTk5OTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnN9I2ltYWc3ICNpbnNpNyBpbWd7YmFja2dyb3VuZDp2YXIoLS1jb2xvcjEsIzMzNCk7bWF4LWhlaWdodDoxMDAlO21heC13aWR0aDoxMDAlfSNpbWFnNyAqLCNpbWFnNyA6OmFmdGVyLCNpbWFnNyA6OmJlZm9yZXtmb250OjEycHgvNCBzYW5zLXNlcmlmO3Bvc2l0aW9uOmFic29sdXRlO2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmlubGluZS1ibG9ja30jaW1hZzcgYnV0dG9uICp7ei1pbmRleDotMTtwb2ludGVyLWV2ZW50czpub25lfSNpbWFnNyAjaW5zaTd7dGV4dC1hbGlnbjpjZW50ZXJ9I2ltYWc3ICNmb290NywjaW1hZzcgI29ub3c3e3RleHQtaW5kZW50OjUwcHg7d2hpdGUtc3BhY2U6bm93cmFwO2JvdHRvbToyNHB4O2hlaWdodDo0OHB4fSNpbWFnNyAjYWx0czd7cmlnaHQ6NTBweH0jaW1hZzcgI2FsdHM3LCNpbWFnNyAjaW5zaTcsI2ltYWc3ICNpbnNpNyBpbWcsI2ltYWc3ICNzdGF0N3twb3NpdGlvbjpyZWxhdGl2ZX0jaW1hZzcgI3N0YXQ3e3RleHQtaW5kZW50OjB9I2ltYWc3ICNsZWZ0NywjaW1hZzcgI3JpZ3Q3e3dpZHRoOjIwJTttaW4td2lkdGg6OTZweDtib3JkZXI6MDtiYWNrZ3JvdW5kOjAgMDtoZWlnaHQ6MTAwJX0jaW1hZzcgI2lsZWY3OjphZnRlciwjaW1hZzcgI2lyaWc3OjphZnRlcntwYWRkaW5nOjlweDt0b3A6MTRweH0jaW1hZzcgI2lsZWY3OjphZnRlcntib3JkZXItd2lkdGg6MnB4IDAgMCAycHg7bGVmdDoxNHB4fSNpbWFnNyAjaXJpZzc6OmFmdGVye3JpZ2h0OjE0cHg7Ym9yZGVyLXdpZHRoOjJweCAycHggMCAwfSNpbWFnNyAjbGVmdDc6aG92ZXIgI2lsZWY3OjphZnRlcntsZWZ0OjlweH0jaW1hZzcgI3JpZ3Q3OmhvdmVyICNpcmlnNzo6YWZ0ZXJ7cmlnaHQ6OXB4fSNpbWFnNyAjY2xvczc6OmFmdGVyLCNpbWFnNyAjY2xvczc6OmJlZm9yZXtib3JkZXItd2lkdGg6MCAwIDAgMnB4O2hlaWdodDozMHB4O2xlZnQ6MjNweDt0b3A6MTBweH0jaW1hZzcgI3BsYXk3OjpiZWZvcmUsI2ltYWc3ICNzcG57Ym9yZGVyLXJhZGl1czo1MCU7aGVpZ2h0OjI0cHg7d2lkdGg6MjRweH0jaW1hZzcgI3NwbnthbmltYXRpb246ciAuM3MgbGluZWFyIGluZmluaXRlO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCAjYWFhO2xlZnQ6NTAlO21hcmdpbjotMTJweCAwIDAtMTJweDt0b3A6NTAlfSNpbWFnNyAjZG93bjd7Ym9yZGVyLXJhZGl1czowIDAgMnB4IDJweDt0b3A6MjdweDtoZWlnaHQ6NnB4O3dpZHRoOjI0cHg7Ym9yZGVyLXRvcDowfSNpbWFnNyAjcGxheTc6OmJlZm9yZXt0cmFuc2l0aW9uOi4ycyBib3JkZXItcmFkaXVzO3RvcDoxMnB4fSNpbWFnNyAjcGxheTcuYXRjOjpiZWZvcmV7Ym9yZGVyLXJhZGl1czo0cHh9I2ltYWc3ICNwbGF5Nzo6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50ICNmZmY7Ym9yZGVyLXdpZHRoOjVweCAwIDVweCAxMnB4O2xlZnQ6MTlweDt0b3A6MTlweDt3aWR0aDoxMHB4fSNpbWFnNyAjcGxheTcuYXRjOjphZnRlcntib3JkZXItd2lkdGg6MCAycHg7cGFkZGluZy10b3A6MTBweH0jaW1hZzcgI3dkb3c3OjphZnRlcntib3JkZXItd2lkdGg6MCAwIDJweCAycHg7Ym90dG9tOjIxcHg7aGVpZ2h0OjEycHg7bGVmdDoxOHB4O3dpZHRoOjEycHh9I2ltYWc3ICN3ZG93Nzo6YmVmb3Jle2JhY2tncm91bmQ6I2ZmZjtoZWlnaHQ6MThweDtsZWZ0OjIzcHg7dG9wOjlweDt3aWR0aDoycHh9I2ltYWc3ICNjbG9zN3t0b3A6MjRweH0jaW1hZzcgI2Rvd243LCNpbWFnNyAjcGxheTc6OmJlZm9yZXtsZWZ0OjEycHh9I2ltYWc3ICNjbG9zNywjaW1hZzcgI2lyaWc3LCNpbWFnNyAjb25vdzd7cmlnaHQ6MjRweDt0ZXh0LWFsaWduOnJpZ2h0fSNpbWFnNyAjZm9vdDcsI2ltYWc3ICNpbGVmN3tsZWZ0OjI0cHh9I2ltYWc3ICNpbnNpNyBpbWcsI2ltYWc3IC50cm57dG9wOjUwJTt6LWluZGV4Oi0xO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpfSNpbWFnNyAucnRwOjphZnRlciwjaW1hZzcgLnJ0cDo6YmVmb3Jle3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpfSNpbWFnNyAucnRtOjphZnRlcnt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9I2ltYWc3IC53MTAsI2ltYWc3LncxMHtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlfSNpbWFnNyAuYm9yLCNpbWFnNyAuYnJhOjphZnRlciwjaW1hZzcgLmJyYjo6YmVmb3Jle2JvcmRlcjoycHggc29saWQgI2ZmZn0jaW1hZzcgLmJ1dHtiYWNrZ3JvdW5kOnJnYmEoNzcsNzcsNzcsLjIpO2hlaWdodDo0OHB4O3dpZHRoOjQ4cHg7Ym9yZGVyLXJhZGl1czo1MCU7Ym9yZGVyOjA7Y3Vyc29yOnBvaW50ZXI7dHJhbnNpdGlvbjouMnN9I2ltYWc3IC5idXQ6OmFmdGVyLCNpbWFnNyAuYnV0OjpiZWZvcmV7Y29udGVudDoiIn0jaW1hZzcgLmJ1dDpmb2N1cywjaW1hZzcgLmJ1dDpob3ZlciwjaW1hZzcgLmJ1dDpob3ZlciBzcGFue2JhY2tncm91bmQ6cmdiYSg3LDcsNywuMSk7b3V0bGluZTowO29wYWNpdHk6MX0jaW1hZzcgLmJ1dDphY3RpdmV7b3BhY2l0eTouM30jaW1hZzcgLmRwbnt2aXNpYmlsaXR5OmhpZGRlbn0jaW1hZzcgLmhkaSwjaW1hZzcuaGRpe29wYWNpdHk6MH0jaW1hZzcgLm9wYXtvcGFjaXR5Oi43fSNpbWFnNyAucmd0e3JpZ2h0OjB9I2ltYWc3IC50cG8sI2ltYWc3LnRwb3t0b3A6MH0jaW1hZzcgLmxmdCwjaW1hZzcubGZ0e2xlZnQ6MH0jaW1hZzcgLmZmZiwjaW1hZzcuZmZmLGh0bWwuZmZme292ZXJmbG93OmhpZGRlbiFpbXBvcnRhbnR9I2ltYWc3LnNjYXt0cmFuc2Zvcm06c2NhbGUoMCl9QG1lZGlhIChtaW4td2lkdGg6MTAyNHB4KXsjaW1hZzc6bm90KDpob3ZlcikgI2NlbnQ3fmRpdiwjaW1hZzc6bm90KDpob3ZlcikgI2luc2k3fmJ1dHRvbntvcGFjaXR5OjB9fQ==");i(s.getElementsByTagName("head")[0],a),t.clos=l("button","id","clos7","class","bra rtp opa but rtm brb","aria-label","Close","title","Press Esc to close"),t.ilef=l("span","id","ilef7","class","bra rtm opa trn but"),t.irig=l("span","id","irig7","class","bra rtp opa but trn"),t.imag=l("div","id","imag7","class","sca hdi fff w10 tpo lft","role","dialog","aria-label","imag7"),t.cent=l("div","id","cent7","class","tpo lft w10"),t.left=l("button","id","left7","class","but tpo lft","aria-label","Previous"),t.rigt=l("button","id","rigt7","class","but tpo rgt","aria-label","Next"),t.insi=l("div","id","insi7","class","w10"),t.spin=l("div","id","spn","class","dpn"),t.imgs=l("img","src","data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACwAAAAAAQABAEACAkQBADs=","alt","","loading","lazy"),i(t.insi,t.imgs),i(t.rigt,t.irig),i(t.left,t.ilef),i(t.cent,t.insi,t.rigt,t.left,t.clos),i(t.imag,t.cent,t.spin),i(s.body,t.imag),t.showButtons&&(t.wdow=l("button","id","wdow7","class","tpo rgt bra rtm opa but","aria-label","download"),t.play=l("button","id","play7","class","tpo lft bra brb opa but","aria-label","play"),t.foot=l("div","id","foot7"),t.onow=l("div","id","onow7"),t.alts=l("span","id","alts7","class","fff"),t.fine=l("span","id","stat7"),t.down=l("span","id","down7","class","bor"),i(t.onow,t.alts,t.wdow),i(t.imag,t.onow,t.foot),i(t.foot,t.play,s.createTextNode("Image "),t.fine,s.createTextNode(" of "+t.imagesArray.length)),i(t.wdow,t.down)),e((()=>t.imag.className="sca hdi fff w10 tpo lft"),220)}}const n={autoPlayLoop(){this.isAutoPlayOn||(this.showButtons&&(this.play.className="but bra brb opa tpo lft atc"),this.showButtonsOnPlay||(this.showButtons&&(this.foot.className=this.onow.className="dpn"),this.left.className=this.rigt.className=this.clos.className="dpn")),clearTimeout(this.timeOut),this.isAutoPlayOn=!0,this.timeOut=e((()=>{if(this.isAutoPlayOn){if(this.right().show(),this.indexOfImage===this.imagesArray.length-1)return this.clear();this.autoPlayLoop()}}),this.delaySeconds)},downloads(){const t=l("a","rel","noopener","download",this.imgs.src.split("/").pop(),"href",this.imgs.src,"target","_blank");t.click(),t.remove()},lefts(){return this.indexOfImage=this.indexOfImage>0?this.indexOfImage-1:this.imagesArray.length-1,this},right(){return this.indexOfImage=this.indexOfImage<this.imagesArray.length-1?this.indexOfImage+1:0,this},clear(){const t="but bra brb opa";return this.showButtons&&(this.foot.className=this.onow.className="",this.play.className=t+" tpo lft"),this.clos.className=t+" rtm rtp",this.leftRightButtonsVisibility(),this.isAutoPlayOn=!1,this},leftRightButtonsVisibility(){this.left.className=0===this.indexOfImage?"dpn":"but tpo hvr lft",this.rigt.className=this.indexOfImage===this.imagesArray.length-1?"dpn":"but tpo hvr rgt"},close(){this.isActive=!1,this.imag.className="sca hdi w10 tpo lft",a.className=a.className.split("fff").join("").trim()},show(){const t=this.imagesArray[this.indexOfImage],s=t.src,c=s.split("/").pop(),n=c.split("."),o=n[0]+"."+(this.extension||n[1]),m="svg"===n?s:s.replace(c,this.folder+o);this.isActive||(this.isActive=!0,e((()=>{a.className=a.className?a.className+" fff":"fff"}),34),this.imag.className="fff w10 tpo lft"),this.imgs.src!==m&&this.imgs.src!==s&&(this.spin.className="bor",this.insi.removeChild(this.imgs),this.imgs=l("img","src","svg"!==n[1]?m:s,"alt",t.alt+" selected"),this.imgs.onload=t=>{this.spin.className="dpn",this.showButtons&&(this.alts.innerText=t.target.src.split("/").pop())},this.imgs.onerror=t=>{t.target.onerror=null,t.target.src=s},this.fine&&(this.fine.innerText=Number(this.indexOfImage)+1),i(this.insi,this.imgs),this.isAutoPlayOn&&!this.showButtonsOnPlay||this.leftRightButtonsVisibility())},listenForIG(t){const s=t.target;"IMG"===s.tagName&&(this.indexOfImage=this.imagesArray.indexOf(s)>-1?this.imagesArray.indexOf(s):0,this.show(),t.stopImmediatePropagation())}};Object.assign(c.prototype,n);const o=new c({delaySeconds:1033,folder:"l/",imageContainer:"images",showButtons:1,showButtonsOnPlay:1,extension:""});o.addImagesToArray()&&(o.init(),function(){const s=this,a={play7(){s.autoPlayLoop()},left7(){s.lefts().show()},rigt7(){s.right().show()},clos7(){s.close()},wdow7(){s.downloads()}};a[" "]=a.play7,a.ArrowLeft=a.left7,a.ArrowRight=a.rigt7;const i=t=>{const i=t.key||t.target.id;"Escape"!==i&&"clos7"!==i||s.close(),a[i]&&!s.isAutoPlayOn&&s.isActive&&!t.isComposing&&229!==t.key?(a[i](),t.preventDefault(),t.stopImmediatePropagation()):s.clear()};s.imag.addEventListener("click",i.bind(s)),t.addEventListener("keyup",i.bind(s))}.call(o))})(window,document);
