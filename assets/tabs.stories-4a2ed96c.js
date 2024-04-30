const u=`<ul class="nav nav-lines" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" data-bs-toggle="tab" href="#contentA1" role="tab" data-text="Bilförsäkring">
      Bilförsäkring
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-bs-toggle="tab" href="#contentA2" role="tab" data-text="Båtförsäkring">
      Båtförsäkring
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-bs-toggle="tab" href="#contentA3" role="tab" data-text="Mc-försäkring">
      Mc-försäkring
    </a>
  </li>
</ul>

<p class="text-sm mt-15 mb-05 text-muted">With icons</p>
<ul class="nav nav-lines" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" data-bs-toggle="tab" href="#contentC1" role="tab" data-text="Bilförsäkring">
      <svg role="presentation" class="icon" width="24" height="24">
        <use xlink:href="lf-icons/sprite/24/icons.svg#car-24"></use>
      </svg>
      Bilförsäkring
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-bs-toggle="tab" href="#contentC2" role="tab" data-text="Båtförsäkring">
      <svg role="presentation" class="icon" width="24" height="24">
        <use xlink:href="lf-icons/sprite/24/icons.svg#boat-24"></use>
      </svg>
      Båtförsäkring
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-bs-toggle="tab" href="#contentC3" role="tab" data-text="Mc-försäkring">
      <svg role="presentation" class="icon" width="24" height="24">
        <use xlink:href="lf-icons/sprite/24/icons.svg#mc-24"></use>
      </svg>
      Mc-försäkring
    </a>
  </li>
</ul>

<p class="text-sm mt-15 mb-05 text-muted">Fill width</p>
<ul class="nav nav-lines nav-fill" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" data-bs-toggle="tab" href="#contentB1" role="tab" data-text="Bilförsäkring">
      Bilförsäkring
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-bs-toggle="tab" href="#contentB2" role="tab" data-text="Båtförsäkring">
      Båtförsäkring
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-bs-toggle="tab" href="#contentB3" role="tab" data-text="Mc-försäkring">
      Mc-försäkring
    </a>
  </li>
</ul>
`,x=`<ul class="nav nav-tabs" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" data-bs-toggle="tab" href="#contentA1" role="tab" data-text="Bilförsäkring">
      Bilförsäkring
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-bs-toggle="tab" href="#contentA2" role="tab" data-text="Båtförsäkring">
      Båtförsäkring
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-bs-toggle="tab" href="#contentA3" role="tab" data-text="Mc-försäkring">
      Mc-försäkring
    </a>
  </li>
</ul>
<div class="tab-content">
  <div class="tab-pane active" id="contentA1" role="tabpanel">
    <div class="card">
      <div class="card-block p-155">
        <h2>Bilförsäkring</h2>
        <p class="card-text">En trygg bilförsäkring som tål att jämföras. Välj den försäkring som passar din bil bäst.
          Vi försäkrar elbilar och laddhybrider likväl som traditionella bränslebilar.</p>
      </div>
    </div>
  </div>
  <div class="tab-pane" id="contentA2" role="tabpanel">
    <div class="card">
      <div class="card-block p-155">
        <h2>Båtförsäkring</h2>
        <p class="card-text">Sveriges populäraste båtförsäkring som gäller både till sjöss och på land. Välj den
          försäkring som passar dig och din båt bäst.</p>
      </div>
    </div>
  </div>
  <div class="tab-pane" id="contentA3" role="tabpanel">
    <div class="card">
      <div class="card-block p-155">
        <h2>Mc-försäkring</h2>
        <p class="card-text">Motorcykelförsäkring som anpassas efter dina behov.</p>
      </div>
    </div>
  </div>
</div>

<p class="text-sm mt-15 mb-05 text-muted">With icons</p>
<ul class="nav nav-tabs" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" data-bs-toggle="tab" href="#contentC1" role="tab" data-text="Bilförsäkring">
      Bilförsäkring
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-bs-toggle="tab" href="#contentC2" role="tab" data-text="Båtförsäkring">
      Båtförsäkring
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-bs-toggle="tab" href="#contentC3" role="tab" data-text="Mc-försäkring">
      Mc-försäkring
    </a>
  </li>
</ul>
<div class="tab-content">
  <div class="tab-pane active" id="contentC1" role="tabpanel">
    <div class="card">
      <div class="card-block p-155">
        <h2>Bilförsäkring</h2>
        <p class="card-text">En trygg bilförsäkring som tål att jämföras. Välj den försäkring som passar din bil bäst.
          Vi försäkrar elbilar och laddhybrider likväl som traditionella bränslebilar.</p>
      </div>
    </div>
  </div>
  <div class="tab-pane" id="contentC2" role="tabpanel">
    <div class="card">
      <div class="card-block p-155">
        <h2>Båtförsäkring</h2>
        <p class="card-text">Sveriges populäraste båtförsäkring som gäller både till sjöss och på land. Välj den
          försäkring som passar dig och din båt bäst.</p>
      </div>
    </div>
  </div>
  <div class="tab-pane" id="contentC3" role="tabpanel">
    <div class="card">
      <div class="card-block p-155">
        <h2>Mc-försäkring</h2>
        <p class="card-text">Motorcykelförsäkring som anpassas efter dina behov.</p>
      </div>
    </div>
  </div>
</div>

<p class="text-sm mt-15 mb-05 text-muted">With sub navigation</p>
<ul class="nav nav-tabs" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" data-bs-toggle="tab" href="#contentD1" role="tab" data-text="Bilförsäkring">
      Bilförsäkring
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-bs-toggle="tab" href="#contentD2" role="tab" data-text="Båtförsäkring">
      Båtförsäkring
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-bs-toggle="tab" href="#contentD3" role="tab" data-text="Mc-försäkring">
      Mc-försäkring
    </a>
  </li>
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="contentD1" role="tabpanel">
    <div class="card">
      <div class="card-block pl-15 pr-15 pb-15 pt-075">
        <ul class="nav nav-sub mb-1" role="tablist">
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#contentSubD1" role="tab" data-text="Helförsäkring">
              Helförsäkring
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" data-bs-toggle="tab" href="#contentSubD2" role="tab" data-text="Halvförsäkring">
              Halvförsäkring
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#contentSubD3" role="tab" data-text="Trafikförsäkring">
              Trafikförsäkring
            </a>
          </li>
        </ul>
        <div class="tab-content">
          <div class="tab-pane" id="contentSubD1" role="tabpanel">
            <h2>Helförsäkring</h2>
            <p class="card-text">Helförsäkringen innehåller dessutom skydd för vagnskador – skador på din egen bil vid
              en trafikolycka eller någon annan så kallad yttre olyckshändelse.</p>
          </div>
          <div class="tab-pane active" id="contentSubD2" role="tabpanel">
            <h2>Halvförsäkring</h2>
            <p class="card-text">Om du vill att skador på din egen bil ska täckas av försäkringen behöver du minst en
              halvförsäkring. I den ingår skydd för brand-, glas-, och stöldskador, assistans och räddning, rättsskydd,
              maskinskada och elektronik, allrisk samt kris.</p>
          </div>
          <div class="tab-pane" id="contentSubD3" role="tabpanel">
            <h2>Trafikförsäkring</h2>
            <p class="card-text">Alla bilar ska enligt svensk lag ha en trafikförsäkring. Det är den billigaste formen
              av bilförsäkring och ersätter personskador och skador på andras egendom.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="tab-pane" id="contentD2" role="tabpanel">
    <div class="card">
      <div class="card-block p-15">
        <h2>Båtförsäkring</h2>
        <p class="card-text">Sveriges populäraste båtförsäkring som gäller både till sjöss och på land. Välj den
          försäkring som passar dig och din båt bäst.</p>
      </div>
    </div>
  </div>
  <div class="tab-pane" id="contentD3" role="tabpanel">
    <div class="card">
      <div class="card-block p-15">
        <h2>Mc-försäkring</h2>
        <p class="card-text">Motorcykelförsäkring som anpassas efter dina behov.</p>
      </div>
    </div>
  </div>
</div>


<p class="text-sm mt-15 mb-05 text-muted">Fill width</p>
<ul class="nav nav-tabs nav-fill" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" data-bs-toggle="tab" href="#contentB1" role="tab" data-text="Bilförsäkring">
      Bilförsäkring
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-bs-toggle="tab" href="#contentB2" role="tab" data-text="Båtförsäkring">
      Båtförsäkring
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-bs-toggle="tab" href="#contentB3" role="tab" data-text="Mc-försäkring">
      Mc-försäkring
    </a>
  </li>
</ul>
<div class="tab-content">
  <div class="tab-pane active" id="contentB1" role="tabpanel">
    <div class="card">
      <div class="card-block p-155">
        <h2>Bilförsäkring</h2>
        <p class="card-text">En trygg bilförsäkring som tål att jämföras. Välj den försäkring som passar din bil bäst.
          Vi försäkrar elbilar och laddhybrider likväl som traditionella bränslebilar.</p>
      </div>
    </div>
  </div>
  <div class="tab-pane" id="contentB2" role="tabpanel">
    <div class="card">
      <div class="card-block p-155">
        <h2>Båtförsäkring</h2>
        <p class="card-text">Sveriges populäraste båtförsäkring som gäller både till sjöss och på land. Välj den
          försäkring som passar dig och din båt bäst.</p>
      </div>
    </div>
  </div>
  <div class="tab-pane" id="contentB3" role="tabpanel">
    <div class="card">
      <div class="card-block p-155">
        <h2>Mc-försäkring</h2>
        <p class="card-text">Motorcykelförsäkring som anpassas efter dina behov.</p>
      </div>
    </div>
  </div>
</div>
`,B={title:"Navigations/Tabs",parameters:{backgrounds:{default:"gray"},badges:["stable"]}};function i({icons:a,fill:t}){return`
  <ul class="nav nav-lines ${t?"nav-fill":""}" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" data-bs-toggle="tab" href="#contentA1" role="tab" data-text="Bilförsäkring">
        ${a?`<svg role="presentation" class="icon" width="24" height="24">
          <use xlink:href="lf-icons/sprite/24/icons.svg#car-24"></use>
        </svg>`:""}
        Bilförsäkring
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-bs-toggle="tab" href="#contentA2" role="tab" data-text="Båtförsäkring">
        ${a?`<svg role="presentation" class="icon" width="24" height="24">
          <use xlink:href="lf-icons/sprite/24/icons.svg#boat-24"></use>
        </svg>`:""}
        Båtförsäkring
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-bs-toggle="tab" href="#contentA3" role="tab" data-text="Mc-försäkring">
        ${a?`<svg role="presentation" class="icon" width="24" height="24">
          <use xlink:href="lf-icons/sprite/24/icons.svg#mc-24"></use>
        </svg>`:""}
        Mc-försäkring
      </a>
    </li>
  </ul>
  `}function l({icons:a,fill:t}){return`
    <ul class="nav nav-tabs ${t?"nav-fill":""}" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" data-bs-toggle="tab" href="#contentA1" role="tab" data-text="Bilförsäkring">
          ${a?`<svg role="presentation" class="icon" width="24" height="24">
            <use xlink:href="lf-icons/sprite/24/icons.svg#boat-24"></use>
          </svg>`:""}
          Bilförsäkring
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-bs-toggle="tab" href="#contentA2" role="tab" data-text="Båtförsäkring">
          ${a?`<svg role="presentation" class="icon" width="24" height="24">
            <use xlink:href="lf-icons/sprite/24/icons.svg#boat-24"></use>
          </svg>`:""}
          Båtförsäkring
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-bs-toggle="tab" href="#contentA3" role="tab" data-text="Mc-försäkring">
          ${a?`<svg role="presentation" class="icon" width="24" height="24">
            <use xlink:href="lf-icons/sprite/24/icons.svg#boat-24"></use>
          </svg>`:""}
          Mc-försäkring
        </a>
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane active" id="contentA1" role="tabpanel">
        <div class="card">
          <div class="card-block p-155">
            <h2>Bilförsäkring</h2>
            <p class="card-text">En trygg bilförsäkring som tål att jämföras. Välj den försäkring som passar din bil bäst.
              Vi försäkrar elbilar och laddhybrider likväl som traditionella bränslebilar.</p>
          </div>
        </div>
      </div>
      <div class="tab-pane" id="contentA2" role="tabpanel">
        <div class="card">
          <div class="card-block p-155">
            <h2>Båtförsäkring</h2>
            <p class="card-text">Sveriges populäraste båtförsäkring som gäller både till sjöss och på land. Välj den
              försäkring som passar dig och din båt bäst.</p>
          </div>
        </div>
      </div>
      <div class="tab-pane" id="contentA3" role="tabpanel">
        <div class="card">
          <div class="card-block p-155">
            <h2>Mc-försäkring</h2>
            <p class="card-text">Motorcykelförsäkring som anpassas efter dina behov.</p>
          </div>
        </div>
      </div>
    </div>
  `}function S(){return`
  <ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" data-bs-toggle="tab" href="#contentD1" role="tab" data-text="Bilförsäkring">
        Bilförsäkring
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-bs-toggle="tab" href="#contentD2" role="tab" data-text="Båtförsäkring">
        Båtförsäkring
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-bs-toggle="tab" href="#contentD3" role="tab" data-text="Mc-försäkring">
        Mc-försäkring
      </a>
    </li>
  </ul>

  <div class="tab-content">
    <div class="tab-pane active" id="contentD1" role="tabpanel">
      <div class="card">
        <div class="card-block pl-15 pr-15 pb-15 pt-075">
          <ul class="nav nav-sub mb-1" role="tablist">
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#contentSubD1" role="tab" data-text="Helförsäkring">
                Helförsäkring
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" data-bs-toggle="tab" href="#contentSubD2" role="tab" data-text="Halvförsäkring">
                Halvförsäkring
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#contentSubD3" role="tab" data-text="Trafikförsäkring">
                Trafikförsäkring
              </a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane" id="contentSubD1" role="tabpanel">
              <h2>Helförsäkring</h2>
              <p class="card-text">Helförsäkringen innehåller dessutom skydd för vagnskador – skador på din egen bil vid
                en trafikolycka eller någon annan så kallad yttre olyckshändelse.</p>
            </div>
            <div class="tab-pane active" id="contentSubD2" role="tabpanel">
              <h2>Halvförsäkring</h2>
              <p class="card-text">Om du vill att skador på din egen bil ska täckas av försäkringen behöver du minst en
                halvförsäkring. I den ingår skydd för brand-, glas-, och stöldskador, assistans och räddning, rättsskydd,
                maskinskada och elektronik, allrisk samt kris.</p>
            </div>
            <div class="tab-pane" id="contentSubD3" role="tabpanel">
              <h2>Trafikförsäkring</h2>
              <p class="card-text">Alla bilar ska enligt svensk lag ha en trafikförsäkring. Det är den billigaste formen
                av bilförsäkring och ersätter personskador och skador på andras egendom.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-pane" id="contentD2" role="tabpanel">
      <div class="card">
        <div class="card-block p-15">
          <h2>Båtförsäkring</h2>
          <p class="card-text">Sveriges populäraste båtförsäkring som gäller både till sjöss och på land. Välj den
            försäkring som passar dig och din båt bäst.</p>
        </div>
      </div>
    </div>
    <div class="tab-pane" id="contentD3" role="tabpanel">
      <div class="card">
        <div class="card-block p-15">
          <h2>Mc-försäkring</h2>
          <p class="card-text">Motorcykelförsäkring som anpassas efter dina behov.</p>
        </div>
      </div>
    </div>
  </div>
  `}const e=i.bind({});e.args={icons:!1,fill:!1};e.parameters={backgrounds:{default:"white"}};const r=i.bind({});r.args={icons:!0};r.parameters={backgrounds:{default:"white"}};const c=i.bind({});c.args={fill:!0};c.parameters={backgrounds:{default:"white"}};const f=l.bind({});f.args={icons:!1,fill:!1,subNavigation:!1};const p=l.bind({});p.args={icons:!0};const h=l.bind({});h.args={fill:!0};const m=S.bind({});m.args={};const n=()=>u,s=()=>x;var d,o,b;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:"() => LineTabs",...(b=(o=n.parameters)==null?void 0:o.docs)==null?void 0:b.source}}};var v,g,k;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:"() => ContainedTabs",...(k=(g=s.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};const M=["LineDefault","LineWithIcons","LineFillWidth","StandardDefault","StandardWithIcons","StandardFillWidth","SubNavigation","lineTabs","containedTabs"],D=Object.freeze(Object.defineProperty({__proto__:null,LineDefault:e,LineFillWidth:c,LineWithIcons:r,StandardDefault:f,StandardFillWidth:h,StandardWithIcons:p,SubNavigation:m,__namedExportsOrder:M,containedTabs:s,default:B,lineTabs:n},Symbol.toStringTag,{value:"Module"}));export{e as L,f as S,D as T,m as a,p as b,r as c,h as d,c as e};
