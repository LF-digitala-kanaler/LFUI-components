const o=`<aside class="pricebox-fixed" data-bs-toggle="collapse" href="#price-box-content" aria-expanded="false" aria-controls="price-box-content">
  <div class="p-05">
    <div class="d-flex justify-content-between px-05">
      <p class="h4 m-0 text-blue"> Ditt pris </p>
      <div class="d-flex">
        <p class="h1 text-price">1 245</p>
        <div class="pl-1">
          <p class="h4 text-blue m-0">kr/mån</p>
          <p class="text-muted text-nowrap m-0">18 274 kr/år</p>
        </div>
      </div>
      <div class="pricebox-chevron"></div>
    </div>
  </div>
  <div id="price-box-content" class="collapse">
    <div class="wave-pattern"></div>
    <div class="container p-1">
      <p class="row row-no-gutter m-0">
        <span class="col-6">Personskydd</span>
        <span class="col-6 text-right text-nowrap">220 kr/mån</span>
      </p>
      <p class="row row-no-gutter m-0">
        <span class="col-6">Tilläggsskydd</span>
        <span class="col-6 text-right text-nowrap">310 kr/mån</span>
      </p>
      <div class="alert alert-info m-0 pl-05 pr-1 mt-1">
        <svg class="icon checkmark" viewBox="0 0 40 40">
          <g fill="none" fill-rule="evenodd">
            <path
              class="checkmark-circle"
              d="M20 1.5C9.783 1.5 1.5 9.783 1.5 20S10.75 38.5 20 38.5 38.5 30.217 38.5 20 30.217 1.5 20 1.5z"
            ></path>
            <path
              class="checkmark-check"
              d="M30.27 14.054L18.108 26.216l-7.297-7.297"
            ></path>
          </g>
        </svg>
        <div class="alert-content row w-100">
          <div class="col-12 p-0">
            <strong class="text-navy">Avdragen rabatt</strong>
            <p class="row row-no-gutter m-0">
              <span class="col-6 text-blue">Internetrabatt</span>
              <span class="col-6 text-right text-red font-weight-bold text-nowrap">- 2 135 kr</span>
            </p>
            <p class="row row-no-gutter m-0">
              <span class="col-6 text-blue">Guldmedlem</span>
              <span class="col-6 text-right text-red font-weight-bold text-nowrap">- 11 kr</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</aside>
`,p=`<div class="row">
  <div class="col-md-6 mb-2">
    <aside class="pricebox">
      <div class="p-1">
        <p class="h4 m-0 text-blue"> Ditt pris </p>
        <div class="d-flex">
          <p class="h1 text-price">1 245</p>
          <div class="pl-1">
            <p class="h4 text-blue m-0">kr/mån</p>
            <p class="text-muted text-nowrap m-0">18 274 kr/år</p>
          </div>
        </div>
      </div>
      <div class="wave-pattern"></div>
      <div class="container p-1">
        <p class="row row-no-gutter m-0">
          <span class="col-6">Personskydd</span>
          <span class="col-6 text-right text-nowrap">220 kr/mån</span>
        </p>
        <p class="row row-no-gutter m-0">
          <span class="col-6">Tilläggsskydd</span>
          <span class="col-6 text-right text-nowrap">310 kr/mån</span>
        </p>
        <div class="alert alert-info m-0 pl-05 pr-1 mt-1">
          <svg class="icon checkmark" viewBox="0 0 40 40">
            <g fill="none" fill-rule="evenodd">
              <path
                class="checkmark-circle"
                d="M20 1.5C9.783 1.5 1.5 9.783 1.5 20S10.75 38.5 20 38.5 38.5 30.217 38.5 20 30.217 1.5 20 1.5z"
              ></path>
              <path
                class="checkmark-check"
                d="M30.27 14.054L18.108 26.216l-7.297-7.297"
              ></path>
            </g>
          </svg>
          <div class="alert-content row w-100">
            <div class="col-12 p-0">
              <strong class="text-navy">Avdragen rabatt</strong>
              <p class="row row-no-gutter m-0">
                <span class="col-6 text-blue">Internetrabatt</span>
                <span class="col-6 text-right text-red font-weight-bold text-nowrap">- 2 135 kr</span>
              </p>
              <p class="row row-no-gutter m-0">
                <span class="col-6 text-blue">Guldmedlem</span>
                <span class="col-6 text-right text-red font-weight-bold text-nowrap">- 11 kr</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </div>
  <div class="col-md-6">
    <aside class="pricebox">
      <div class="p-1">
        <p class="h4 m-0 text-blue"> Ditt pris </p>
        <div class="d-flex">
          <p class="h1 text-price">1 245</p>
          <div class="pl-1">
            <p class="h4 text-blue m-0">kr/mån</p>
            <p class="text-muted text-nowrap m-0">18 274 kr/år</p>
          </div>
        </div>
      </div>
      <div class="wave-pattern"></div>
      <div class="container p-1">
        <p class="row row-no-gutter m-0">
          <span class="col-6">Personskydd</span>
          <span class="col-6 text-right text-nowrap">220 kr/mån</span>
        </p>
        <p class="row row-no-gutter m-0">
          <span class="col-6">Tilläggsskydd</span>
          <span class="col-6 text-right text-nowrap">310 kr/mån</span>
        </p>
        <div class="alert alert-info m-0 pl-05 pr-1 mt-1">
          <svg class="icon checkmark" viewBox="0 0 40 40">
            <g fill="none" fill-rule="evenodd">
              <path
                class="checkmark-circle"
                d="M20 1.5C9.783 1.5 1.5 9.783 1.5 20S10.75 38.5 20 38.5 38.5 30.217 38.5 20 30.217 1.5 20 1.5z"
              ></path>
              <path
                class="checkmark-check"
                d="M30.27 14.054L18.108 26.216l-7.297-7.297"
              ></path>
            </g>
          </svg>
          <div class="alert-content row w-100">
            <div class="col-12 p-0">
              <strong class="text-navy">Avdragen rabatt</strong>
              <p class="row row-no-gutter m-0">
                <span class="col-6 text-blue">Internetrabatt</span>
                <span class="col-6 text-right text-red font-weight-bold text-nowrap">- 2 135 kr</span>
              </p>
              <p class="row row-no-gutter m-0">
                <span class="col-6 text-blue">Guldmedlem</span>
                <span class="col-6 text-right text-red font-weight-bold text-nowrap">- 11 kr</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="delimiter-xs py-1">
        <div class="container">
          <h5 class="h6 mb-0">Är du kund hos oss?</h5>
          <p class="text-muted text-sm m-0">
            Visste du att när du samlar olika produkter hos oss ger vi dig rabatt.
          </p>
        </div>
      </div>
    </aside>
  </div>
</div>
`,i={title:"Page content/Price box",parameters:{backgrounds:{default:"gray"}}},n=()=>p,s=()=>o;var t,a,e;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:"() => Desktop",...(e=(a=n.parameters)==null?void 0:a.docs)==null?void 0:e.source}}};var r,l,c;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:"() => Responsive",...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const d=["desktop","responsive"];export{d as __namedExportsOrder,i as default,n as desktop,s as responsive};
//# sourceMappingURL=pricebox.stories-4ea714a1.js.map
