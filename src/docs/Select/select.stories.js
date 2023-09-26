import Multiple from './multiple.html?raw'
import Single from './single.html?raw'
import { useEffect, useState } from '@storybook/client-api'
import { selectExample } from './select'
import { html, uid, storyWrapper } from '../../js/utils'
// import { ReactSelect } from './reactExample.jsx'
// import { render } from 'preact'

export default {
  title: 'Forms/Select',
  parameters: {
    backgrounds: { default: 'white' },
    badges: ['stable']
  },
  argTypes: {
    selected: {
      control: 'select',
      options: ['None', 'Stockholm', 'Göteborg', 'Malmö', 'Umeå'],
      mapping: {
        None: ''
      }
    },
    label: {
      control: 'text',
      description: 'Label to the select element',
      table: {
        defaultValue: { summary: 'Stad' },
        type: { summary: 'string' }
      }
    }
  }
}

export const single = () => Single

// export const multiple = () => Multiple
export const multiple = (args) => {
  const [id] = useState(uid)
  useEffect(() => selectExample(document.getElementById(id)), [])
  return `
    <div id="${id}">
    <div class="row">
      <div class="col-md-6">
        <p class="text-sm mt-15 mb-05 text-muted">Default</p>
        <form class="form-group">
          <div class="select">
            <label class="select-label" for="select-multiple">Berries</label>
            <select multiple class="select-options" name="berries" id="select-multiple">
              <option value="" disabled hidden>Select Berries</option>
              <option value="1">Raspberry</option>
              <option value="2">Blueberry</option>
              <option value="3">Blackberry</option>
              <option value="4">Strawberry</option>
              <option value="5">Cranberry</option>
            </select>
          </div>
        </form>
      </div>
      <div class="col-md-6">
        <p class="text-sm mt-15 mb-05 text-muted">Select all</p>
        <form class="form-group">
          <div class="select" data-all-label="Select all berries">
            <label class="select-label" for="select-multiple-all">Berries</label>
            <select multiple class="select-options" name="berries" id="select-multiple-all">
              <option value="" disabled selected hidden>Select Berries</option>
              <option>Raspberry</option>
              <option>Blueberry</option>
              <option>Blackberry</option>
              <option>Strawberry</option>
              <option>Cranberry</option>
            </select>
          </div>
        </form>
      </div>
      <div class="col-md-6">
        <p class="text-sm mt-15 mb-05 text-muted">Label inside</p>
        <label>&nbsp;</label>
        <form class="form-group">
          <div class="select inside">
            <label class="select-label" for="select-multiple-inside">Berries</label>
            <select multiple class="select-options" name="berries" id="select-multiple-inside">
              <option value="" disabled selected hidden>Select Berries</option>
              <option>Raspberry</option>
              <option>Blueberry</option>
              <option>Blackberry</option>
              <option>Strawberry</option>
              <option>Cranberry</option>
            </select>
          </div>
        </form>
      </div>
      <div class="col-md-6">
        <p class="text-sm mt-15 mb-05 text-muted">Required</p>
        <form class="form-group">
          <div class="select">
            <label class="select-label" for="select-required">Berries</label>
            <select multiple class="select-options" name="berries" id="select-required" required>
              <option>Raspberry</option>
              <option selected>Blueberry</option>
              <option>Blackberry</option>
              <option>Strawberry</option>
              <option selected>Cranberry</option>
            </select>
          </div>
        </form>
      </div>
      <div class="col-md-6">
        <p class="text-sm mt-15 mb-05 text-muted">Disabled</p>
        <form class="form-group">
          <div class="select">
            <label class="select-label" for="select-multiple-disabled">Berries</label>
            <select multiple disabled class="select-options" name="berries" id="select-multiple-disabled">
              <option value="" disabled selected hidden>Select Berries</option>
              <option>Raspberry</option>
              <option>Blueberry</option>
              <option>Blackberry</option>
              <option>Strawberry</option>
              <option>Cranberry</option>
            </select>
          </div>
        </form>
      </div>
      <div class="col-md-6">
        <p class="text-sm mt-15 mb-05 text-muted">Disabled options</p>
        <form class="form-group">
          <div class="select" data-small-pattern="\\(.+?\\)">
            <label class="select-label" for="select-multiple-disabled-options">Berries</label>
            <select multiple class="select-options" name="berries" id="select-multiple-disabled-options">
              <option value="" disabled selected hidden>Select Berries</option>
              <option>Raspberry</option>
              <option disabled>Blueberry (out of stock)</option>
              <option>Blackberry</option>
              <option disabled selected>Strawberry (already purchased)</option>
              <option>Cranberry</option>
            </select>
          </div>
        </form>
      </div>
      <div class="col-md-6">
        <p class="text-sm mt-15 mb-05 text-muted">With Option Groups</p>
        <form class="form-group">
          <div class="select">
            <label class="select-label" for="select-multiple-groups">Berries</label>
            <select multiple class="select-options" name="berries" id="select-multiple-groups">
              <option value="" disabled selected hidden>Select Berries</option>
              <optgroup label="Red">
                <option>Raspberry</option>
                <option>Strawberry</option>
                <option>Cranberry</option>
              </optgroup>
              <optgroup label="Blue">
                <option>Blueberry</option>
              </optgroup>
              <optgroup label="Black">
                <option>Blackberry</option>
              </optgroup>
            </select>
          </div>
        </form>
      </div>
      <div class="col-md-6">
        <p class="text-sm mt-15 mb-05 text-muted">With Toggle Groups</p>
        <form class="form-group">
          <div class="select" data-group-toggle data-small-pattern="\((\d+)\)$">
            <label class="select-label" for="select-multiple-toggles">Berries</label>
            <select multiple class="select-options" name="berries" id="select-multiple-toggles">
              <option value="" disabled selected hidden>Select Berries</option>
              <optgroup label="Red (3)">
                <option>Raspberry</option>
                <option>Strawberry</option>
                <option>Cranberry</option>
              </optgroup>
              <optgroup label="Blue (1)">
                <option>Blueberry</option>
              </optgroup>
              <optgroup label="Black (1)">
                <option>Blackberry</option>
              </optgroup>
            </select>
          </div>
        </form>
      </div>
    </div>
    </div>
  `
}

