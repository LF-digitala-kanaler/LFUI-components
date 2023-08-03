import{M as r,b as s,C as l}from"./index-c68e595d.js";import{o}from"./jsxRuntime.module-3449ab35.js";import{C as e,a as h}from"./callout.stories-dfb96ae9.js";import{B as c}from"./Badges-cfa94b0e.js";import{u as a}from"./index-fe7a1e23.js";import{k as p}from"./hooks.module-d947cf7f.js";import"./iframe-8acc0871.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./utils-f589fb48.js";function i(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",pre:"pre",code:"code"},a(),n.components);return o(p,{children:[o(r,{of:e,name:"Callout component"}),`
`,o(t.h1,{id:"callout-",children:["Callout ",o(c,{of:e})]}),`
`,o(s,{children:o(t.p,{children:"The callout is used to highlight information which we want the user to notice in relation to a chunk of text."})}),`
`,o(l,{of:h}),`
`,o(t.h2,{id:"animation",children:"Animation"}),`
`,o(t.p,{children:["Callout uses ",o(t.a,{href:"https://github.com/maxwellito/vivus",target:"_blank",rel:"nofollow noopener noreferrer",children:"Vivus"})," for the animation of the SVG. Animation initialise is not part of LFUI and something you have to do yourself. The animation should autostart when the component is in view. This is an example how the initialise script could look like."]}),`
`,o(t.pre,{children:o(t.code,{className:"language-javascript",children:`$('[data-draw]').each((index, el) => {
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
`})})]})}function $(n={}){const{wrapper:t}=Object.assign({},a(),n.components);return t?o(t,Object.assign({},n,{children:o(i,n)})):i(n)}export{$ as default};
//# sourceMappingURL=Callout-a1b3482f.js.map
