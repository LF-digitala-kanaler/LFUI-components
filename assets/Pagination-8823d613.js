import{M as s,b as l,C as t}from"./index-bcd42f23.js";import{o as e}from"./jsxRuntime.module-532278ff.js";import{P as a,D as c,N as h,S as d,a as m}from"./pagination.stories-0a537833.js";import{B as p}from"./Badges-27da738f.js";import{N as u}from"./Note-665e66b8.js";import{u as r}from"./index-e9157a1c.js";import{k as f}from"./hooks.module-5ce939d2.js";import"./iframe-0e70e888.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./utils-f9cf1c58.js";function o(n){const i=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",h3:"h3"},r(),n.components);return e(f,{children:[e(s,{of:a}),`
`,e(i.h1,{id:"pagination-",children:["Pagination ",e(p,{of:a})]}),`
`,e(l,{children:e(i.p,{children:"Pagination is built with list HTML elements so screen readers can announce the number of available links."})}),`
`,e(i.h2,{id:"variations",children:"Variations"}),`
`,e(i.p,{children:"There is two variations of pagination. One built with links which you can navigate back in and one built without links which you can't navigate in."}),`
`,e(i.h2,{id:"links",children:"Links"}),`
`,e(t,{of:c}),`
`,e(i.p,{children:["Use a wrapping ",e(i.code,{children:"<nav>"})," element to identify it as a navigation section to screen readers and other assistive technologies. n addition, as pages likely have more than one such navigation section, it’s advisable to provide a descriptive aria-label for the ",e(i.code,{children:"<nav>"})," to reflect its purpose."]}),`
`,e(i.h3,{id:"without-links",children:"Without Links"}),`
`,e(t,{of:h}),`
`,e(i.h2,{id:"modifiers",children:"Modifiers"}),`
`,e(i.h3,{id:"stretchy",children:"Stretchy"}),`
`,e(i.p,{children:["Using ",e(i.code,{children:"pagination-flex"})," class on the pagination will make it stretch out to its full length."]}),`
`,e(t,{of:d}),`
`,e(u,{children:[e(i.h3,{id:"small-screens",children:"Small screens"}),e(i.p,{children:["Pagination should be stretchy on small screens. There is no built in support in the component for that. However there is a class ",e(i.code,{children:"pagination-sm-flex"})," you can add to make it work."]}),e(t,{of:m})]}),`
`,e(i.h3,{id:"accessibilitylink-variation",children:"Accessibility(Link variation)"}),`
`,e(i.p,{children:"For sighted users, it’s clear that the numbers will help him navigating different pages. But for an AT user, it’s completely different. By using aria-label, we can add a label to each link, so instead of hearing the screen reader saying Link, 1 it will be Link, Goto Page 1 ."}),`
`,e(i.p,{children:["To indicate which element is active, we need to tweak the value of ",e(i.code,{children:"aria-label"})," by something like Page 3, Current page . Also, we will use ",e(i.code,{children:"aria-current=true"})," for that."]})]})}function B(n={}){const{wrapper:i}=Object.assign({},r(),n.components);return i?e(i,Object.assign({},n,{children:e(o,n)})):o(n)}export{B as default};
//# sourceMappingURL=Pagination-8823d613.js.map
