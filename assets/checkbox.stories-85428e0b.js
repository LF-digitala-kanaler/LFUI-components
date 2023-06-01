import{e as h,u as d,h as m}from"./utils-a5acfd0f.js";import"./hooks.module-446c997e.js";import"./jsxRuntime.module-779d8325.js";const x=`<div class="row row-tight form-group">
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
`,p=`<p class="text-sm mb-05 text-muted">Default</p>
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
`,k=c=>{c&&h(".checkbox-card",function(e){e.addEventListener("change",function(){this.classList.contains("active")?this.classList.remove("active"):this.classList.add("active")})},c)},v=c=>{if(!c)return;const e=c.querySelector("#checkbox-intermediate");e&&(e.indeterminate=!0)},{useEffect:b,useState:u}=__STORYBOOK_MODULE_CLIENT_API__,E={title:"Forms/Checkbox"},n=()=>{const[c]=u(d);return b(()=>v(document.getElementById(c)),[]),m`
    <div id="${c}">${p}</div>
  `},o=()=>{const[c]=u(d);return b(()=>k(document.getElementById(c)),[]),m`
    <div id="${c}">${x}</div>
  `};var t,s,l;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const [id] = useState(uid);
  useEffect(() => intermediateCheckboxExample(document.getElementById(id)), []);
  return html\`
    <div id="\${id}">\${Checkbox}</div>
  \`;
}`,...(l=(s=n.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var i,a,r;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const [id] = useState(uid);
  useEffect(() => checkboxCardExample(document.getElementById(id)), []);
  return html\`
    <div id="\${id}">\${CheckboxCards}</div>
  \`;
}`,...(r=(a=o.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const y=["checkbox","checkboxCard"];export{y as __namedExportsOrder,n as checkbox,o as checkboxCard,E as default};
//# sourceMappingURL=checkbox.stories-85428e0b.js.map
