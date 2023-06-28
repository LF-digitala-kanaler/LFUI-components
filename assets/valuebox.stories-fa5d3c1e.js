import{e as i,u as c,h as d}from"./utils-de29bc01.js";import"./hooks.module-446c997e.js";import"./jsxRuntime.module-779d8325.js";const u=`<p class="text-sm mb-05 text-muted">Default</p>
<div class="row">
  <div class="col-md-4">
    <div class="value-box mb-1">
      <div class="value-box-heading">Spending account</div>
      <svg class="h1 value-box-text" fill="currentcolor">
        <text x="50%" y="16" font-size="16" style="text-anchor: middle">
          30 470 kr
        </text>
      </svg>
    </div>
  </div>
</div>

<p class="text-sm mt-15 mb-05 text-muted">Expandable</p>
<div class="row">
  <div class="col-md-4">
    <div class="value-box">
      <button class="value-box-heading collapsed" type="button" data-bs-target="#value-box-info" aria-controls="value-box-info" data-bs-toggle="collapse" aria-expanded="false">
        Account summary<span class="value-box-toggle"></span>
      </button>
      <div class="value-box-collapse collapse" id="value-box-info" aria-expanded="false">
        <div class="value-box-body">
          Forage pitchfork mumblecore, post-ironic bushwick banh mi ramps cronut. Meggings locavore banjo aesthetic, blue bottle you probably haven't heard of them cronut ethical +1 marfa 90's raw denim yuccie occupy DIY.
        </div>
      </div>
      <svg class="h1 value-box-text" fill="currentcolor">
        <text x="50%" y="16" font-size="16" style="text-anchor: middle">
          130 470 kr
        </text>
      </svg>
    </div>
  </div>
</div>
`,r=e=>{e&&i(".value-box-text",function(a){const l=a.getBBox().width||a.getComputedTextLength();a.setAttribute("viewBox",`0 0 ${l} 18`)},e)},{useEffect:v,useState:x}=__STORYBOOK_MODULE_CLIENT_API__,g={title:"Page content/Value box"},t=()=>{const[e]=x(c);return v(()=>{r(document.getElementById(e))},[]),d`
    <div id="${e}">${u}</div>
  `};var n,o,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const [id] = useState(uid);
  useEffect(() => {
    valueboxExample(document.getElementById(id));
  }, []);
  return html\`
    <div id="\${id}">\${Valuebox}</div>
  \`;
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const f=["valueBox"];export{f as __namedExportsOrder,g as default,t as valueBox};
//# sourceMappingURL=valuebox.stories-fa5d3c1e.js.map
