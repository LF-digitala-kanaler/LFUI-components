import{e as O,u as x,h as y}from"./utils-cfbb8c9c.js";const S=`<div class="col-md-6">
  <div class="row">
    <p class="text-sm mb-05 text-muted">Default</p>
  </div>
  <div class="row">
    <div class="input-group input-group-fixed">
      <input
        type="text"
        class="form-control text-right"
        id="lf-slider-value-1"
        value="50" />
      <div class="input-group-append">
        <span class="input-group-text">%</span>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-12 mt-1">
      <input
        id="lf-slider-1"
        type="range"
        name="lf-slider"
        class="lf-slider"
        list="tickmarks"
        value="50"
        min="0"
        max="100"
        style="--progress: 50"
        aria-controls="lf-slider-value-1" />
    </div>
  </div>

  <div class="row">
    <p class="text-sm mt-15 mb-05 text-muted">With labels</p>
  </div>
  <div class="row">
    <div class="input-group input-group-fixed">
      <input
        type="text"
        class="form-control text-right"
        id="lf-slider-value-2"
        value="50" />
      <span class="input-group-append">%</span>
    </div>
  </div>
  <div class="row">
    <div class="col-12 mt-1 slider-wrapper">
      <div class="slider-label-left">0 %</div>
      <input
        id="lf-slider-3"
        type="range"
        name="lf-slider"
        class="lf-slider"
        value="50"
        style="--progress: 50"
        min="0"
        max="100"
        aria-controls="lf-slider-value-2" />
      <div class="slider-label-right">100 %</div>
    </div>
  </div>

  <div class="row">
    <p class="text-sm mt-15 mb-05 text-muted">With distribution labels</p>
  </div>
  <div class="row mb-15">
    <div class="input-group input-group-fixed">
      <input
        type="text"
        class="form-control text-right"
        id="lf-slider-value-3"
        value="50" />
      <span class="input-group-append">%</span>
    </div>
  </div>
  <div class="row">
    <div class="col-12 mt-1 px-0">
      <div class="distribution-label slider-label-left">0 %</div>
      <input
        id="lf-slider-4"
        type="range"
        name="lf-slider"
        class="lf-slider"
        value="50"
        style="--progress: 50"
        min="0"
        max="100"
        aria-controls="lf-slider-value-3" />
      <div class="distribution-label slider-label-right">100 %</div>
    </div>
  </div>
</div>
`,_=`<div class="col-md-6">
  <div class="row">
    <div class="col-3">
      <input
        type="text"
        class="form-control form-control-fixed text-right"
        id="interval-low"
        value="25" />
    </div>
    <div class="col-3">
      <input
        type="text"
        class="form-control form-control-fixed text-right"
        id="interval-high"
        value="75" />
    </div>
  </div>
  <div class="row">
    <div class="col-12 col-md-6 my-1">
      <div class="pos-relative">
        <input
          type="range"
          id="interval"
          name="lf-interval"
          class="lf-slider"
          value="25,75"
          min="0"
          max="100" />
      </div>
    </div>
  </div>
</div>
`;function P(e){const s=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value"),n=e.getAttribute("value"),a=n===null?[]:n.split(","),l=+(e.min||0),d=+(e.max||100),t=e.cloneNode();e.classList.add("interval"),e.classList.add("original"),t.classList.add("interval"),t.classList.add("ghost"),e.value=a[0]||l+(d-l)/2,t.value=a[1]||l+(d-l)/2,e.after(t),Object.defineProperty(e,"originalValue",s.get?s:{get:function(){return this.value},set:function(i){this.value=i}}),Object.defineProperties(e,{valueLow:{get:function(){return Math.min(this.originalValue,t.value)},set:function(i){this.originalValue=i,r()},enumerable:!0},valueHigh:{get:function(){return Math.max(this.originalValue,t.value)},set:function(i){t.value=i,r()},enumerable:!0}}),s.get&&Object.defineProperty(e,"value",{get:function(){return this.valueLow+","+this.valueHigh},set:function(i){const o=i.split(",");this.valueLow=o[0],this.valueHigh=o[1],r()},enumerable:!0}),typeof e.oninput=="function"&&(t.oninput=e.oninput.bind(e));function r(){t.style.setProperty("--low",100*((e.valueLow-l)/(d-l))+1+"%"),t.style.setProperty("--high",100*((e.valueHigh-l)/(d-l))-1+"%")}return t.addEventListener("mousedown",function(o){const L=l+(d-l)*o.offsetX/this.offsetWidth,I=(e.valueHigh+e.valueLow)/2;e.valueLow===t.value&&L>I&&(e.value=t.value)}),e.addEventListener("input",r),t.addEventListener("input",function(){r(),e.dispatchEvent(new Event("input"))}),r(),e}const w=e=>{if(!e)return;const s=e.querySelector("#interval");if(s){const n=e.querySelector("#interval-low"),a=e.querySelector("#interval-high");P(s),s.addEventListener("input",function(){n.value=s.valueLow,a.value=s.valueHigh})}O(".lf-slider",function(n){n!==s&&n.addEventListener("input",function(){const a=Math.ceil((n.value-n.min)/(n.max-n.min)*100);n.style.setProperty("--progress",a);const l=document.getElementById(n.getAttribute("aria-controls"));l&&(l.value=n.value)})},e)},{useEffect:b,useState:E}=__STORYBOOK_MODULE_CLIENT_API__,$={title:"Forms/Slider"},c=()=>{const[e]=E(x);return b(()=>{w(document.getElementById(e))},[]),y`
    <div id="${e}">${S}</div>
  `},u=()=>{const[e]=E(x);return b(()=>{w(document.getElementById(e))},[]),y`
    <div id="${e}">${_}</div>
  `};var v,m,p;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const [id] = useState(uid);
  useEffect(() => {
    sliderExample(document.getElementById(id));
  }, []);
  return html\`
    <div id="\${id}">\${Value}</div>
  \`;
}`,...(p=(m=c.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var f,g,h;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [id] = useState(uid);
  useEffect(() => {
    sliderExample(document.getElementById(id));
  }, []);
  return html\`
    <div id="\${id}">\${Intervall}</div>
  \`;
}`,...(h=(g=u.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const H=["value","intervall"];export{H as __namedExportsOrder,$ as default,u as intervall,c as value};
//# sourceMappingURL=slider.stories-ab3aadad.js.map
