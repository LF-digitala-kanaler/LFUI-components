import{u as r}from"./utils-cfbb8c9c.js";const v={title:"Forms/Form groups",parameters:{backgrounds:{default:"white"},badges:["stable"]},argTypes:{}},s=()=>{const e=r();return`
  <form>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="validationCustom${e}">Label</label>
          <input type="text" class="form-control" id="validationCustom${e}" placeholder="Placeholder text" required="">
          <small class="form-text text-muted">Helptext here</small>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group has-danger">
          <label for="validationCustom${e}2">Label</label>
          <input type="text" class="form-control" id="validationCustom${e}2" placeholder="Placeholder text" required="">
          <small class="form-control-feedback">This is an error message</small>
          <small class="form-text text-muted">Helptext here</small>
        </div>
      </div>
    </div>
  </form>
`},o=()=>{const e=r();return`
    <form>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group has-danger">
            <label for="validationCustom${e}">Label</label>
            <input type="text" class="form-control" id="validationCustom${e}" placeholder="Something is wrong with this input" required="">
            <small class="form-control-feedback">This is an error message</small>
          </div>
        </div>
      </div>
    </form>
    `},l=()=>{const e=r();return`
  <form>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group has-success">
          <label for="validationCustom${e}">Label</label>
          <input type="text" class="form-control" id="validationCustom${e}" placeholder="Something is wrong with this input" required="">
          <small class="form-text text-muted">Helptext here</small>
        </div>
      </div>
    </div>
  </form>
  `};var a,t,i;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const id = uid();
  return \`
  <form>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="validationCustom\${id}">Label</label>
          <input type="text" class="form-control" id="validationCustom\${id}" placeholder="Placeholder text" required="">
          <small class="form-text text-muted">Helptext here</small>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group has-danger">
          <label for="validationCustom\${id}2">Label</label>
          <input type="text" class="form-control" id="validationCustom\${id}2" placeholder="Placeholder text" required="">
          <small class="form-control-feedback">This is an error message</small>
          <small class="form-text text-muted">Helptext here</small>
        </div>
      </div>
    </div>
  </form>
\`;
}`,...(i=(t=s.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var d,n,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const id = uid();
  return \`
    <form>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group has-danger">
            <label for="validationCustom\${id}">Label</label>
            <input type="text" class="form-control" id="validationCustom\${id}" placeholder="Something is wrong with this input" required="">
            <small class="form-control-feedback">This is an error message</small>
          </div>
        </div>
      </div>
    </form>
    \`;
}`,...(m=(n=o.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var c,u,p;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const id = uid();
  return \`
  <form>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group has-success">
          <label for="validationCustom\${id}">Label</label>
          <input type="text" class="form-control" id="validationCustom\${id}" placeholder="Something is wrong with this input" required="">
          <small class="form-text text-muted">Helptext here</small>
        </div>
      </div>
    </div>
  </form>
  \`;
}`,...(p=(u=l.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const f=["Grouping","Invalid","Valid"],g=Object.freeze(Object.defineProperty({__proto__:null,Grouping:s,Invalid:o,Valid:l,__namedExportsOrder:f,default:v},Symbol.toStringTag,{value:"Module"}));export{g as F,s as G,o as I,l as V};
