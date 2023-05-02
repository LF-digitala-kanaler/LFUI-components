const r=`<article>
  <button type="button" id="readMoreCollapse" class="btn btn-more" data-bs-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Read more</button>
  <div class="collapse" id="collapseExample">
    <p>This is only needed if you wish to…</p>
    <ul>
      <li>shift your spendings,</li>
      <li>calculate your spendings in percentage,</li>
      <li>or plan on being active.</li>
    </ul>
  </div>
</article>
`,c=`<article>
  <button type="button" id="readMoreCollapseWithBackground" class="btn btn-more" data-bs-toggle="collapse" href="#collapseExampleWithBackground" aria-expanded="false" aria-controls="collapseExample">Read more</button>
  <div class="bg-body-bg  mb-20 collapse" id="collapseExampleWithBackground">
    <div class="col-md-9 p-1">
      <p>This is only needed if you wish to…</p>
      <ul>
        <li>shift your spendings,</li>
        <li>calculate your spendings in percentage,</li>
        <li>or plan on being active.</li>
      </ul>
      <button class="btn btn-link" data-bs-toggle="collapse" href="#collapseExampleWithBackground">Close</button>
    </div>
  </div>
</article>
`,p={title:"Supportive microinteractions/Collapse"},e=()=>r,a=()=>c;var l,o,n;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:"() => White",...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var s,t,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:"() => Grey",...(i=(t=a.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const d=["white","grey"];export{d as __namedExportsOrder,p as default,a as grey,e as white};
//# sourceMappingURL=collapse.stories-b21665b4.js.map
