const s={title:"System display/Progress Bar",parameters:{badges:["stable"]},argTypes:{progress:{control:"range"}}};function a({progress:e=0}){return`
    <div class="progress mb-1">
      <div
        class="progress-bar"
        role="progressbar"
        style="width: ${e}%"
        aria-valuenow="${e}"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
    <div class="text-right progress-text mb-1" id="example-caption-1">${e}%</div>
  `}const r=a.bind({});r.args={progress:25};const t=["Default"],o=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:t,default:s},Symbol.toStringTag,{value:"Module"}));export{r as D,o as P};
