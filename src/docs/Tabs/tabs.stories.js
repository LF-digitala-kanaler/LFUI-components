import LineTabs from './LineTabs.html?raw'
import ContainedTabs from './ContainedTabs.html?raw'

export default {
  title: 'Navigations/Tabs',
  parameters: {
    backgrounds: { default: 'gray' },
    badges: ['stable']
  }
}

function LineTemplate({ icons, fill }) {
  return `
  <ul class="nav nav-lines ${fill ? 'nav-fill' : ''}" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" data-bs-toggle="tab" href="#contentA1" role="tab" data-text="Bilförsäkring">
        ${icons ? `<svg role="presentation" class="icon" width="24" height="24">
          <use xlink:href="lf-icons/sprite/24/icons.svg#car-24"></use>
        </svg>` : ''}
        Bilförsäkring
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-bs-toggle="tab" href="#contentA2" role="tab" data-text="Båtförsäkring">
        ${icons ? `<svg role="presentation" class="icon" width="24" height="24">
          <use xlink:href="lf-icons/sprite/24/icons.svg#boat-24"></use>
        </svg>` : ''}
        Båtförsäkring
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-bs-toggle="tab" href="#contentA3" role="tab" data-text="Mc-försäkring">
        ${icons ? `<svg role="presentation" class="icon" width="24" height="24">
          <use xlink:href="lf-icons/sprite/24/icons.svg#mc-24"></use>
        </svg>` : ''}
        Mc-försäkring
      </a>
    </li>
  </ul>
  `
}

function StandardTemplate({ icons, fill }) {
  return `
    <ul class="nav nav-tabs ${fill ? 'nav-fill' : ''}" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" data-bs-toggle="tab" href="#contentA1" role="tab" data-text="Bilförsäkring">
          ${icons ? `<svg role="presentation" class="icon" width="24" height="24">
            <use xlink:href="lf-icons/sprite/24/icons.svg#boat-24"></use>
          </svg>` : ''}
          Bilförsäkring
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-bs-toggle="tab" href="#contentA2" role="tab" data-text="Båtförsäkring">
          ${icons ? `<svg role="presentation" class="icon" width="24" height="24">
            <use xlink:href="lf-icons/sprite/24/icons.svg#boat-24"></use>
          </svg>` : ''}
          Båtförsäkring
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-bs-toggle="tab" href="#contentA3" role="tab" data-text="Mc-försäkring">
          ${icons ? `<svg role="presentation" class="icon" width="24" height="24">
            <use xlink:href="lf-icons/sprite/24/icons.svg#boat-24"></use>
          </svg>` : ''}
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
  `
}

function SubNavigationTemplate() {
  return `
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
  `
}

export const LineDefault = LineTemplate.bind({})
LineDefault.args = {
  icons: false,
  fill: false
}
LineDefault.parameters = {
  backgrounds: { default: 'white' }
}

export const LineWithIcons = LineTemplate.bind({})
LineWithIcons.args = {
  icons: true
}
LineWithIcons.parameters = {
  backgrounds: { default: 'white' }
}

export const LineFillWidth = LineTemplate.bind({})
LineFillWidth.args = {
  fill: true
}
LineFillWidth.parameters = {
  backgrounds: { default: 'white' }
}

export const StandardDefault = StandardTemplate.bind({})
StandardDefault.args = {
  icons: false,
  fill: false,
  subNavigation: false
}

export const StandardWithIcons = StandardTemplate.bind({})
StandardWithIcons.args = {
  icons: true
}

export const StandardFillWidth = StandardTemplate.bind({})
StandardFillWidth.args = {
  fill: true
}

export const SubNavigation = SubNavigationTemplate.bind({})
SubNavigation.args = {}

export const lineTabs = () => LineTabs
export const containedTabs = () => ContainedTabs
