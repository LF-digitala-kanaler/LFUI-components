const r=`<p class="text-sm mb-05 text-muted">Internal link</p>
<a href="#" onclick="return false">Read more</a>

<p class="text-sm mt-15 mb-05 text-muted">External link</p>
<a href="#" onclick="return false" rel="noopener noreferrer" target="_blank">Read the full article</a>
<svg
  role="presentation"
  class="text-blue icon icon-nudge-up"
  width="20"
  height="20">
  <use
    href="/lf-icons/sprite/special/icons.svg#external-link-inline"></use>
</svg>

<p class="text-sm mt-15 mb-05 text-muted">Link with icon</p>
<svg
  role="presentation"
  class="icon icon-nudge-up-015 text-blue"
  width="24"
  height="24">
  <use href="lf-icons/sprite/24/icons.svg#pdf-document-24"></use>
</svg>
<a href="#" onclick="return false" rel="noopener noreferrer">
  Insurance papers
</a>

<p class="text-sm mt-15 mb-05 text-muted">Primary link</p>
<a class="primary-link" href="#" onclick="return false">Primary link</a>

<p class="text-sm mt-15 mb-05 text-muted">Link with right arrow:</p>
<a href="#" role="button" class="arrow-right">
  <span class="d-none d-sm-inline-block">Nästa</span>
</a>`,a={title:"Button and links/Links"},n=()=>r;var e,s,t;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:"() => Links",...(t=(s=n.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const i=["links"];export{i as __namedExportsOrder,a as default,n as links};
