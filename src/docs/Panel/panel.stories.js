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
  return `
  <article class="card">
    <h3 class="card-header">${header}</h3>
    <div class="card-block">
      <p class="card-text">${text}</p>
    </div>
  </article>
  `
}

function CollapsedTemplate({ header, text, collapsed = false }) {
  const [id] = useState(uid)
  useEffect(() => panelExample(document.getElementById(id)), [])

  return `
  <button
    class="collapse-toggle"
    role="button"
    type="button"
    aria-controls="${id}"
    data-bs-toggle="collapse"
    data-bs-target="#${id}"
    aria-expanded="${collapsed ? 'false' : 'true'}">
    ${header}
  </button>
  <article class="collapse ${collapsed ? '' : 'show'}" id="${id}">
    <h1 class="visually-hidden">${header}</h1>
    <div class="card mb-0">
      <div class="card-block">
        <p class="card-text">
          ${text}
        </p>
      </div>
    </div>
  </article>
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
