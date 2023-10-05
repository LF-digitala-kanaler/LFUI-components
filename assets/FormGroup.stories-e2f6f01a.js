const u={title:"Forms/Form groups",parameters:{backgrounds:{default:"white"},badges:["stable"]},argTypes:{}},e=()=>`
  <form>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="validationCustom01">Label</label>
          <input type="text" class="form-control" id="validationCustom01" placeholder="Placeholder text" required="">
          <small class="form-text text-muted">Helptext here</small>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group has-danger">
          <label for="validationCustom01">Label</label>
          <input type="text" class="form-control" id="validationCustom01" placeholder="Placeholder text" required="">
          <small class="form-control-feedback">This is an error message</small>
          <small class="form-text text-muted">Helptext here</small>
        </div>
      </div>
    </div>
  </form>
`,l=()=>`
  <form>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group has-danger">
          <label for="validationCustom01">Label</label>
          <input type="text" class="form-control" id="validationCustom01" placeholder="Something is wrong with this input" required="">
          <small class="form-control-feedback">This is an error message</small>
        </div>
      </div>
    </div>
  </form>
  `,s=()=>`
  <form>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group has-success">
          <label for="validationCustom01">Label</label>
          <input type="text" class="form-control" id="validationCustom01" placeholder="Something is wrong with this input" required="">
          <small class="form-text text-muted">Helptext here</small>
        </div>
      </div>
    </div>
  </form>
  `;var a,o,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => \`
  <form>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="validationCustom01">Label</label>
          <input type="text" class="form-control" id="validationCustom01" placeholder="Placeholder text" required="">
          <small class="form-text text-muted">Helptext here</small>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group has-danger">
          <label for="validationCustom01">Label</label>
          <input type="text" class="form-control" id="validationCustom01" placeholder="Placeholder text" required="">
          <small class="form-control-feedback">This is an error message</small>
          <small class="form-text text-muted">Helptext here</small>
        </div>
      </div>
    </div>
  </form>
\``,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var t,i,d;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`() => \`
  <form>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group has-danger">
          <label for="validationCustom01">Label</label>
          <input type="text" class="form-control" id="validationCustom01" placeholder="Something is wrong with this input" required="">
          <small class="form-control-feedback">This is an error message</small>
        </div>
      </div>
    </div>
  </form>
  \``,...(d=(i=l.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var n,m,c;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`() => \`
  <form>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group has-success">
          <label for="validationCustom01">Label</label>
          <input type="text" class="form-control" id="validationCustom01" placeholder="Something is wrong with this input" required="">
          <small class="form-text text-muted">Helptext here</small>
        </div>
      </div>
    </div>
  </form>
  \``,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const p=["Grouping","Invalid","Valid"],v=Object.freeze(Object.defineProperty({__proto__:null,Grouping:e,Invalid:l,Valid:s,__namedExportsOrder:p,default:u},Symbol.toStringTag,{value:"Module"}));export{v as F,e as G,l as I,s as V};
//# sourceMappingURL=FormGroup.stories-e2f6f01a.js.map
