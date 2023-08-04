import { uid } from '../../js/utils'
import { useState, useEffect } from '@storybook/client-api'

export default {
  title: 'Forms/Checkboxes/Checkbox Card',
  parameters: {
    backgrounds: { default: 'white' },
    badges: ['stable']
  },
  argTypes: {
  }
}

function Template({
  label,
  disabled,
  checked,
  iconUrl = '40/icons.svg#thumb-up-40'
}) {
  const [id] = useState(uid)

  useEffect(() => {
    const element = document.getElementById(id)

    element.addEventListener('change', function() {
      if (!this.classList.contains('active')) {
        this.classList.add('active')
      } else {
        this.classList.remove('active')
      }
    })
  }, [label, disabled, checked, iconUrl])

  return `
    <div class="checkbox-card">
      <label class="custom-control custom-checkbox">
        <input
          name="checkboxCard"
          type="checkbox"
          id="${id}"
          class="custom-control-input"
          ${checked ? 'checked' : ''}
          ${disabled ? 'disabled' : ''}
        />
        <span class="custom-control-label">
          <svg
            role="presentation"
            class="icon d-block mx-auto mb-05"
            width="40"
            height="40">
            <use xlink:href="lf-icons/sprite/${iconUrl}"></use>
          </svg>
          ${label}
        </span>
      </label>
    </div>
  `
}

export const Default = Template.bind({})
Default.args = {
  label: 'Checkbox',
  checked: false,
  disabled: false,
  iconUrl: '40/icons.svg#thumb-up-40'
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Disabled checkbox',
  disabled: true
}

export const Checked = Template.bind({})
Checked.args = {
  label: 'Checked checkbox',
  checked: true
}
