import{u as d}from"./utils-36f3a862.js";const{useState:r,useEffect:b}=__STORYBOOK_MODULE_CLIENT_API__,u={title:"Forms/Checkboxes/Checkbox Card",parameters:{backgrounds:{default:"white"},badges:["stable"]},argTypes:{}};function e({label:s,disabled:t,checked:c,iconUrl:a="40/icons.svg#thumb-up-40"}){const[o]=r(d);return b(()=>{document.getElementById(o).addEventListener("change",function(){this.classList.contains("active")?this.classList.remove("active"):this.classList.add("active")})},[s,t,c,a]),`
    <div class="checkbox-card">
      <label class="custom-control custom-checkbox">
        <input
          name="checkboxCard"
          type="checkbox"
          id="${o}"
          class="custom-control-input"
          ${c?"checked":""}
          ${t?"disabled":""}
        />
        <span class="custom-control-label">
          <svg
            role="presentation"
            class="icon d-block mx-auto mb-05"
            width="40"
            height="40">
            <use xlink:href="lf-icons/sprite/${a}"></use>
          </svg>
          ${s}
        </span>
      </label>
    </div>
  `}const l=e.bind({});l.args={label:"Checkbox",checked:!1,disabled:!1,iconUrl:"40/icons.svg#thumb-up-40"};const n=e.bind({});n.args={label:"Disabled checkbox",disabled:!0};const i=e.bind({});i.args={label:"Checked checkbox",checked:!0};const h=["Default","Disabled","Checked"],p=Object.freeze(Object.defineProperty({__proto__:null,Checked:i,Default:l,Disabled:n,__namedExportsOrder:h,default:u},Symbol.toStringTag,{value:"Module"}));export{p as C,l as D,n as a,i as b};
//# sourceMappingURL=checkboxCard.stories-f7c968ee.js.map
