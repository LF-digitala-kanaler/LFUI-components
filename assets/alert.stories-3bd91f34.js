const q=`<div
  class="alert alert-danger alert-banner alert-dismissible position-absolute"
  role="alert">
  <div class="container">
    <svg class="icon" width="24" height="24">
      <use
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xlink:href="lf-icons/sprite/24/icons.svg#warning-24"></use>
    </svg>
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"></button>
    <p>
      Fraud notice. We would never contact you to ask for your login details.
      <a href="#" onclick="return false">Read more</a>
    </p>
  </div>
</div>
`,Y=`<div class="alert alert-info" role="alert">
    <svg class="icon" width="24" height="24">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="lf-icons/sprite/24/icons.svg#chat-24"></use>
    </svg>
    <p class="alert-content">
        Please answer the
        <a href="#" onclick="return false">below questions</a>
        to continue using the app.
    </p>
</div>
<div class="alert alert-warning" role="alert">
    <svg class="icon" width="24" height="24">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="lf-icons/sprite/24/icons.svg#chat-24"></use>
    </svg>
    <p class="alert-content">
        Please answer the
        <a href="#" onclick="return false">below questions</a>
        to continue using the app.
    </p>
</div>
<div class="alert alert-success" role="alert">
    <svg class="icon" width="24" height="24">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="lf-icons/sprite/24/icons.svg#check-enclosed-24">
        </use>
    </svg>
    <div class="alert-content">
        Please answer the
        <a href="#" onclick="return false">below questions</a>
        to continue using the app.
    </div>
</div>
<div class="alert alert-danger" role="alert">
    <svg class="icon" width="24" height="24">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="lf-icons/sprite/24/icons.svg#warning-24"></use>
    </svg>
    <p class="alert-content">
        Please answer the
        <a href="#" onclick="return false">below questions</a>
        to continue using the app.
    </p>
</div>`,C=`<div class="alert alert-info" role="alert">
    <p class="alert-content">
        Please answer the
        <a href="#" onclick="return false">below questions</a>
        to continue using the app.
    </p>
</div>
<div class="alert alert-warning" role="alert">
    <p class="alert-content">
        Please answer the
        <a href="#" onclick="return false">below questions</a>
        to continue using the app.
    </p>
</div>
<div class="alert alert-success" role="alert">
    <div class="alert-content">
        Please answer the
        <a href="#" onclick="return false">below questions</a>
        to continue using the app.
    </div>
</div>
<div class="alert alert-danger" role="alert">
    <p class="alert-content">
        Please answer the
        <a href="#" onclick="return false">below questions</a>
        to continue using the app.
    </p>
</div>`,_=`<div class="alert alert-info">
    <p class="alert-content">Your notification settings has been updated.</p>
    <button class="btn btn-sm btn-outline-info" data-bs-dismiss="alert">
        Got it
    </button>
</div>
<div class="alert alert-success">
    <p class="alert-content">Your notification settings has been updated.</p>
    <button class="btn btn-sm btn-outline-success" data-bs-dismiss="alert">
        Got it
    </button>
</div>
<div class="alert alert-warning">
    <p class="alert-content">Your notification settings has been updated.</p>
    <button class="btn btn-sm btn-outline-warning" data-bs-dismiss="alert">
        Got it
    </button>
</div>
<div class="alert alert-danger">
    <p class="alert-content">Your notification settings has been updated.</p>
    <button class="btn btn-sm btn-outline-danger" data-bs-dismiss="alert">
        Got it
    </button>
</div>`,E=`<div class="alert alert-info alert-shadow">
    <p class="alert-content">Your notification settings has been updated.</p>
</div>
<div class="alert alert-success alert-shadow">
    <p class="alert-content">Your notification settings has been updated.</p>
</div>
<div class="alert alert-warning alert-shadow">
    <p class="alert-content">Your notification settings has been updated.</p>
</div>
<div class="alert alert-danger alert-shadow">
    <p class="alert-content">Your notification settings has been updated.</p>
</div>`,G=`<div class="alert alert-info alert-dismissible" role="alert">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    <p class="alert-content">
        Please verify your contact details so that we can reach you.
    </p>
</div>`,D=`<div class="alert alert-info">
    <svg class="icon" width="24" height="24">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="lf-icons/sprite/24/icons.svg#chat-24"></use>
    </svg>
    <p class="alert-content">
        <strong class="alert-header">Customer knowledge.</strong>
        please answer the below questions to continue using the app.
    </p>
    <button class="btn btn-sm btn-outline-info" data-bs-dismiss="alert">
        Got it
    </button>
</div>`,I={title:"System display/Alert"},n=()=>C,t=()=>Y,e=()=>_,s=()=>E,a=()=>G,r=()=>D,o=()=>q;var i,l,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:"() => DefaultRaw",...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var u,d,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:"() => WithIconRaw",...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var h,w,g;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:"() => WithButtonRaw",...(g=(w=e.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var b,v,m;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:"() => WithShadowRaw",...(m=(v=s.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};var f,k,x;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:"() => WithCloseButtonRaw",...(x=(k=a.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var W,S,R;r.parameters={...r.parameters,docs:{...(W=r.parameters)==null?void 0:W.docs,source:{originalSource:"() => WithStrongEmphasisRaw",...(R=(S=r.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var B,y,P;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:"() => BannerRaw",...(P=(y=o.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};const A=["Defaults","WithIcon","WithButton","WithShadow","WithCloseButton","WithStrongEmphasis","Banner"],O=Object.freeze(Object.defineProperty({__proto__:null,Banner:o,Defaults:n,WithButton:e,WithCloseButton:a,WithIcon:t,WithShadow:s,WithStrongEmphasis:r,__namedExportsOrder:A,default:I},Symbol.toStringTag,{value:"Module"}));export{O as A};
//# sourceMappingURL=alert.stories-3bd91f34.js.map
