// import AlwaysOpen from './alwaysOpen.html?raw'
// import CollapseExpand from './collapseExpand.html?raw'

import { useEffect, useState } from '@storybook/client-api'
import { panelExample } from './panel'
import { uid } from '../../js/utils'

export default {
  title: 'Page content/Panel',
  parameters: {
    backgrounds: { default: 'gray' },
    badges: ['stable']
  }
}

function Template({ header, text }) {
  const id = uid()
  return `
    <section aria-labelledby="${id}" class="card">
      <h3 id="${id}" class="card-header">${header}</h3>
      <div class="card-block">
        <p class="card-text">${text}</p>
      </div>
    </section>
  `
}

function CollapsedTemplate({ header, text, collapsed = false }) {
  const [id] = useState(uid)
  useEffect(() => panelExample(document.getElementById(id)), [])

  return `
    <section aria-labelledby="${id}" id="${id}">
      <h2 class='mb-0' tabindex="-1">
        <button
          class="collapse-toggle"
          type="button"
          aria-controls="${id}-content"
          data-bs-toggle="collapse"
          data-bs-target="#${id}-content"
          aria-expanded="${collapsed ? 'false' : 'true'}"
        >
          ${header}
        </button>
      </h2>
      
      <div id="${id}-content" class="mb-0 collapse ${collapsed ? '' : 'show'}">
        <div class="card">  
          <div class="card-block">
          <p class="card-text">
            ${text}
          </p>
        </div>
      </div>
    </section>

  `
}

export const AlwaysOpen = Template.bind({})
AlwaysOpen.args = {
  header: 'Become a banking customer online',
  text: 'Become a banking customer online in five easy steps. If you have a personal identity number and a BankID, you can become a banking customer instantly online.'
}

export const Expanded = CollapsedTemplate.bind({})
Expanded.args = {
  header: 'Become a banking customer online',
  text: 'Become a banking customer online in five easy steps. If you have a personal identity number and a BankID, you can become a banking customer instantly online.',
  collapsed: false
}

export const Collapsed = CollapsedTemplate.bind({})
Collapsed.args = {
  header: 'Become a banking customer online',
  text: 'Become a banking customer online in five easy steps. If you have a personal identity number and a BankID, you can become a banking customer instantly online.',
  collapsed: true
}

export const LazyLoad = () => {
  const id = uid()
  const wrapperId = uid()
  useEffect(() => panelExample(document.getElementById(wrapperId)), [])

  return `
  <div id="${wrapperId}">
  <button
    class="collapse-toggle js-asyncCollapse"
    role="button"
    type="button"
    aria-controls="${id}"
    data-bs-toggle="collapse:async"
    data-bs-target="#${id}"
    aria-expanded="false">
    Your transactions
  </button>
  <div class="collapse" id="${id}"></div>
  </div>
  <button style="display: block; width: 100%;" onclick="document.querySelector('.js-asyncCollapse').classList.add('loading')">loading</button>
  `
}

/*
export const alwaysOpen = () => AlwaysOpen

export const collapseExpand = () => {
  const [id] = useState(uid)
  useEffect(() => {
    panelExample(document.getElementById(id))
  }, [])
  return html`
    <div id="${id}">${CollapseExpand}</div>
  `
}
*/
