import{M as s,C as o}from"./index-190694a0.js";import{u as e}from"./jsxRuntime.module-43f65b33.js";import{P as a,A as r,C as d,E as c,L as h}from"./panel.stories-e370fdf3.js";import{B as p}from"./Badges-c29d6495.js";import{u as l}from"./index-c36d5595.js";import{g as m}from"./hooks.module-0dd1334e.js";import"./iframe-33e87fb8.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./utils-1863097b.js";function i(t){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",code:"code",a:"a",h4:"h4",h5:"h5",pre:"pre"},l(),t.components);return e(m,{children:[e(s,{of:a}),`
`,e(n.h1,{id:"panel-",children:["Panel ",e(p,{of:a})]}),`
`,e(n.p,{children:"The Component name Panel is new to LFUI, it was previously part of Cards. Since LFUI is built on top of Bootstrap all classes in this component still use class names from the card component."}),`
`,e(n.h2,{id:"variations",children:"Variations"}),`
`,e(n.p,{children:"There is two variations of Panel in LFUI, One that is always open and one that is collapsible."}),`
`,e(n.h3,{id:"always-open",children:"Always open"}),`
`,e(o,{of:r}),`
`,e(n.h3,{id:"collapsable",children:"Collapsable"}),`
`,e(o,{of:d}),`
`,e(n.p,{children:'Collapsible (with its chevron and clickable space) is strictly only used along with this specific functionality; if you want a "static collapsible panel", use the default panel styling instead. Using the chevron and clickable surface when the component is never supposed to collapse is wrong.'}),`
`,e(n.p,{children:["Since the collapse button does not have the ",e(n.code,{children:".btn-class"}),", make sure you add the ",e(n.code,{children:'role="button"'}),"-property to the element."]}),`
`,e(n.p,{children:["Collapsible uses Bootstrap Collapse functionality to handle the toggle, you can read more about how to use it ",e(n.a,{href:"https://lfds.netlify.app/components/web/supportive-microinteractions/collapse",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),"."]}),`
`,e(n.h4,{id:"modifiers",children:"Modifiers"}),`
`,e(n.h5,{id:"expandedcollapsed-by-default",children:"Expanded/collapsed by default"}),`
`,e(n.p,{children:["A collapsible panel may be expanded or closed by default. This is handle by changing ",e(n.code,{children:'aria-expanded="*"'})," to either true or false and add/remove .show from the ",e(n.code,{children:".collapse"}),"."]}),`
`,e(o,{of:c}),`
`,e(n.h5,{id:"lazy-load",children:"Lazy load"}),`
`,e(o,{of:h}),`
`,e(n.p,{children:"The trigger can wait for some content to be fetched lazily before being expanded. While loading, a progress bar will be shown."}),`
`,e(n.p,{children:"When your content has been loaded and added to the expandable panel, simply notify the trigger by triggering a done event on it."}),`
`,e(n.p,{children:"Functionality for this is not part of LFUI(only styling). An implementation could look something like this."}),`
`,e(n.pre,{children:e(n.code,{className:"language-javascript",children:`const trigger = document.querySelector('.js-lazytrigger');
const panel = document.querySelector('.js-lazylist');
const template = data => \`<ul>\${ data.map(item => \`<li>\${ item }</li>\`).join('\\n') }</ul>\`;

trigger.addEventListener('click', event => {
    fetch('//some/service.json')
      .then(res => res.json())
      .then(template)
      .then(html => {panel.innerHTML = html})
      .then(() => trigger.dispatchEvent(new Event('done')));
}, false);
`})})]})}function k(t={}){const{wrapper:n}=Object.assign({},l(),t.components);return n?e(n,Object.assign({},t,{children:e(i,t)})):i(t)}export{k as default};
//# sourceMappingURL=Panel-650841e3.js.map
