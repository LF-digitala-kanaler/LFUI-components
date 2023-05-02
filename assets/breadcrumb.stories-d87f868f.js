const c=`<p class="text-sm mb-15 text-muted">White background</p>

<nav aria-label="Breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item">
      <a href="#" onclick="return false">Private banking</a>
    </li>
    <li class="breadcrumb-item">
      <a href="#" onclick="return false">Insurances</a>
    </li>
    <li class="breadcrumb-item active" aria-current="page">Car insurance</li>
  </ol>
</nav>

<p class="text-sm mt-15 mb-15 text-muted">Transparent background</p>

<nav aria-label="Breadcrumb">
  <ol class="breadcrumb breadcrumb-transparent">
    <li class="breadcrumb-item">
      <a href="#" onclick="return false">Private banking</a>
    </li>
    <li class="breadcrumb-item">
      <a href="#" onclick="return false">Insurances</a>
    </li>
    <li class="breadcrumb-item active" aria-current="page">Car insurance</li>
  </ol>
</nav>
`,s={title:"Navigations/Breadcrumb",parameters:{backgrounds:{default:"gray"}}},a=()=>c;var r,e,n;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:"() => Breadcrumb",...(n=(e=a.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const t=["breadcrumb"];export{t as __namedExportsOrder,a as breadcrumb,s as default};
//# sourceMappingURL=breadcrumb.stories-d87f868f.js.map
