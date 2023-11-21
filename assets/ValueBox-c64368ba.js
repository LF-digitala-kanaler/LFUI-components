import{M as s,b as l,C as o}from"./index-190694a0.js";import{u as e}from"./jsxRuntime.module-43f65b33.js";import{V as i,D as c,E as d}from"./valuebox.stories-1b39b8b2.js";import{B as h}from"./Badges-c29d6495.js";import{u as r}from"./index-c36d5595.js";import{g as p}from"./hooks.module-0dd1334e.js";import"./iframe-33e87fb8.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./utils-1863097b.js";function a(n){const t=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",h2:"h2"},r(),n.components);return e(p,{children:[e(s,{of:i}),`
`,e(t.h1,{id:"valuebox-",children:["ValueBox ",e(h,{of:i})]}),`
`,e(l,{children:e(t.p,{children:"The value box is intended to draw the users attention and for them to at-a-glance see the total value of the related content."})}),`
`,e(o,{of:c}),`
`,e(t.p,{children:"Text in value box should resize to fit it's parent. That's not included in LFUI but an implementation could look like this:"}),`
`,e(t.pre,{children:e(t.code,{className:"language-javascript",children:`for (const el of document.querySelectorAll('.value-box-text')) {
  const text = svg.firstElementChild;
  const width = text.getBBox().width || text.getComputedTextLength();
  const height = 18;
  el.setAttribute('viewBox', \`0 0 \${ width } \${ height }\`);
}
`})}),`
`,e(t.h2,{id:"expandable",children:"Expandable"}),`
`,e(t.p,{children:"There is also a possibility to add a value description in combination with the collapse component."}),`
`,e(o,{of:d})]})}function T(n={}){const{wrapper:t}=Object.assign({},r(),n.components);return t?e(t,Object.assign({},n,{children:e(a,n)})):a(n)}export{T as default};
//# sourceMappingURL=ValueBox-c64368ba.js.map
