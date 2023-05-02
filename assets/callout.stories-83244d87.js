import{g as S}from"./_commonjsHelpers-725317a4.js";import{e as L,u as M,h as R}from"./utils-cfbb8c9c.js";const k=`<aside class="callout">
  <div class="callout-figure">
    <svg data-draw="" width="27px" height="27px" viewBox="0 0 27 27" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <polyline id="Path-2656" fill="none" stroke-width="4" stroke="#E30613" points="3 27 3 3 27 3"></polyline>
    </svg>
  </div>
  <h3 class="callout-title">The more you know…</h3>
  <p class="callout-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc augue, porta eu molestie id, rhoncus eu risus. Etiam rhoncus vitae libero vulputate ornare. Praesent urna mauris, egestas sed lacinia vitae, tincidunt id turpis.
  </p>
</aside>
`;var T={exports:{}};/**
 * vivus - JavaScript library to make drawing animation on SVG
 * @version v0.4.6
 * @link https://github.com/maxwellito/vivus
 * @license MIT
 */(function(f,y){(function(){function l(t){if(typeof t>"u")throw new Error('Pathformer [constructor]: "element" parameter is required');if(t.constructor===String&&(t=document.getElementById(t),!t))throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');if(t instanceof window.SVGElement||t instanceof window.SVGGElement||/^svg$/i.test(t.nodeName))this.el=t;else throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');this.scan(t)}l.prototype.TYPES=["line","ellipse","circle","polygon","polyline","rect"],l.prototype.ATTR_WATCH=["cx","cy","points","r","rx","ry","x","x1","x2","y","y1","y2"],l.prototype.scan=function(t){for(var r,e,n,i,a=t.querySelectorAll(this.TYPES.join(",")),o=0;o<a.length;o++)e=a[o],r=this[e.tagName.toLowerCase()+"ToPath"],n=r(this.parseAttr(e.attributes)),i=this.pathMaker(e,n),e.parentNode.replaceChild(i,e)},l.prototype.lineToPath=function(t){var r={},e=t.x1||0,n=t.y1||0,i=t.x2||0,a=t.y2||0;return r.d="M"+e+","+n+"L"+i+","+a,r},l.prototype.rectToPath=function(t){var r={},e=parseFloat(t.x)||0,n=parseFloat(t.y)||0,i=parseFloat(t.width)||0,a=parseFloat(t.height)||0;if(t.rx||t.ry){var o=parseInt(t.rx,10)||-1,h=parseInt(t.ry,10)||-1;o=Math.min(Math.max(o<0?h:o,0),i/2),h=Math.min(Math.max(h<0?o:h,0),a/2),r.d="M "+(e+o)+","+n+" L "+(e+i-o)+","+n+" A "+o+","+h+",0,0,1,"+(e+i)+","+(n+h)+" L "+(e+i)+","+(n+a-h)+" A "+o+","+h+",0,0,1,"+(e+i-o)+","+(n+a)+" L "+(e+o)+","+(n+a)+" A "+o+","+h+",0,0,1,"+e+","+(n+a-h)+" L "+e+","+(n+h)+" A "+o+","+h+",0,0,1,"+(e+o)+","+n}else r.d="M"+e+" "+n+" L"+(e+i)+" "+n+" L"+(e+i)+" "+(n+a)+" L"+e+" "+(n+a)+" Z";return r},l.prototype.polylineToPath=function(t){var r={},e=t.points.trim().split(" "),n,i;if(t.points.indexOf(",")===-1){var a=[];for(n=0;n<e.length;n+=2)a.push(e[n]+","+e[n+1]);e=a}for(i="M"+e[0],n=1;n<e.length;n++)e[n].indexOf(",")!==-1&&(i+="L"+e[n]);return r.d=i,r},l.prototype.polygonToPath=function(t){var r=l.prototype.polylineToPath(t);return r.d+="Z",r},l.prototype.ellipseToPath=function(t){var r={},e=parseFloat(t.rx)||0,n=parseFloat(t.ry)||0,i=parseFloat(t.cx)||0,a=parseFloat(t.cy)||0,o=i-e,h=a,p=parseFloat(i)+parseFloat(e),w=a;return r.d="M"+o+","+h+"A"+e+","+n+" 0,1,1 "+p+","+w+"A"+e+","+n+" 0,1,1 "+o+","+w,r},l.prototype.circleToPath=function(t){var r={},e=parseFloat(t.r)||0,n=parseFloat(t.cx)||0,i=parseFloat(t.cy)||0,a=n-e,o=i,h=parseFloat(n)+parseFloat(e),p=i;return r.d="M"+a+","+o+"A"+e+","+e+" 0,1,1 "+h+","+p+"A"+e+","+e+" 0,1,1 "+a+","+p,r},l.prototype.pathMaker=function(t,r){var e,n,i=document.createElementNS("http://www.w3.org/2000/svg","path");for(e=0;e<t.attributes.length;e++)n=t.attributes[e],this.ATTR_WATCH.indexOf(n.name)===-1&&i.setAttribute(n.name,n.value);for(e in r)i.setAttribute(e,r[e]);return i},l.prototype.parseAttr=function(t){for(var r,e={},n=0;n<t.length;n++){if(r=t[n],this.ATTR_WATCH.indexOf(r.name)!==-1&&r.value.indexOf("%")!==-1)throw new Error("Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into 'path' tags. Please use 'viewBox'.");e[r.name]=r.value}return e};var u,d,m,c;function s(t,r,e){u(),this.isReady=!1,this.setElement(t,r),this.setOptions(r),this.setCallback(e),this.isReady&&this.init()}s.LINEAR=function(t){return t},s.EASE=function(t){return-Math.cos(t*Math.PI)/2+.5},s.EASE_OUT=function(t){return 1-Math.pow(1-t,3)},s.EASE_IN=function(t){return Math.pow(t,3)},s.EASE_OUT_BOUNCE=function(t){var r=-Math.cos(t*(.5*Math.PI))+1,e=Math.pow(r,1.5),n=Math.pow(1-t,2),i=-Math.abs(Math.cos(e*(2.5*Math.PI)))+1;return 1-n+i*n},s.prototype.setElement=function(t,r){var e,n;if(typeof t>"u")throw new Error('Vivus [constructor]: "element" parameter is required');if(t.constructor===String&&(t=document.getElementById(t),!t))throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');if(this.parentEl=t,r&&r.file){n=this,e=function(){var a=document.createElement("div");a.innerHTML=this.responseText;var o=a.querySelector("svg");if(!o)throw new Error("Vivus [load]: Cannot find the SVG in the loaded file : "+r.file);n.el=o,n.el.setAttribute("width","100%"),n.el.setAttribute("height","100%"),n.parentEl.appendChild(n.el),n.isReady=!0,n.init(),n=null};var i=new window.XMLHttpRequest;i.addEventListener("load",e),i.open("GET",r.file),i.send();return}switch(t.constructor){case window.SVGSVGElement:case window.SVGElement:case window.SVGGElement:this.el=t,this.isReady=!0;break;case window.HTMLObjectElement:n=this,e=function(a){if(!n.isReady){if(n.el=t.contentDocument&&t.contentDocument.querySelector("svg"),!n.el&&a)throw new Error("Vivus [constructor]: object loaded does not contain any SVG");n.el&&(t.getAttribute("built-by-vivus")&&(n.parentEl.insertBefore(n.el,t),n.parentEl.removeChild(t),n.el.setAttribute("width","100%"),n.el.setAttribute("height","100%")),n.isReady=!0,n.init(),n=null)}},e()||t.addEventListener("load",e);break;default:throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)')}},s.prototype.setOptions=function(t){var r=["delayed","sync","async","nsync","oneByOne","scenario","scenario-sync"],e=["inViewport","manual","autostart"];if(t!==void 0&&t.constructor!==Object)throw new Error('Vivus [constructor]: "options" parameter must be an object');if(t=t||{},t.type&&r.indexOf(t.type)===-1)throw new Error("Vivus [constructor]: "+t.type+" is not an existing animation `type`");if(this.type=t.type||r[0],t.start&&e.indexOf(t.start)===-1)throw new Error("Vivus [constructor]: "+t.start+" is not an existing `start` option");if(this.start=t.start||e[0],this.isIE=window.navigator.userAgent.indexOf("MSIE")!==-1||window.navigator.userAgent.indexOf("Trident/")!==-1||window.navigator.userAgent.indexOf("Edge/")!==-1,this.duration=c(t.duration,120),this.delay=c(t.delay,null),this.dashGap=c(t.dashGap,1),this.forceRender=t.hasOwnProperty("forceRender")?!!t.forceRender:this.isIE,this.reverseStack=!!t.reverseStack,this.selfDestroy=!!t.selfDestroy,this.onReady=t.onReady,this.map=[],this.frameLength=this.currentFrame=this.delayUnit=this.speed=this.handle=null,this.ignoreInvisible=t.hasOwnProperty("ignoreInvisible")?!!t.ignoreInvisible:!1,this.animTimingFunction=t.animTimingFunction||s.LINEAR,this.pathTimingFunction=t.pathTimingFunction||s.LINEAR,this.delay>=this.duration)throw new Error("Vivus [constructor]: delay must be shorter than duration")},s.prototype.setCallback=function(t){if(t&&t.constructor!==Function)throw new Error('Vivus [constructor]: "callback" parameter must be a function');this.callback=t||function(){}},s.prototype.mapping=function(){var t,r,e,n,i,a,o,h,p,w;for(h=a=o=0,r=this.el.querySelectorAll("path"),w=!1,t=0;t<r.length;t++)if(e=r[t],!this.isInvisible(e)){if(i={el:e,length:0,startAt:0,duration:0,isResizeSensitive:!1},e.getAttribute("vector-effect")==="non-scaling-stroke"){var v=e.getBoundingClientRect(),E=e.getBBox();p=Math.max(v.width/E.width,v.height/E.height),i.isResizeSensitive=!0,w=!0}else p=1;if(i.length=Math.ceil(e.getTotalLength()*p),isNaN(i.length)){window.console&&console.warn&&console.warn("Vivus [mapping]: cannot retrieve a path element length",e);continue}this.map.push(i),e.style.strokeDasharray=i.length+" "+(i.length+this.dashGap*2),e.style.strokeDashoffset=i.length+this.dashGap,i.length+=this.dashGap,a+=i.length,this.renderPath(t)}for(w&&console.warn("Vivus: this SVG contains non-scaling-strokes. You should call instance.recalc() when the SVG is resized or you will encounter unwanted behaviour. See https://github.com/maxwellito/vivus#non-scaling for more info."),a=a===0?1:a,this.delay=this.delay===null?this.duration/3:this.delay,this.delayUnit=this.delay/(r.length>1?r.length-1:1),this.reverseStack&&this.map.reverse(),t=0;t<this.map.length;t++){switch(i=this.map[t],this.type){case"delayed":i.startAt=this.delayUnit*t,i.duration=this.duration-this.delay;break;case"oneByOne":i.startAt=o/a*this.duration,i.duration=i.length/a*this.duration;break;case"sync":case"async":case"nsync":i.startAt=0,i.duration=this.duration;break;case"scenario-sync":e=i.el,n=this.parseAttr(e),i.startAt=h+(c(n["data-delay"],this.delayUnit)||0),i.duration=c(n["data-duration"],this.duration),h=n["data-async"]!==void 0?i.startAt:i.startAt+i.duration,this.frameLength=Math.max(this.frameLength,i.startAt+i.duration);break;case"scenario":e=i.el,n=this.parseAttr(e),i.startAt=c(n["data-start"],this.delayUnit)||0,i.duration=c(n["data-duration"],this.duration),this.frameLength=Math.max(this.frameLength,i.startAt+i.duration);break}o+=i.length,this.frameLength=this.frameLength||this.duration}},s.prototype.recalc=function(){this.mustRecalcScale||(this.mustRecalcScale=d(function(){this.performLineRecalc()}.bind(this)))},s.prototype.performLineRecalc=function(){for(var t,r,e,n,i,a=0;a<this.map.length;a++)t=this.map[a],t.isResizeSensitive&&(r=t.el,e=r.getBoundingClientRect(),n=r.getBBox(),i=Math.max(e.width/n.width,e.height/n.height),t.length=Math.ceil(r.getTotalLength()*i),r.style.strokeDasharray=t.length+" "+(t.length+this.dashGap*2));this.trace(),this.mustRecalcScale=null},s.prototype.draw=function(){var t=this;if(this.currentFrame+=this.speed,this.currentFrame<=0)this.stop(),this.reset();else if(this.currentFrame>=this.frameLength)this.stop(),this.currentFrame=this.frameLength,this.trace(),this.selfDestroy&&this.destroy();else{this.trace(),this.handle=d(function(){t.draw()});return}this.callback(this),this.instanceCallback&&(this.instanceCallback(this),this.instanceCallback=null)},s.prototype.trace=function(){var t,r,e,n;for(n=this.animTimingFunction(this.currentFrame/this.frameLength)*this.frameLength,t=0;t<this.map.length;t++)e=this.map[t],r=(n-e.startAt)/e.duration,r=this.pathTimingFunction(Math.max(0,Math.min(1,r))),e.progress!==r&&(e.progress=r,e.el.style.strokeDashoffset=Math.floor(e.length*(1-r)),this.renderPath(t))},s.prototype.renderPath=function(t){if(this.forceRender&&this.map&&this.map[t]){var r=this.map[t],e=r.el.cloneNode(!0);r.el.parentNode.replaceChild(e,r.el),r.el=e}},s.prototype.init=function(){this.frameLength=0,this.currentFrame=0,this.map=[],new l(this.el),this.mapping(),this.starter(),this.onReady&&this.onReady(this)},s.prototype.starter=function(){switch(this.start){case"manual":return;case"autostart":this.play();break;case"inViewport":var t=this,r=function(){t.isInViewport(t.parentEl,1)&&(t.play(),window.removeEventListener("scroll",r))};window.addEventListener("scroll",r),r();break}},s.prototype.getStatus=function(){return this.currentFrame===0?"start":this.currentFrame===this.frameLength?"end":"progress"},s.prototype.reset=function(){return this.setFrameProgress(0)},s.prototype.finish=function(){return this.setFrameProgress(1)},s.prototype.setFrameProgress=function(t){return t=Math.min(1,Math.max(0,t)),this.currentFrame=Math.round(this.frameLength*t),this.trace(),this},s.prototype.play=function(t,r){if(this.instanceCallback=null,t&&typeof t=="function")this.instanceCallback=t,t=null;else if(t&&typeof t!="number")throw new Error("Vivus [play]: invalid speed");return r&&typeof r=="function"&&!this.instanceCallback&&(this.instanceCallback=r),this.speed=t||1,this.handle||this.draw(),this},s.prototype.stop=function(){return this.handle&&(m(this.handle),this.handle=null),this},s.prototype.destroy=function(){this.stop();var t,r;for(t=0;t<this.map.length;t++)r=this.map[t],r.el.style.strokeDashoffset=null,r.el.style.strokeDasharray=null,this.renderPath(t)},s.prototype.isInvisible=function(t){var r,e=t.getAttribute("data-ignore");return e!==null?e!=="false":this.ignoreInvisible?(r=t.getBoundingClientRect(),!r.width&&!r.height):!1},s.prototype.parseAttr=function(t){var r,e={};if(t&&t.attributes)for(var n=0;n<t.attributes.length;n++)r=t.attributes[n],e[r.name]=r.value;return e},s.prototype.isInViewport=function(t,r){var e=this.scrollY(),n=e+this.getViewportH(),i=t.getBoundingClientRect(),a=i.height,o=e+i.top,h=o+a;return r=r||0,o+a*r<=n&&h>=e},s.prototype.getViewportH=function(){var t=this.docElem.clientHeight,r=window.innerHeight;return t<r?r:t},s.prototype.scrollY=function(){return window.pageYOffset||this.docElem.scrollTop},u=function(){s.prototype.docElem||(s.prototype.docElem=window.document.documentElement,d=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}(),m=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){return window.clearTimeout(t)}}())},c=function(t,r){var e=parseInt(t,10);return e>=0?e:r},f.exports=s})()})(T);var C=T.exports;const A=S(C),P=f=>{if(!f)return;function y(l,u={},d){const m=Object.assign({animTimingFunction:A.EASE_OUT,duration:100},u);return new A(l,m,d)}L("[data-draw]",l=>{const u=Object.entries(l.dataset).reduce(function(d,[m,c]){return m.match(/^draw([\w]+)/)&&(d[m.replace(/^draw/,"")]=c),d},{});Object.hasOwnProperty.call(u,"on")?(delete u.on,u.start="autostart",l.addEventListener(u.on,()=>y(l,u))):y(l,u)},f)},{useEffect:V,useState:I}=__STORYBOOK_MODULE_CLIENT_API__,G={title:"Page content/Callout",parameters:{backgrounds:{default:"gray"}}},g=()=>{const[f]=I(M);return V(()=>{P(document.getElementById(f))},[]),R`
    <div id="${f}">${k}</div>
  `};var b,x,F;g.parameters={...g.parameters,docs:{...(b=g.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const [id] = useState(uid);
  useEffect(() => {
    calloutExample(document.getElementById(id));
  }, []);
  return html\`
    <div id="\${id}">\${Callout}</div>
  \`;
}`,...(F=(x=g.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};const _=["callout"];export{_ as __namedExportsOrder,g as callout,G as default};
//# sourceMappingURL=callout.stories-83244d87.js.map
