import { html, delegate } from '../../js/utils'

const uploadExample = (context) => {
  if (!context) {
    return
  }

  const element = context.classList.contains('upload') ? context : context.querySelector('.upload')
  if (!element) return null

  const input = context.querySelector('.upload-input')
  const placeholder = context.querySelector('.upload-placeholder')

  const popoverMarkup = (data) => {
    return html`
      <div role="alert" id="popover" class="popover-tooltip popover-bottom popover-attach">
        <p class="popover-title">Preview</p>
        <div class="popover-content">
          <div class="card">
            <div class="card-block">
              <img class="img-fluid w-100" src=${data.src} alt="" />
            </div>
          </div>
        </div>
      </div>
    `
  }

  const createMarkup = (data) => {
    return html`
      <div class="upload-preview  mb-05 ${data.validationClass}">
        <div class="upload-body">
          ${data.popover === true
        ? html`
                <span
                  role="button"
                  tabindex="-1"
                  class="popover-tooltip-trigger p-0 b-0  mr-05"
                  aria-controls="popover">
                  <img class="upload-image" alt="" src=${data.src} width="35" height="35" />
                  ${popoverMarkup(data)}
                </span>
              `
        : html`
                <div class="upload-image mr-05">${data.src}</div>
              `}
          <span class="upload-name">${data.name}</span>
          <button
            type="button"
            class="btn-close ml-auto upload-remove"
            aria-label="Remove"></button>
        </div>
        ${data.popover === false
        ? html`
              <small class="upload-feedback">Description of error in input</small>
            `
        : ''}
      </div>
    `
  }

  const previewFile = (file) => {
    const fileType = /image.*/
    const reader = new window.FileReader()

    if (file.type.match(fileType)) {
      reader.readAsDataURL(file)

      const data = {
        src: '#',
        name: ' ',
        file: ' ',
        popover: true,
        validationClass: ' '
      }
      placeholder.append(createMarkup(data))

      reader.onloadend = () => {
        const data = {
          src: reader.result,
          name: file.name,
          file,
          popover: true,
          validationClass: 'has-valid'
        }

        const children = [...placeholder.children].filter((el) =>
          el.classList.contains('upload-preview')
        )

        children[0].replaceWith(createMarkup(data))
      }
    } else {
      const data = {
        src: ' ',
        name: file.name,
        file,
        validationClass: 'has-danger',
        popover: false
      }
      placeholder.append(createMarkup(data))
    }
  }

  const handleFiles = (files) => {
    Array.from(files).forEach((file) => {
      previewFile(file)
    })
  }

  const handleUpload = () => {
    const FILES = input.files
    handleFiles(FILES)
  }

  element.addEventListener('change', handleUpload)

  context.addEventListener(
    'click',
    delegate('.upload-remove', function() {
      this.parentElement.parentElement.remove()
    })
  )

  input.addEventListener('focus', function() {
    input.classList.add('has-focus')
  })

  input.addEventListener('blur', function() {
    input.classList.remove('has-focus')
  })

  context.querySelector('#upload-test-btn')?.addEventListener('click', function() {
    const upload = context.querySelector('#upload2')
    const progress = upload.querySelector('.upload-progress-bar')

    upload.classList.add('loading')
    progress.removeAttribute('style')
    upload.parentElement.parentElement.classList.remove('has-valid')

    let timeleft = 100
    const loaderTest = setInterval(function() {
      timeleft--

      progress.style.setProperty('transform', 'translateX(-' + timeleft + '%)')

      if (timeleft <= 0) {
        clearInterval(loaderTest)
      }

      if (timeleft === 0) {
        upload.parentElement.parentElement.classList.add('has-valid')
      }

      upload.classList.remove('loading')
    }, 15)
  })
}

export { uploadExample }
