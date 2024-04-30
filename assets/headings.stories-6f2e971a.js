const b=`<h1>Länsförsäkringar Heading 1</h1>
<h2>Länsförsäkringar Heading 2</h2>
<h3>Länsförsäkringar Heading 3</h3>
<h4>Länsförsäkringar Heading 4</h4>
<h5>Länsförsäkringar Heading 5</h5>
<h6>Länsförsäkringar Heading 6</h6>

<hr class="mt-15" />
<p class="text-sm text-muted">With link</p>

<h2>
  Länsförsäkringar
  <a href="#" onclick="return false">Heading 2</a>
</h2>

<p class="text-sm text-muted mt-15">With hidden link</p>

<h2>
  <a href="#" onclick="return false" class="link-adaptive">Send us an email</a>
</h2>
`,v=`<h1 class="display-1">Länsförsäkringar Display 1</h1>
<h1 class="display-2">Länsförsäkringar Display 2</h1>
<h1 class="display-3">Länsförsäkringar Display 3</h1>
<h1 class="display-4">Länsförsäkringar Display 4</h1>

<p class="text-sm mt-15 text-muted">With highlight</p>

<h4 class="display-4">Länsförsäkringar <em>Display</em> 2</h4>
`,O={title:"Typography & text/Headings",parameters:{badges:["stable"]}},s=()=>`
  <h1>Länsförsäkringar Heading 1</h1>
  <h2>Länsförsäkringar Heading 2</h2>
  <h3>Länsförsäkringar Heading 3</h3>
  <h4>Länsförsäkringar Heading 4</h4>
  <h5>Länsförsäkringar Heading 5</h5>
  <h6>Länsförsäkringar Heading 6</h6>
`,a=()=>`
  <h2>
    Länsförsäkringar
    <a href="#" onclick="return false">Heading 2</a>
  </h2>
`,r=()=>`
  <h2>
    <a href="#" onclick="return false" class="link-adaptive">Send us an email</a>
  </h2>
`,n=()=>`
  <h1 class="display-1">Länsförsäkringar Display 1</h1>
  <h1 class="display-2">Länsförsäkringar Display 2</h1>
  <h1 class="display-3">Länsförsäkringar Display 3</h1>
  <h1 class="display-4">Länsförsäkringar Display 4</h1>
`,e=()=>`
  <h4 class="display-4">Länsförsäkringar <em>Display</em> 2</h4>
`,i=()=>b,l=()=>v;var t,h,d;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`() => \`
  <h1>Länsförsäkringar Heading 1</h1>
  <h2>Länsförsäkringar Heading 2</h2>
  <h3>Länsförsäkringar Heading 3</h3>
  <h4>Länsförsäkringar Heading 4</h4>
  <h5>Länsförsäkringar Heading 5</h5>
  <h6>Länsförsäkringar Heading 6</h6>
\``,...(d=(h=s.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};var c,p,o;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`() => \`
  <h2>
    Länsförsäkringar
    <a href="#" onclick="return false">Heading 2</a>
  </h2>
\``,...(o=(p=a.parameters)==null?void 0:p.docs)==null?void 0:o.source}}};var g,m,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`() => \`
  <h2>
    <a href="#" onclick="return false" class="link-adaptive">Send us an email</a>
  </h2>
\``,...(f=(m=r.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var x,k,y;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`() => \`
  <h1 class="display-1">Länsförsäkringar Display 1</h1>
  <h1 class="display-2">Länsförsäkringar Display 2</h1>
  <h1 class="display-3">Länsförsäkringar Display 3</h1>
  <h1 class="display-4">Länsförsäkringar Display 4</h1>
\``,...(y=(k=n.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var u,L,E;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:'() => `\n  <h4 class="display-4">Länsförsäkringar <em>Display</em> 2</h4>\n`',...(E=(L=e.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var H,D,S;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:"() => DefaultExample",...(S=(D=i.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var F,W,_;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"() => DisplayExample",...(_=(W=l.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};const j=["Standard","StandardWithLink","StandardWithHiddenLink","Display","DisplayWithHighlight","defaultsExamples","displayExamples"],T=Object.freeze(Object.defineProperty({__proto__:null,Display:n,DisplayWithHighlight:e,Standard:s,StandardWithHiddenLink:r,StandardWithLink:a,__namedExportsOrder:j,default:O,defaultsExamples:i,displayExamples:l},Symbol.toStringTag,{value:"Module"}));export{n as D,T as H,s as S,a,r as b,e as c};
