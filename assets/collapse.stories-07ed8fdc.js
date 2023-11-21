import{u as s}from"./utils-1863097b.js";const i={title:"Supportive microinteractions/Collapse",parameters:{badges:["stable"]},argTypes:{type:{control:"select",options:["button","a"]},background:{control:"select",options:["white","gray"]}}};function a({background:o="white",type:t="button"}){const e=s();return`
    <article>
      <${t}
        id="readMoreCollapse"
        class="btn btn-more"
        data-bs-toggle="collapse"
        ${t==="button"?`data-bs-target="#${e}"`:""}
        ${t==="button"?'type="button"':""}
        ${t==="a"?`href="#${e}"`:""}
        ${t==="a"?'role="button"':""}
        aria-expanded="false"
        aria-controls="${e}"
      >
        Read more
      </${t}>
      <div
        id="${e}"
        class="collapse ${o==="gray"?"bg-body-bg  mb-20":""}"
      >
        ${o==="gray"?'<div class="col-md-9 p-1">':""}
        <p>This is only needed if you wish to…</p>
        <ul>
          <li>shift your spendings,</li>
          <li>calculate your spendings in percentage,</li>
          <li>or plan on being active.</li>
        </ul>
        ${o==="gray"?"</div>":""}
      </div>
    </article>
    `}const r=a.bind({});r.args={background:"white",type:"button"};const l=a.bind({});l.args={background:"gray"};const n=["Default","WithGrayBackground"],d=Object.freeze(Object.defineProperty({__proto__:null,Default:r,WithGrayBackground:l,__namedExportsOrder:n,default:i},Symbol.toStringTag,{value:"Module"}));export{d as C,r as D,l as W};
//# sourceMappingURL=collapse.stories-07ed8fdc.js.map
