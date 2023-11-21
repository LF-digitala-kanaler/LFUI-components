import{M as a,b as h,C as o}from"./index-190694a0.js";import{u as e}from"./jsxRuntime.module-43f65b33.js";import{P as n,D as c,F as d,a as p}from"./pricebox.stories-c4461123.js";import{B as l}from"./Badges-c29d6495.js";import{N as f}from"./Note-ce5ddc27.js";import{u as s}from"./index-c36d5595.js";import{g as m}from"./hooks.module-0dd1334e.js";import"./iframe-33e87fb8.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d38538b0.js";import"./index-356e4a49.js";function r(i){const t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3",h4:"h4"},s(),i.components);return e(m,{children:[e(a,{of:n}),`
`,e(t.h1,{id:"pricebox-",children:["Pricebox ",e(l,{of:n})]}),`
`,e(h,{children:e(t.p,{children:"The Price-box component is used in forms, usually as (or inside of) a sidebar which lets the user keep track of the price/cost of the service as he/she makes changes in the form."})}),`
`,e(t.p,{children:["The component has some fixed classes in order to style the upper part (",e(t.code,{children:".price-box-header"}),") of the component correctly."]}),`
`,e(t.p,{children:["The lower part (",e(t.code,{children:".price-box-content"}),") contains a listing of all the factors that affect the price itself, which vary a great deal between forms. Feel free to use different types of LFUI components freely here depending on the form related to the price-box in question."]}),`
`,e(o,{of:c}),`
`,e(f,{children:[e(t.h2,{id:"accesibility",children:"Accesibility"}),e(t.p,{children:"It is important that pricebox is codewise placed before the primary button (= submit) of the main flow so that people who use screen readers get access to the information if they are tabbing through the page."})]}),`
`,e(t.h2,{id:"variations",children:"Variations"}),`
`,e(t.p,{children:"The price box (desktop variant) is not suitable for smaller views. Because of this there is two different variation you will have to show/hide depending on the screen width(screen width less than 768px show responsive variation)."}),`
`,e(t.h3,{id:"responsive",children:"Responsive"}),`
`,e(o,{of:d,story:{inline:!1,height:300}}),`
`,e(t.p,{children:["In smaller devices we use a position: fixed-oriented, collapsible price box instead to save space but still keep the easily overviewed component close at hand for the user. The ",e(t.code,{children:".price-box-bottom"})," is positioned in the bottom of the window so that only the header is visible, and on click it toggles upwards, showing the main content."]}),`
`,e(t.h4,{id:"content-before-the-pricebox",children:"Content before the pricebox"}),`
`,e(t.p,{children:"You can make the content be displayed before the pricebox when expanded:"}),`
`,e(o,{of:p,story:{inline:!1,height:300}}),`
`,e(t.h3,{id:"getting-it-interactive",children:"Getting it interactive"}),`
`,e(t.p,{children:["We don't provide any specific Javascript for toggeling the responsive version, instead, we rely on the Bootstrap ",e(t.code,{children:'data-bs-toggle="collapse"'}),". Please see the example implementations."]})]})}function D(i={}){const{wrapper:t}=Object.assign({},s(),i.components);return t?e(t,Object.assign({},i,{children:e(r,i)})):r(i)}export{D as default};
//# sourceMappingURL=Pricebox-0dd79fcd.js.map
