import{a as p,D as te,R as h,s as N,u as V,h as J}from"./utils-a5acfd0f.js";import"./hooks.module-446c997e.js";import"./jsxRuntime.module-779d8325.js";const q=new WeakSet;function oe(t,n=t.dataset){const o=ne(n),e=t.querySelector(".select-options"),B=t.querySelector(".select-label"),c=Math.random().toString(36).substr(2,9);if(!B||!e||e.disabled||q.has(t))return;let f=!1;const Q=[...e.selectedOptions];let u=e.querySelector('option[value=""][disabled]');const y=Q.filter(a=>!H(a));O(e,y.length);const C=new WeakMap,$=new WeakMap,R=new h,z=new h,M=p("button",{type:"button",title:B.textContent,class:"select-toggle dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false","aria-controls":`list-${c}`},[p("span",{"data-count":y.length||"",class:"select-status",role:"status",ref:z},y.length?A(y,o.smallPattern):u?k(u.label,o.smallPattern):"")]);function D(){return[e.multiple&&o.allLabel?p("button",{ref:R,type:"button",class:"select-option multiple dropdown-item",onclick(a){const l=!W(e);for(const r of e.options)r.disabled||(r.selected=l);e.dispatchEvent(new window.Event("change",{bubbles:!0})),a.preventDefault()}},o.allLabel):null,...[...e.children].map(function a(l,r){if(l.nodeName==="OPTGROUP"){const g=k(l.label,o.smallPattern);let s=[...l.children].map(a);const d=new h,v=new h;let i=!0;if(o.groupToggle){const L=p("fieldset",{"data-bs-target":`#list-${c}`,id:`group-${r}-list-${c}`,class:"select-list dropdown-menu","aria-labelledby":`group-${r}-trigger-${c}`},s);for(const G of l.children)$.set(G,v);s=[L]}return p(o.groupToggle?"div":"fieldset",{ref:d,class:`select-group ${o.groupToggle?"show":""}`},[o.groupToggle?p("button",{ref:v,type:"button",id:`group-${r}-trigger-${c}`,class:`select-option ${e.multiple?"multiple":""} toggle dropdown-item`,"aria-expanded":"true","aria-controls":`group-${r}-list-${c}`,onclick(){i=!i,this.setAttribute("aria-expanded",i?"true":"false"),d.current.classList.toggle("show",i),f=!0;for(const L of l.children)C.get(L).current.classList.toggle("disabled",!i);X.update()}},g):p("legend",{class:"select-legend"},g),...s])}if(H(l))return null;const{label:m,disabled:b,selected:E}=l,S=new h;return C.set(l,S),p("button",{disabled:b,ref:S,type:"button",class:`select-option dropdown-item ${e.multiple?"multiple":""} ${E?"selected":""}`,onclick(g){l.selected=e.multiple?!l.selected:!0,e.dispatchEvent(new window.Event("change",{bubbles:!0}))}},k(m,o.smallPattern,b?"":void 0))})]}const T=p("div",{id:`list-${c}`,"aria-labelledby":`label-${c}`,class:"select-list dropdown-menu",onclick(){f=f||e.multiple}},D());t.addEventListener("hide.bs.dropdown",function(a){f&&(f=!1,a.preventDefault())}),e.addEventListener("change",function(){var g;(g=R.current)==null||g.classList.toggle("selected",W(e));const a=new Map;for(const s of e.options){if(s.disabled)continue;const d=C.get(s);if(d==null||d.current.classList.toggle("selected",s.selected),$.has(s)){const v=$.get(s);let i=a.get(v);s.selected?i?i==="unselected"&&(i="indeterminate"):i="selected":i==="selected"?i="indeterminate":i||(i="unselected"),a.set(v,i)}}for(const[s,d]of a)s.current.classList.toggle("selected",d==="selected"),s.current.classList.toggle("indeterminate",d==="indeterminate");const l=[...e.selectedOptions].filter(s=>!H(s)),{current:r}=z;O(e,l.length),r.dataset.count=l.length||"";const m=l.length?l:u?[u]:[],[b,...E]=r.childNodes,S=m.length?A(m,o.smallPattern):[""];for(const s of E)s.remove();b.replaceWith(...S)}),t.classList.add("initialized"),B.id=`label-${c}`,e.after(M,T);const X=new te(M);q.add(t);const ee=(a,l)=>{for(const r of a)if(r.type==="childList"||r.type==="carachterData"){const m=document.createDocumentFragment();m.append(...D().filter(b=>b)),T.innerHTML="",T.append(m),u=u=e.querySelector('option[value=""][disabled]'),e.dispatchEvent(new window.Event("change"))}};new window.MutationObserver(ee).observe(e,{attributes:!1,childList:!0,subtree:!0,characterData:!0})}function ne(t){let{smallPattern:n,allLabel:o,groupToggle:e}=t;return n&&!(n instanceof RegExp)&&(n=new RegExp(n)),typeof e<"u"&&(e=e!==!1),{smallPattern:n,allLabel:o,groupToggle:e}}function O(t,n){const o=t.closest(".form-group");o&&o.classList.toggle("has-valid",n)}function H(t){const{value:n,disabled:o,hidden:e}=t;return!n&&o&&e}function W(t){return t.selectedOptions.length===t.options.length}function A(t,n){return t.reduce(function(o,e){return o.length&&o.push(", "),o.push(...k(e.label,n)),o},[])}function k(t,n,o="text-muted"){const e=t.match(n);return e?[t.replace(n,""),p("small",{class:o},e[1]||e[0])]:[t]}const le=`<div class="row">
  <div class="col-md-6">
    <p class="text-sm mt-15 mb-05 text-muted">Default</p>
    <form class="form-group">
      <div class="select">
        <label class="select-label" for="select-multiple">Berries</label>
        <select multiple class="select-options" name="berries" id="select-multiple">
          <option value="" disabled hidden>Select Berries</option>
          <option value="1">Raspberry</option>
          <option value="2">Blueberry</option>
          <option value="3">Blackberry</option>
          <option value="4">Strawberry</option>
          <option value="5">Cranberry</option>
        </select>
      </div>
    </form>
  </div>
  <div class="col-md-6">
    <p class="text-sm mt-15 mb-05 text-muted">Select all</p>
    <form class="form-group">
      <div class="select" data-all-label="Select all berries">
        <label class="select-label" for="select-multiple-all">Berries</label>
        <select multiple class="select-options" name="berries" id="select-multiple-all">
          <option value="" disabled selected hidden>Select Berries</option>
          <option>Raspberry</option>
          <option>Blueberry</option>
          <option>Blackberry</option>
          <option>Strawberry</option>
          <option>Cranberry</option>
        </select>
      </div>
    </form>
  </div>
  <div class="col-md-6">
    <p class="text-sm mt-15 mb-05 text-muted">Label inside</p>
    <label>&nbsp;</label>
    <form class="form-group">
      <div class="select inside">
        <label class="select-label" for="select-multiple-inside">Berries</label>
        <select multiple class="select-options" name="berries" id="select-multiple-inside">
          <option value="" disabled selected hidden>Select Berries</option>
          <option>Raspberry</option>
          <option>Blueberry</option>
          <option>Blackberry</option>
          <option>Strawberry</option>
          <option>Cranberry</option>
        </select>
      </div>
    </form>
  </div>
  <div class="col-md-6">
    <p class="text-sm mt-15 mb-05 text-muted">Required</p>
    <form class="form-group">
      <div class="select">
        <label class="select-label" for="select-required">Berries</label>
        <select multiple class="select-options" name="berries" id="select-required" required>
          <option>Raspberry</option>
          <option selected>Blueberry</option>
          <option>Blackberry</option>
          <option>Strawberry</option>
          <option selected>Cranberry</option>
        </select>
      </div>
    </form>
  </div>
  <div class="col-md-6">
    <p class="text-sm mt-15 mb-05 text-muted">Disabled</p>
    <form class="form-group">
      <div class="select">
        <label class="select-label" for="select-multiple-disabled">Berries</label>
        <select multiple disabled class="select-options" name="berries" id="select-multiple-disabled">
          <option value="" disabled selected hidden>Select Berries</option>
          <option>Raspberry</option>
          <option>Blueberry</option>
          <option>Blackberry</option>
          <option>Strawberry</option>
          <option>Cranberry</option>
        </select>
      </div>
    </form>
  </div>
  <div class="col-md-6">
    <p class="text-sm mt-15 mb-05 text-muted">Disabled options</p>
    <form class="form-group">
      <div class="select" data-small-pattern="\\([\\s\\w]+\\)">
        <label class="select-label" for="select-multiple-disabled-options">Berries</label>
        <select multiple class="select-options" name="berries" id="select-multiple-disabled-options">
          <option value="" disabled selected hidden>Select Berries</option>
          <option>Raspberry</option>
          <option disabled>Blueberry (out of stock)</option>
          <option>Blackberry</option>
          <option disabled selected>Strawberry (already purchased)</option>
          <option>Cranberry</option>
        </select>
      </div>
    </form>
  </div>
  <div class="col-md-6">
    <p class="text-sm mt-15 mb-05 text-muted">With Option Groups</p>
    <form class="form-group">
      <div class="select">
        <label class="select-label" for="select-multiple-groups">Berries</label>
        <select multiple class="select-options" name="berries" id="select-multiple-groups">
          <option value="" disabled selected hidden>Select Berries</option>
          <optgroup label="Red">
            <option>Raspberry</option>
            <option>Strawberry</option>
            <option>Cranberry</option>
          </optgroup>
          <optgroup label="Blue">
            <option>Blueberry</option>
          </optgroup>
          <optgroup label="Black">
            <option>Blackberry</option>
          </optgroup>
        </select>
      </div>
    </form>
  </div>
  <div class="col-md-6">
    <p class="text-sm mt-15 mb-05 text-muted">With Toggle Groups</p>
    <form class="form-group">
      <div class="select" data-group-toggle data-small-pattern="\\((\\d+)\\)$">
        <label class="select-label" for="select-multiple-toggles">Berries</label>
        <select multiple class="select-options" name="berries" id="select-multiple-toggles">
          <option value="" disabled selected hidden>Select Berries</option>
          <optgroup label="Red (3)">
            <option>Raspberry</option>
            <option>Strawberry</option>
            <option>Cranberry</option>
          </optgroup>
          <optgroup label="Blue (1)">
            <option>Blueberry</option>
          </optgroup>
          <optgroup label="Black (1)">
            <option>Blackberry</option>
          </optgroup>
        </select>
      </div>
    </form>
  </div>
</div>
`,se=`<div class="row">
  <div class="col-md-6">
    <p class="text-sm mt-15 mb-05 text-muted">Default</p>
    <form class="form-group">
      <div class="select">
        <label class="select-label" for="select">City</label>
        <select class="select-options" name="timezone" id="select">
          <option value="" disabled selected hidden>Select City</option>
          <option>Stockholm</option>
          <option>Göteborg</option>
          <option>Malmö</option>
          <option>Umeå</option>
        </select>
      </div>
    </form>
  </div>
  <div class="col-md-6">
    <p class="text-sm mt-15 mb-05 text-muted">Long list</p>
    <form class="form-group">
      <div class="select">
        <label class="select-label" for="select-hidden-label">City</label>
        <select class="select-options" name="timezone" id="select-hidden-label">
          <option value="" disabled selected hidden>Select City</option>
          <option>Gävle</option>
          <option>Göteborg</option>
          <option>Hagfors</option>
          <option>Halmstad</option>
          <option>Haparanda</option>
          <option>Hedemora</option>
          <option>Helsingborg</option>
          <option>Hudiksvall</option>
          <option>Huskvarna</option>
          <option>Härnösand</option>
          <option>Hässleholm</option>
          <option>Hästholmen</option>
          <option>Höganäs</option>
          <option>Järle</option>
          <option>Jönköping</option>
          <option>Kalmar</option>
          <option>Karl Johans stad</option>
          <option>Karlshamn</option>
          <option>Karlskoga</option>
          <option>Karlskrona</option>
          <option>Karlstad</option>
          <option>Katrineholm</option>
        </select>
      </div>
    </form>
  </div>
  <div class="col-md-6">
    <p class="text-sm mt-15 mb-05 text-muted">Label inside</p>
    <label>&nbsp;</label>
    <form class="form-group">
      <div class="select inside">
        <label class="select-label" for="select-label-inside">
          Select city
        </label>
        <select class="select-options" name="timezone" id="select-label-inside">
          <option value="" disabled selected hidden>Select asdasd</option>
          <option>Stockholm</option>
          <option>Göteborg</option>
          <option>Malmö</option>
          <option>Umeå</option>
        </select>
      </div>
    </form>
  </div>
  <div class="col-md-6">
    <p class="text-sm mt-15 mb-05 text-muted">With small text</p>
    <form class="form-group">
      <div class="select" data-small-pattern="\\((.+?)\\)">
        <label class="select-label" for="select-secondary">City</label>
        <select class="select-options" name="timezone" id="select-secondary">
          <option value="" disabled selected hidden>Select City</option>
          <option>Stockholm (Stockholm)</option>
          <option>Göteborg (Västra Götaland)</option>
          <option>Malmö (Skåne)</option>
          <option>Umeå (Västerbottens)</option>
        </select>
      </div>
    </form>
  </div>
  <div class="col-md-6">
    <p class="text-sm mt-15 mb-05 text-muted">Required</p>
    <form class="form-group">
      <div class="select">
        <label class="select-label" for="select-required">City</label>
        <select
          class="select-options"
          name="timezone"
          id="select-required"
          required>
          <option>Stockholm</option>
          <option selected>Göteborg</option>
          <option>Malmö</option>
          <option>Umeå</option>
        </select>
      </div>
    </form>
  </div>
  <div class="col-md-6">
    <p class="text-sm mt-15 mb-05 text-muted">With Option Groups</p>
    <form class="form-group">
      <div class="select">
        <label class="select-label" for="select-groups">Timezone</label>
        <select class="select-options" name="timezone" id="select-groups">
          <option value="" disabled selected hidden>Select Timezone</option>
          <optgroup label="Alaskan/Hawaiian Time Zone">
            <option value="AK">Alaska</option>
            <option value="HI">Hawaii</option>
          </optgroup>
          <optgroup label="Stockholm Time Zone">
            <option value="ST">Stockholm</option>
          </optgroup>
          <optgroup label="China Time Zone">
            <option value="CT">China</option>
          </optgroup>
        </select>
      </div>
    </form>
  </div>
  <div class="col-md-6">
    <p class="text-sm mt-15 mb-05 text-muted">With Toggle Groups</p>
    <form class="form-group">
      <div class="select" data-group-toggle>
        <label class="select-label" for="select-toggle-groups">Timezone</label>
        <select
          class="select-options"
          name="timezone"
          id="select-toggle-groups">
          <option value="" disabled selected hidden>Select Timezone</option>
          <optgroup label="Alaskan/Hawaiian Time Zone">
            <option value="AK">Alaska</option>
            <option value="HI">Hawaii</option>
          </optgroup>
          <optgroup label="Stockholm Time Zone">
            <option value="ST">Stockholm</option>
          </optgroup>
          <optgroup label="China Time Zone">
            <option value="CT">China</option>
          </optgroup>
        </select>
      </div>
    </form>
  </div>
  <div class="col-md-6">
    <p class="text-sm mt-15 mb-05 text-muted">Disabled</p>
    <form class="form-group">
      <div class="select">
        <label class="select-label" for="select-disabled">City</label>
        <select
          class="select-options"
          name="timezone"
          id="select-disabled"
          disabled>
          <option value="" disabled selected hidden>Select City</option>
          <option>Stockholm</option>
          <option>Göteborg</option>
          <option>Malmö</option>
          <option>Umeå</option>
        </select>
      </div>
    </form>
  </div>
  <div class="col-md-6">
    <p class="text-sm mt-15 mb-05 text-muted">Disabled options</p>
    <form class="form-group">
      <div class="select">
        <label class="select-label" for="select-disabled-options">City</label>
        <select
          class="select-options"
          name="timezone"
          id="select-disabled-options">
          <option value="" disabled selected hidden>Select City</option>
          <option disabled>Stockholm</option>
          <option>Göteborg</option>
          <option disabled>Malmö</option>
          <option>Umeå</option>
        </select>
      </div>
    </form>
  </div>
</div>
`;function F(t){if(t)for(const n of t.querySelectorAll(".select"))oe(n)}const{useEffect:Y,useState:j}=__STORYBOOK_MODULE_CLIENT_API__,ce={title:"Forms/Select",parameters:{backgrounds:{default:"white"}}},w=N(()=>{const[t]=j(V);return Y(()=>F(document.getElementById(t)),[]),J`
    <div id="${t}">${se}</div>
  `}),x=N(()=>{const[t]=j(V);return Y(()=>F(document.getElementById(t)),[]),J`
    <div id="${t}">${le}</div>
  `});var K,P,_;w.parameters={...w.parameters,docs:{...(K=w.parameters)==null?void 0:K.docs,source:{originalSource:`storyWrapper(() => {
  const [id] = useState(uid);
  useEffect(() => selectExample(document.getElementById(id)), []);
  return html\`
    <div id="\${id}">\${Single}</div>
  \`;
})`,...(_=(P=w.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var I,U,Z;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`storyWrapper(() => {
  const [id] = useState(uid);
  useEffect(() => selectExample(document.getElementById(id)), []);
  return html\`
    <div id="\${id}">\${Multiple}</div>
  \`;
})`,...(Z=(U=x.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};const de=["single","multiple"];export{de as __namedExportsOrder,ce as default,x as multiple,w as single};
//# sourceMappingURL=select.stories-73e1bdc0.js.map
