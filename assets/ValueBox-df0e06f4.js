import{M as s,b as l,C as o}from"./index-244ea143.js";import{o as t}from"./jsxRuntime.module-3449ab35.js";import{V as i,D as c,E as d}from"./valuebox.stories-539cf278.js";import{B as h}from"./Badges-1d84ea7f.js";import{u as r}from"./index-dc54cc1b.js";import{k as p}from"./hooks.module-d947cf7f.js";import"./iframe-d7a3d3dd.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./utils-f589fb48.js";function a(n){const e=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",h2:"h2"},r(),n.components);return t(p,{children:[t(s,{of:i}),`
`,t(e.h1,{id:"valuebox-",children:["ValueBox ",t(h,{of:i})]}),`
`,t(l,{children:t(e.p,{children:"The value box is intended to draw the users attention and for them to at-a-glance see the total value of the related content."})}),`
`,t(o,{of:c}),`
`,t(e.p,{children:"Text in value box should resize to fit it's parent. That's not included in LFUI but an implementation could look like this:"}),`
`,t(e.pre,{children:t(e.code,{className:"language-javascript",children:`for (const el of document.querySelectorAll('.value-box-text')) {
  const text = svg.firstElementChild;
  const width = text.getBBox().width || text.getComputedTextLength();
  const height = 18;
  el.setAttribute('viewBox', \`0 0 \${ width } \${ height }\`);
}
`})}),`
`,t(e.h2,{id:"expandable",children:"Expandable"}),`
`,t(e.p,{children:"There is also a possibility to add a value description in combination with the collapse component."}),`
`,t(o,{of:d})]})}function j(n={}){const{wrapper:e}=Object.assign({},r(),n.components);return e?t(e,Object.assign({},n,{children:t(a,n)})):a(n)}export{j as default};
//# sourceMappingURL=ValueBox-df0e06f4.js.map
