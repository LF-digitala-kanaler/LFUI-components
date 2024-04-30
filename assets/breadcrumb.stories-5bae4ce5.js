const i=`<p class="text-sm mb-15 text-muted">White background</p>

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
`,b={title:"Navigations/Breadcrumb",parameters:{backgrounds:{default:"gray"},badges:["stable"]}};function s({transparent:l}){return`
  <nav aria-label="Breadcrumb">
    <ol class="breadcrumb ${l?"breadcrumb-transparent":""}">
      <li class="breadcrumb-item">
        <a href="#" onclick="return false">Private banking</a>
      </li>
      <li class="breadcrumb-item">
        <a href="#" onclick="return false">Insurances</a>
      </li>
      <li class="breadcrumb-item active" aria-current="page">Car insurance</li>
    </ol>
  </nav>
  `}const c=s.bind({});c.args={transparent:!1};const t=s.bind({});t.args={transparent:!0};const a=()=>i;var r,e,n;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:"() => Breadcrumb",...(n=(e=a.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const u=["Default","Transparent","breadcrumbExample"],m=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Transparent:t,__namedExportsOrder:u,breadcrumbExample:a,default:b},Symbol.toStringTag,{value:"Module"}));export{m as B,c as D,t as T};
