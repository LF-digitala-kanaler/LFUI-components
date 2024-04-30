import{M as s,b as c,C as t}from"./index-5b4b983c.js";import{u as e}from"./jsxRuntime.module-86b0a656.js";import{N as a}from"./Note-ad8a4fc1.js";import{B as d}from"./Badges-4014e066.js";import{A as l,W as h,a as m,b as p,c as u,D as b,B as f}from"./alert.stories-71cc5854.js";import{u as o}from"./index-2c765b7a.js";import{g}from"./hooks.module-837c4323.js";import"./iframe-eeb3ff28.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d38538b0.js";import"./index-356e4a49.js";function r(i){const n=Object.assign({h1:"h1",p:"p",h3:"h3",code:"code",pre:"pre",h2:"h2",h4:"h4"},o(),i.components);return e(g,{children:[e(s,{of:l}),`
`,e(n.h1,{id:"alert-",children:["Alert ",e(d,{of:l})]}),`
`,e(c,{children:e(n.p,{children:`Alerts are used to provide contextual messages for typical user actions and for important
communication from Länsförsäkringar of a non-commercial nature.`})}),`
`,e(t,{of:h}),`
`,e(a,{children:[e(n.h3,{id:"accessibility",children:"Accessibility"}),e(n.p,{children:["We use ",e(n.code,{children:"aria-label"})," on the icon inside the alert to make the screen reader read out the type of alert. Icon should also have ",e(n.code,{children:'role="img"'}),"."]}),e(n.pre,{children:e(n.code,{className:"language-html",children:`<div class="alert alert-info">
    <svg class="icon" width="24" height="24"
     	aria-label="Informationmeddelande" role="img">
        	<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="lf-icons/sprite/24/icons.svg#chat-24"></use>
    </svg>
    <p class="alert-content">
        ...
    </p>
</div>
`})})]}),`
`,e(n.h2,{id:"closable",children:"Closable"}),`
`,e(n.h3,{id:"close-button",children:"Close button"}),`
`,e(t,{of:m}),`
`,e(a,{children:[e(n.h4,{id:"accessibility-1",children:"Accessibility"}),e(n.p,{children:"Use good names on the close button."}),e(n.pre,{children:e(n.code,{className:"language-html",children:`<button
	type="button"
 	class="btn-close"
  	data-bs-dismiss="alert"
   	aria-label="Stäng meddelande">
</button>
`})})]}),`
`,e(n.h3,{id:"button-with-vissible-label",children:"Button with vissible label"}),`
`,e(t,{of:p}),`
`,e(n.h2,{id:"heading",children:"Heading"}),`
`,e(n.p,{children:"Alerts can contain inline heading."}),`
`,e(t,{of:u}),`
`,e(n.h2,{id:"dynamic-alerts",children:"Dynamic alerts"}),`
`,e(t,{of:b}),`
`,e(a,{children:[e(n.h3,{id:"accessibility-2",children:"Accessibility"}),e(n.p,{children:["Alert added dynamicly with Javascript should have ",e(n.code,{children:'role="alert"'})," and ",e(n.code,{children:'aria-live="polite"'}),"."]}),e(n.pre,{children:e(n.code,{className:"language-html",children:`<div class="alert alert-info" role="alert" aria-live="polite">
    <p class="alert-content">
       ...
    </p>
</div>
`})})]}),`
`,e(n.h2,{id:"banner",children:"Banner"}),`
`,e(t,{of:f})]})}function S(i={}){const{wrapper:n}=Object.assign({},o(),i.components);return n?e(n,Object.assign({},i,{children:e(r,i)})):r(i)}export{S as default};
