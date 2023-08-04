import{e as D,u,h as w}from"./utils-f9cf1c58.js";function E(e){const n=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value"),t=e.getAttribute("value"),s=t===null?[]:t.split(","),i=+(e.min||0),d=+(e.max||100),l=e.cloneNode();e.classList.add("interval"),e.classList.add("original"),l.classList.add("interval"),l.classList.add("ghost"),e.value=s[0]||i+(d-i)/2,l.value=s[1]||i+(d-i)/2,e.after(l),Object.defineProperty(e,"originalValue",n.get?n:{get:function(){return this.value},set:function(a){this.value=a}}),Object.defineProperties(e,{valueLow:{get:function(){return Math.min(this.originalValue,l.value)},set:function(a){this.originalValue=a,r()},enumerable:!0},valueHigh:{get:function(){return Math.max(this.originalValue,l.value)},set:function(a){l.value=a,r()},enumerable:!0}}),n.get&&Object.defineProperty(e,"value",{get:function(){return this.valueLow+","+this.valueHigh},set:function(a){const v=a.split(",");this.valueLow=v[0],this.valueHigh=v[1],r()},enumerable:!0}),typeof e.oninput=="function"&&(l.oninput=e.oninput.bind(e));function r(){l.style.setProperty("--low",100*((e.valueLow-i)/(d-i))+1+"%"),l.style.setProperty("--high",100*((e.valueHigh-i)/(d-i))-1+"%")}return l.addEventListener("mousedown",function(v){const P=i+(d-i)*v.offsetX/this.offsetWidth,B=(e.valueHigh+e.valueLow)/2;e.valueLow===l.value&&P>B&&(e.value=l.value)}),e.addEventListener("input",r),l.addEventListener("input",function(){r(),e.dispatchEvent(new Event("input"))}),r(),e}const V=`<div class="col-md-6">
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
`,W=`<div class="col-md-6">
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
`,L=e=>{if(!e)return;const n=e.querySelector("#interval");if(n){const t=e.querySelector("#interval-low"),s=e.querySelector("#interval-high");E(n),n.addEventListener("input",function(){t.value=n.valueLow,s.value=n.valueHigh})}D(".lf-slider",function(t){t!==n&&t.addEventListener("input",function(){const s=Math.ceil((t.value-t.min)/(t.max-t.min)*100);t.style.setProperty("--progress",s);const i=document.getElementById(t.getAttribute("aria-controls"));i&&(i.value=t.value)})},e)},{useEffect:m,useState:$}=__STORYBOOK_MODULE_CLIENT_API__,k={title:"Forms/Slider",parameters:{backgrounds:{default:"white"},badges:["stable"]},argTypes:{}};function H(e){e.addEventListener("input",function(){const n=Math.ceil((e.value-e.min)/(e.max-e.min)*100);e.style.setProperty("--progress",n)})}function p({value:e=0,labels:n,distributionLabel:t}){const s=u();return m(()=>H(document.getElementById(s)),[e,n,t]),`
  <div class="row">
    <div class="col-12 mt-1 px-0">
  ${n?'<div class="slider-wrapper">':""}
  ${n?'<div class="slider-label-left">0 %</div>':""}
  ${t?'<div class="distribution-label slider-label-left">0 %</div>':""}
  <input
    id="${s}"
    type="range"
    name="lf-slider"
    class="lf-slider"
    list="tickmarks"
    value="${e}"
    min="0"
    max="100"
    style="--progress: ${e}"
    aria-controls="lf-slider-value-1"
  />
  ${n?'<div class="slider-label-right">100 %</div>':""}
  ${t?'<div class="distribution-label slider-label-right">100 %</div>':""}
  ${n?"</div>":""}
  </div>
  </div>
`}function M(){const e=u();return m(()=>E(document.getElementById(e)),[]),`
  <div class="pos-relative">
    <input
      type="range"
      id="${e}"
      name="lf-interval"
      class="lf-slider"
      value="25,75"
      min="0"
      max="100" />
  </div>
  `}const I=p.bind({});I.args={value:50};const S=p.bind({});S.args={value:50,labels:!0};const _=p.bind({});_.args={value:50,distributionLabel:!0};const O=M.bind({});O.args={};const o=()=>{const[e]=$(u);return m(()=>{L(document.getElementById(e))},[]),w`
  < div id = "${e}" > ${V}</div >
    `},c=()=>{const[e]=$(u);return m(()=>{L(document.getElementById(e))},[]),w`
    < div id = "${e}" > ${W}</div >
      `};var f,g,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [id] = useState(uid);
  useEffect(() => {
    sliderExample(document.getElementById(id));
  }, []);
  return html\`
  < div id = "\${id}" > \${Value}</div >
    \`;
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,y,x;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const [id] = useState(uid);
  useEffect(() => {
    sliderExample(document.getElementById(id));
  }, []);
  return html\`
    < div id = "\${id}" > \${Intervall}</div >
      \`;
}`,...(x=(y=c.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const T=["Default","WithLabel","WithDistributionLabel","Interval","value","intervall"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:I,Interval:O,WithDistributionLabel:_,WithLabel:S,__namedExportsOrder:T,default:k,intervall:c,value:o},Symbol.toStringTag,{value:"Module"}));export{I as D,O as I,q as S,S as W,_ as a};
//# sourceMappingURL=slider.stories-992b4bc0.js.map
