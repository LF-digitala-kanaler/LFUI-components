import { useEffect, useState } from '@storybook/client-api'
import { tableExample } from './table'
import { uid } from '../../js/utils'

export default {
  title: 'Page content/Tables',
  parameters: {
    backgrounds: { default: 'gray' },
    badges: ['stable']
  }
}

export const PresentDefault = () => `
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
  `


export const PresentSizing = () => `
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
`
export const PresentSummaryRow = () => `
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
  `

export const PresentBandedRows = () => `
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
  `

export const PresentInTableGrouping = () => `
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
  `

export const PresentExpandableRows = () => {
  return `
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
  `
}

export const PresentClickableRows = () => {
  return `
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
  `
}

export const PresentSubGrouping = () => `
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
`

export const PresentSorting = () => {
  const [id] = useState(uid)

  useEffect(() => {
    tableExample(document.getElementById(id))
  }, [])

  return `
  <div id="${id}">
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
  `
}

export const Comparative = () => {
  return `
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
  `
}
