import{M as r,b as s,C as o}from"./index-bcd42f23.js";import{o as e}from"./jsxRuntime.module-532278ff.js";import{T as t,D as d,I as l,a as h,b as m}from"./timeline.stories-20b967d8.js";import{B as p}from"./Badges-27da738f.js";import{u as c}from"./index-e9157a1c.js";import{k as u}from"./hooks.module-5ce939d2.js";import"./iframe-0e70e888.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./utils-f9cf1c58.js";function a(i){const n=Object.assign({h1:"h1",p:"p",a:"a",code:"code",h2:"h2",h3:"h3"},c(),i.components);return e(u,{children:[e(r,{of:t}),`
`,e(n.h1,{id:"timeline-",children:["Timeline ",e(p,{of:t})]}),`
`,e(s,{children:e(n.p,{children:"The timeline component is an interactive way for the user to follow the progress of an (ongoing) errand, such as a damage claim or loan application."})}),`
`,e(o,{of:d}),`
`,e(n.p,{children:["Our Timeline uses the ",e(n.a,{href:"/docs/supportive-microinteractions-collapse--collapse#collapse-",children:"collapse"})," functionality to handle show and hide states of each timeline item."]}),`
`,e(n.p,{children:"Make sure you use the the same markup as in the example above since thee css is kind of complex and the markup needs to be correct to get the desired design."}),`
`,e(n.p,{children:"On entering the detail view, only the active step will be expanded. The rest is collapsed. To expand a card you can click anywhere on the card. To collapse a card you can click on the part above the divider line (or also on Stäng in mobile view). Interacting with one card won’t affect any of the surrounding card state-wise. E.g. You could open all cards if you wish."}),`
`,e(n.p,{children:["You can put whatever you want inside ",e(n.code,{children:".timeline-content"})," but don't forget to add the close button in the end."]}),`
`,e(n.h2,{id:"states",children:"States"}),`
`,e(n.p,{children:"A timeline item may have one of three states:"}),`
`,e(n.h3,{id:"upcoming",children:"Upcoming"}),`
`,e(n.p,{children:"Standard state no class needed."}),`
`,e(o,{of:l}),`
`,e(n.h3,{id:"ongoing",children:"Ongoing"}),`
`,e(n.p,{children:[e(n.code,{children:".timeline-spacing"})," should have a class ",e(n.code,{children:".is-ongoing"})," which will make the icon larger in that item."]}),`
`,e(o,{of:h}),`
`,e(n.h3,{id:"done",children:"Done"}),`
`,e(n.p,{children:[e(n.code,{children:".timeline-icon"})," should have the class ",e(n.code,{children:".is-done"}),"."]}),`
`,e(o,{of:m})]})}function I(i={}){const{wrapper:n}=Object.assign({},c(),i.components);return n?e(n,Object.assign({},i,{children:e(a,i)})):a(i)}export{I as default};
//# sourceMappingURL=Timeline-79d66de4.js.map
