import{M as r,b as s,C as l}from"./index-190694a0.js";import{u as o}from"./jsxRuntime.module-43f65b33.js";import{C as e,a as h}from"./callout.stories-5ea1d13b.js";import{B as c}from"./Badges-c29d6495.js";import{u as a}from"./index-c36d5595.js";import{g as p}from"./hooks.module-0dd1334e.js";import"./iframe-33e87fb8.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./utils-1863097b.js";function i(t){const n=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",pre:"pre",code:"code"},a(),t.components);return o(p,{children:[o(r,{of:e,name:"Callout component"}),`
`,o(n.h1,{id:"callout-",children:["Callout ",o(c,{of:e})]}),`
`,o(s,{children:o(n.p,{children:"The callout is used to highlight information which we want the user to notice in relation to a chunk of text."})}),`
`,o(l,{of:h}),`
`,o(n.h2,{id:"animation",children:"Animation"}),`
`,o(n.p,{children:["Callout uses ",o(n.a,{href:"https://github.com/maxwellito/vivus",target:"_blank",rel:"nofollow noopener noreferrer",children:"Vivus"})," for the animation of the SVG. Animation initialise is not part of LFUI and something you have to do yourself. The animation should autostart when the component is in view. This is an example how the initialise script could look like."]}),`
`,o(n.pre,{children:o(n.code,{className:"language-javascript",children:`$('[data-draw]').each((index, el) => {
  const $el = $(el);
  const options = getDataOptions($el.data());

  if (options.hasOwnProperty('on')) {
    delete options.on;
    options.start = 'autostart';
    $el.on(options.on, () => draw(el, options));
  } else {
    draw(el, options);
  }
});
`})})]})}function $(t={}){const{wrapper:n}=Object.assign({},a(),t.components);return n?o(n,Object.assign({},t,{children:o(i,t)})):i(t)}export{$ as default};
//# sourceMappingURL=Callout-82173dc3.js.map
