import{h as g,u as l}from"./utils-cfbb8c9c.js";const d=e=>{if(!e)return;const t=e.querySelector(".js-asyncCollapse");if(!t)return;const n=e.querySelector(t.dataset.bsTarget);t.addEventListener("click",function(){setTimeout(function(){n.append(g`
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
        `),t.dispatchEvent(new window.Event("done"))},1500)},{once:!0})},{useEffect:i,useState:y}=__STORYBOOK_MODULE_CLIENT_API__,f={title:"Page content/Panel",parameters:{backgrounds:{default:"gray"},badges:["stable"]}};function v({header:e,text:t}){return`
  <article class="card">
    <h3 class="card-header">${e}</h3>
    <div class="card-block">
      <p class="card-text">${t}</p>
    </div>
  </article>
  `}function u({header:e,text:t,collapsed:n=!1}){const[s]=y(l);return i(()=>d(document.getElementById(s)),[]),`
  <button
    class="collapse-toggle"
    role="button"
    type="button"
    aria-controls="${s}"
    data-bs-toggle="collapse"
    data-bs-target="#${s}"
    aria-expanded="${n?"false":"true"}">
    ${e}
  </button>
  <article class="collapse ${n?"":"show"}" id="${s}">
    <h1 class="visually-hidden">${e}</h1>
    <div class="card mb-0">
      <div class="card-block">
        <p class="card-text">
          ${t}
        </p>
      </div>
    </div>
  </article>
  `}const p=v.bind({});p.args={header:"Become a banking customer online",text:"Become a banking customer online in five easy steps. If you have a personal identity number and a BankID, you can become a banking customer instantly online."};const b=u.bind({});b.args={header:"Become a banking customer online",text:"Become a banking customer online in five easy steps. If you have a personal identity number and a BankID, you can become a banking customer instantly online.",collapsed:!1};const m=u.bind({});m.args={header:"Become a banking customer online",text:"Become a banking customer online in five easy steps. If you have a personal identity number and a BankID, you can become a banking customer instantly online.",collapsed:!0};const a=()=>{const e=l(),t=l();return i(()=>d(document.getElementById(t)),[]),`
  <div id="${t}">
  <button
    class="collapse-toggle js-asyncCollapse"
    role="button"
    type="button"
    aria-controls="${e}"
    data-bs-toggle="collapse:async"
    data-bs-target="#${e}"
    aria-expanded="false">
    Your transactions
  </button>
  <div class="collapse" id="${e}"></div>
  </div>
  `};var o,c,r;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const id = uid();
  const wrapperId = uid();
  useEffect(() => panelExample(document.getElementById(wrapperId)), []);
  return \`
  <div id="\${wrapperId}">
  <button
    class="collapse-toggle js-asyncCollapse"
    role="button"
    type="button"
    aria-controls="\${id}"
    data-bs-toggle="collapse:async"
    data-bs-target="#\${id}"
    aria-expanded="false">
    Your transactions
  </button>
  <div class="collapse" id="\${id}"></div>
  </div>
  \`;
}`,...(r=(c=a.parameters)==null?void 0:c.docs)==null?void 0:r.source}}};const h=["AlwaysOpen","Expanded","Collapsed","LazyLoad"],k=Object.freeze(Object.defineProperty({__proto__:null,AlwaysOpen:p,Collapsed:m,Expanded:b,LazyLoad:a,__namedExportsOrder:h,default:f},Symbol.toStringTag,{value:"Module"}));export{p as A,m as C,b as E,a as L,k as P};
