import Multiple from './multiple.html?raw'
import Single from './single.html?raw'
import { useEffect, useState } from '@storybook/client-api'
import { selectExample } from './select'
import { html, uid } from '../../js/utils'
import { storyWrapper } from '../utils'
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

export const single = storyWrapper(() => {
  const [id] = useState(uid)
  useEffect(() => selectExample(document.getElementById(id)), [])
  return html`
    <div id="${id}">${Single}</div>
  `
})

export const multiple = storyWrapper(() => {
  const [id] = useState(uid)
  useEffect(() => selectExample(document.getElementById(id)), [])
  return html`
    <div id="${id}">${Multiple}</div>
  `
})

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
          <label class="select-label" for="select">${args.label || 'Stad'}</label>
          <select
            class="select-options"
            name="timezone"
            id="select"
            ${args.disabled === true ? 'disabled' : ''}
            ${args.multiple ? 'multiple' : ''}
          >
            <option value="" ${args.selected === '' ? 'selected' : ''} disabled hidden>
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
          <label class="select-label" for="select">${args.label || 'Stad'}</label>
          <select
            class="select-options"
            name="timezone"
            id="select"
            ${args.multiple ? 'multiple' : ''}>
            <option value="" selected disabled hidden>Välj stad</option>
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
