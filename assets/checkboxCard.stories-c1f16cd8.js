import{u as m}from"./utils-cfbb8c9c.js";const{useState:h,useEffect:p}=__STORYBOOK_MODULE_CLIENT_API__,k={title:"Forms/Checkboxes/Checkbox Card",parameters:{backgrounds:{default:"white"},badges:["stable"]},argTypes:{}};function s({label:c,disabled:o,checked:t,iconUrl:a="40/icons.svg#thumb-up-40"}){const[l]=h(m);return p(()=>{document.getElementById(l).addEventListener("change",function(){this.classList.contains("active")?this.classList.remove("active"):this.classList.add("active")})},[c,o,t,a]),`
    <div class="checkbox-card">
      <label class="custom-control custom-checkbox">
        <input
          name="checkboxCard"
          type="checkbox"
          id="${l}"
          class="custom-control-input"
          ${t?"checked":""}
          ${o?"disabled":""}
        />
        <span class="custom-control-label">
          <svg
            role="presentation"
            class="icon d-block mx-auto mb-05"
            width="40"
            height="40">
            <use xlink:href="lf-icons/sprite/${a}"></use>
          </svg>
          ${c}
        </span>
      </label>
    </div>
  `}const i=s.bind({});i.args={label:"Checkbox",checked:!1,disabled:!1,iconUrl:"40/icons.svg#thumb-up-40"};const b=s.bind({});b.args={label:"Disabled checkbox",disabled:!0};const u=s.bind({});u.args={label:"Checked checkbox",checked:!0};const e=()=>{const c=s({label:"Checkbox 1"}),o=s({label:"Checkbox 2"});return`
  <fieldset>
    <legend>Group of checkbox cards</legend>
    <div class="row row-tight form-group">
      <div class="col-6 col-md-3 mb-1">
        ${c}
      </div>
      <div class="col-6 col-md-3 mb-1">
        ${o}
      </div>
    </div>
  </fieldset>
  `};var d,n,r;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const card1 = Template({
    label: 'Checkbox 1'
  });
  const card2 = Template({
    label: 'Checkbox 2'
  });
  return \`
  <fieldset>
    <legend>Group of checkbox cards</legend>
    <div class="row row-tight form-group">
      <div class="col-6 col-md-3 mb-1">
        \${card1}
      </div>
      <div class="col-6 col-md-3 mb-1">
        \${card2}
      </div>
    </div>
  </fieldset>
  \`;
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const f=["Default","Disabled","Checked","Grouped"],x=Object.freeze(Object.defineProperty({__proto__:null,Checked:u,Default:i,Disabled:b,Grouped:e,__namedExportsOrder:f,default:k},Symbol.toStringTag,{value:"Module"}));export{x as C,i as D,e as G,b as a,u as b};
