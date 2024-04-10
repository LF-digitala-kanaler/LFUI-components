import StyledRadioButtons from './styledRadioButtons.html?raw'
import ButtonGroup from './buttonGroup.html?raw'
import RadioCards from './radioCards.html?raw'

import { useEffect, useState } from '@storybook/client-api'
import { radioButtonsExample } from './radioButtons'
import { html, uid } from '../../js/utils'

export default {
  title: 'Forms/Radio Buttons',
  parameters: {
    backgrounds: { default: 'white' },
    badges: ['stable']
  },
  argTypes: {}
}

function StyledRadioButtonTemplate({ valid }) {
  return `
  <fieldset>
  <legend>Pick one</legend>
  <div class="form-group ${valid ? 'has-valid' : ''}">
    <div class="d-md-inline-block">
      <div class="custom-control custom-radio mr-05 mb-05">
        <input id="radio1" name="styledRadio" type="radio" class="custom-control-input">
        <label class="custom-control-label" for="radio1">One of the options</label>
      </div>
    </div>
    <div class="d-md-inline-block">
      <div class="custom-control custom-radio mr-05 mb-05">
        <input id="radio2" name="styledRadio" type="radio" checked class="custom-control-input">
        <label class="custom-control-label" for="radio2">The preferred option</label>
      </div>
    </div>
  </div>
  </fieldset>
  `
}

/* Custom aria-label... add to input and aria-hidden on the label.  */
/*
  Inplicit label is bugy with screen readers, thats why we
  move the input outside of the label.
*/

function RenderButtonGroupItem({ active, value = 'Yes' }) {
  const id = uid()

  return `
  <div class="button-group-item">
  <label
    aria-hidden="true"
    class="btn ${active ? 'active' : ''}"
    for="${id}"
  >
    ${value}
    <span aria-hidden="true" data-text="${value}"></span>
  </label>
  <input
    type="radio"
    name="ButtonGroupOptions"
    value="${value}"
    id="${id}"
    ${active ? 'checked' : ''}
  />
  </div>
  `
}

function ButtonGroupTemplate({ items = [] }) {
  const id = uid()

  useEffect(() => radioButtonsExample(document.getElementById(id)), [])

  return `
  <fieldset>
    <legend>Pick one</legend>
    <div id="${id}" class="btn-group" data-bs-toggle="buttons">
      ${items.map((item) => RenderButtonGroupItem(item)).join('')}
    </div>
  </fieldset>
  `
}

function OldRenderButtonGroupItem({ active, value = 'Yes' }, id, index) {
  const itemId = `${id}-${index}`

  return `
    <label class="btn ${active ? 'active' : ''}" data-text="${value}" for="${itemId}">
      <input
        type="radio"
        name="${id}"
        id="${itemId}"
        value="${value}"
        ${active ? 'checked' : ''}
      />
    ${value}
    </label >
  `
}

function OldButtonGroupTemplate({ items = [] }) {
  const id = uid()

  useEffect(() => radioButtonsExample(document.getElementById(id)), [])

  console.log('items', items)

  return `
  <fieldset>
    <legend>Pick one</legend>
    <div id="${id}" class="btn-group" data-bs-toggle="buttons">
      ${items.map((item, index) => OldRenderButtonGroupItem(item, id, index)).join('')}
    </div>
  </fieldset>
  `
}

function RenderRadioCard({ name, disabled, active, value = 'Rekomenderad' }) {
  return `
  <div class="radio-card ${active ? 'active' : ''}" >
    <label class="custom-control custom-radio">
      <input
        name="${name || uid()}"
        type="radio"
        id="radioCardSm3"
        class="custom-control-input"
        ${disabled ? 'disabled' : ''}
        ${active ? 'checked' : ''}
        value=${value}
      />
      <span class="custom-control-label">
        <svg
          role="presentation"
          class="icon d-block mx-auto mb-05"
          width="40"
          height="40">
          <use xlink:href="lf-icons/sprite/40/icons.svg#thumb-up-40"></use>
        </svg>
       ${value}
      </span>
    </label>
</div >
  `
}

function RadioCardsTemplate({ items }) {
  const id = uid()

  useEffect(() => radioButtonsExample(document.getElementById(id)), [])

  return `
  <fieldset>
    <legend>Pick on</legend>
    <div id="${id}" class="row row-tight form-group">
        ${items
          .map(
            (item) => `
          <div class="col-6 col-md-3 mb-1">
            ${RenderRadioCard({ name: id, ...item })}
          </div>
          `
          )
          .join('')}
    </div>
    </fieldset>
  `
}

function RadioCardTemplate(args) {
  const id = uid()

  useEffect(() => radioButtonsExample(document.getElementById(id)), [])

  return `
    <div id="${id}" class="row row-tight form-group">
      <div class="col-6 col-md-3 mb-1">
        ${RenderRadioCard(args)}
      </div>
    </div
  `
}

export const Default = StyledRadioButtonTemplate.bind({})

export const Card = RadioCardTemplate.bind({})
Card.args = {
  disabled: false,
  active: false
}

export const Cards = RadioCardsTemplate.bind({})
Cards.args = {
  items: [{ value: 'Val 1', active: true }, { value: 'Val 2' }]
}

export const CardDisabled = RadioCardTemplate.bind({})
CardDisabled.args = {
  disabled: true,
  value: 'Rekomenderad'
}

export const CardActive = RadioCardTemplate.bind({})
CardActive.args = {
  active: true,
  value: 'Rekomenderad'
}

export const Group = ButtonGroupTemplate.bind({})
Group.args = {
  items: [
    { active: true, value: 'Yes' },
    { active: false, value: 'No' }
  ]
}

export const OldGroup = OldButtonGroupTemplate.bind({})
OldGroup.args = {
  items: [
    { active: true, value: 'Yes' },
    { active: false, value: 'No' }
  ]
}

export const styledRadioButtons = () => StyledRadioButtons

export const buttonGroup = () => {
  const [id] = useState(uid)
  useEffect(() => {
    radioButtonsExample(document.getElementById(id))
  }, [])
  return html`
  < div id = "${id}" > ${ButtonGroup}</div >
    `
}

export const radioCards = () => {
  const [id] = useState(uid)
  useEffect(() => {
    radioButtonsExample(document.getElementById(id))
  }, [])
  return html`
    < div id = "${id}" > ${RadioCards}</div >
      `
}
