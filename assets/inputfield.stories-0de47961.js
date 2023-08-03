import{u as q}from"./utils-f589fb48.js";const I=`<div class="row">
  <div class="col-md-6">
    <p class="text-sm mb-05 text-muted">With pattern</p>
    <div class="form-group">
      <input type="text" pattern="[0-9]{6,8}-?[0-9]{4}" required="" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp1" placeholder="ååååmmdd-nnnn">
    </div>

    <p class="text-sm mt-1 mb-05 text-muted">Password</p>
    <div class="form-group">
      <input type="password" required="" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>

    <p class="text-sm mt-15 mb-05 text-muted">Prefix</p>
    <div class="form-group">
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">@</span>
        </div>
        <input type="text" required="" class="form-control" placeholder="username" aria-describedby="basic-addon1">
      </div>
    </div>
    <p class="text-sm mt-15 mb-05 text-muted">Prefix as image</p>
    <div class="form-group">
      <div class="input-group">
        <span class="input-group-prepend-reg"></span>
        <input type="text" required="" class="form-control" placeholder="ABC123" aria-describedby="reg1">
      </div>
    </div>

    <p class="text-sm mt-15 mb-05 text-muted">Suffix</p>
    <div class="input-group">
      <input type="text" required="" class="form-control" id="basic-addon2">
      <div class="input-group-append">
        <span class="input-group-text" id="basic-addon2">kr</span>
      </div>
    </div>
  </div>
</div>






`,L=`<div style="max-width: 40rem">
  <div class="form-group">
    <textarea
      class="form-control"
      required=""
      id="exampleTextarea"
      rows="3"></textarea>
  </div>
</div>
`,_={title:"Forms/Input Field",parameters:{backgrounds:{default:"white"},badges:["stable"],layout:"centered"},argTypes:{}};function t({placeholder:d,pattern:i,required:$,type:w="text",prepend:a,append:n,disabled:S}){return`
    <div class="form-group">
      ${a||n?'<div class="input-group">':""}
      ${a?`<div class="input-group-prepend">
            <span class="input-group-text">${a}</span>
          </div>`:""}
      <input
        type="${w}"
        class="form-control"
        id="${q()}"
        aria-describedby="helpTextId"
        ${i?`pattern="${i}"`:""}
        ${d?`placeholder="${d}"`:""}
        ${$?"required":""}
        ${S?"disabled":""}
      >
      ${n?`<div class="input-group-append">
            <span class="input-group-text">${n}</span>
          </div>`:""}
      ${a||n?"</div>":""}
    </div>
  `}const f=t.bind({});f.args={type:"text",pattern:"",placeholder:"Placeholder text",required:!1,prepend:"",append:"",disabled:!1};const b=t.bind({});b.args={pattern:"[0-9]{6,8}-?[0-9]{4}",placeholder:"yyyymmdd-nnnn",required:!0};const y=t.bind({});y.args={type:"password",placeholder:"Password"};const P=t.bind({});P.args={type:"text",placeholder:"Username",prepend:"@"};const e=()=>`
  <div class="form-group">
    <div class="input-group">
      <span class="input-group-prepend-reg"></span>
      <input type="text" required="" class="form-control" placeholder="ABC123" aria-describedby="reg1">
    </div>
  </div>
`,h=t.bind({});h.args={type:"text",append:"kr"};const r=()=>I,s=()=>L;var p,o,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`() => \`
  <div class="form-group">
    <div class="input-group">
      <span class="input-group-prepend-reg"></span>
      <input type="text" required="" class="form-control" placeholder="ABC123" aria-describedby="reg1">
    </div>
  </div>
\``,...(l=(o=e.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var c,u,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"() => OneLined",...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,v,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"() => SeveralLines",...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const O=["Default","Pattern","Password","Prefix","PrefixImage","Suffix","oneLined","severalLines"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:f,Password:y,Pattern:b,Prefix:P,PrefixImage:e,Suffix:h,__namedExportsOrder:O,default:_,oneLined:r,severalLines:s},Symbol.toStringTag,{value:"Module"}));export{f as D,k as I,b as P,h as S,P as a,e as b};
//# sourceMappingURL=inputfield.stories-0de47961.js.map
