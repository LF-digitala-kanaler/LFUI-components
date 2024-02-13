import { render } from 'preact'
import { useState } from 'preact/hooks'

export function reactExample(id) {
  render(<ReactSelect />, document.getElementById(id))
}

export function ReactSelect() {
  const [value, setValue] = useState('göteborg')

  function changeHandler(event) {
    setValue(event.target.value)
  }

  return (
    <div>
      <div>
        <p class="mb-05 text-muted">Selected value: {value || 'Select city'}</p>
      </div>
      <div class="col-md-6">
        <p class="text-sm mt-15 mb-05 text-muted">Default value</p>
        <form class="form-group">
          <div class="select">
            <label class="select-label" for="select-default-value">City</label>
            <select
              class="select-options"
              name="timezone"
              id="select-default-value"
              value={value}
              onChange={changeHandler}
            >
              <option disabled hidden value="">Select city</option>
              <option value="stockholm">Stockholm</option>
              <option value="göteborg">Göteborg</option>
              <option value="malmö">Malmö</option>
              <option value="umeå">Umeå</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  )
}
