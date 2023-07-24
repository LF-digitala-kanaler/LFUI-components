import Upload from './upload.html?raw'

import { useEffect, useState } from '@storybook/client-api'
import { uploadExample } from './upload'
import { html, uid } from '../../js/utils'

export default {
  title: 'Forms/Upload',
  parameters: {
    backgrounds: { default: 'white' },
    badges: ['stable']
  },
  argTypes: {}
}

function renderPopover() {
  // const popoverId = `${id}-popover`
  const image = 'https://avatars.githubusercontent.com/u/21335758'
  return `
  <span
    role="button"
    tabindex="-1"
    class="popover-tooltip-trigger p-0 b-0  mr-05"
    aria-controls="popover">
    <img class="upload-image" alt="" src=${image} width="35" height="35" />
    <div role="alert" id="popover" class="popover-tooltip popover-bottom popover-attach">
      <p class="popover-title">Preview</p>
      <div class="popover-content">
        <div class="card">
          <div class="card-block">
            <img class="img-fluid w-100" src=${image} alt="" />
          </div>
        </div>
      </div>
    </div>
  </span>

    `
}


function Template(args) {
  const [id] = useState(uid)
  const inputId = `${id}-upload`

  useEffect(() => {
    uploadExample(document.getElementById(id))
  }, [])

  return `
  <div id="${id}" class="upload w-100">
    <div class="upload-placeholder"></div>
    <input
      class="upload-input"
      type="file"
      name="filename"
      id="${inputId}"
      multiple />
    <label class="upload-label btn btn-secondary px-1" for="${inputId}">
      <svg
        focusable="false"
        aria-hidden="true"
        class="icon mr-025"
        width="24"
        height="24">
        <use xlink:href="lf-icons/sprite/24/icons.svg#attachment-24"></use>
      </svg>
      Bifoga fil
    </label>
  </div>
  `
}

function PreviewTemplate({ popover, errorMessage = 'Description of error in input', invalid, valid, loading }) {
  const [id] = useState(uid)
  // useEffect(() => {
  //   uploadExample(document.getElementById(id))
  // }, [])


  return `
  <div class="upload-preview loading mb-05 ${invalid ? 'has-danger' : ''} ${valid ? 'has-valid' : ''}">
    <div class="upload-body">
      ${popover ? renderPopover() : '<div class="upload-image mr-05"></div>'}
      <span class="upload-name">the-file-name.jpg</span>

      <div id="upload2" class="upload-progress">
        <div
          class="upload-progress-bar"
          role="progressbar"
          ${loading ? `style="transform: translateX(-${loading}%)"` : ''}
        ></div>
      </div>
    </div>
    ${invalid ? `<small class="upload-feedback">${errorMessage}</small>` : ''}
  </div>
  `
}

export const Default = Template.bind({})
Default.args = {}

export const Preview = PreviewTemplate.bind({})
Preview.args = {
}

export const PreviewValid = PreviewTemplate.bind({})
PreviewValid.args = {
  valid: true
}

export const PreviewInvalid = PreviewTemplate.bind({})
PreviewInvalid.args = {
  invalid: true,
  errorMessage: 'Description of error in input'
}

export const PreviewPopover = PreviewTemplate.bind({})
PreviewPopover.args = {
  popover: true
}

export const PreviewLoading = PreviewTemplate.bind({})
PreviewLoading.args = {
  loading: 90
}

export const Example = () => {
  const [id] = useState(uid)
  useEffect(() => {
    uploadExample(document.getElementById(id))
  }, [])
  return html`
    <div id="${id}">${Upload}</div>
  `
}
