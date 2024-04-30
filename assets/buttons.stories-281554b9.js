const j=`<p class="text-sm mb-05 text-muted">Default</p>
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
<p class="text-sm mt-15 mb-05 text-muted">Button Link Large</p>
<a class="btn btn-link-lg" href="/privat/bank/spara/fondkurser/">Till fonder &amp; fondkurser</a>`,M=`<p class="text-sm mb-05 text-muted">Default</p>
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
`,q=`<p class="text-sm mb-05 text-muted">Log in</p>
<button type="button" class="btn btn-login-logout btn-sm-block">Login</button>

<p class="text-sm mt-15 mb-05 text-muted">Log out</p>
<button type="button" class="btn btn-login-logout btn-sm-block">Logout</button>
`,F={title:"Button and links/Button",parameters:{backgrounds:{default:"white"},badges:["stable"]},argTypes:{variant:{control:"select",options:["Primary","Secondary"],mapping:{Primary:"primary",Secondary:"secondary"}},size:{control:"select",options:["Default","Small","Large"],mapping:{Default:"",Small:"sm",Large:"lg"}},type:{control:"select",options:["Button","Anchor"],mapping:{Button:"button",Anchor:"a"}},iconPosition:{control:"select",options:["Before","After"],mapping:{Before:"before",After:"after"}}},args:{label:"Button label"}};function t(A){const{variant:C="primary",label:T,secondRowLabel:a,arrow:D,type:e="button",size:b,icon:E,iconPosition:r="before"}=A,_=D?"btn-arrow":"",R=a?"text-left":"",I=e==="a"&&b==="lg"?"btn-link-lg":b?`btn-${b}`:"",c=E?`
    <svg class="icon align-bottom text-white" width="24" height="24">
      <use href="lf-icons/sprite/24/icons.svg#bankid-24"></use>
    </svg>
  `:"",O=a?`
    <span class="d-block text-sm font-weight-normal font-base">
     ${a}
    </span>
  `:"";return`
    <${e}
      ${e==="button"?'type="button"':'href=""'}
      class="btn btn-${C} ${_} ${I} ${R} btn-sm-block"
    >
      ${r==="before"&&c||""}
      ${T}
      ${O}
      ${r==="after"&&c||""}
    </${e}>
  `}const h=t.bind({});h.args={label:"Begin now",type:"button",variant:"primary",arrow:!1,secondRowLabel:"",size:"",icon:!1,iconPosition:"before"};const x=t.bind({});x.args={variant:"secondary"};const w=t.bind({});w.args={type:"button"};const k=t.bind({});k.args={type:"a"};const v=t.bind({});v.args={type:"a",size:"lg"};const B=t.bind({});B.args={arrow:!0};const S=t.bind({});S.args={size:"lg"};const L=t.bind({});L.args={size:"sm"};const $=t.bind({});$.args={label:"Sign document",icon:!0,iconPosition:"before"};const W=t.bind({});W.args={label:"Start chat",icon:!0,iconPosition:"after"};const z=t.bind({});z.args={label:"Continue",loading:!0};const P=t.bind({});P.args={label:"Save changes",secondRowLabel:"and return to start"};const n=()=>j,s=()=>M,o=()=>q;var i,l,m;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:"() => PrimaryExample",...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,p,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"() => SecondaryExample",...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var d,y,f;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:"() => Login",...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const G=["Default","Secondary","Button","LinkButton","LargeLinkButton","WithArrow","LargeButton","SmallButton","WithIcon","WithIconAfter","LoadingState","TwoRowButton","primary","secondaryExamples","login"],H=Object.freeze(Object.defineProperty({__proto__:null,Button:w,Default:h,LargeButton:S,LargeLinkButton:v,LinkButton:k,LoadingState:z,Secondary:x,SmallButton:L,TwoRowButton:P,WithArrow:B,WithIcon:$,WithIconAfter:W,__namedExportsOrder:G,default:F,login:o,primary:n,secondaryExamples:s},Symbol.toStringTag,{value:"Module"}));export{H as B,h as D,S as L,x as S,P as T,B as W,L as a,v as b,w as c,k as d,$ as e,W as f};
