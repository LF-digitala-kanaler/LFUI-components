import{e as d,u as f,h as b}from"./utils-cfbb8c9c.js";const v=`<p class="text-sm mb-10 text-muted">Default</p>
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
</ul>`,P=a=>{a&&d(".pagination a",(e,_,u)=>{e.addEventListener("click",function(m){for(const t of u)t!==e&&(t.setAttribute("aria-current","false"),t.parentElement.classList.remove("active"));e.setAttribute("aria-current","true"),e.parentElement.classList.add("active"),m.preventDefault()})},a)},{useEffect:k,useState:h}=__STORYBOOK_MODULE_CLIENT_API__,S={title:"Navigations/Pagination",parameters:{backgrounds:{default:"gray"},badges:["stable"]},argTypes:{}};function l({flex:a,flexSmall:e}){return`
  <nav aria-label="Pagination Navigation">
    <ul class="pagination ${a?"pagination-flex":""} ${e?"pagination-sm-flex":""}">
      <li class="page-item"><a href="#" class="page-link" aria-label="Goto Page 1">1</a></li>
      <li class="page-item"><a href="#" class="page-link" aria-label="Goto Page 1">2</a></li>
      <li class="page-item active"><a aria-label="Current Page, Page 3" href="#" class="page-link" aria-current="true">3</a></li>
      <li class="page-item"><a href="#" class="page-link" aria-label="Goto Page 4">4</a></li>
    </ul>
  </nav>
  `}function x(){return`
  <ul class="pagination pagination-static">
    <li class="page-item"><span class="page-link">1</span></li>
    <li class="page-item"><span class="page-link">2</span></li>
    <li class="page-item active"><span class="page-link">3</span></li>
    <li class="page-item"><span class="page-link">4</span></li>
  </ul>
  `}const c=l.bind({});c.args={};const p=l.bind({});p.args={flex:!0};const g=l.bind({});g.args={flexSmall:!0};const o=x.bind({});o.args={};const i=()=>{const[a]=h(f);return k(()=>{P(document.getElementById(a))},[]),b`
    <div id="${a}">${v}</div>
  `};var n,s,r;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const [id] = useState(uid);
  useEffect(() => {
    paginationExample(document.getElementById(id));
  }, []);
  return html\`
    <div id="\${id}">\${Pagination}</div>
  \`;
}`,...(r=(s=i.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const E=["Default","Stretchy","StretchySmallScreen","NoInteractive","Example"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Example:i,NoInteractive:o,Stretchy:p,StretchySmallScreen:g,__namedExportsOrder:E,default:S},Symbol.toStringTag,{value:"Module"}));export{c as D,o as N,N as P,p as S,g as a};
