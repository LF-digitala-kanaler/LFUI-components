import{M as l,C as o,d as h}from"./index-190694a0.js";import{u as e}from"./jsxRuntime.module-43f65b33.js";import{C as c,a as i,D as d,b as r,I as m}from"./checkbox.stories-93308fdc.js";import{B as u}from"./Badges-c29d6495.js";import{N as p}from"./Note-ce5ddc27.js";import{u as s}from"./index-c36d5595.js";import{g as b}from"./hooks.module-0dd1334e.js";import"./iframe-33e87fb8.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./utils-1863097b.js";function a(n){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",h3:"h3",h4:"h4"},s(),n.components);return e(b,{children:[e(l,{of:c}),`
`,e(t.h1,{id:"checkbox-",children:["Checkbox ",e(u,{of:c})]}),`
`,e(o,{of:i}),`
`,e(h,{of:i}),`
`,e(t.h2,{id:"how-to-use",children:"How to use"}),`
`,e(t.p,{children:"Since the default checkbox design is not customizable, we will hide it visually and add a pseudo element which we style with css to get the desired look. By visually, I mean to hide it from the UI and keep it in the DOM for screen reader and keyboard users. You shouldn't need to do anything else then use the code posted below."}),`
`,e(t.pre,{children:e(t.code,{className:"language-html",children:`<div class="custom-control custom-checkbox mr-1">
  <input type="checkbox" class="custom-control-input" id="checkbox">
  <label class="custom-control-label" for="checkbox">Checkbox</label>
</div>
`})}),`
`,e(t.h2,{id:"states",children:"States"}),`
`,e(t.h3,{id:"disabled",children:"Disabled"}),`
`,e(o,{of:d}),`
`,e(t.h3,{id:"checked",children:"Checked"}),`
`,e(o,{of:r}),`
`,e(t.h3,{id:"intermediate",children:"Intermediate"}),`
`,e(o,{of:m}),`
`,e(p,{children:[e(t.h4,{id:"note",children:"Note"}),e(t.p,{children:"You can only set the intermediate state via javascript:"}),e(t.pre,{children:e(t.code,{className:"language-javascript",children:`const input = document.getElementById('my-checkbox')
input.indeterminate = true
`})})]}),`
`,e(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e(t.p,{children:["Remember to always associating the label with the input. Which means ",e(t.code,{children:"<input>"})," should always have an ID and this ID should be used as a for attribute for the ",e(t.code,{children:"<label>"}),"  ."]}),`
`,e(t.pre,{children:e(t.code,{className:"language-html",children:`<input type="checkbox" class="custom-control-input" id="checkbox">
<label class="custom-control-label" for="checkbox">Checkbox</label>
`})})]})}function B(n={}){const{wrapper:t}=Object.assign({},s(),n.components);return t?e(t,Object.assign({},n,{children:e(a,n)})):a(n)}export{B as default};
//# sourceMappingURL=checkbox-f886d8a2.js.map
