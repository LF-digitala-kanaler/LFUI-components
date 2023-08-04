import{e as O,u as o,h as C}from"./utils-f9cf1c58.js";const G=`<form>
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
`,L=`<p class="text-sm mb-05 text-muted">Default</p>
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
`,T=`<p class="text-sm mb-05 text-muted">Radio cards</p>
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
`,l=(n,t)=>{n&&O(".radio-card, .btn-group .btn",function(a,c,I){a.addEventListener("change",function(_){for(const s of I)(s.matches("input")?s:s.querySelector("input")).name===_.target.name&&s.classList.toggle("active",s===a)})},n)},{useEffect:r,useState:x}=__STORYBOOK_MODULE_CLIENT_API__,M={title:"Forms/Radio Buttons",parameters:{backgrounds:{default:"white"},badges:["stable"]},argTypes:{}};function D({valid:n}){return`
  <div class="form-group ${n?"has-valid":""}">
    <div class="d-md-inline-block">
      <div class="custom-control custom-radio mr-05 mb-05">
        <input id="radio1" name="styledRadio" type="radio" class="custom-control-input">
        <label class="custom-control-label" for="radio1">One of the options</label>
      </div>
    </div>
    <div class="d-md-inline-block">
      <div class="custom-control custom-radio mr-05 mb-05">
        <input id="radio2" name="styledRadio" type="radio" checked class="custom-control-input">
        <label class="custom-control-label" for="radio2">The preferred option</label>
      </div>
    </div>
  </div>
  `}function N({active:n,value:t="Yes"}){return`
  <label class="btn ${n?"active":""}" data-text="${t}">
    <input
      type="radio"
      name="ButtonGroupOptions"
      value="${t}"
      id="option1"
      ${n?"checked":""}
    />
  ${t}
  </label >
  `}function Y({items:n=[]}){const t=o();return r(()=>l(document.getElementById(t)),[]),`
  <div id="${t}" class="btn-group" data-bs-toggle="buttons">
    ${n.map(a=>N(a)).join("")}
  </div >
    `}function S({name:n,disabled:t,active:a,value:c="Rekomenderad"}){return`
  <div class="radio-card ${a?"active":""}" >
    <label class="custom-control custom-radio">
      <input
        name="${n||o()}"
        type="radio"
        id="radioCardSm3"
        class="custom-control-input"
        ${t?"disabled":""}
        ${a?"checked":""}
        value=${c}
      />
      <span class="custom-control-label">
        <svg
          role="presentation"
          class="icon d-block mx-auto mb-05"
          width="40"
          height="40">
          <use xlink:href="lf-icons/sprite/40/icons.svg#thumb-up-40"></use>
        </svg>
       ${c}
      </span>
    </label>
</div >
  `}function j({items:n}){const t=o();return r(()=>l(document.getElementById(t)),[]),`
  <div id="${t}" class="row row-tight form-group">
      ${n.map(a=>`
        <div class="col-6 col-md-3 mb-1">
          ${S({name:t,...a})}
        </div>
        `).join("")}
  </div
  `}function u(n){const t=o();return r(()=>l(document.getElementById(t)),[]),`
  <div id="${t}" class="row row-tight form-group">
    <div class="col-6 col-md-3 mb-1">
      ${S(n)}
    </div>
  </div
  `}const A=D.bind({}),$=u.bind({});$.args={disabled:!1,active:!1};const w=j.bind({});w.args={items:[{value:"Val 1",active:!0},{value:"Val 2"}]};const B=u.bind({});B.args={disabled:!0,value:"Rekomenderad"};const R=u.bind({});R.args={active:!0,value:"Rekomenderad"};const E=Y.bind({});E.args={items:[{active:!0,value:"Yes"},{active:!1,value:"No"}]};const e=()=>G,i=()=>{const[n]=x(o);return r(()=>{l(document.getElementById(n))},[]),C`
  < div id = "${n}" > ${L}</div >
    `},d=()=>{const[n]=x(o);return r(()=>{l(document.getElementById(n))},[]),C`
    < div id = "${n}" > ${T}</div >
      `};var m,p,b;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:"() => StyledRadioButtons",...(b=(p=e.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var v,g,h;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const [id] = useState(uid);
  useEffect(() => {
    radioButtonsExample(document.getElementById(id));
  }, []);
  return html\`
  < div id = "\${id}" > \${ButtonGroup}</div >
    \`;
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,y,k;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [id] = useState(uid);
  useEffect(() => {
    radioButtonsExample(document.getElementById(id));
  }, []);
  return html\`
    < div id = "\${id}" > \${RadioCards}</div >
      \`;
}`,...(k=(y=d.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};const F=["Default","Card","Cards","CardDisabled","CardActive","Group","styledRadioButtons","buttonGroup","radioCards"],q=Object.freeze(Object.defineProperty({__proto__:null,Card:$,CardActive:R,CardDisabled:B,Cards:w,Default:A,Group:E,__namedExportsOrder:F,buttonGroup:i,default:M,radioCards:d,styledRadioButtons:e},Symbol.toStringTag,{value:"Module"}));export{w as C,A as D,E as G,q as R,B as a,R as b};
//# sourceMappingURL=radioButtons.stories-fd6373f8.js.map
