import{u as X}from"./utils-f9cf1c58.js";const Z=d=>{if(!d)return;function U(n,t,l){const c=n.tBodies[0];let s=Array.prototype.slice.call(c.rows,0);const e=document.querySelectorAll("#table-sort th");let a;for(l=-(+l||-1),s=s.sort(function(J,W){return l*J.cells[t].textContent.trim().localeCompare(W.cells[t].textContent.trim())}),a=0;a<s.length;++a)c.appendChild(s[a]);if(e[t].getAttribute("aria-sort")==="none"){for(a=0;a<e.length;a++)e[a].setAttribute("aria-sort","none");e[t].setAttribute("aria-sort","descending")}else e[t].getAttribute("aria-sort")==="descending"?e[t].setAttribute("aria-sort","ascending"):e[t].getAttribute("aria-sort")==="ascending"&&e[t].setAttribute("aria-sort","descending")}function Y(n){let t=n.tHead,l;if(t&&(t=t.rows[0])&&(t=t.cells),t)l=t.length;else return;for(;--l>=0;)(function(c){let s=1;t[c].addEventListener("click",function(){U(n,c,s=1-s)})})(l)}for(const n of d.querySelectorAll("table"))Y(n)},{useEffect:tt,useState:et}=__STORYBOOK_MODULE_CLIENT_API__,at={title:"Page content/Tables",parameters:{backgrounds:{default:"gray"},badges:["stable"]}},r=()=>`
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col" class="d-none d-md-table-cell text-nowrap">Account #</th>
        <th scope="col" class="text-nowrap">Balance kr</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="text-nowrap">Billys bucks</td>
        <td class="text-nowrap d-none d-md-table-cell">9810.01.345.89</td>
        <td class="table-cell-number">-250</td>
      </tr>
      <tr>
        <td class="text-nowrap">Donnas dollars</td>
        <td class="text-nowrap d-none d-md-table-cell">9810.01.345.89</td>
        <td class="table-cell-number">12 000</td>
      </tr>
      <tr>
        <td class="text-nowrap">Savings</td>
        <td class="text-nowrap d-none d-md-table-cell">9810.01.345.89</td>
        <td class="table-cell-number">53 000</td>
      </tr>
    </tbody>
  </table>
  `,o=()=>`
  <table class="table table-sm">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col" class="d-none d-md-table-cell text-nowrap">Account #</th>
        <th scope="col" class="text-nowrap">Balance kr</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="text-nowrap">Billys bucks</td>
        <td class="text-nowrap d-none d-md-table-cell">9810.01.345.89</td>
        <td class="table-cell-number">-250</td>
      </tr>
      <tr>
        <td class="text-nowrap">Donnas dollars</td>
        <td class="text-nowrap d-none d-md-table-cell">9810.01.345.89</td>
        <td class="table-cell-number">12 000</td>
      </tr>
      <tr>
        <td class="text-nowrap">Savings</td>
        <td class="text-nowrap d-none d-md-table-cell">9810.01.345.89</td>
        <td class="table-cell-number">53 000</td>
      </tr>
    </tbody>
  </table>
`,i=()=>`
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col" class="d-none d-md-table-cell text-nowrap">Account #</th>
        <th scope="col" class="text-nowrap">Balance kr</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="text-nowrap">Billys bucks</td>
        <td class="text-nowrap d-none d-md-table-cell">9810.01.345.89</td>
        <td class="table-cell-number">-250</td>
      </tr>
      <tr>
        <td class="text-nowrap">Donnas dollars</td>
        <td class="text-nowrap d-none d-md-table-cell">9810.01.345.89</td>
        <td class="table-cell-number">12 000</td>
      </tr>
      <tr>
        <td class="text-nowrap">Savings</td>
        <td class="text-nowrap d-none d-md-table-cell">9810.01.345.89</td>
        <td class="table-cell-number">53 000</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th scope="row">Total</th>
        <td class="d-none d-md-table-cell"></td>
        <td class="table-summary">65 000</td>
      </tr>
    </tfoot>
  </table>
  `,b=()=>`
  <table class="table table-varied">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col" class="d-none d-md-table-cell text-nowrap">Account #</th>
        <th scope="col" class="text-nowrap">Balance kr</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="text-nowrap">Billys bucks</td>
        <td class="text-nowrap d-none d-md-table-cell">9810.01.345.89</td>
        <td class="table-cell-number">-250</td>
      </tr>
      <tr>
        <td class="text-nowrap">Donnas dollars</td>
        <td class="text-nowrap d-none d-md-table-cell">9810.01.345.89</td>
        <td class="table-cell-number">12 000</td>
      </tr>
      <tr>
        <td class="text-nowrap">Savings</td>
        <td class="text-nowrap d-none d-md-table-cell">9810.01.345.89</td>
        <td class="table-cell-number">53 000</td>
      </tr>
    </tbody>
  </table>
  `,p=()=>`
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col" class="d-none d-md-table-cell text-nowrap">Account #</th>
        <th scope="col" class="text-nowrap">Balance kr</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th colspan="3" class="th-sub">Regular Accounts</th>
      </tr>
      <tr>
        <td class="text-nowrap">Billys bucks</td>
        <td class="text-nowrap d-none d-md-table-cell">9810.01.345.89</td>
        <td class="table-cell-number">-250</td>
      </tr>
      <tr>
        <td class="text-nowrap">Savings</td>
        <td class="text-nowrap d-none d-md-table-cell">9810.01.345.89</td>
        <td class="table-cell-number">53 000</td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <th colspan="3" class="th-sub">Party Accounts</th>
      </tr>
      <tr>
        <td class="text-nowrap">Billys bucks</td>
        <td class="text-nowrap d-none d-md-table-cell">9810.01.345.89</td>
        <td class="table-cell-number">-250</td>
      </tr>
      <tr>
        <td class="text-nowrap">Savings</td>
        <td class="text-nowrap d-none d-md-table-cell">9810.01.345.89</td>
        <td class="table-cell-number">53 000</td>
      </tr>
    </tbody>
  </table>
  `,u=()=>`
  <table class="table table-clickable">
    <tbody>
      <tr
        aria-haspopup="true"
        aria-expanded="false"
        aria-controls="table-row-1"
        data-bs-toggle="collapse:table-row"
        data-bs-target="#table-row-1">
        <td class="text-nowrap"><button role="button">Billys bucks</button></td>
        <td class="table-cell-number">-250</td>
      </tr>
      <tr class="table-row-collapse">
        <td colspan="4">
          <div class="collapse" aria-expanded="false" id="table-row-1">
            <div class="table-row-collapse-block">
              <p class="text-sm text-legible-width">
                Trust fund etsy twee, mumblecore pop-up vice kale chips tacos
                poutine sartorial art party kinfolk scenester. Marfa austin retro,
                cold-pressed chicharrones pug authentic cred neutra next level
                paleo tilde direct trade farm-to-table.
              </p>
            </div>
          </div>
        </td>
      </tr>
      <tr
        aria-haspopup="true"
        aria-expanded="false"
        aria-controls="table-row-2"
        data-bs-toggle="collapse:table-row"
        data-bs-target="#table-row-2">
        <td class="text-nowrap"><button role="button">Donnas dollars</button></td>
        <td class="table-cell-number">12 000</td>
      </tr>
      <tr class="table-row-collapse">
        <td colspan="4">
          <div class="collapse" aria-expanded="false" id="table-row-2">
            <div class="table-row-collapse-block">
              <p class="text-sm text-legible-width">
                Quinoa brooklyn mixtape, yuccie actually cred hammock forage
                intelligentsia. Tumblr cronut crucifix, direct trade freegan jean
                shorts pabst. Chillwave locavore plaid gastropub actually artisan.
              </p>
            </div>
          </div>
        </td>
      </tr>
      <tr
        aria-haspopup="true"
        aria-expanded="false"
        aria-controls="table-row-3"
        data-bs-toggle="collapse:table-row"
        data-bs-target="#table-row-3">
        <td class="text-nowrap">
          <button role="button">Show me the money</button>
          <br />
          <p class="mb-0">This is where the money is</p>
        </td>
        <td class="table-cell-number">Over 9000</td>
      </tr>
      <tr class="table-row-collapse">
        <td colspan="4">
          <div class="collapse" aria-expanded="false" id="table-row-3">
            <div class="table-row-collapse-block">
              <form>
                <div class="row">
                  <div class="form-group col-6">
                    <label for="exampleInputEmail2">Personnummer</label>
                    <input
                      type="email"
                      required=""
                      class="form-control"
                      id="exampleInputEmail2"
                      aria-describedby="emailHelp2"
                      placeholder="920618-0808" />
                    <small id="emailHelp2" class="form-text text-muted">
                      Vi använder din folkbokföringsadress
                    </small>
                  </div>
                  <div class="form-group col-6">
                    <label for="exampleTextarea">Meddelande</label>
                    <textarea
                      class="form-control"
                      required=""
                      id="exampleTextarea"
                      rows="3"></textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <button role="button" class="btn btn-primary float-right">
                      Spara
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  `,m=()=>`
  <table class="table table-clickable">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col" class="text-nowrap d-none d-md-table-cell">Account #</th>
        <th scope="col" class="text-nowrap">Balance kr</th>
      </tr>
    </thead>
    <tbody>
      <tr class="js-tablelink">
        <td class="text-nowrap">
          <a href="#" onclick="return false">Billys bucks</a>
        </td>
        <td class="text-nowrap d-none d-md-table-cell">9810.01.345.89</td>
        <td class="table-cell-number">-250</td>
      </tr>
      <tr class="table-ignore-clickable">
        <td class="text-nowrap">
          Spending
          <em class="text-muted">(closed)</em>
        </td>
        <td class="text-nowrap d-none d-md-table-cell">9810.01.345.92</td>
        <td class="table-cell-number">0</td>
      </tr>
      <tr class="js-tablelink">
        <td class="text-nowrap">
          <a href="#" onclick="return false">Savings</a>
        </td>
        <td class="text-nowrap d-none d-md-table-cell">9810.01.345.91</td>
        <td class="table-cell-number">53 000</td>
      </tr>
    </tbody>
  </table>
  `,v=()=>`
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Account #</th>
        <th scope="col">Balance kr</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Billys bucks</td>
        <td>9810.01.345.89</td>
        <td>-250</td>
      </tr>
      <tr>
        <td>Donnas dollars</td>
        <td></td>
        <td></td>
      </tr>
      <tr class="table-sub-group first">
        <td>Donnas savings</td>
        <td>9810.01.345.90</td>
        <td>14 921</td>
      </tr>
      <tr class="table-sub-group">
        <td>Donnas insurance fund</td>
        <td>9810.01.345.91</td>
        <td>39 721</td>
      </tr>
      <tr class="table-sub-group">
        <td>Donnas car</td>
        <td>9810.01.345.92</td>
        <td>218 012</td>
      </tr>
      <tr class="table-sub-group last">
        <td>Donnas other savings</td>
        <td>9810.01.345.93</td>
        <td>8 120</td>
      </tr>
      <tr>
        <td>Savings</td>
        <td>9810.01.345.89</td>
        <td>53 000</td>
      </tr>
    </tbody>
  </table>
`,h=()=>{const[d]=et(X);return tt(()=>{Z(document.getElementById(d))},[]),`
  <div id="${d}">
    <table id="table-sort" class="table">
      <thead>
        <tr>
          <th scope="col" aria-sort="none">
            <span class="table-sort" role="button">Name</span>
          </th>
          <th
            scope="col"
            class="d-none d-md-table-cell text-nowrap"
            aria-sort="none">
            <span class="table-sort" role="button">Account #</span>
          </th>
          <th scope="col" class="text-nowrap" aria-sort="none">
            <span class="table-sort" role="button">Balance kr</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-nowrap">Billys bucks</td>
          <td class="text-nowrap d-none d-md-table-cell">23412</td>
          <td class="table-cell-number">250</td>
        </tr>
        <tr>
          <td class="text-nowrap">Donnas dollars</td>
          <td class="text-nowrap d-none d-md-table-cell">78493</td>
          <td class="table-cell-number">100</td>
        </tr>
        <tr>
          <td class="text-nowrap">Savings</td>
          <td class="text-nowrap d-none d-md-table-cell">111948</td>
          <td class="table-cell-number">750</td>
        </tr>
      </tbody>
    </table>
  </div>
  `},x=()=>`
  <div class="table table-comparative">
    <div class="table-comparative-header">
      <div class="table-comparative-head">Innehåll</div>
      <div class="table-comparative-head">Olycksfall</div>
      <div class="table-comparative-head">Sjukförsäkring</div>
      <div class="table-comparative-head">Olycksfall</div>
    </div>
    <div class="table-comparative-body">
      <div class="table-comparative-row">
        <div class="table-comparative-cell">
          <button
            type="button"
            id="readMoreCollapse"
            class="btn btn-more"
            data-bs-toggle="collapse"
            href="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample">
            Medicinsk invaliditet vid olycksfall
          </button>
        </div>
        <div
          class="table-comparative-cell table-comparative-cell-hidden d-flex d-md-none"></div>
        <div class="table-comparative-cell">
          <svg aria-hidden="true" class="icon icon-green" width="24" height="24">
            <use xlink:href="lf-icons/sprite/24/icons.svg#check-24"></use>
          </svg>
        </div>
        <div class="table-comparative-cell">
          <svg aria-hidden="true" class="icon icon-green" width="24" height="24">
            <use xlink:href="lf-icons/sprite/24/icons.svg#check-24"></use>
          </svg>
        </div>
        <div class="table-comparative-cell">
          <svg aria-hidden="true" class="icon icon-green" width="24" height="24">
            <use xlink:href="lf-icons/sprite/24/icons.svg#check-24"></use>
          </svg>
        </div>
        <div class="collapse table-comparative-collapse" id="collapseExample">
          <div class="py-1 px-1">
            <p class="mb-0">
              Om du får en bestående nedsättning av kroppsfunktion kan du få
              ersättning.
            </p>
          </div>
        </div>
      </div>
      <div class="table-comparative-row">
        <div class="table-comparative-cell">
          <button
            type="button"
            id="readMoreCollapse2"
            class="btn btn-more"
            data-bs-toggle="collapse"
            href="#collapseExample2"
            aria-expanded="false"
            aria-controls="collapseExample2">
            Medicinsk invaliditet vid olycksfall
          </button>
        </div>
        <div
          class="table-comparative-cell table-comparative-cell-hidden d-flex d-md-none"></div>
        <div class="table-comparative-cell">
          <svg aria-hidden="true" class="icon icon-green" width="24" height="24">
            <use xlink:href="lf-icons/sprite/24/icons.svg#check-24"></use>
          </svg>
        </div>
        <div class="table-comparative-cell">
          <svg aria-hidden="true" class="icon icon-green" width="24" height="24">
            <use xlink:href="lf-icons/sprite/24/icons.svg#check-24"></use>
          </svg>
        </div>
        <div class="table-comparative-cell">
          <svg aria-hidden="true" class="icon icon-green" width="24" height="24">
            <use xlink:href="lf-icons/sprite/24/icons.svg#check-24"></use>
          </svg>
        </div>
        <div class="collapse table-comparative-collapse" id="collapseExample2">
          <div class="py-1 px-1">
            <p class="mb-0">
              Om du får en bestående nedsättning av kroppsfunktion kan du få
              ersättning.
            </p>
          </div>
        </div>
      </div>
      <div class="table-comparative-row">
        <div class="table-comparative-cell">
          <button
            type="button"
            id="readMoreCollapse3"
            class="btn btn-more"
            data-bs-toggle="collapse"
            href="#collapseExample3"
            aria-expanded="false"
            aria-controls="collapseExample3">
            Medicinsk invaliditet vid olycksfall
          </button>
        </div>
        <div
          class="table-comparative-cell table-comparative-cell-hidden d-flex d-md-none"></div>
        <div class="table-comparative-cell">
          <svg aria-hidden="true" class="icon icon-green" width="24" height="24">
            <use xlink:href="lf-icons/sprite/24/icons.svg#check-24"></use>
          </svg>
        </div>
        <div class="table-comparative-cell">
          <svg aria-hidden="true" class="icon icon-green" width="24" height="24">
            <use xlink:href="lf-icons/sprite/24/icons.svg#check-24"></use>
          </svg>
        </div>
        <div class="table-comparative-cell">
          <svg aria-hidden="true" class="icon icon-green" width="24" height="24">
            <use xlink:href="lf-icons/sprite/24/icons.svg#check-24"></use>
          </svg>
        </div>
        <div class="collapse table-comparative-collapse" id="collapseExample3">
          <div class="py-1 px-1">
            <p class="mb-0">
              Om du får en bestående nedsättning av kroppsfunktion kan du få
              ersättning.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;var g,w,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`() => \`
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col" class="d-none d-md-table-cell text-nowrap">Account #</th>
        <th scope="col" class="text-nowrap">Balance kr</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="text-nowrap">Billys bucks</td>
        <td class="text-nowrap d-none d-md-table-cell">9810.01.345.89</td>
        <td class="table-cell-number">-250</td>
      </tr>
      <tr>
        <td class="text-nowrap">Donnas dollars</td>
        <td class="text-nowrap d-none d-md-table-cell">9810.01.345.89</td>
        <td class="table-cell-number">12 000</td>
      </tr>
      <tr>
        <td class="text-nowrap">Savings</td>
        <td class="text-nowrap d-none d-md-table-cell">9810.01.345.89</td>
        <td class="table-cell-number">53 000</td>
      </tr>
    </tbody>
  </table>
  \``,...(f=(w=r.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var k,y,S;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`() => \`
  <table class="table table-sm">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col" class="d-none d-md-table-cell text-nowrap">Account #</th>
        <th scope="col" class="text-nowrap">Balance kr</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="text-nowrap">Billys bucks</td>
        <td class="text-nowrap d-none d-md-table-cell">9810.01.345.89</td>
        <td class="table-cell-number">-250</td>
      </tr>
      <tr>
        <td class="text-nowrap">Donnas dollars</td>
        <td class="text-nowrap d-none d-md-table-cell">9810.01.345.89</td>
        <td class="table-cell-number">12 000</td>
      </tr>
      <tr>
        <td class="text-nowrap">Savings</td>
        <td class="text-nowrap d-none d-md-table-cell">9810.01.345.89</td>
        <td class="table-cell-number">53 000</td>
      </tr>
    </tbody>
  </table>
\``,...(S=(y=o.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var E,B,A;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`() => \`
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col" class="d-none d-md-table-cell text-nowrap">Account #</th>
        <th scope="col" class="text-nowrap">Balance kr</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="text-nowrap">Billys bucks</td>
        <td class="text-nowrap d-none d-md-table-cell">9810.01.345.89</td>
        <td class="table-cell-number">-250</td>
      </tr>
      <tr>
        <td class="text-nowrap">Donnas dollars</td>
        <td class="text-nowrap d-none d-md-table-cell">9810.01.345.89</td>
        <td class="table-cell-number">12 000</td>
      </tr>
      <tr>
        <td class="text-nowrap">Savings</td>
        <td class="text-nowrap d-none d-md-table-cell">9810.01.345.89</td>
        <td class="table-cell-number">53 000</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th scope="row">Total</th>
        <td class="d-none d-md-table-cell"></td>
        <td class="table-summary">65 000</td>
      </tr>
    </tfoot>
  </table>
  \``,...(A=(B=i.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var P,D,T;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`() => \`
  <table class="table table-varied">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col" class="d-none d-md-table-cell text-nowrap">Account #</th>
        <th scope="col" class="text-nowrap">Balance kr</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="text-nowrap">Billys bucks</td>
        <td class="text-nowrap d-none d-md-table-cell">9810.01.345.89</td>
        <td class="table-cell-number">-250</td>
      </tr>
      <tr>
        <td class="text-nowrap">Donnas dollars</td>
        <td class="text-nowrap d-none d-md-table-cell">9810.01.345.89</td>
        <td class="table-cell-number">12 000</td>
      </tr>
      <tr>
        <td class="text-nowrap">Savings</td>
        <td class="text-nowrap d-none d-md-table-cell">9810.01.345.89</td>
        <td class="table-cell-number">53 000</td>
      </tr>
    </tbody>
  </table>
  \``,...(T=(D=b.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var O,C,M;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`() => \`
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col" class="d-none d-md-table-cell text-nowrap">Account #</th>
        <th scope="col" class="text-nowrap">Balance kr</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th colspan="3" class="th-sub">Regular Accounts</th>
      </tr>
      <tr>
        <td class="text-nowrap">Billys bucks</td>
        <td class="text-nowrap d-none d-md-table-cell">9810.01.345.89</td>
        <td class="table-cell-number">-250</td>
      </tr>
      <tr>
        <td class="text-nowrap">Savings</td>
        <td class="text-nowrap d-none d-md-table-cell">9810.01.345.89</td>
        <td class="table-cell-number">53 000</td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <th colspan="3" class="th-sub">Party Accounts</th>
      </tr>
      <tr>
        <td class="text-nowrap">Billys bucks</td>
        <td class="text-nowrap d-none d-md-table-cell">9810.01.345.89</td>
        <td class="table-cell-number">-250</td>
      </tr>
      <tr>
        <td class="text-nowrap">Savings</td>
        <td class="text-nowrap d-none d-md-table-cell">9810.01.345.89</td>
        <td class="table-cell-number">53 000</td>
      </tr>
    </tbody>
  </table>
  \``,...(M=(C=p.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var N,_,I;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return \`
  <table class="table table-clickable">
    <tbody>
      <tr
        aria-haspopup="true"
        aria-expanded="false"
        aria-controls="table-row-1"
        data-bs-toggle="collapse:table-row"
        data-bs-target="#table-row-1">
        <td class="text-nowrap"><button role="button">Billys bucks</button></td>
        <td class="table-cell-number">-250</td>
      </tr>
      <tr class="table-row-collapse">
        <td colspan="4">
          <div class="collapse" aria-expanded="false" id="table-row-1">
            <div class="table-row-collapse-block">
              <p class="text-sm text-legible-width">
                Trust fund etsy twee, mumblecore pop-up vice kale chips tacos
                poutine sartorial art party kinfolk scenester. Marfa austin retro,
                cold-pressed chicharrones pug authentic cred neutra next level
                paleo tilde direct trade farm-to-table.
              </p>
            </div>
          </div>
        </td>
      </tr>
      <tr
        aria-haspopup="true"
        aria-expanded="false"
        aria-controls="table-row-2"
        data-bs-toggle="collapse:table-row"
        data-bs-target="#table-row-2">
        <td class="text-nowrap"><button role="button">Donnas dollars</button></td>
        <td class="table-cell-number">12 000</td>
      </tr>
      <tr class="table-row-collapse">
        <td colspan="4">
          <div class="collapse" aria-expanded="false" id="table-row-2">
            <div class="table-row-collapse-block">
              <p class="text-sm text-legible-width">
                Quinoa brooklyn mixtape, yuccie actually cred hammock forage
                intelligentsia. Tumblr cronut crucifix, direct trade freegan jean
                shorts pabst. Chillwave locavore plaid gastropub actually artisan.
              </p>
            </div>
          </div>
        </td>
      </tr>
      <tr
        aria-haspopup="true"
        aria-expanded="false"
        aria-controls="table-row-3"
        data-bs-toggle="collapse:table-row"
        data-bs-target="#table-row-3">
        <td class="text-nowrap">
          <button role="button">Show me the money</button>
          <br />
          <p class="mb-0">This is where the money is</p>
        </td>
        <td class="table-cell-number">Over 9000</td>
      </tr>
      <tr class="table-row-collapse">
        <td colspan="4">
          <div class="collapse" aria-expanded="false" id="table-row-3">
            <div class="table-row-collapse-block">
              <form>
                <div class="row">
                  <div class="form-group col-6">
                    <label for="exampleInputEmail2">Personnummer</label>
                    <input
                      type="email"
                      required=""
                      class="form-control"
                      id="exampleInputEmail2"
                      aria-describedby="emailHelp2"
                      placeholder="920618-0808" />
                    <small id="emailHelp2" class="form-text text-muted">
                      Vi använder din folkbokföringsadress
                    </small>
                  </div>
                  <div class="form-group col-6">
                    <label for="exampleTextarea">Meddelande</label>
                    <textarea
                      class="form-control"
                      required=""
                      id="exampleTextarea"
                      rows="3"></textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <button role="button" class="btn btn-primary float-right">
                      Spara
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  \`;
}`,...(I=(_=u.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var R,j,q;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return \`
  <table class="table table-clickable">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col" class="text-nowrap d-none d-md-table-cell">Account #</th>
        <th scope="col" class="text-nowrap">Balance kr</th>
      </tr>
    </thead>
    <tbody>
      <tr class="js-tablelink">
        <td class="text-nowrap">
          <a href="#" onclick="return false">Billys bucks</a>
        </td>
        <td class="text-nowrap d-none d-md-table-cell">9810.01.345.89</td>
        <td class="table-cell-number">-250</td>
      </tr>
      <tr class="table-ignore-clickable">
        <td class="text-nowrap">
          Spending
          <em class="text-muted">(closed)</em>
        </td>
        <td class="text-nowrap d-none d-md-table-cell">9810.01.345.92</td>
        <td class="table-cell-number">0</td>
      </tr>
      <tr class="js-tablelink">
        <td class="text-nowrap">
          <a href="#" onclick="return false">Savings</a>
        </td>
        <td class="text-nowrap d-none d-md-table-cell">9810.01.345.91</td>
        <td class="table-cell-number">53 000</td>
      </tr>
    </tbody>
  </table>
  \`;
}`,...(q=(j=m.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var H,G,z;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`() => \`
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Account #</th>
        <th scope="col">Balance kr</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Billys bucks</td>
        <td>9810.01.345.89</td>
        <td>-250</td>
      </tr>
      <tr>
        <td>Donnas dollars</td>
        <td></td>
        <td></td>
      </tr>
      <tr class="table-sub-group first">
        <td>Donnas savings</td>
        <td>9810.01.345.90</td>
        <td>14 921</td>
      </tr>
      <tr class="table-sub-group">
        <td>Donnas insurance fund</td>
        <td>9810.01.345.91</td>
        <td>39 721</td>
      </tr>
      <tr class="table-sub-group">
        <td>Donnas car</td>
        <td>9810.01.345.92</td>
        <td>218 012</td>
      </tr>
      <tr class="table-sub-group last">
        <td>Donnas other savings</td>
        <td>9810.01.345.93</td>
        <td>8 120</td>
      </tr>
      <tr>
        <td>Savings</td>
        <td>9810.01.345.89</td>
        <td>53 000</td>
      </tr>
    </tbody>
  </table>
\``,...(z=(G=v.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var L,F,Q;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const [id] = useState(uid);
  useEffect(() => {
    tableExample(document.getElementById(id));
  }, []);
  return \`
  <div id="\${id}">
    <table id="table-sort" class="table">
      <thead>
        <tr>
          <th scope="col" aria-sort="none">
            <span class="table-sort" role="button">Name</span>
          </th>
          <th
            scope="col"
            class="d-none d-md-table-cell text-nowrap"
            aria-sort="none">
            <span class="table-sort" role="button">Account #</span>
          </th>
          <th scope="col" class="text-nowrap" aria-sort="none">
            <span class="table-sort" role="button">Balance kr</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-nowrap">Billys bucks</td>
          <td class="text-nowrap d-none d-md-table-cell">23412</td>
          <td class="table-cell-number">250</td>
        </tr>
        <tr>
          <td class="text-nowrap">Donnas dollars</td>
          <td class="text-nowrap d-none d-md-table-cell">78493</td>
          <td class="table-cell-number">100</td>
        </tr>
        <tr>
          <td class="text-nowrap">Savings</td>
          <td class="text-nowrap d-none d-md-table-cell">111948</td>
          <td class="table-cell-number">750</td>
        </tr>
      </tbody>
    </table>
  </div>
  \`;
}`,...(Q=(F=h.parameters)==null?void 0:F.docs)==null?void 0:Q.source}}};var V,$,K;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return \`
  <div class="table table-comparative">
    <div class="table-comparative-header">
      <div class="table-comparative-head">Innehåll</div>
      <div class="table-comparative-head">Olycksfall</div>
      <div class="table-comparative-head">Sjukförsäkring</div>
      <div class="table-comparative-head">Olycksfall</div>
    </div>
    <div class="table-comparative-body">
      <div class="table-comparative-row">
        <div class="table-comparative-cell">
          <button
            type="button"
            id="readMoreCollapse"
            class="btn btn-more"
            data-bs-toggle="collapse"
            href="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample">
            Medicinsk invaliditet vid olycksfall
          </button>
        </div>
        <div
          class="table-comparative-cell table-comparative-cell-hidden d-flex d-md-none"></div>
        <div class="table-comparative-cell">
          <svg aria-hidden="true" class="icon icon-green" width="24" height="24">
            <use xlink:href="lf-icons/sprite/24/icons.svg#check-24"></use>
          </svg>
        </div>
        <div class="table-comparative-cell">
          <svg aria-hidden="true" class="icon icon-green" width="24" height="24">
            <use xlink:href="lf-icons/sprite/24/icons.svg#check-24"></use>
          </svg>
        </div>
        <div class="table-comparative-cell">
          <svg aria-hidden="true" class="icon icon-green" width="24" height="24">
            <use xlink:href="lf-icons/sprite/24/icons.svg#check-24"></use>
          </svg>
        </div>
        <div class="collapse table-comparative-collapse" id="collapseExample">
          <div class="py-1 px-1">
            <p class="mb-0">
              Om du får en bestående nedsättning av kroppsfunktion kan du få
              ersättning.
            </p>
          </div>
        </div>
      </div>
      <div class="table-comparative-row">
        <div class="table-comparative-cell">
          <button
            type="button"
            id="readMoreCollapse2"
            class="btn btn-more"
            data-bs-toggle="collapse"
            href="#collapseExample2"
            aria-expanded="false"
            aria-controls="collapseExample2">
            Medicinsk invaliditet vid olycksfall
          </button>
        </div>
        <div
          class="table-comparative-cell table-comparative-cell-hidden d-flex d-md-none"></div>
        <div class="table-comparative-cell">
          <svg aria-hidden="true" class="icon icon-green" width="24" height="24">
            <use xlink:href="lf-icons/sprite/24/icons.svg#check-24"></use>
          </svg>
        </div>
        <div class="table-comparative-cell">
          <svg aria-hidden="true" class="icon icon-green" width="24" height="24">
            <use xlink:href="lf-icons/sprite/24/icons.svg#check-24"></use>
          </svg>
        </div>
        <div class="table-comparative-cell">
          <svg aria-hidden="true" class="icon icon-green" width="24" height="24">
            <use xlink:href="lf-icons/sprite/24/icons.svg#check-24"></use>
          </svg>
        </div>
        <div class="collapse table-comparative-collapse" id="collapseExample2">
          <div class="py-1 px-1">
            <p class="mb-0">
              Om du får en bestående nedsättning av kroppsfunktion kan du få
              ersättning.
            </p>
          </div>
        </div>
      </div>
      <div class="table-comparative-row">
        <div class="table-comparative-cell">
          <button
            type="button"
            id="readMoreCollapse3"
            class="btn btn-more"
            data-bs-toggle="collapse"
            href="#collapseExample3"
            aria-expanded="false"
            aria-controls="collapseExample3">
            Medicinsk invaliditet vid olycksfall
          </button>
        </div>
        <div
          class="table-comparative-cell table-comparative-cell-hidden d-flex d-md-none"></div>
        <div class="table-comparative-cell">
          <svg aria-hidden="true" class="icon icon-green" width="24" height="24">
            <use xlink:href="lf-icons/sprite/24/icons.svg#check-24"></use>
          </svg>
        </div>
        <div class="table-comparative-cell">
          <svg aria-hidden="true" class="icon icon-green" width="24" height="24">
            <use xlink:href="lf-icons/sprite/24/icons.svg#check-24"></use>
          </svg>
        </div>
        <div class="table-comparative-cell">
          <svg aria-hidden="true" class="icon icon-green" width="24" height="24">
            <use xlink:href="lf-icons/sprite/24/icons.svg#check-24"></use>
          </svg>
        </div>
        <div class="collapse table-comparative-collapse" id="collapseExample3">
          <div class="py-1 px-1">
            <p class="mb-0">
              Om du får en bestående nedsättning av kroppsfunktion kan du få
              ersättning.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  \`;
}`,...(K=($=x.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};const lt=["PresentDefault","PresentSizing","PresentSummaryRow","PresentBandedRows","PresentInTableGrouping","PresentExpandableRows","PresentClickableRows","PresentSubGrouping","PresentSorting","Comparative"],nt=Object.freeze(Object.defineProperty({__proto__:null,Comparative:x,PresentBandedRows:b,PresentClickableRows:m,PresentDefault:r,PresentExpandableRows:u,PresentInTableGrouping:p,PresentSizing:o,PresentSorting:h,PresentSubGrouping:v,PresentSummaryRow:i,__namedExportsOrder:lt,default:at},Symbol.toStringTag,{value:"Module"}));export{x as C,r as P,nt as T,o as a,i as b,b as c,p as d,v as e,u as f,m as g,h};
//# sourceMappingURL=tables.stories-8a1cd1e8.js.map
