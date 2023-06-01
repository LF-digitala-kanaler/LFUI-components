import{h as i,u}from"./utils-88afe92d.js";import"./hooks.module-446c997e.js";import"./jsxRuntime.module-779d8325.js";const b=`<article class="card">
  <h3 class="card-header">Become a banking customer online</h3>
  <div class="card-block">
    <p class="card-text">Become a banking customer online in five easy steps. If you have a personal identity number and a BankID, you can become a banking customer instantly online.</p>
  </div>
</article>
`,m=`<p class="text-sm mb-05 text-muted">Expanded</p>
<button
  class="collapse-toggle"
  role="button"
  type="button"
  aria-controls="collapsible1"
  data-bs-toggle="collapse"
  data-bs-target="#collapsible1"
  aria-expanded="true">
  Become a banking customer online
</button>
<article class="collapse show" id="collapsible1">
  <h1 class="visually-hidden">Become a banking customer online</h1>
  <div class="card mb-0">
    <div class="card-block">
      <p class="card-text">
        Become a banking customer online in five easy steps. If you have a
        personal identity number and a BankID, you can become a banking customer
        instantly online.
      </p>
    </div>
  </div>
</article>

<p class="text-sm mt-15 mb-05 text-muted">Collapsed</p>
<button
  class="collapse-toggle"
  role="button"
  type="button"
  aria-controls="collapsible2"
  data-bs-toggle="collapse"
  data-bs-target="#collapsible2"
  aria-expanded="false">
  How to become a banking customer
</button>
<article class="collapse" id="collapsible2">
  <h1 class="visually-hidden">How to become a banking customer</h1>
  <div class="card mb-0">
    <div class="card-block">
      <p class="card-text">
        Fill in the form on the contact page and we will contact you to make an
        appointment, or you can give us a call.
      </p>
    </div>
  </div>
</article>

<p class="text-sm mt-15 mb-05 text-muted">Lazy load</p>
<button
  class="collapse-toggle js-asyncCollapse"
  role="button"
  type="button"
  aria-controls="collapsible3"
  data-bs-toggle="collapse:async"
  data-bs-target="#collapsible3"
  aria-expanded="false">
  Your transactions
</button>
<div class="collapse" id="collapsible3"></div>
`,g=e=>{if(!e)return;const t=e.querySelector(".js-asyncCollapse");if(!t)return;const p=e.querySelector(t.dataset.bsTarget);t.addEventListener("click",function(){setTimeout(function(){p.append(i`
          <table class="table mb-0">
            <colgroup>
              <col class="table-cell-fit" />
              <col class="table-cell-fill" />
              <col class="table-cell-fit" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Description</th>
                <th scope="col" class="text-nowrap">Sum kr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="table-cell-number"><date>2016-06-16</date></td>
                <td>Phil's Burger</td>
                <td>-65,00</td>
              </tr>
              <tr>
                <td class="table-cell-number"><date>2016-06-14</date></td>
                <td>Oliver Twist</td>
                <td>-90,00</td>
              </tr>
              <tr>
                <td class="table-cell-number"><date>2016-06-13</date></td>
                <td>iTunes</td>
                <td>-29,00</td>
              </tr>
            </tbody>
          </table>
        `),t.dispatchEvent(new window.Event("done"))},2500)},{once:!0})},{useEffect:y,useState:h}=__STORYBOOK_MODULE_CLIENT_API__,k={title:"Page content/Panel",parameters:{backgrounds:{default:"gray"}}},a=()=>b,n=()=>{const[e]=h(u);return y(()=>{g(document.getElementById(e))},[]),i`
    <div id="${e}">${m}</div>
  `};var l,s,o;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"() => AlwaysOpen",...(o=(s=a.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var c,r,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const [id] = useState(uid);
  useEffect(() => {
    panelExample(document.getElementById(id));
  }, []);
  return html\`
    <div id="\${id}">\${CollapseExpand}</div>
  \`;
}`,...(d=(r=n.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};const E=["alwaysOpen","collapseExpand"];export{E as __namedExportsOrder,a as alwaysOpen,n as collapseExpand,k as default};
//# sourceMappingURL=panel.stories-ec3a10d8.js.map
