import{s as u}from"./index-d475d2ea.js";import{d as f}from"./index-356e4a49.js";import{S as p,e as l,a as y}from"./index-e02d3f7d.js";import"./_commonjsHelpers-725317a4.js";const{simulatePageLoad:m,simulateDOMContentLoaded:_}=__STORYBOOK_MODULE_PREVIEW_API__;var{Node:c}=u,C=(r,e)=>{let{id:i,component:o}=e;if(typeof o=="string"){let t=o;return Object.keys(r).forEach(n=>{t=t.replace(`{{${n}}}`,r[n])}),t}if(o instanceof HTMLElement){let t=o.cloneNode(!0);return Object.keys(r).forEach(n=>{t.setAttribute(n,typeof r[n]=="string"?r[n]:JSON.stringify(r[n]))}),t}if(typeof o=="function")return o(r,e);throw console.warn(f`
    Storybook's HTML renderer only supports rendering DOM elements and strings.
    Received: ${o}
  `),new Error(`Unable to render story ${i}`)};function A({storyFn:r,kind:e,name:i,showMain:o,showError:t,forceRemount:n},s){let d=r();if(o(),typeof d=="string")s.innerHTML=d,m(s);else if(d instanceof c){if(s.firstChild===d&&n===!1)return;s.innerHTML="",s.appendChild(d),_()}else t({title:`Expecting an HTML snippet or DOM node from the story: "${i}" of "${e}".`,description:f`
        Did you forget to return the HTML snippet from the story?
        Use "() => <your snippet or node>" or when defining the story.
      `})}const{addons:g,useEffect:h}=__STORYBOOK_MODULE_PREVIEW_API__;function E(r){var o;let e=(o=r==null?void 0:r.parameters.docs)==null?void 0:o.source,i=r==null?void 0:r.parameters.__isArgsStory;return(e==null?void 0:e.type)===p.DYNAMIC?!1:!i||(e==null?void 0:e.code)||(e==null?void 0:e.type)===p.CODE}function O(r,e){var n,s;let i=r(),o=(s=(n=e==null?void 0:e.parameters.docs)==null?void 0:n.source)!=null&&s.excludeDecorators?e.originalStoryFn(e.args,e):i,t;return E(e)||(typeof o=="string"?t=o:o instanceof Element&&(t=o.outerHTML)),h(()=>{let{id:d,args:a}=e;t&&g.getChannel().emit(y,{id:d,args:a,source:t})}),i}var R=[O],D={docs:{story:{inline:!0},source:{type:p.DYNAMIC,language:"html",code:void 0,excludeDecorators:void 0}}},H=[l],I={renderer:"html",...D};export{H as argTypesEnhancers,R as decorators,I as parameters,C as render,A as renderToCanvas};
//# sourceMappingURL=config-e204f33e.js.map
