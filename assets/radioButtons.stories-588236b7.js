import{e as k,u as v,h}from"./utils-88afe92d.js";import"./hooks.module-446c997e.js";import"./jsxRuntime.module-779d8325.js";const w=`<form>
  <div class="form-group">
    <div class="d-md-inline-block">
      <div class="custom-control custom-radio mr-05 mb-05">
        <input id="radio1" name="radio" type="radio" class="custom-control-input">
        <label class="custom-control-label" for="radio1">One of the options</label>
      </div>
    </div>
    <div class="d-md-inline-block">
      <div class="custom-control custom-radio mr-05 mb-05">
        <input id="radio2" name="radio" type="radio" checked class="custom-control-input">
        <label class="custom-control-label" for="radio2">The preferred option</label>
      </div>
    </div>
  </div>
</form>
`,C=`<p class="text-sm mb-05 text-muted">Default</p>
<div class="btn-group" data-bs-toggle="buttons">
  <label class="btn active" data-text="Yes">
    <input type="radio" name="options" value="yes" id="option1" checked />
    Yes
  </label>
  <label class="btn" data-text="No">
    <input type="radio" name="options" value="no" id="option2" />
    No
  </label>
</div>

<p class="text-sm mt-15 mb-05 text-muted">Stretching</p>
<div
  class="btn-group btn-group-stretch"
  name="button-group"
  role="group"
  aria-label="Basic example"
  data-bs-toggle="buttons"
>
  <label class="btn active">
    <input
      type="radio"
      name="stretch-options"
      id="stretch-option1"
      value="yes"
      checked
    />
    Yes
  </label>
  <label class="btn">
    <input
      type="radio"
      name="stretch-options"
      id="stretch-option2"
      value="no"
    />
    No
  </label>
  <label class="btn">
    <input
      type="radio"
      name="stretch-options"
      id="stretch-option3"
      value="maybe"
    />
    Not sure
  </label>
</div>
`,B=`<p class="text-sm mb-05 text-muted">Radio cards</p>
<div class="row row-tight form-group">
  <div class="col-6 col-md-3 mb-1">
    <div class="radio-card">
      <label class="custom-control custom-radio">
        <input
          name="radio12"
          type="radio"
          id="radioCardSm3"
          class="custom-control-input" />
        <span class="custom-control-label">
          <svg
            role="presentation"
            class="icon d-block mx-auto mb-05"
            width="40"
            height="40">
            <use xlink:href="lf-icons/sprite/40/icons.svg#thumb-up-40"></use>
          </svg>
          Recommended
        </span>
      </label>
    </div>
  </div>
  <div class="col-6 col-md-3 mb-1">
    <div class="radio-card">
      <label class="custom-control custom-radio">
        <input
          name="radio12"
          type="radio"
          id="radioCardSm2"
          class="custom-control-input" />
        <span class="custom-control-label">
          <svg
            role="presentation"
            class="icon d-block mx-auto mb-05"
            width="40"
            height="40">
            <use
              xlink:href="lf-icons/sprite/40/icons.svg#sustainability-40"></use>
          </svg>
          Sustainability
        </span>
      </label>
    </div>
  </div>
  <div class="col-6 col-md-3 mb-1">
    <div class="radio-card">
      <label class="custom-control custom-radio">
        <input
          name="radio12"
          type="radio"
          id="radioCardSm"
          class="custom-control-input" />
        <span class="custom-control-label">
          <svg
            role="presentation"
            class="icon d-block mx-auto mb-05"
            width="40"
            height="40">
            <use xlink:href="lf-icons/sprite/40/icons.svg#coins-40"></use>
          </svg>
          Lowest fees
        </span>
      </label>
    </div>
  </div>
</div>

<p class="text-sm mt-15 mb-05 text-muted">Radio cards with pricing details</p>
<div class="row row-no-gutter">
  <div class="col-12 col-md-4 d-flex">
    <div class="radio-card radio-content-card">
      <label class="custom-control custom-radio" for="radioCard1">
        <input
          name="radio"
          type="radio"
          id="radioCard1"
          class="custom-control-input" />
        <span class="custom-control-label">Insurance — Large</span>
        <p>
          Our very best insurance, for you that have both family and a house.
        </p>
        <ul class="ul-checks green">
          <li>Feature list item</li>
          <li>Something special</li>
          <li>Contains this thing</li>
        </ul>
        <div class="radio-content-card-footer">
          <button
            class="btn btn-sm btn-secondary"
            data-bs-toggle="modal"
            data-bs-target="#myModal">
            Läs mer
          </button>
          <div class="h4 m-0">
            <span class="h2 m-0">1&nbsp;420</span>
            &nbsp;kr/mån
          </div>
        </div>
      </label>
    </div>
  </div>
  <div class="col-12 col-md-4 d-flex">
    <div class="radio-card radio-content-card active">
      <label class="custom-control custom-radio" for="radioCard2">
        <input
          name="radio"
          type="radio"
          checked
          id="radioCard2"
          class="custom-control-input" />
        <span class="custom-control-label">Insurance – Medium</span>
        <p>
          In addition to the basic protection, Medium adds insurance for all
          family members.
        </p>
        <ul class="ul-checks green">
          <li>Feature list item</li>
          <li>Contains this thing</li>
          <li>Something special</li>
        </ul>
        <div class="radio-content-card-footer">
          <button
            class="btn btn-sm btn-secondary"
            data-bs-toggle="modal"
            data-bs-target="#myModal">
            Läs mer
          </button>
          <div class="h4 m-0">
            <span class="h2 m-0">825</span>
            &nbsp;kr/mån
          </div>
        </div>
      </label>
    </div>
  </div>
  <div class="col-12 col-md-4 d-flex">
    <div class="radio-card radio-content-card">
      <label class="custom-control custom-radio">
        <input
          name="radio"
          type="radio"
          id="radioCard3"
          class="custom-control-input" />
        <span class="custom-control-label">Insurance Small</span>
        <p>Our basic insurance with a solid protection for&nbsp;you.</p>
        <ul class="ul-checks green">
          <li>Feature list item</li>
          <li>Contains this thing</li>
        </ul>
        <div class="radio-content-card-footer">
          <button
            class="btn btn-sm btn-secondary"
            data-bs-toggle="modal"
            data-bs-target="#myModal">
            Läs mer
          </button>
          <div class="h4 m-0">
            <span class="h2 m-0">250</span>
            &nbsp;kr/mån
          </div>
        </div>
      </label>
    </div>
  </div>
</div>

<div
  class="modal fade"
  id="myModal"
  tabindex="-1"
  role="dialog"
  aria-labelledby="myModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    what so ever
    <div class="modal-content">
      <div class="modal-header">
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"></button>
        <h4 class="modal-title">So long farewell</h4>
      </div>
      <div class="modal-body">
        <p>
          So long, farewell, auf wiedersehen, good night.
          <br />
          I hate to go and leave this pretty sight.
        </p>
        <p>
          So long, farewell auf wiedersehen, adieu
          <br />
          Adieu, adieu, to yieu and yieu and yieu.
        </p>
        <p>
          So long, farewell, au revoir, auf wiedersehen. I'd like to stay and
          taste my first champagne
        </p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-link" data-bs-dismiss="modal">
          Dismiss
        </button>
        <button type="button" class="btn btn-primary btn-arrow">
          Continue
        </button>
      </div>
    </div>
  </div>
</div>
`,g=(n,E)=>{n&&k(".radio-card, .btn-group .btn",function(e,I,x){e.addEventListener("change",function(S){for(const t of x)(t.matches("input")?t:t.querySelector("input")).name===S.target.name&&t.classList.toggle("active",t===e)})},n)},{useEffect:f,useState:y}=__STORYBOOK_MODULE_CLIENT_API__,O={title:"Forms/Radio Buttons"},a=()=>w,s=()=>{const[n]=y(v);return f(()=>{g(document.getElementById(n))},[]),h`
    <div id="${n}">${C}</div>
  `},o=()=>{const[n]=y(v);return f(()=>{g(document.getElementById(n))},[]),h`
    <div id="${n}">${B}</div>
  `};var i,l,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:"() => StyledRadioButtons",...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var r,c,u;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const [id] = useState(uid);
  useEffect(() => {
    radioButtonsExample(document.getElementById(id));
  }, []);
  return html\`
    <div id="\${id}">\${ButtonGroup}</div>
  \`;
}`,...(u=(c=s.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var m,p,b;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [id] = useState(uid);
  useEffect(() => {
    radioButtonsExample(document.getElementById(id));
  }, []);
  return html\`
    <div id="\${id}">\${RadioCards}</div>
  \`;
}`,...(b=(p=o.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};const $=["styledRadioButtons","buttonGroup","radioCards"];export{$ as __namedExportsOrder,s as buttonGroup,O as default,o as radioCards,a as styledRadioButtons};
//# sourceMappingURL=radioButtons.stories-588236b7.js.map
