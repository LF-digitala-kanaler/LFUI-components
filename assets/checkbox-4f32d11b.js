import{M as l,C as o,d as h}from"./index-244ea143.js";import{o as e}from"./jsxRuntime.module-3449ab35.js";import{C as c,a as i,D as r,b as d,I as m}from"./checkbox.stories-c3a1b86a.js";import{B as u}from"./Badges-1d84ea7f.js";import{N as p}from"./Note-c9d28f82.js";import{u as s}from"./index-dc54cc1b.js";import{k as b}from"./hooks.module-d947cf7f.js";import"./iframe-d7a3d3dd.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./utils-f589fb48.js";function a(n){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",h3:"h3",h4:"h4"},s(),n.components);return e(b,{children:[e(l,{of:c}),`
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
`,e(o,{of:r}),`
`,e(t.h3,{id:"checked",children:"Checked"}),`
`,e(o,{of:d}),`
`,e(t.h3,{id:"intermediate",children:"Intermediate"}),`
`,e(o,{of:m}),`
`,e(p,{children:[e(t.h4,{id:"note",children:"Note"}),e(t.p,{children:"You can only set the intermediate state via javascript:"}),e(t.pre,{children:e(t.code,{className:"language-javascript",children:`const input = document.getElementById('my-checkbox')
input.indeterminate = true
`})})]}),`
`,e(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e(t.p,{children:["Remember to always associating the label with the input. Which means ",e(t.code,{children:"<input>"})," should always have an ID and this ID should be used as a for attribute for the ",e(t.code,{children:"<label>"}),"  ."]}),`
`,e(t.pre,{children:e(t.code,{className:"language-html",children:`<input type="checkbox" class="custom-control-input" id="checkbox">
<label class="custom-control-label" for="checkbox">Checkbox</label>
`})})]})}function O(n={}){const{wrapper:t}=Object.assign({},s(),n.components);return t?e(t,Object.assign({},n,{children:e(a,n)})):a(n)}export{O as default};
//# sourceMappingURL=checkbox-4f32d11b.js.map
