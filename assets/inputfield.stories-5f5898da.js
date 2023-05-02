const p=`<div class="row">
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






`,o=`<div style="max-width: 40rem">
  <div class="form-group">
    <textarea
      class="form-control"
      required=""
      id="exampleTextarea"
      rows="3"></textarea>
  </div>
</div>
`,c={title:"Forms/Input Field"},e=()=>p,n=()=>o;var s,r,t;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"() => OneLined",...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};var a,d,i;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:"() => SeveralLines",...(i=(d=n.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const l=["oneLined","severalLines"];export{l as __namedExportsOrder,c as default,e as oneLined,n as severalLines};
//# sourceMappingURL=inputfield.stories-5f5898da.js.map
