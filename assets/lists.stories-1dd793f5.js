const g=`<ul class="ul">
  <li>You can switch funds with your chosen insurance company.</li>
  <li>It is free of charge to switch and does not affect your taxes.</li>
  <li>
    Review your savings at least once per year and switch funds where necessary.
  </li>
  <li>
    Choose your own insurance policies
    <ul>
      <li>Accident insurance</li>
      <li>Health insurance</li>
      <li>
        Healthcare insurance
        <ul>
          <li>We need to go deeper</li>
          <li>This is deep enough</li>
        </ul>
      </li>
      <li>Family health insurance</li>
    </ul>
  </li>
</ul>
`,k=`<p class="text-sm mb-05 text-muted">Default</p>
<ul class="ul-checks">
  <li>You can switch funds with your chosen insurance company.</li>
  <li>It is free of charge to switch and does not affect your taxes.</li>
</ul>

<p class="text-sm mt-15 mb-05 text-muted">Green</p>
<ul class="ul-checks green">
  <li>You can switch funds with your chosen insurance company.</li>
  <li>It is free of charge to switch and does not affect your taxes.</li>
</ul>

<p class="text-sm mt-15 mb-05 text-muted">Blue</p>
<ul class="ul-checks blue">
  <li>You can switch funds with your chosen insurance company.</li>
  <li>It is free of charge to switch and does not affect your taxes.</li>
</ul>

<p class="text-sm mt-15 mb-05 text-muted">Orange</p>
<ul class="ul-checks orange">
  <li>You can switch funds with your chosen insurance company.</li>
  <li>It is free of charge to switch and does not affect your taxes.</li>
</ul>
`,v=`<ol class="ol">
  <li>
    You can switch funds with your
    <a href="#" onclick="return false">chosen insurance company.</a>
  </li>
  <li>It is free of charge to switch and does not affect your taxes.</li>
  <li>
    Choose your own insurance policies
    <ol>
      <li>
        <strong>Accident insurance:</strong>
        Covers you 24/7and provides compensation in the event of an accident.
      </li>
      <li>
        <strong>Health insurance:</strong>
        Supplements compensation from Försäkringskassan.
      </li>
      <li>
        <strong>Healthcare insurance:</strong>
        Provides access to private medical specialists.
      </li>
    </ol>
  </li>
</ol>
`,y=`<p class="text-sm mb-05 text-muted">Default</p>
<ul class="nav flex-column list-md">
  <li class="nav-item">
    <a class="nav-link" href="#" onclick="return false">Insurance papers</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" onclick="return false">Documentation</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" onclick="return false">Our privacy policy</a>
  </li>
</ul>

<p class="text-sm mt-15 mb-05 text-muted">With icons</p>
<ul class="nav flex-column list-md">
  <li class="nav-item">
    <svg
      role="presentation"
      class="icon icon-nudge-up-015 text-blue"
      width="24"
      height="24">
      <use href="lf-icons/sprite/24/icons.svg#pdf-document-24"></use>
    </svg>
    <a class="nav-link" href="#" onclick="return false">Insurance papers</a>
  </li>
  <li class="nav-item">
    <svg
      role="presentation"
      class="icon icon-nudge-up-015 text-blue"
      width="24"
      height="24">
      <use href="lf-icons/sprite/24/icons.svg#external-link-24"></use>
    </svg>
    <a class="nav-link" href="#" onclick="return false">Documentation</a>
  </li>
  <li class="nav-item">
    <svg
      role="presentation"
      class="icon icon-nudge-up-015 text-blue"
      width="24"
      height="24">
      <use href="lf-icons/sprite/24/icons.svg#pdf-document-24"></use>
    </svg>
    <a class="nav-link" href="#" onclick="return false">Our privacy policy</a>
  </li>
</ul>
`,x={title:"Typography & text/Lists"},n=()=>v,s=()=>k,e=()=>g,a=()=>y;var t,i,c;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:"() => Numbers",...(c=(i=n.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,o,r;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:"() => Checkmarks",...(r=(o=s.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var u,m,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:"() => Bullets",...(h=(m=e.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var p,d,f;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:"() => LinkLists",...(f=(d=a.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const w=["numbers","checkmarks","bullets","linkLists"];export{w as __namedExportsOrder,e as bullets,s as checkmarks,x as default,a as linkLists,n as numbers};
//# sourceMappingURL=lists.stories-1dd793f5.js.map
