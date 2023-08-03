import{u as l}from"./utils-f589fb48.js";const r={title:"Supportive microinteractions/Collapse",parameters:{badges:["stable"]}};function a({background:e="white"}){const t=l();return`
    <article>
      <button type="button" id="readMoreCollapse" class="btn btn-more" data-bs-toggle="collapse" href="#${t}" aria-expanded="false" aria-controls="${t}">Read more</button>
      <div
        id="${t}"
        class="collapse ${e==="gray"?"bg-body-bg  mb-20":""}"
      >
        ${e==="gray"?'<div class="col-md-9 p-1">':""}
        <p>This is only needed if you wish to…</p>
        <ul>
          <li>shift your spendings,</li>
          <li>calculate your spendings in percentage,</li>
          <li>or plan on being active.</li>
        </ul>
        ${e==="gray"?"</div>":""}
      </div>
    </article>
    `}const o=a.bind({});o.args={background:"white"};const i=a.bind({});i.args={background:"gray"};const s=["Default","WithGrayBackground"],d=Object.freeze(Object.defineProperty({__proto__:null,Default:o,WithGrayBackground:i,__namedExportsOrder:s,default:r},Symbol.toStringTag,{value:"Module"}));export{d as C,o as D,i as W};
//# sourceMappingURL=collapse.stories-7d724809.js.map
