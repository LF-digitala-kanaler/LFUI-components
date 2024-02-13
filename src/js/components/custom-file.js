import { html } from '../utils'

export default class CustomFile {
  constructor(element) {
    this.element = element
    this._addEventListeners()
  }

  _addEventListeners() {
    const { classList } = this.element

    this.element.addEventListener('focus', () => {
      classList.add('has-focus')
    })
    this.element.addEventListener('blur', () => {
      classList.remove('has-focus')
    })

    // Since firefox does not trigger change when you close down the file window we have to use click
    this.element.addEventListener('click', () => {
      if (classList.contains('has-file') || classList.contains('has-multiple')) {
        setTimeout(() => {
          classList.remove('has-file')
          classList.remove('has-focus')
          this.element.nextElementSibling.querySelector('.custom-file-option')?.remove()
        }, 350)
      }
    })

    this.element.addEventListener('change', (event) => {
      const fileInput = event.target
      const next = this.element.nextElementSibling

      if (fileInput.value) {
        const files = event.target.files
        let label = files[0].name

        if (files.length > 0) {
          classList.add('has-file')
        }
        if (files.length === 0) {
          classList.remove('has-file')
        }

        if (files.length > 1) {
          label = files.length
          next.classList.add('has-multiple')
        } else {
          next.classList.remove('has-multiple')
        }

        for (const child of next.childNodes) {
          child.remove()
        }
        next.appendChild(
          html`
            <div class="custom-file-option">${label}</div>
          `
        )
      } else {
        classList.remove('has-file')
        next.querySelector('.custom-file-option').remove()
      }
    })
  }
}
