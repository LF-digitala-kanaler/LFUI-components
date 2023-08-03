import{M as a,C as n}from"./index-c68e595d.js";import{o}from"./jsxRuntime.module-3449ab35.js";import{P as r,D as l,C as s}from"./popovertooltip.stories-782d1795.js";import{B as d}from"./Badges-cfa94b0e.js";import{u as p}from"./index-fe7a1e23.js";import{k as c}from"./hooks.module-d947cf7f.js";import"./iframe-8acc0871.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./utils-f589fb48.js";function i(t){const e=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2"},p(),t.components);return o(c,{children:[o(a,{of:r}),`
`,o(e.h1,{id:"popover-tooltip-",children:["Popover tooltip ",o(d,{of:r})]}),`
`,o(n,{of:l,story:{inline:!1,height:250}}),`
`,o(e.p,{children:"The popover is triggered on both click and hover."}),`
`,o(e.p,{children:"Use the popover-tooltip to allow the user to toggle explanations to difficult words, or words not considered general knowledge. Works great inline! Also included is an option to link to a dictionary containing all the difficult words gathered from your application within the popover itself."}),`
`,o(e.p,{children:["The popover-tooltip extends on the popover class, and is triggered by wrapping the word needing an explanation in a ",o(e.code,{children:"popover-tooltip-trigger"})," class, and also pointing to the toggleable div with ",o(e.code,{children:'aria-controls="[div id]"'}),". The div should have an id corresponding to the one specified in the aria-controls. Add the ",o(e.code,{children:"popover-tooltip"})," to the div, along with any popover classes to manipulate its positioning. Make sure the entire popover-tooltip is wrapped in the ",o(e.code,{children:"popover-tooltip-trigger"})," element."]}),`
`,o(e.p,{children:"Like popovers, we need some simple triggering javascript in order for the popover to appear."}),`
`,o(e.pre,{children:o(e.code,{className:"language-javascript",children:`$('.popover-tooltip-trigger').on('focus blur', function() {
  $('#' + $(this).attr('aria-controls')).parent().toggleClass('open');
});
`})}),`
`,o(e.h2,{id:"center-popup-box-on-small-screens",children:"Center popup box on small screens"}),`
`,o(e.p,{children:["There is an option to center the popup box on smaller screens. If you add ",o(e.code,{children:"popover-sm-center"})," to both ",o(e.code,{children:"popover-tooltip-trigger"})," and popover-tooltip the box will be centered on small screens right aligned on wider."]}),`
`,o(n,{of:s,story:{inline:!1,height:250}})]})}function j(t={}){const{wrapper:e}=Object.assign({},p(),t.components);return e?o(e,Object.assign({},t,{children:o(i,t)})):i(t)}export{j as default};
//# sourceMappingURL=Popover-a4406e40.js.map
