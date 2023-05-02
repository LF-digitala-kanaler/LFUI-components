import{s as v}from"./select-315e9a1b.js";import{u as r,h as c}from"./utils-cfbb8c9c.js";const g=`<div class="row">
  <div class="col-md-6">
    <p class="text-sm mt-15 mb-05 text-muted">Default</p>
    <form class="form-group">
      <div class="select">
        <label class="select-label" for="select-multiple">Berries</label>
        <select multiple class="select-options" name="berries" id="select-multiple">
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
`,f=`<div class="row">
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
`;function d(e){if(e)for(const u of e.querySelectorAll(".select"))v(u)}const{useEffect:m,useState:b}=__STORYBOOK_MODULE_CLIENT_API__,h={title:"Forms/Select"},o=()=>{const[e]=b(r);return m(()=>d(document.getElementById(e)),[]),c`
    <div id="${e}">${f}</div>
  `},n=()=>{const[e]=b(r);return m(()=>d(document.getElementById(e)),[]),c`
    <div id="${e}">${g}</div>
  `};var t,l,s;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const [id] = useState(uid);
  useEffect(() => selectExample(document.getElementById(id)), []);
  return html\`
    <div id="\${id}">\${Single}</div>
  \`;
}`,...(s=(l=o.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var i,p,a;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const [id] = useState(uid);
  useEffect(() => selectExample(document.getElementById(id)), []);
  return html\`
    <div id="\${id}">\${Multiple}</div>
  \`;
}`,...(a=(p=n.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};const B=["single","multiple"];export{B as __namedExportsOrder,h as default,n as multiple,o as single};
//# sourceMappingURL=select.stories-02bfebfb.js.map
