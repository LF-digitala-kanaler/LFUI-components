const A={title:"System display/Tag",parameters:{badges:["stable"]},argTypes:{variant:{control:"select",options:["default","info","success","warning","danger"],mapping:{default:""}}}};function t({text:w,large:S,variant:l,closable:$}){const o=[];S&&o.push("tag-lg"),l&&o.push(`tag-${l}`);const x=$?'<button type="button" class="btn-close" aria-label="Close"></button>':"";return`
    <div class="mt-05 tag ${o.join(" ")}">
      ${w}
      ${x}
    </div>
  `}const f=t.bind({});f.args={text:"Awating signature",variant:"default",closable:!1,large:!1};const a=()=>`
  ${t({text:"Awaiting signature"})}
  ${t({text:"Not signed",variant:"info"})}
  ${t({text:"Signed and ready",variant:"success"})}
  ${t({text:"Please note...",variant:"warning"})}
  ${t({text:"Contains errors",variant:"danger"})}
`,n=()=>`
  <div class="tag mt-05">
    Awaiting signature
    <button type="button" class="btn-close" aria-label="Close"></button>
  </div>
  <div class="tag tag-info mt-05">
    Not signed
    <button type="button" class="btn-close" aria-label="Close"></button>
  </div>
  <div class="tag tag-success mt-05">
    Signed and ready
    <button type="button" class="btn-close" aria-label="Close"></button>
  </div>
  <div class="tag tag-warning mt-05">
    Please note…
    <button type="button" class="btn-close" aria-label="Close"></button>
  </div>
  <div class="tag tag-danger mt-05">
    Contains errors
    <button type="button" class="btn-close" aria-label="Close"></button>
  </div>
`,s=()=>`
  <div class="tag tag-lg mt-05">Awaiting signature</div>
  <div class="tag tag-lg tag-info mt-05">Not signed</div>
  <div class="tag tag-lg tag-success mt-05">Signed and ready</div>
  <div class="tag tag-lg tag-warning mt-05">Please note…</div>
  <div class="tag tag-lg tag-danger mt-05">Contains errors</div>
`,e=()=>`
  <div class="tag tag-lg mt-05">
    Awaiting signature
    <button type="button" class="btn-close" aria-label="Close"></button>
  </div>
  <div class="tag tag-lg tag-info mt-05">
    Not signed
    <button type="button" class="btn-close" aria-label="Close"></button>
  </div>
  <div class="tag tag-lg tag-success mt-05">
    Signed and ready
    <button type="button" class="btn-close" aria-label="Close"></button>
  </div>
  <div class="tag tag-lg tag-warning mt-05">
    Please note…
    <button type="button" class="btn-close" aria-label="Close"></button>
  </div>
  <div class="tag tag-lg tag-danger mt-05">
    Contains errors
    <button type="button" class="btn-close" aria-label="Close"></button>
  </div>
`;var i,g,r;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`() => \`
  \${Template({
  text: 'Awaiting signature'
})}
  \${Template({
  text: 'Not signed',
  variant: 'info'
})}
  \${Template({
  text: 'Signed and ready',
  variant: 'success'
})}
  \${Template({
  text: 'Please note...',
  variant: 'warning'
})}
  \${Template({
  text: 'Contains errors',
  variant: 'danger'
})}
\``,...(r=(g=a.parameters)==null?void 0:g.docs)==null?void 0:r.source}}};var c,d,b;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => \`
  <div class="tag mt-05">
    Awaiting signature
    <button type="button" class="btn-close" aria-label="Close"></button>
  </div>
  <div class="tag tag-info mt-05">
    Not signed
    <button type="button" class="btn-close" aria-label="Close"></button>
  </div>
  <div class="tag tag-success mt-05">
    Signed and ready
    <button type="button" class="btn-close" aria-label="Close"></button>
  </div>
  <div class="tag tag-warning mt-05">
    Please note…
    <button type="button" class="btn-close" aria-label="Close"></button>
  </div>
  <div class="tag tag-danger mt-05">
    Contains errors
    <button type="button" class="btn-close" aria-label="Close"></button>
  </div>
\``,...(b=(d=n.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};var u,v,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`() => \`
  <div class="tag tag-lg mt-05">Awaiting signature</div>
  <div class="tag tag-lg tag-info mt-05">Not signed</div>
  <div class="tag tag-lg tag-success mt-05">Signed and ready</div>
  <div class="tag tag-lg tag-warning mt-05">Please note…</div>
  <div class="tag tag-lg tag-danger mt-05">Contains errors</div>
\``,...(m=(v=s.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};var p,y,C;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`() => \`
  <div class="tag tag-lg mt-05">
    Awaiting signature
    <button type="button" class="btn-close" aria-label="Close"></button>
  </div>
  <div class="tag tag-lg tag-info mt-05">
    Not signed
    <button type="button" class="btn-close" aria-label="Close"></button>
  </div>
  <div class="tag tag-lg tag-success mt-05">
    Signed and ready
    <button type="button" class="btn-close" aria-label="Close"></button>
  </div>
  <div class="tag tag-lg tag-warning mt-05">
    Please note…
    <button type="button" class="btn-close" aria-label="Close"></button>
  </div>
  <div class="tag tag-lg tag-danger mt-05">
    Contains errors
    <button type="button" class="btn-close" aria-label="Close"></button>
  </div>
\``,...(C=(y=e.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const T=["Default","Variants","WithRemoveAction","Larger","LargeWithRemoveAction"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:f,LargeWithRemoveAction:e,Larger:s,Variants:a,WithRemoveAction:n,__namedExportsOrder:T,default:A},Symbol.toStringTag,{value:"Module"}));export{f as D,s as L,P as T,a as V,n as W};
