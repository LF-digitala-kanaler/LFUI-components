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
`,x={title:"Typography & text/Lists",parameters:{badges:["stable"]}},n=()=>v,e=()=>k,s=()=>g,a=()=>y;var t,i,c;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:"() => NumbersMarkup",...(c=(i=n.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,r,o;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:"() => CheckmarksMarkup",...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var u,p,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"() => BulletsMarkup",...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var h,d,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:"() => LinkListsMarkup",...(f=(d=a.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const w=["Numbers","Checkmarks","Bullets","LinkLists"],b=Object.freeze(Object.defineProperty({__proto__:null,Bullets:s,Checkmarks:e,LinkLists:a,Numbers:n,__namedExportsOrder:w,default:x},Symbol.toStringTag,{value:"Module"}));export{s as B,e as C,b as L,n as N,a};
