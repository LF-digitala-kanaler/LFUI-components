const l={title:"Page content/Line Element",parameters:{backgrounds:{default:"gray"},badges:["stable"]}},r=()=>`
  <hr />
`,e=()=>`
  <hr class="on-white-bg" />
`;e.parameters={backgrounds:{default:"white"}};var t,a,s;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:"() => `\n  <hr />\n`",...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var o,n,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:'() => `\n  <hr class="on-white-bg" />\n`',...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const i=["Default","OnWhite"],d=Object.freeze(Object.defineProperty({__proto__:null,Default:r,OnWhite:e,__namedExportsOrder:i,default:l},Symbol.toStringTag,{value:"Module"}));export{r as D,d as L,e as O};
