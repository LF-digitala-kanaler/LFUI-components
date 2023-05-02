const u=`<p class="text-sm mb-05 text-muted">Default</p>
<button type="button" class="btn btn-primary btn-sm-block">Begin now</button>

<p class="text-sm mt-1 mb-05 text-muted">Link element</p>
<a href="" onclick="return false" class="btn btn-primary btn-sm-block">
  Begin now
</a>

<p class="text-sm mt-1 mb-05 text-muted">With arrow</p>
<button type="button" class="btn btn-primary btn-arrow btn-sm-block">
  Continue
</button>

<p class="text-sm mt-1 mb-05 text-muted">Sizes</p>
<button type="button" class="btn btn-lg btn-primary btn-sm-block">
  Begin now
</button>
<button type="button" class="btn btn-primary btn-sm-block">Begin now</button>
<button type="button" class="btn btn-sm btn-primary btn-sm-block">
  Begin now
</button>

<p class="text-sm mt-15 mb-05 text-muted">With icon</p>
<button type="submit" class="btn btn-primary btn-sm-block">
  <svg class="icon align-bottom text-white" width="24" height="24">
    <use href="lf-icons/sprite/24/icons.svg#bankid-24"></use>
  </svg>
  Sign document
</button>
<br />
<br />
<button type="submit" class="btn btn-primary btn-sm-block">
  Start chat
  <svg class="icon align-bottom text-white" width="24" height="24">
    <use href="lf-icons/sprite/24/icons.svg#chat-24"></use>
  </svg>
</button>

<p class="text-sm mt-15 mb-05 text-muted">Loading state</p>
<button type="button" class="btn btn-primary btn-sm-block loading">
  Continue
  <div class="lf-spinner lf-spinner-btn-primary">
    <svg viewBox="0 0 105 105" x="0" y="0" role="animation">
      <circle class="static-circle" r="45%" cx="50%" cy="50%"></circle>
      <circle class="lf-spinner-dash" r="45%" cx="50%" cy="50%"></circle>
    </svg>
  </div>
</button>

<p class="text-sm mt-15 mb-05 text-muted">Two-row button</p>
<button class="btn btn-primary btn-sm-block text-left">
  Save changes
  <span class="d-block text-sm font-weight-normal font-base">
    and return to start
  </span>
</button>
<br />
<br />
<button class="btn btn-primary btn-arrow btn-sm-block text-left">
  Continue
  <span class="d-block text-sm font-weight-normal font-base">
    and add your details
  </span>
</button>
<br />
<br />
<button class="btn btn-primary btn-sm-block text-left">
  <svg class="icon align-bottom text-white" width="24" height="24">
    <use href="lf-icons/sprite/24/icons.svg#chat-24"></use>
  </svg>
  Start chat
  <span class="d-block text-sm font-weight-normal font-base">
    and get help instantly
  </span>
</button>
`,p=`<p class="text-sm mb-05 text-muted">Default</p>
<button type="button" class="btn btn-secondary btn-sm-block">Begin now</button>

<p class="text-sm mt-1 mb-05 text-muted">Link element</p>
<a href="" onclick="return false" class="btn btn-secondary btn-sm-block">
  Begin now
</a>

<p class="text-sm mt-1 mb-05 text-muted">With arrow</p>
<button type="button" class="btn btn-secondary btn-arrow btn-sm-block">
  Continue
</button>

<p class="text-sm mt-1 mb-05 text-muted">Sizes</p>
<button type="button" class="btn btn-lg btn-secondary btn-sm-block">
  Begin now
</button>
<button type="button" class="btn btn-secondary btn-sm-block">Begin now</button>
<button type="button" class="btn btn-sm btn-secondary btn-sm-block">
  Begin now
</button>

<p class="text-sm mt-15 mb-05 text-muted">With icon</p>
<button type="submit" class="btn btn-secondary btn-sm-block">
  <svg class="icon align-bottom" width="24" height="24">
    <use href="lf-icons/sprite/24/icons.svg#bankid-24"></use>
  </svg>
  Sign document
</button>
<br />
<br />
<button type="submit" class="btn btn-secondary btn-sm-block">
  Start chat
  <svg class="icon align-bottom" width="24" height="24">
    <use href="lf-icons/sprite/24/icons.svg#chat-24"></use>
  </svg>
</button>

<p class="text-sm mt-15 mb-05 text-muted">Loading state</p>
<button type="button" class="btn btn-secondary btn-sm-block loading">
  Continue
  <div class="lf-spinner lf-spinner-btn-secondary">
    <svg viewBox="0 0 105 105" x="0" y="0" role="animation">
      <circle class="static-circle" r="45%" cx="50%" cy="50%"></circle>
      <circle class="lf-spinner-dash" r="45%" cx="50%" cy="50%"></circle>
    </svg>
  </div>
</button>

<p class="text-sm mt-15 mb-05 text-muted">Two-row button</p>
<button class="btn btn-secondary btn-sm-block text-left">
  Save changes
  <span class="d-block text-sm font-weight-normal font-base">
    and return to start
  </span>
</button>
<br />
<br />
<button class="btn btn-secondary btn-arrow btn-sm-block text-left">
  Continue
  <span class="d-block text-sm font-weight-normal font-base">
    and add your details
  </span>
</button>
<br />
<br />
<button class="btn btn-secondary btn-sm-block text-left">
  <svg class="icon align-bottom" width="24" height="24">
    <use href="lf-icons/sprite/24/icons.svg#chat-24"></use>
  </svg>
  Start chat
  <span class="d-block text-sm font-weight-normal font-base">
    and get help instantly
  </span>
</button>
`,d=`<p class="text-sm mb-05 text-muted">Log in</p>
<button type="button" class="btn btn-login-logout btn-sm-block">Login</button>

<p class="text-sm mt-15 mb-05 text-muted">Log out</p>
<button type="button" class="btn btn-login-logout btn-sm-block">Logout</button>
`,g={title:"Button and links/Button"},t=()=>u,n=()=>p,s=()=>d;var o,e,b;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:"() => Primary",...(b=(e=t.parameters)==null?void 0:e.docs)==null?void 0:b.source}}};var a,c,r;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:"() => Secondary",...(r=(c=n.parameters)==null?void 0:c.docs)==null?void 0:r.source}}};var l,i,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:"() => Login",...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const y=["primary","secondary","login"];export{y as __namedExportsOrder,g as default,s as login,t as primary,n as secondary};
//# sourceMappingURL=buttons.stories-557d7a20.js.map
