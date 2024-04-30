import{M as r,C as o,d as h}from"./index-5b4b983c.js";import{u as e}from"./jsxRuntime.module-86b0a656.js";import{C as c,a as i,D as d,b as l,I as m}from"./checkbox.stories-54481473.js";import{B as u}from"./Badges-4014e066.js";import{N as p}from"./Note-ad8a4fc1.js";import{u as a}from"./index-2c765b7a.js";import{g as b}from"./hooks.module-837c4323.js";import"./iframe-eeb3ff28.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./utils-cfbb8c9c.js";function s(t){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",h3:"h3",h4:"h4"},a(),t.components);return e(b,{children:[e(r,{of:c}),`
`,e(n.h1,{id:"checkbox-",children:["Checkbox ",e(u,{of:c})]}),`
`,e(o,{of:i}),`
`,e(h,{of:i}),`
`,e(n.h2,{id:"how-to-use",children:"How to use"}),`
`,e(n.p,{children:"Since the default checkbox design is not customizable, we will hide it visually and add a pseudo element which we style with css to get the desired look. By visually, I mean to hide it from the UI and keep it in the DOM for screen reader and keyboard users. You shouldn't need to do anything else then use the code posted below."}),`
`,e(n.pre,{children:e(n.code,{className:"language-html",children:`<div class="custom-control custom-checkbox mr-1">
  <input type="checkbox" class="custom-control-input" id="checkbox">
  <label class="custom-control-label" for="checkbox">Checkbox</label>
</div>
`})}),`
`,e(n.h2,{id:"states",children:"States"}),`
`,e(n.h3,{id:"disabled",children:"Disabled"}),`
`,e(o,{of:d}),`
`,e(n.h3,{id:"checked",children:"Checked"}),`
`,e(o,{of:l}),`
`,e(n.h3,{id:"intermediate",children:"Intermediate"}),`
`,e(o,{of:m}),`
`,e(p,{children:[e(n.h4,{id:"note",children:"Note"}),e(n.p,{children:"You can only set the intermediate state via javascript:"}),e(n.pre,{children:e(n.code,{className:"language-javascript",children:`const input = document.getElementById('my-checkbox')
input.indeterminate = true
`})})]}),`
`,e(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e(n.p,{children:["Remember to always associating the label with the input. Which means ",e(n.code,{children:"<input>"})," should always have an ID and this ID should be used as a for attribute for the ",e(n.code,{children:"<label>"}),"  ."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-html",children:`<input type="checkbox" class="custom-control-input" id="checkbox">
<label class="custom-control-label" for="checkbox">Checkbox</label>
`})}),`
`,e(n.h3,{id:"grouping-of-checkboxes",children:"Grouping of checkboxes"}),`
`,e(n.p,{children:["When multiple checkboxes are grouped together, use ",e(n.code,{children:"<fieldset>"})," and ",e(n.code,{children:"<legend>"})," to improve the experience with screen readers."]})]})}function B(t={}){const{wrapper:n}=Object.assign({},a(),t.components);return n?e(n,Object.assign({},t,{children:e(s,t)})):s(t)}export{B as default};