// export const react = storyWrapper(() => {
//   const [id] = useState(uid)
//   useEffect(() => {
//     render(<ReactSelect />, document.getElementById(id))
//     selectExample(document.getElementById(id))
//   }, [])
//   return html`
//     <div id="${id}"></div>
//   `
// })

const Basic = (args) => {
  const [id] = useState(uid)
  const options = ['Stockholm', 'Göteborg', 'Malmö', 'Umeå']

  function renderOptions(selected) {
    return options
      .map((option) => {
        const elem = `
        <option
          value="${option}"
          ${selected === option ? 'selected' : ''}
        >${option}</option>
      `

        return elem
      })
      .join('')
  }

  useEffect(() => {
    selectExample(document.getElementById(id))
  }, [args])

  return `
    <div id="${id}">
      <form class="form-group">
        <div class="select ${args.labelInside ? 'inside' : ''}">
          <label class="select-label" for="select-${id}">${args.label || 'Stad'}</label>
          <select
            class="select-options"
            name="timezone"
            id="select-${id}"
            ${args.disabled === true ? 'disabled' : ''}
            ${args.multiple ? 'multiple' : ''}
          >
            <option value="" ${args.selected === '' ? 'selected' : ''} disabled>
              Välj stad
            </option>
            ${renderOptions(args.selected)}
          </select>
        </div>
      </form>
    </div>
  `
}

const SmallTextTemplate = (args) => {
  const [id] = useState(uid)

  useEffect(() => {
    selectExample(document.getElementById(id))
  }, [args])

  return `
    <div id="${id}">
      <form class="form-group">
        <div class="select" data-small-pattern="\\((.+?)\\)">
          <label class="select-label" for="select-${id}">Stad</label>
          <select
            class="select-options"
            name="timezone"
            id="select-${id}"
            ${args.multiple ? 'multiple' : ''}>
            <option value="" selected disabled hidden>Välj stad</option>
            <option value="stockholm">Stockholm (Stockholm)</option>
            <option value="göteborg">Göteborg (Västra Götaland)</option>
            <option value="malmö">Malmö (Skåne)</option>
            <option value="umeå">Umeå (Västerbottens)</option>
          </select>
        </div>
      </form>
    </div>
  `
}

export const DefaultButton = Basic.bind({})
DefaultButton.args = { selected: '', disabled: false, multiple: false }

export const Disabled = Basic.bind({})
Disabled.args = { disabled: true, selected: '' }

export const LabelInside = Basic.bind({})
LabelInside.args = { labelInside: true, selected: '' }

export const SmallText = SmallTextTemplate.bind({})
SmallText.args = { multiple: false }

const OptionGroupTemplate = (args) => {
  const [id] = useState(uid)

  useEffect(() => {
    selectExample(document.getElementById(id))
  }, [args])

  return `
    <div id="${id}">
      <form class="form-group">
        <div class="select" ${args.groupToggle ? 'data-group-toggle' : ''}>
          <label class="select-label" for="select-groups">Timezone</label>
          <select
            class="select-options"
            name="timezone"
            id="select-groups"
            ${args.multiple ? 'multiple' : ''}>
            <option value="" disabled selected hidden>Select Timezone</option>
            <optgroup label="Alaskan/Hawaiian Time Zone">
              <option value="AK">Alaska</option>
              <option value="HI">Hawaii</option>
            </optgroup>
            <optgroup label="Stockholm Time Zone">
              <option value="ST">Stockholm</option>
            </optgroup>
            <optgroup label="China Time Zone">
              <option value="CT">China</option>
            </optgroup>
          </select>
        </div>
      </form>
    </div>
  `
}

export const DisabledOptions = (args) => {
  const [id] = useState(uid)

  useEffect(() => {
    selectExample(document.getElementById(id))
  }, [args])

  return `
    <div id="${id}">
      <form class="form-group">
        <div class="select">
          <label class="select-label" for="select-${id}">${args.label || 'Stad'}</label>
          <select
            class="select-options"
            name="timezone"
            id="select-${id}"
            ${args.multiple ? 'multiple' : ''}>
            <option value="" selected disabled>Välj stad</option>
            <option value="stockholm" disabled>Stockholm</option>
            <option value="göteborg">Göteborg</option>
            <option value="malmö" disabled>Malmö</option>
            <option value="umeå">Umeå</option>
          </select>
        </div>
      </form>
    </div>
  `
}

export const OptionGroups = OptionGroupTemplate.bind({})
OptionGroups.args = { groupToggle: false, multiple: false }

export const OptionToggleGroup = OptionGroupTemplate.bind({})
OptionToggleGroup.args = { groupToggle: true, multiple: false }
