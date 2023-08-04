import{e as E,u as a,h as x}from"./utils-f9cf1c58.js";const I=`<div class="row row-tight form-group">
  <div class="col-6 col-md-3 mb-1">
    <div class="checkbox-card">
      <label class="custom-control custom-checkbox">
        <input
          name="checkboxCard"
          type="checkbox"
          id="checkboxCardID"
          class="custom-control-input" />
        <span class="custom-control-label">
          <svg
            role="presentation"
            class="icon d-block mx-auto mb-05"
            width="40"
            height="40">
            <use xlink:href="lf-icons/sprite/40/icons.svg#thumb-up-40"></use>
          </svg>
          Recommended
        </span>
      </label>
    </div>
  </div>
  <div class="col-6 col-md-3 mb-1">
    <div class="checkbox-card">
      <label class="custom-control custom-checkbox">
        <input
          name="checkboxCard2"
          type="checkbox"
          id="checkboxCardID2"
          class="custom-control-input" />
        <span class="custom-control-label">
          <svg
            role="presentation"
            class="icon d-block mx-auto mb-05"
            width="40"
            height="40">
            <use
              xlink:href="lf-icons/sprite/40/icons.svg#sustainability-40"></use>
          </svg>
          Sustainability
        </span>
      </label>
    </div>
  </div>
  <div class="col-6 col-md-3 mb-1">
    <div class="checkbox-card">
      <label class="custom-control custom-checkbox">
        <input
          name="checkboxCard3"
          type="checkbox"
          id="checkboxCardID3"
          class="custom-control-input" />
        <span class="custom-control-label">
          <svg
            role="presentation"
            class="icon d-block mx-auto mb-05"
            width="40"
            height="40">
            <use xlink:href="lf-icons/sprite/40/icons.svg#coins-40"></use>
          </svg>
          Lowest fees
        </span>
      </label>
    </div>
  </div>
</div>
`,_=`<p class="text-sm mb-05 text-muted">Default</p>
<div class="custom-control custom-checkbox mr-1">
  <input type="checkbox" class="custom-control-input" id="checkbox1">
  <label class="custom-control-label" for="checkbox1">Keep me posted</label>
</div> <br />
<div class="custom-control custom-checkbox mr-1">
  <input type="checkbox" disabled class="custom-control-input" id="checkbox2">
  <label class="custom-control-label" for="checkbox2">Enable notifications</label>
</div> <br />

<p class="text-sm mt-15 mb-05 text-muted">Checked</p>
<div class="custom-control custom-checkbox mr-1">
  <input type="checkbox" checked class="custom-control-input" id="checkbox3">
  <label class="custom-control-label" for="checkbox3">Keep me posted</label>
</div> <br />
<div class="custom-control custom-checkbox mr-1">
  <input type="checkbox" checked disabled class="custom-control-input" id="checkbox4">
  <label class="custom-control-label" for="checkbox4">Enable notifications</label>
</div> <br />

<p class="text-sm mt-15 mb-05 text-muted">Indeterminate</p>
<div class="custom-control custom-checkbox mr-1">
  <input type="checkbox" class="custom-control-input" id="checkbox-intermediate">
  <label class="custom-control-label" for="checkbox-intermediate">Offices in Stockholm</label>
</div>
`,$=e=>{e&&E(".checkbox-card",function(c){c.addEventListener("change",function(){this.classList.contains("active")?this.classList.remove("active"):this.classList.add("active")})},e)},S=e=>{if(!e)return;const c=e.querySelector("#checkbox-intermediate");c&&(c.indeterminate=!0)},{useEffect:l,useState:i}=__STORYBOOK_MODULE_CLIENT_API__,D={title:"Forms/Checkboxes/Checkbox",parameters:{backgrounds:{default:"gray"},badges:["stable"]},argTypes:{}};function s({label:e,disabled:c,checked:C,indeterminate:y}){const[o]=i(a);return l(()=>{const d=document.getElementById(o);y&&d&&(d.indeterminate=!0)}),`
    <div class="custom-control custom-checkbox mr-1">
      <input
        type="checkbox"
        class="custom-control-input"
        id="${o}"
        ${C?"checked":""}
        ${c?"disabled":""}
    >
      <label class="custom-control-label" for="${o}">${e}</label>
    </div>
  `}const p=s.bind({});p.args={label:"Checkbox",checked:!1,disabled:!1,indeterminate:!1};const v=s.bind({});v.args={label:"Disabled checkbox",disabled:!0};const f=s.bind({});f.args={label:"Checked checkbox",checked:!0};const g=s.bind({});g.args={label:"Indeterminate checkbox",indeterminate:!0};const t=()=>{const[e]=i(a);return l(()=>S(document.getElementById(e)),[]),x`
    <div id="${e}">${_}</div>
  `},n=()=>{const[e]=i(a);return l(()=>$(document.getElementById(e)),[]),x`
    <div id="${e}">${I}</div>
  `};var r,b,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const [id] = useState(uid);
  useEffect(() => intermediateCheckboxExample(document.getElementById(id)), []);
  return html\`
    <div id="\${id}">\${Checkbox}</div>
  \`;
}`,...(m=(b=t.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var u,h,k;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [id] = useState(uid);
  useEffect(() => checkboxCardExample(document.getElementById(id)), []);
  return html\`
    <div id="\${id}">\${CheckboxCards}</div>
  \`;
}`,...(k=(h=n.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};const O=["CheckboxDefault","Disabled","Checked","Indeterminate","checkbox","checkboxCard"],w=Object.freeze(Object.defineProperty({__proto__:null,CheckboxDefault:p,Checked:f,Disabled:v,Indeterminate:g,__namedExportsOrder:O,checkbox:t,checkboxCard:n,default:D},Symbol.toStringTag,{value:"Module"}));export{w as C,v as D,g as I,p as a,f as b};
//# sourceMappingURL=checkbox.stories-d37413bd.js.map
