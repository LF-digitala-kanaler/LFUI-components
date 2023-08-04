import{e as m,u as r}from"./utils-f9cf1c58.js";const u=e=>{e&&m(".value-box-text",function(o){const x=o.getBBox().width||o.getComputedTextLength();o.setAttribute("viewBox",`0 0 ${x} 18`)},e)},{useEffect:v,useState:b}=__STORYBOOK_MODULE_CLIENT_API__,p={title:"Page content/Value box",parameters:{badges:["stable"]}},a=()=>{const[e]=b(r);return v(()=>{u(document.getElementById(e))},[]),`
  <div class="row" >
    <div class="col-md-4">
      <div class="value-box mb-1" id="${e}">
        <div class="value-box-heading">Spending account</div>
        <svg class="h1 value-box-text" fill="currentcolor">
          <text x="50%" y="16" font-size="16" style="text-anchor: middle">
            30 470 kr
          </text>
        </svg>
      </div>
    </div>
  </div>
  `},t=()=>{const[e]=b(r);return v(()=>{u(document.getElementById(e))},[]),`
  <div class="row" id="${e}">
    <div class="col-md-4">
      <div class="value-box">
        <button class="value-box-heading collapsed" type="button" data-bs-target="#value-box-info" aria-controls="value-box-info" data-bs-toggle="collapse" aria-expanded="false">
          Account summary<span class="value-box-toggle"></span>
        </button>
        <div class="value-box-collapse collapse" id="value-box-info" aria-expanded="false">
          <div class="value-box-body">
            Forage pitchfork mumblecore, post-ironic bushwick banh mi ramps cronut. Meggings locavore banjo aesthetic, blue bottle you probably haven't heard of them cronut ethical +1 marfa 90's raw denim yuccie occupy DIY.
          </div>
        </div>
        <svg class="h1 value-box-text" fill="currentcolor">
          <text x="50%" y="16" font-size="16" style="text-anchor: middle">
            130 470 kr
          </text>
        </svg>
      </div>
    </div>
  </div>
  `};var s,n,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const [id] = useState(uid);
  useEffect(() => {
    valueboxExample(document.getElementById(id));
  }, []);
  return \`
  <div class="row" >
    <div class="col-md-4">
      <div class="value-box mb-1" id="\${id}">
        <div class="value-box-heading">Spending account</div>
        <svg class="h1 value-box-text" fill="currentcolor">
          <text x="50%" y="16" font-size="16" style="text-anchor: middle">
            30 470 kr
          </text>
        </svg>
      </div>
    </div>
  </div>
  \`;
}`,...(l=(n=a.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var c,i,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const [id] = useState(uid);
  useEffect(() => {
    valueboxExample(document.getElementById(id));
  }, []);
  return \`
  <div class="row" id="\${id}">
    <div class="col-md-4">
      <div class="value-box">
        <button class="value-box-heading collapsed" type="button" data-bs-target="#value-box-info" aria-controls="value-box-info" data-bs-toggle="collapse" aria-expanded="false">
          Account summary<span class="value-box-toggle"></span>
        </button>
        <div class="value-box-collapse collapse" id="value-box-info" aria-expanded="false">
          <div class="value-box-body">
            Forage pitchfork mumblecore, post-ironic bushwick banh mi ramps cronut. Meggings locavore banjo aesthetic, blue bottle you probably haven't heard of them cronut ethical +1 marfa 90's raw denim yuccie occupy DIY.
          </div>
        </div>
        <svg class="h1 value-box-text" fill="currentcolor">
          <text x="50%" y="16" font-size="16" style="text-anchor: middle">
            130 470 kr
          </text>
        </svg>
      </div>
    </div>
  </div>
  \`;
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const g=["Default","Expandable"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Expandable:t,__namedExportsOrder:g,default:p},Symbol.toStringTag,{value:"Module"}));export{a as D,t as E,h as V};
//# sourceMappingURL=valuebox.stories-f1f1681e.js.map
