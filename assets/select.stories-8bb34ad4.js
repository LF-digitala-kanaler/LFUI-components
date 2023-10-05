import{a as p,D as Ie,R as z,s as Te,u as k,h as we}from"./utils-36f3a862.js";const P=new WeakSet;function Oe(e,o=e.dataset){const n=He(o),t=e.querySelector(".select-options"),B=e.querySelector(".select-label"),a=Math.random().toString(36).substr(2,9);if(!B||!t||t.disabled||P.has(e))return;let u=!1;const Ce=[...t.selectedOptions];let b=t.querySelector('option[value=""][disabled]');const H=Ce.filter(r=>!V(r));N(t,H.length);const D=new WeakMap,A=new WeakMap,j=new z,q=new z,_=p("button",{type:"button",title:B.textContent,class:"select-toggle dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false","aria-controls":`list-${a}`},[p("span",{"data-count":H.length||"",class:"select-status",role:"status",ref:q},H.length?Y(H,n.smallPattern):b?M(b.label,n.smallPattern):"")]);function K(){return[t.multiple&&n.allLabel?p("button",{ref:j,type:"button",class:"select-option multiple dropdown-item",onclick(r){const l=!J(t);for(const c of t.options)c.disabled||(c.selected=l);t.dispatchEvent(new window.Event("change",{bubbles:!0})),r.preventDefault()}},n.allLabel):null,...[...t.children].map(function r(l,c){if(l.nodeName==="OPTGROUP"){const f=M(l.label,n.smallPattern);let s=[...l.children].map(r);const d=new z,C=new z;let i=!0;if(n.groupToggle){const F=p("fieldset",{"data-bs-target":`#list-${a}`,id:`group-${c}-list-${a}`,class:"select-list dropdown-menu","aria-labelledby":`group-${c}-trigger-${a}`},s);for(const W of l.children)A.set(W,C);s=[F]}return p(n.groupToggle?"div":"fieldset",{ref:d,class:`select-group ${n.groupToggle?"show":""}`},[n.groupToggle?p("button",{ref:C,type:"button",id:`group-${c}-trigger-${a}`,class:`select-option ${t.multiple?"multiple":""} toggle dropdown-item`,"aria-expanded":"true","aria-controls":`group-${c}-list-${a}`,onclick(){i=!i,this.setAttribute("aria-expanded",i?"true":"false"),d.current.classList.toggle("show",i),u=!0;for(const F of l.children)D.get(F).current.classList.toggle("disabled",!i);ze.update()}},f):p("legend",{class:"select-legend"},f),...s])}if(V(l))return null;const{label:m,disabled:g,selected:U}=l,L=new z;return D.set(l,L),p("button",{disabled:g,ref:L,type:"button",class:`select-option dropdown-item ${t.multiple?"multiple":""} ${U?"selected":""}`,onclick(f){l.selected=t.multiple?!l.selected:!0,t.dispatchEvent(new window.Event("change",{bubbles:!0}))}},M(m,n.smallPattern,g?"":void 0))})]}const R=p("div",{id:`list-${a}`,"aria-labelledby":`label-${a}`,class:"select-list dropdown-menu",onclick(){u=u||t.multiple}},K());e.addEventListener("hide.bs.dropdown",function(r){u&&(u=!1,r.preventDefault())}),t.addEventListener("change",function(){var f;(f=j.current)==null||f.classList.toggle("selected",J(t));const r=new Map;for(const s of t.options){if(s.disabled)continue;const d=D.get(s);if(d==null||d.current.classList.toggle("selected",s.selected),A.has(s)){const C=A.get(s);let i=r.get(C);s.selected?i?i==="unselected"&&(i="indeterminate"):i="selected":i==="selected"?i="indeterminate":i||(i="unselected"),r.set(C,i)}}for(const[s,d]of r)s.current.classList.toggle("selected",d==="selected"),s.current.classList.toggle("indeterminate",d==="indeterminate");const l=[...t.selectedOptions].filter(s=>!V(s)),{current:c}=q;N(t,l.length),c.dataset.count=l.length||"";const m=l.length?l:b?[b]:[],[g,...U]=c.childNodes,L=m.length?Y(m,n.smallPattern):[""];for(const s of U)s.remove();g.replaceWith(...L)}),e.classList.add("initialized"),B.id=`label-${a}`,t.after(_,R);const ze=new Ie(_);P.add(e);const Ge=(r,l)=>{for(const c of r)if(c.type==="childList"||c.type==="carachterData"){const m=document.createDocumentFragment();m.append(...K().filter(g=>g)),R.innerHTML="",R.append(m),b=b=t.querySelector('option[value=""][disabled]'),t.dispatchEvent(new window.Event("change"))}};new window.MutationObserver(Ge).observe(t,{attributes:!1,childList:!0,subtree:!0,characterData:!0})}function He(e){let{smallPattern:o,allLabel:n,groupToggle:t}=e;return o&&!(o instanceof RegExp)&&(o=new RegExp(o)),typeof t<"u"&&(t=t!==!1),{smallPattern:o,allLabel:n,groupToggle:t}}function N(e,o){const n=e.closest(".form-group");n&&n.classList.toggle("has-valid",o)}function V(e){const{value:o,disabled:n,hidden:t}=e;return!o&&n&&t}function J(e){return e.selectedOptions.length===e.options.length}function Y(e,o){return e.reduce(function(n,t){return n.length&&n.push(", "),n.push(...M(t.label,o)),n},[])}function M(e,o,n="text-muted"){const t=e.match(o);return t?[e.replace(o,""),p("small",{class:n},t[1]||t[0])]:[e]}const Le=`<div class="row">
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
`,Me=`<div class="row">
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
                <select class="select-options" name="timezone" id="select-required" required>
                    <option>Stockholm</option>
                    <option selected>Göteborg</option>
                    <option>Malmö</option>
                    <option>Umeå</option>
                </select>
            </div>
        </form>
    </div>

    <div class="col-md-6">
        <p class="text-sm mt-15 mb-05 text-muted">Default value</p>
        <form class="form-group">
            <div class="select">
                <label class="select-label" for="select-default-value">City</label>
                <select class="select-options" name="timezone" id="select-default-value" required>
                    <option disabled hidden value="">Select city</option>
                    <option value="stockholm">Stockholm</option>
                    <option value="göteborg" selected>Göteborg</option>
                    <option value="malmö">Malmö</option>
                    <option value="umeå">Umeå</option>
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
                <select class="select-options" name="timezone" id="select-toggle-groups">
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
                <select class="select-options" name="timezone" id="select-disabled" disabled>
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
                <select class="select-options" name="timezone" id="select-disabled-options">
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
`;function E(e){if(e)for(const o of e.querySelectorAll(".select"))Oe(o)}const{useEffect:T,useState:w}=__STORYBOOK_MODULE_CLIENT_API__,De={title:"Forms/Select",parameters:{backgrounds:{default:"white"},badges:["stable"]},argTypes:{selected:{control:"select",options:["None","Stockholm","Göteborg","Malmö","Umeå"],mapping:{None:""}},label:{control:"text",description:"Label to the select element",table:{defaultValue:{summary:"Stad"},type:{summary:"string"}}}}},G=Te(()=>{const[e]=w(k);return T(()=>E(document.getElementById(e)),[]),we`
    <div id="${e}">${Me}</div>
  `}),I=Te(()=>{const[e]=w(k);return T(()=>E(document.getElementById(e)),[]),we`
    <div id="${e}">${Le}</div>
  `}),Z=e=>{const[o]=w(k),n=["Stockholm","Göteborg","Malmö","Umeå"];function t(B){return n.map(a=>`
        <option
          value="${a}"
          ${B===a?"selected":""}
        >${a}</option>
      `).join("")}return T(()=>{E(document.getElementById(o))},[e]),`
    <div id="${o}">
      <form class="form-group">
        <div class="select ${e.labelInside?"inside":""}">
          <label class="select-label" for="select">${e.label||"Stad"}</label>
          <select
            class="select-options"
            name="timezone"
            id="select"
            ${e.disabled===!0?"disabled":""}
            ${e.multiple?"multiple":""}
          >
            <option value="" ${e.selected===""?"selected":""} disabled hidden>
              Välj stad
            </option>
            ${t(e.selected)}
          </select>
        </div>
      </form>
    </div>
  `},Ae=e=>{const[o]=w(k);return T(()=>{E(document.getElementById(o))},[e]),`
    <div id="${o}">
      <form class="form-group">
        <div class="select" data-small-pattern="\\((.+?)\\)">
          <label class="select-label" for="select-${o}">Stad</label>
          <select
            class="select-options"
            name="timezone"
            id="select-${o}"
            ${e.multiple?"multiple":""}>
            <option value="" selected disabled hidden>Välj stad</option>
            <option value="stockholm">Stockholm (Stockholm)</option>
            <option value="göteborg">Göteborg (Västra Götaland)</option>
            <option value="malmö">Malmö (Skåne)</option>
            <option value="umeå">Umeå (Västerbottens)</option>
          </select>
        </div>
      </form>
    </div>
  `},v=Z.bind({});v.args={selected:"",disabled:!1,multiple:!1};const h=Z.bind({});h.args={disabled:!0,selected:""};const S=Z.bind({});S.args={labelInside:!0,selected:""};const y=Ae.bind({});y.args={multiple:!1};const Be=e=>{const[o]=w(k);return T(()=>{E(document.getElementById(o))},[e]),`
    <div id="${o}">
      <form class="form-group">
        <div class="select" ${e.groupToggle?"data-group-toggle":""}>
          <label class="select-label" for="select-groups">Timezone</label>
          <select
            class="select-options"
            name="timezone"
            id="select-groups"
            ${e.multiple?"multiple":""}>
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
  `},O=e=>{const[o]=w(k);return T(()=>{E(document.getElementById(o))},[e]),`
    <div id="${o}">
      <form class="form-group">
        <div class="select">
          <label class="select-label" for="select">${e.label||"Stad"}</label>
          <select
            class="select-options"
            name="timezone"
            id="select"
            ${e.multiple?"multiple":""}>
            <option value="" selected disabled hidden>Välj stad</option>
            <option value="stockholm" disabled>Stockholm</option>
            <option value="göteborg">Göteborg</option>
            <option value="malmö" disabled>Malmö</option>
            <option value="umeå">Umeå</option>
          </select>
        </div>
      </form>
    </div>
  `},$=Be.bind({});$.args={groupToggle:!1,multiple:!1};const x=Be.bind({});x.args={groupToggle:!0,multiple:!1};var Q,X,ee;G.parameters={...G.parameters,docs:{...(Q=G.parameters)==null?void 0:Q.docs,source:{originalSource:`storyWrapper(() => {
  const [id] = useState(uid);
  useEffect(() => selectExample(document.getElementById(id)), []);
  return html\`
    <div id="\${id}">\${Single}</div>
  \`;
})`,...(ee=(X=G.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};var te,oe,ne;I.parameters={...I.parameters,docs:{...(te=I.parameters)==null?void 0:te.docs,source:{originalSource:`storyWrapper(() => {
  const [id] = useState(uid);
  useEffect(() => selectExample(document.getElementById(id)), []);
  return html\`
    <div id="\${id}">\${Multiple}</div>
  \`;
})`,...(ne=(oe=I.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var le,se,ie;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`args => {
  const [id] = useState(uid);
  const options = ['Stockholm', 'Göteborg', 'Malmö', 'Umeå'];
  function renderOptions(selected) {
    return options.map(option => {
      const elem = \`
        <option
          value="\${option}"
          \${selected === option ? 'selected' : ''}
        >\${option}</option>
      \`;
      return elem;
    }).join('');
  }
  useEffect(() => {
    selectExample(document.getElementById(id));
  }, [args]);
  return \`
    <div id="\${id}">
      <form class="form-group">
        <div class="select \${args.labelInside ? 'inside' : ''}">
          <label class="select-label" for="select">\${args.label || 'Stad'}</label>
          <select
            class="select-options"
            name="timezone"
            id="select"
            \${args.disabled === true ? 'disabled' : ''}
            \${args.multiple ? 'multiple' : ''}
          >
            <option value="" \${args.selected === '' ? 'selected' : ''} disabled hidden>
              Välj stad
            </option>
            \${renderOptions(args.selected)}
          </select>
        </div>
      </form>
    </div>
  \`;
}`,...(ie=(se=v.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ae,re,ce;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`args => {
  const [id] = useState(uid);
  const options = ['Stockholm', 'Göteborg', 'Malmö', 'Umeå'];
  function renderOptions(selected) {
    return options.map(option => {
      const elem = \`
        <option
          value="\${option}"
          \${selected === option ? 'selected' : ''}
        >\${option}</option>
      \`;
      return elem;
    }).join('');
  }
  useEffect(() => {
    selectExample(document.getElementById(id));
  }, [args]);
  return \`
    <div id="\${id}">
      <form class="form-group">
        <div class="select \${args.labelInside ? 'inside' : ''}">
          <label class="select-label" for="select">\${args.label || 'Stad'}</label>
          <select
            class="select-options"
            name="timezone"
            id="select"
            \${args.disabled === true ? 'disabled' : ''}
            \${args.multiple ? 'multiple' : ''}
          >
            <option value="" \${args.selected === '' ? 'selected' : ''} disabled hidden>
              Välj stad
            </option>
            \${renderOptions(args.selected)}
          </select>
        </div>
      </form>
    </div>
  \`;
}`,...(ce=(re=h.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};var pe,de,me;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`args => {
  const [id] = useState(uid);
  const options = ['Stockholm', 'Göteborg', 'Malmö', 'Umeå'];
  function renderOptions(selected) {
    return options.map(option => {
      const elem = \`
        <option
          value="\${option}"
          \${selected === option ? 'selected' : ''}
        >\${option}</option>
      \`;
      return elem;
    }).join('');
  }
  useEffect(() => {
    selectExample(document.getElementById(id));
  }, [args]);
  return \`
    <div id="\${id}">
      <form class="form-group">
        <div class="select \${args.labelInside ? 'inside' : ''}">
          <label class="select-label" for="select">\${args.label || 'Stad'}</label>
          <select
            class="select-options"
            name="timezone"
            id="select"
            \${args.disabled === true ? 'disabled' : ''}
            \${args.multiple ? 'multiple' : ''}
          >
            <option value="" \${args.selected === '' ? 'selected' : ''} disabled hidden>
              Välj stad
            </option>
            \${renderOptions(args.selected)}
          </select>
        </div>
      </form>
    </div>
  \`;
}`,...(me=(de=S.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ue,be,ge;y.parameters={...y.parameters,docs:{...(ue=y.parameters)==null?void 0:ue.docs,source:{originalSource:`args => {
  const [id] = useState(uid);
  useEffect(() => {
    selectExample(document.getElementById(id));
  }, [args]);
  return \`
    <div id="\${id}">
      <form class="form-group">
        <div class="select" data-small-pattern="\\\\((.+?)\\\\)">
          <label class="select-label" for="select-\${id}">Stad</label>
          <select
            class="select-options"
            name="timezone"
            id="select-\${id}"
            \${args.multiple ? 'multiple' : ''}>
            <option value="" selected disabled hidden>Välj stad</option>
            <option value="stockholm">Stockholm (Stockholm)</option>
            <option value="göteborg">Göteborg (Västra Götaland)</option>
            <option value="malmö">Malmö (Skåne)</option>
            <option value="umeå">Umeå (Västerbottens)</option>
          </select>
        </div>
      </form>
    </div>
  \`;
}`,...(ge=(be=y.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var fe,ve,he;O.parameters={...O.parameters,docs:{...(fe=O.parameters)==null?void 0:fe.docs,source:{originalSource:`args => {
  const [id] = useState(uid);
  useEffect(() => {
    selectExample(document.getElementById(id));
  }, [args]);
  return \`
    <div id="\${id}">
      <form class="form-group">
        <div class="select">
          <label class="select-label" for="select">\${args.label || 'Stad'}</label>
          <select
            class="select-options"
            name="timezone"
            id="select"
            \${args.multiple ? 'multiple' : ''}>
            <option value="" selected disabled hidden>Välj stad</option>
            <option value="stockholm" disabled>Stockholm</option>
            <option value="göteborg">Göteborg</option>
            <option value="malmö" disabled>Malmö</option>
            <option value="umeå">Umeå</option>
          </select>
        </div>
      </form>
    </div>
  \`;
}`,...(he=(ve=O.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};var Se,ye,$e;$.parameters={...$.parameters,docs:{...(Se=$.parameters)==null?void 0:Se.docs,source:{originalSource:`args => {
  const [id] = useState(uid);
  useEffect(() => {
    selectExample(document.getElementById(id));
  }, [args]);
  return \`
    <div id="\${id}">
      <form class="form-group">
        <div class="select" \${args.groupToggle ? 'data-group-toggle' : ''}>
          <label class="select-label" for="select-groups">Timezone</label>
          <select
            class="select-options"
            name="timezone"
            id="select-groups"
            \${args.multiple ? 'multiple' : ''}>
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
  \`;
}`,...($e=(ye=$.parameters)==null?void 0:ye.docs)==null?void 0:$e.source}}};var xe,ke,Ee;x.parameters={...x.parameters,docs:{...(xe=x.parameters)==null?void 0:xe.docs,source:{originalSource:`args => {
  const [id] = useState(uid);
  useEffect(() => {
    selectExample(document.getElementById(id));
  }, [args]);
  return \`
    <div id="\${id}">
      <form class="form-group">
        <div class="select" \${args.groupToggle ? 'data-group-toggle' : ''}>
          <label class="select-label" for="select-groups">Timezone</label>
          <select
            class="select-options"
            name="timezone"
            id="select-groups"
            \${args.multiple ? 'multiple' : ''}>
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
  \`;
}`,...(Ee=(ke=x.parameters)==null?void 0:ke.docs)==null?void 0:Ee.source}}};const Re=["single","multiple","DefaultButton","Disabled","LabelInside","SmallText","DisabledOptions","OptionGroups","OptionToggleGroup"],Ve=Object.freeze(Object.defineProperty({__proto__:null,DefaultButton:v,Disabled:h,DisabledOptions:O,LabelInside:S,OptionGroups:$,OptionToggleGroup:x,SmallText:y,__namedExportsOrder:Re,default:De,multiple:I,single:G},Symbol.toStringTag,{value:"Module"}));export{v as D,S as L,$ as O,Ve as S,y as a,x as b,h as c,O as d};
//# sourceMappingURL=select.stories-8bb34ad4.js.map
