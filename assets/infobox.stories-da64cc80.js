const s={title:"Page content/Infobox",parameters:{backgrounds:{default:"white"},badges:["new"]}};function a(o){return o?`
    <div class="infobox-icon">
      <svg class="icon" width="24" height="24">
        <use href="lf-icons/sprite/24/icons.svg#${o}"></use>
      </svg>
    </div>
  `:""}function l({icon:o,heading:n,text:t,link:e}){return`
    <div class="infobox">
      ${a(o)}
      <div class="infobox-body">
        <div class="infobox-content">
          ${n?'<h3 class="infobox-heading">'+n+"</h3>":""}
          <p>${t}</p>
        </div>
        ${e?'<a href="#link">'+e+"</a>":""}
      </div>
    </div>
  `}const i=l.bind({});i.args={heading:"An optional inline heading.",text:"Highlight crucial information so it doesn´t disappear.",link:"Optional link",icon:"info-enclosed-24"};const r=["Default"],c=Object.freeze(Object.defineProperty({__proto__:null,Default:i,__namedExportsOrder:r,default:s},Symbol.toStringTag,{value:"Module"}));export{i as D,c as I};
