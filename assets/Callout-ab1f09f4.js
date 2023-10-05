import{M as r,b as s,C as l}from"./index-a2cf5289.js";import{o}from"./jsxRuntime.module-66b8704f.js";import{C as e,a as h}from"./callout.stories-56a9afd3.js";import{B as c}from"./Badges-416080bf.js";import{u as a}from"./index-ab7cae56.js";import{k as p}from"./hooks.module-5272b78b.js";import"./iframe-674c1d1a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./utils-36f3a862.js";function i(t){const n=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",pre:"pre",code:"code"},a(),t.components);return o(p,{children:[o(r,{of:e,name:"Callout component"}),`
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
`})})]})}function O(t={}){const{wrapper:n}=Object.assign({},a(),t.components);return n?o(n,Object.assign({},t,{children:o(i,t)})):i(t)}export{O as default};
//# sourceMappingURL=Callout-ab1f09f4.js.map
