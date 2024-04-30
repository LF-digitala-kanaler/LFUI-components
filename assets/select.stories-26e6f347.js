import{u,R as B,a as r}from"./utils-cfbb8c9c.js";import"./blocks-fcb2d6b7.js";import"./datepicker-86020d57.js";const de=`<div class="row">
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
                <select class="select-options" name="timezone" id="select-long">
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
                    <option value="" disabled selected>Select asdasd</option>
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
`,A=new WeakSet;function H(l){return l.getAttribute("aria-disabled")!=="true"}function ce(l,e=l.dataset){return new ue(l,e)}class ue{constructor(e,t=e.dataset){this.config=me(t),this.select=e.querySelector(".select-options"),this.label=e.querySelector(".select-label"),this.id=u(),this.selectOpen=!1,this.preventClose=!1,this.clickOutside=void 0,this.hoverFocus=void 0,this.multiselectable=this.select.multiple,this.keyString="",this.typingTimer=void 0,this._menuItems=new WeakMap,this._groups=new WeakMap,this._selectAll=new B,this._status=new B,!(!this.label||!this.select||this.select.disabled||A.has(e))&&(this.initiallySelected=[...this.select.selectedOptions],this.placeholder=this.select.querySelector('option[value=""][disabled]'),this.initiallyValid=this.initiallySelected.filter(o=>!L(o)),D(this.select,this.initiallyValid.length),this.toggle=this.createToggle(),this.list=this.createOptionList(),this.selectableItems=[...this.list.querySelectorAll(".select-option")],this.searchableItems=this.selectableItems.filter(H),this.select.addEventListener("change",o=>{this.onChangeHandler(o)}),e.classList.add("initialized"),this.label.id=`dropdown-label-${this.id}`,this.select.after(this.toggle,this.list),A.add(e),this.initMarkupChangeObserver())}initMarkupChangeObserver(){const e=o=>{for(const s of o)if(s.type==="childList"||s.type==="characterData"){const n=document.createDocumentFragment();n.append(...this.createOptions().filter(i=>i)),this.list.innerHTML="",this.list.append(n),this.placeholder=this.select.querySelector('option[value=""][disabled]'),this.selectableItems=[...this.list.querySelectorAll(".select-option")],this.searchableItems=this.selectableItems.filter(H),this.select.dispatchEvent(new window.Event("change"))}};new window.MutationObserver(e).observe(this.select,{attributes:!1,childList:!0,subtree:!0,characterData:!0})}resolveSibling(e,t){const o=this.selectableItems.length-1,s=this.selectableItems.findIndex(n=>n===e);if(t==="next")return s===o?this.selectableItems[0]:this.selectableItems[s+1];if(t==="prev")return s===0?this.selectableItems[o]:this.selectableItems[s-1]}moveFocusTo(e){const{list:t}=this,o=t.querySelector(".select-option--focus");if(typeof e=="object"&&(e.classList.contains("select-option--focus")||(o.classList.remove("select-option--focus"),e.classList.add("select-option--focus"))),e==="selected"&&(t.querySelector(".select-option--selected")||t.querySelector(".select-option")).classList.add("select-option--focus"),e==="next"||e==="prev"){const s=this.resolveSibling(o,e);o.classList.remove("select-option--focus"),s.classList.add("select-option--focus")}setTimeout(()=>{t.setAttribute("aria-activedescendant",t.querySelector(".select-option--focus").id),this.list.querySelector(".select-option--focus").focus({visible:!0})},0)}onChangeHandler(){var $;($=this._selectAll.current)==null||$.classList.toggle("select-option--selected",C(this.select));const e=new Map;for(const a of this.select.options){const c=this._menuItems.get(a);if(c==null||c.current.classList.toggle("select-option--selected",a.selected),c==null||c.current.setAttribute("aria-selected",a.selected),this._groups.has(a)){const m=this._groups.get(a);let d=e.get(m);a.selected?d?d==="unselected"&&(d="indeterminate"):d="selected":d==="selected"?d="indeterminate":d||(d="unselected"),e.set(m,d)}}for(const[a,c]of e)a.current.classList.toggle("select-option--selected",c==="selected"),a.current.classList.toggle("select-option--indeterminate",c==="indeterminate");const t=[...this.select.selectedOptions].filter(a=>!L(a)),{current:o}=this._status;D(this.select,t.length),o.dataset.count=t.length||"";const s=t.length?t:this.placeholder?[this.placeholder]:[],[n,...i]=o.childNodes,p=s.length?G(s,this.config.smallPattern,this.multiselectable):[""];for(const a of i)a.remove();n.replaceWith(...p)}onClickHandler({target:e}){if(e.classList.contains("select-option")||e.closest(".select-option")){const t=e.classList.contains("select-option")?e:e.closest(".select-option");t.ariaDisabled==="false"&&(this.selectOption(t),this.toggle.focus())}}onKeydownHandler(e){if(e.key==="Enter"||e.key===" "){const t=this.list.querySelector(".select-option--focus");t.ariaDisabled==="true"?e.stopPropagation():t.classList.contains("toggle")?this.toggleGroup(t):(this.selectOption(t),this.multiselectable||this.toggle.focus()),e.preventDefault()}if(e.key==="Escape"&&(this.closeSelect(),this.toggle.focus(),e.preventDefault()),e.key==="Tab"&&this.closeSelect(),e.key==="ArrowDown"&&(this.moveFocusTo("next"),e.preventDefault()),e.key==="ArrowUp"&&(this.moveFocusTo("prev"),e.preventDefault()),e.key==="Home"&&(this.moveFocusTo("first"),e.preventDefault()),e.key==="End"&&(this.moveFocusTo("last"),e.preventDefault()),/^.$/u.test(e.key)){if(this.keyString+=e.key,clearTimeout(this.typingTimer),this.keyString){const t=this.search();this.moveFocusTo(t[0]),this.typingTimer=setTimeout(()=>{this.keyString=""},250)}e.stopPropagation()}}search(){return this.searchableItems.filter(e=>{const t=new RegExp("^"+this.keyString,"gi");return e.textContent.match(t)})}toggleGroup(e){const t=e.closest(".select-group"),o=e.getAttribute("aria-expanded")==="true",s=t.querySelectorAll(".select-list > .select-option");o?(t.classList.remove("show"),s.forEach(n=>n.setAttribute("aria-disabled",!0))):(t.classList.add("show"),s.forEach(n=>n.setAttribute("aria-disabled",!1))),this.moveFocusTo(e),this.selectableItems=[...this.list.querySelectorAll(".select-group:not(.show) .select-option.toggle, .select-group.show .select-option")],e.setAttribute("aria-expanded",!o)}createToggle(){const{id:e}=this;return r("button",{type:"button",class:"select-toggle",id:`dropdown-select-${e}`,"aria-expanded":"false","aria-controls":`list-${e}`,"aria-labelledby":`dropdown-label-${e} dropdown-select-${e}`,"aria-haspopup":"listbox",onclick:()=>{this.toggleSelect(),setTimeout(()=>{this.selectOpen?this.list.focus():this.toggle.focus()},0)},onkeydown:o=>{(o.key==="Enter"||o.key===" ")&&(this.toggleSelect(),setTimeout(()=>{this.selectOpen?this.list.focus():this.toggle.focus()},0),o.preventDefault()),o.key==="Escape"&&(this.closeSelect(),this.toggle.focus(),o.preventDefault()),o.key==="ArrowDown"&&(this.openSelect(),this.list.focus(),o.preventDefault())}},[r("span",{"data-count":this.initiallyValid.length||"",class:"select-status",ref:this._status},[r("span")].concat(this.initiallyValid.length?G(this.initiallyValid,this.config.smallPattern,this.multiselectable):this.placeholder?I(this.placeholder.label,this.config.smallPatter,this.multiselectable):"").concat([r("span")]))])}toggleAll(){const e=!C(this.select);for(const t of this.select.options)t.disabled||(t.selected=e);this.select.dispatchEvent(new window.Event("change"))}createOptionList(){const{id:e,select:t}=this,o=r("div",{id:`list-${e}`,role:"listbox",tabindex:"-1",class:"select-list","aria-labelledby":`dropdown-label-${e}`,"aria-multiselectable":t.multiple,hidden:!0,onclick:()=>{this.preventClose=this.preventClose||t.multiple}},this.createOptions());return o.addEventListener("keydown",s=>this.onKeydownHandler(s)),o.addEventListener("click",s=>this.onClickHandler(s)),o}createOptions(){const{id:e,select:t,config:o,_selectAll:s}=this;return[t.multiple&&o.allLabel?r("span",{ref:s,role:"option",id:`select-all-option-${e}`,class:"select-option select-all-options multiple","aria-selected":C(t),tabindex:"-1",onclick:n=>{this.toggleAll(),n.preventDefault(),n.target.setAttribute("aria-selected",C(t))},onkeydown:n=>{(n.key==="Enter"||n.key===" ")&&(this.toggleAll(),n.preventDefault())}},o.allLabel):null,...[...t.children].map((n,i)=>this.createListItem(n,i))]}createListItem(e,t){return e.nodeName==="OPTGROUP"?this.createGroup(e,t):this.createOptionItem(e,t)}createOptionItem(e,t){if(L(e))return null;const{label:o,disabled:s,selected:n}=e,i=new B;this._menuItems.set(e,i);const p=r("span",{id:`select-option-${t}-${this.id}`,"aria-disabled":s,ref:i,role:"option","aria-selected":n,tabindex:"-1",class:`select-option ${this.select.multiple?"multiple":""} ${n?"selected select-option--selected":""}`},I(o,this.config.smallPattern,s?"":void 0));return p._selectElement=e,p}createGroup(e,t){const{config:o,id:s}=this,n=I(e.label,o.smallPattern);let i=[...e.children].map((c,m)=>this.createListItem(c,m));const p=new B,$=new B;let a=!0;if(o.groupToggle){const c=r("div",{id:`group-${t}-list-${s}`,class:"select-list","aria-labelledby":`group-${t}-trigger-${s}`,role:"listbox"},i);for(const m of e.children)this._groups.set(m,$);i=[c]}return r(o.groupToggle?"div":"fieldset",{ref:p,class:`select-group ${o.groupToggle?"show":""}`,role:o.groupToggle?"group":"","aria-labelledby":`group-${t}-trigger-${s}`},[o.groupToggle?r("button",{type:"button",ref:$,id:`group-${t}-trigger-${s}`,class:`select-option select-group-toggle ${ce.multiple?"multiple":""} toggle`,"aria-expanded":a,tabindex:"-1","aria-controls":`group-${t}-list-${s}`,onclick(){a=!a,this.setAttribute("aria-expanded",a?"true":"false"),p.current.classList.toggle("show",a),this.preventClose=!0}},n):r("legend",{class:"select-legend"},n),...i])}toggleSelect(){this.selectOpen?this.closeSelect():this.openSelect()}closeSelect(){this.list.setAttribute("hidden",!0),this.list.classList.remove("select-list--top"),this.toggle.setAttribute("aria-expanded","false");const e=this.list.querySelectorAll(".select-option");for(const t of e)t.classList.remove("select-option--focus");this.selectOpen=!1,document.removeEventListener("click",this.onClickOutsideHandler),document.removeEventListener("mouseover",this.onMouseoverHandler),setTimeout(()=>{this.toggle.setAttribute("tabindex","0")},0)}openSelect(){const{toggle:e,list:t}=this;this.toggle.setAttribute("tabindex","-1"),this.toggle.setAttribute("aria-expanded","true"),this.list.removeAttribute("hidden"),this.moveFocusTo("selected"),this.selectOpen=!0;const o=t.getBoundingClientRect().bottom;window.innerHeight-o<e.scrollHeight&&t.classList.add("select-list--top"),document.addEventListener("click",this.clickOutside=({target:s})=>{s!==this.toggle&&s!==this.list&&!this.list.contains(s)&&this.closeSelect()}),this.list.addEventListener("mouseover",this.hoverFocus=({target:s})=>{const n=s.closest(".select-option");n&&this.moveFocusTo(n)})}selectOption(e){const t=this.list.querySelectorAll(".select-option");if(!this.multiselectable)for(const o of t)o.classList.remove("select-option--selected"),o.setAttribute("aria-selected","false"),o.selectElement&&(o._selectElement.selected=!1);e.classList.add("select-option--selected"),e.setAttribute("aria-selected","true"),e._selectElement&&(e._selectElement.selected=this.multiselectable?!e._selectElement.selected:!0),this.multiselectable||this.closeSelect(),this.select.dispatchEvent(new window.Event("change",{bubbles:!0}))}}function me(l){let{smallPattern:e,allLabel:t,groupToggle:o}=l;return e&&!(e instanceof RegExp)&&(e=new RegExp(e)),typeof o<"u"&&(o=o!==!1),{smallPattern:e,allLabel:t,groupToggle:o}}function D(l,e){const t=l.closest(".form-group");t&&t.classList.toggle("has-valid",e)}function L(l){const{value:e,disabled:t}=l;return!e&&t}function C(l){return l.selectedOptions.length===l.options.length}function G(l,e,t){const o=l.reduce(function(i,p){return i.length&&i.push(", "),i.push(...I(p.label,e)),i},[]),s=l.length>1?"valda":"vald",n=l.filter(i=>i.value).length;return[r("span",{class:"sr-only"},t?`${n} ${s} `:""),...o,n?r("span",{class:"select-count","aria-hidden":!0},t?n:""):""]}function I(l,e,t="text-muted"){const o=l.match(e);return o?[l.replace(e,""),r("small",{class:t},o[1]||o[0])]:[l]}function S(l){if(l)for(const e of l.querySelectorAll(".select"))ce(e)}const{useEffect:x,useState:k}=__STORYBOOK_MODULE_CLIENT_API__,be={title:"Forms/Select",parameters:{backgrounds:{default:"white"},badges:["stable"]},argTypes:{selected:{control:"select",options:["None","Stockholm","Göteborg","Malmö","Umeå"],mapping:{None:""}},label:{control:"text",description:"Label to the select element",table:{defaultValue:{summary:"Stad"},type:{summary:"string"}}}}},T=()=>{const[l]=k(u);return x(()=>{S(document.getElementById(l))},[]),`
    <div id="${l}">
      ${de}
    </div>
  `},E=()=>{const[l]=k(u);return x(()=>S(document.getElementById(l)),[]),`
    <div id="${l}">
    <div class="row">
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
          <div class="select" data-small-pattern="\\(.+?\\)">
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
          <div class="select" data-group-toggle data-small-pattern="((d+))$">
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
    </div>
  `},O=l=>{const[e]=k(u),t=["Stockholm","Göteborg","Malmö","Umeå"];function o(s){return t.map(n=>`
        <option
          value="${n}"
          ${s===n?"selected":""}
        >${n}</option>
      `).join("")}return x(()=>{S(document.getElementById(e))},[l]),`
    <div id="${e}">
      <form class="form-group">
        <div class="select ${l.labelInside?"inside":""}">
          <label class="select-label" for="select-${e}">${l.label||"Stad"}</label>
          <select
            class="select-options"
            name="timezone"
            id="select-${e}"
            ${l.disabled===!0?"disabled":""}
            ${l.multiple?"multiple":""}
          >
            <option value="" ${l.selected===""?"selected":""} disabled>
              Välj stad
            </option>
            ${o(l.selected)}
          </select>
        </div>
      </form>
    </div>
  `},ge=l=>{const[e]=k(u);return x(()=>{S(document.getElementById(e))},[l]),`
    <div id="${e}">
      <form class="form-group">
        <div class="select" data-small-pattern="\\((.+?)\\)">
          <label class="select-label" for="select-${e}">Stad</label>
          <select
            class="select-options"
            name="timezone"
            id="select-${e}"
            ${l.multiple?"multiple":""}>
            <option value="" selected disabled hidden>Välj stad</option>
            <option value="stockholm">Stockholm (Stockholm)</option>
            <option value="göteborg">Göteborg (Västra Götaland)</option>
            <option value="malmö">Malmö (Skåne)</option>
            <option value="umeå">Umeå (Västerbottens)</option>
          </select>
        </div>
      </form>
    </div>
  `},b=O.bind({});b.args={selected:"",disabled:!1,multiple:!1};const g=O.bind({});g.args={disabled:!0,selected:""};const f=O.bind({});f.args={labelInside:!0,selected:""};const h=ge.bind({});h.args={multiple:!1};const pe=l=>{const[e]=k(u);return x(()=>{S(document.getElementById(e))},[l]),`
    <div id="${e}">
      <form class="form-group">
        <div class="select" ${l.groupToggle?"data-group-toggle":""}>
          <label class="select-label" for="select-groups">Timezone</label>
          <select
            class="select-options"
            name="timezone"
            id="select-groups"
            ${l.multiple?"multiple":""}>
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
  `},w=l=>{const[e]=k(u);return x(()=>{S(document.getElementById(e))},[l]),`
    <div id="${e}">
      <form class="form-group">
        <div class="select">
          <label class="select-label" for="select-${e}">${l.label||"Stad"}</label>
          <select
            class="select-options"
            name="timezone"
            id="select-${e}"
            ${l.multiple?"multiple":""}>
            <option value="" selected disabled>Välj stad</option>
            <option value="stockholm" disabled>Stockholm</option>
            <option value="göteborg">Göteborg</option>
            <option value="malmö" disabled>Malmö</option>
            <option value="umeå">Umeå</option>
          </select>
        </div>
      </form>
    </div>
  `},v=pe.bind({});v.args={groupToggle:!1,multiple:!1};const y=pe.bind({});y.args={groupToggle:!0,multiple:!1};var z,R,_;T.parameters={...T.parameters,docs:{...(z=T.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  const [id] = useState(uid);
  useEffect(() => {
    selectExample(document.getElementById(id));
  }, []);
  return \`
    <div id="\${id}">
      \${SingleMarkup}
    </div>
  \`;
}`,...(_=(R=T.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var q,F,M;E.parameters={...E.parameters,docs:{...(q=E.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const [id] = useState(uid);
  useEffect(() => selectExample(document.getElementById(id)), []);
  return \`
    <div id="\${id}">
    <div class="row">
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
          <div class="select" data-small-pattern="\\\\(.+?\\\\)">
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
    </div>
  \`;
}`,...(M=(F=E.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var V,U,j;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`args => {
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
          <label class="select-label" for="select-\${id}">\${args.label || 'Stad'}</label>
          <select
            class="select-options"
            name="timezone"
            id="select-\${id}"
            \${args.disabled === true ? 'disabled' : ''}
            \${args.multiple ? 'multiple' : ''}
          >
            <option value="" \${args.selected === '' ? 'selected' : ''} disabled>
              Välj stad
            </option>
            \${renderOptions(args.selected)}
          </select>
        </div>
      </form>
    </div>
  \`;
}`,...(j=(U=b.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var K,Z,P;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
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
          <label class="select-label" for="select-\${id}">\${args.label || 'Stad'}</label>
          <select
            class="select-options"
            name="timezone"
            id="select-\${id}"
            \${args.disabled === true ? 'disabled' : ''}
            \${args.multiple ? 'multiple' : ''}
          >
            <option value="" \${args.selected === '' ? 'selected' : ''} disabled>
              Välj stad
            </option>
            \${renderOptions(args.selected)}
          </select>
        </div>
      </form>
    </div>
  \`;
}`,...(P=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:P.source}}};var W,N,J;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
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
          <label class="select-label" for="select-\${id}">\${args.label || 'Stad'}</label>
          <select
            class="select-options"
            name="timezone"
            id="select-\${id}"
            \${args.disabled === true ? 'disabled' : ''}
            \${args.multiple ? 'multiple' : ''}
          >
            <option value="" \${args.selected === '' ? 'selected' : ''} disabled>
              Välj stad
            </option>
            \${renderOptions(args.selected)}
          </select>
        </div>
      </form>
    </div>
  \`;
}`,...(J=(N=f.parameters)==null?void 0:N.docs)==null?void 0:J.source}}};var Y,Q,X;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`args => {
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
}`,...(X=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var ee,te,oe;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`args => {
  const [id] = useState(uid);
  useEffect(() => {
    selectExample(document.getElementById(id));
  }, [args]);
  return \`
    <div id="\${id}">
      <form class="form-group">
        <div class="select">
          <label class="select-label" for="select-\${id}">\${args.label || 'Stad'}</label>
          <select
            class="select-options"
            name="timezone"
            id="select-\${id}"
            \${args.multiple ? 'multiple' : ''}>
            <option value="" selected disabled>Välj stad</option>
            <option value="stockholm" disabled>Stockholm</option>
            <option value="göteborg">Göteborg</option>
            <option value="malmö" disabled>Malmö</option>
            <option value="umeå">Umeå</option>
          </select>
        </div>
      </form>
    </div>
  \`;
}`,...(oe=(te=w.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var le,se,ne;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`args => {
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
}`,...(ne=(se=v.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var ie,ae,re;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`args => {
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
}`,...(re=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};const fe=["Single","Multiple","DefaultButton","Disabled","LabelInside","SmallText","DisabledOptions","OptionGroups","OptionToggleGroup"],Se=Object.freeze(Object.defineProperty({__proto__:null,DefaultButton:b,Disabled:g,DisabledOptions:w,LabelInside:f,Multiple:E,OptionGroups:v,OptionToggleGroup:y,Single:T,SmallText:h,__namedExportsOrder:fe,default:be},Symbol.toStringTag,{value:"Module"}));export{b as D,f as L,v as O,Se as S,h as a,y as b,g as c,w as d};
