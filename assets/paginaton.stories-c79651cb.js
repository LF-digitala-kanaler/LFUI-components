import{e as p,u as o,h as g}from"./utils-88afe92d.js";import"./hooks.module-446c997e.js";import"./jsxRuntime.module-779d8325.js";const m=`<p class="text-sm mb-10 text-muted">Default</p>
<nav aria-label="Pagination Navigation">
  <ul class="pagination">
    <li class="page-item"><a href="#" class="page-link" aria-label="Goto Page 1">1</a></li>
    <li class="page-item"><a href="#" class="page-link" aria-label="Goto Page 1">2</a></li>
    <li class="page-item active"><a aria-label="Current Page, Page 3" href="#" class="page-link" aria-current="true">3</a></li>
    <li class="page-item"><a href="#" class="page-link" aria-label="Goto Page 4">4</a></li>
  </ul>
</nav>

<p class="text-sm mb-10 text-muted ">Stretchy</p>
<nav aria-label="Pagination Navigation">
  <ul class="pagination pagination-flex">
    <li class="page-item"><a href="#" class="page-link" aria-label="Goto Page 1">1</a></li>
    <li class="page-item"><a href="#" class="page-link" aria-label="Goto Page 1">2</a></li>
    <li class="page-item active"><a aria-label="Current Page, Page 3" href="#" class="page-link"
        aria-current="true">3</a></li>
    <li class="page-item"><a href="#" class="page-link" aria-label="Goto Page 4">4</a></li>
  </ul>
</nav>

<p class="text-sm mt-15 mb-10 text-muted">Noninteractive</p>
<ul class="pagination pagination-static">
  <li class="page-item"><span class="page-link">1</span></li>
  <li class="page-item"><span class="page-link">2</span></li>
  <li class="page-item active"><span class="page-link">3</span></li>
  <li class="page-item"><span class="page-link">4</span></li>
</ul>`,u=a=>{a&&p(".pagination a",(e,v,r)=>{e.addEventListener("click",function(c){for(const n of r)n!==e&&(n.setAttribute("aria-current","false"),n.parentElement.classList.remove("active"));e.setAttribute("aria-current","true"),e.parentElement.classList.add("active"),c.preventDefault()})},a)},{useEffect:d,useState:f}=__STORYBOOK_MODULE_CLIENT_API__,h={title:"Navigations/Pagination",parameters:{backgrounds:{default:"gray"}}},i=()=>{const[a]=f(o);return d(()=>{u(document.getElementById(a))},[]),g`
    <div id="${a}">${m}</div>
  `};var t,s,l;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const [id] = useState(uid);
  useEffect(() => {
    paginationExample(document.getElementById(id));
  }, []);
  return html\`
    <div id="\${id}">\${Pagination}</div>
  \`;
}`,...(l=(s=i.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const E=["pagination"];export{E as __namedExportsOrder,h as default,i as pagination};
//# sourceMappingURL=paginaton.stories-c79651cb.js.map
