const I=`<div
  class="alert alert-danger alert-banner alert-dismissible position-absolute">
  <div class="container">
    <svg class="icon" width="24" height="24" role="img" aria-label="Felmeddelande">
      <use
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xlink:href="lf-icons/sprite/24/icons.svg#warning-24"></use>
    </svg>
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Stäng meddelandet"></button>
    <p>
      Fraud notice. We would never contact you to ask for your login details.
      <a href="#" onclick="return false">Read more</a>
    </p>
  </div>
</div>
`,P=`<div class="alert alert-info">
    <svg class="icon" width="24" height="24" aria-label="Informationmeddelande"
     role="img">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="lf-icons/sprite/24/icons.svg#chat-24"></use>
    </svg>
    <p class="alert-content">
        Please answer the
        <a href="#" onclick="return false">below questions</a>
        to continue using the app.
    </p>
</div>

<div class="alert alert-warning">
    <svg class="icon" width="24" height="24" aria-label="Felmeddelande"
    role="img">
        <use
        	xmlns:xlink="http://www.w3.org/1999/xlink"
         	xlink:href="lf-icons/sprite/24/icons.svg#chat-24"
        ></use>
    </svg>
    <p class="alert-content">
        Please answer the
        <a href="#" onclick="return false">below questions</a>
        to continue using the app.
    </p>
</div>

<div class="alert alert-success">
    <svg class="icon" width="24" height="24" aria-label="Bekräftande meddelande"
    	role="img">
        <use
        	xmlns:xlink="http://www.w3.org/1999/xlink"
         	xlink:href="lf-icons/sprite/24/icons.svg#check-enclosed-24"
        ></use>
    </svg>
    <div class="alert-content">
        Please answer the
        <a href="#" onclick="return false">below questions</a>
        to continue using the app.
    </div>
</div>

<div class="alert alert-danger">
    <svg class="icon" width="24" height="24" aria-label="Varningsmeddelande"
    	role="img">
        <use
        	xmlns:xlink="http://www.w3.org/1999/xlink"
         	xlink:href="lf-icons/sprite/24/icons.svg#warning-24"
        ></use>
    </svg>
    <p class="alert-content">
        Please answer the
        <a href="#" onclick="return false">below questions</a>
        to continue using the app.
    </p>
</div>
`,D=`<div class="alert alert-info" aria-label="Informationsmeddelande">
    <p class="alert-content">
        Please answer the
        <a href="#" onclick="return false">below questions</a>
        to continue using the app.
    </p>
</div>

<div class="alert alert-warning" aria-label="Felmeddelande">
    <p class="alert-content">
        Please answer the
        <a href="#" onclick="return false">below questions</a>
        to continue using the app.
    </p>
</div>

<div class="alert alert-success" aria-label="Bekräftande meddelande">
    <div class="alert-content">
        Please answer the
        <a href="#" onclick="return false">below questions</a>
        to continue using the app.
    </div>
</div>

<div class="alert alert-danger" aria-label="Varningsmeddelande">
    <p class="alert-content">
        Please answer the
        <a href="#" onclick="return false">below questions</a>
        to continue using the app.
    </p>
</div>
`,_=`<div class="alert alert-info" aria-label="Informationsmeddelande">
	<svg class="icon" width="24" height="24" aria-label="Informationmeddelande"
     role="img">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="lf-icons/sprite/24/icons.svg#chat-24"></use>
    </svg>
    <p class="alert-content">Your notification settings has been updated.</p>
    <button class="btn btn-sm btn-outline-info" data-bs-dismiss="alert">
        Got it
    </button>
</div>

<div class="alert alert-danger" aria-label="Felmeddelande">
	<svg class="icon" width="24" height="24" aria-label="Felmeddelande"
    role="img">
        <use
        	xmlns:xlink="http://www.w3.org/1999/xlink"
         	xlink:href="lf-icons/sprite/24/icons.svg#chat-24"
        ></use>
    </svg>
    <p class="alert-content">Your notification settings has been updated.</p>
    <button class="btn btn-sm btn-outline-danger" data-bs-dismiss="alert">
        Got it
    </button>
</div>

<div class="alert alert-success">
	<svg class="icon" width="24" height="24" aria-label="Bekräftande meddelande"
    	role="img">
        <use
        	xmlns:xlink="http://www.w3.org/1999/xlink"
         	xlink:href="lf-icons/sprite/24/icons.svg#check-enclosed-24"
        ></use>
    </svg>
    <p class="alert-content">Your notification settings has been updated.</p>
    <button class="btn btn-sm btn-outline-success" data-bs-dismiss="alert">
        Got it
    </button>
</div>

<div class="alert alert-warning" aria-label="Varningsmeddelande">
	<svg class="icon" width="24" height="24" aria-label="Varningsmeddelande"
    	role="img">
        <use
        	xmlns:xlink="http://www.w3.org/1999/xlink"
         	xlink:href="lf-icons/sprite/24/icons.svg#warning-24"
        ></use>
    </svg>
    <p class="alert-content">Your notification settings has been updated.</p>
    <button class="btn btn-sm btn-outline-warning" data-bs-dismiss="alert">
        Got it
    </button>
</div>
`,E=`    <div class="alert alert-info alert-dismissible" aria-label="Information">
	   	<svg class="icon" width="24" height="24" aria-label="Informationmeddelande"
	     role="img">
	        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="lf-icons/sprite/24/icons.svg#chat-24"></use>
	    </svg>
	    <p class="alert-content">
	            Please verify your contact details so that we can reach you.
        </p>
        <button
        	type="button"
         	class="btn-close"
          	data-bs-dismiss="alert"
           	aria-label="Stäng meddelande">
        </button>
    </div>
</section>
`,F=`<div class="alert alert-info">
    <svg class="icon" width="24" height="24" aria-label="Informationmeddelande" role="img">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="lf-icons/sprite/24/icons.svg#chat-24"></use>
    </svg>
    <p class="alert-content">
        <strong class="alert-header">Customer knowledge.</strong>
        please answer the below questions to continue using the app.
    </p>
    <button class="btn btn-sm btn-outline-info" data-bs-dismiss="alert">
        Got it
    </button>
</div>
`,C=`<template id="alert-info">
    <div class="alert alert-info" role="alert" aria-live="polite">
	    <svg class="icon" width="24" height="24" role="img" aria-label="Information">
	        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="lf-icons/sprite/24/icons.svg#chat-24"></use>
	    </svg>
	    <p class="alert-content">
	        Please answer the
	        <a href="#" onclick="return false">below questions</a>
	        to continue using the app.
	    </p>
    </div>
</template>

<div class="d-flex justify-content-center">
	<button id="trigger-alert-info" class="border border-primary rounded">Visa info alert</button>
</div>

<script>
    const alertTemplate = document.querySelector("#alert-info")
    document.querySelector("#trigger-alert-info").addEventListener('click', ({target}) => {
        target.parentNode.parentNode.after(alertTemplate.content.cloneNode(true))
    })
<\/script>
`,G={title:"System display/Alert",parameters:{badges:["stable"]}},n=()=>D,e=()=>P,t=()=>_,s=()=>E,a=()=>F,i=()=>I,l=()=>C;var r,o,c;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:"() => DefaultRaw",...(c=(o=n.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var d,u,g;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:"() => WithIconRaw",...(g=(u=e.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var p,h,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"() => WithButtonRaw",...(m=(h=t.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var w,b,f;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:"() => WithCloseButtonRaw",...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var v,k,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:"() => WithStrongEmphasisRaw",...(x=(k=a.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var y,S,W;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:"() => BannerRaw",...(W=(S=i.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var B,R,q;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:"() => DynamicRaw",...(q=(R=l.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};const V=["Defaults","WithIcon","WithButton","WithCloseButton","WithStrongEmphasis","Banner","Dynamic"],Y=Object.freeze(Object.defineProperty({__proto__:null,Banner:i,Defaults:n,Dynamic:l,WithButton:t,WithCloseButton:s,WithIcon:e,WithStrongEmphasis:a,__namedExportsOrder:V,default:G},Symbol.toStringTag,{value:"Module"}));export{Y as A,i as B,l as D,e as W,s as a,t as b,a as c};
