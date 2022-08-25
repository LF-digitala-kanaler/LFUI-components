import { html } from '../../js/utils'

const panelExample = (context) => {
  const trigger = context.querySelector('.js-asyncCollapse')
  if (!trigger) return

  const target = context.querySelector(trigger.dataset.bsTarget)

  trigger.addEventListener(
    'click',
    function () {
      setTimeout(function () {
        target.append(html`
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
        `)
        trigger.dispatchEvent(new window.Event('done'))
      }, 2500)
    },
    { once: true }
  )
}

export { panelExample }
