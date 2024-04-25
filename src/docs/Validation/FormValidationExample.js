export function ValidationExample(form) {
  const controls = [...form.querySelectorAll('input, select')]
  const email = form.querySelector('[type="email"]')

  controls.forEach((control) => {
    control.addEventListener('invalid', (event) => {
      console.log('I am invalid', event.target)
      showError(control)
    })
  })

  function showErrorText(element) {
    if (element.validity.valueMissing) {
      // If the field is empty,
      // display the following error message.
      return errors[element.type].valueMissing
    } else if (email.validity.typeMismatch) {
      // If the field doesn't contain an email address,
      // display the following error message.
      return errors[element.type].typeMismatch
    } else if (element.validity.rangeUnderflow) {
      return errors[element.type].rangeUnderflow
    } else if (element.validity.rangeOverflow) {
      return errors[element.type].rangeOverflow
    }
  }

  const errors = {
    email: {
      valueMissing: 'You need to enter an email address.',
      typeMismatch: 'Entered value needs to be an email address.'
    },

    text: {
      valueMissing: 'Field is required',
      typeMismatch: 'Wrong format'
    },

    radio: {
      valueMissing: 'You need to pick one'
    },

    number: {
      valueMissing: 'Field is required',
      rangeOverflow: 'Pick a lower amount',
      valueMax: 'Pick a lower amount',
      min: 'To low!',
      rangeUnderflow: 'Pick a higher amount'
    }
  }

  function showError(element) {
    const isCheckRadio = 'radio' || element.type === 'checkbox'
    const id = element.type === isCheckRadio ? element.id.split('-')[0] : element.id
    const feedback = document.getElementById(`${id}-feedback`)
    console.log('feedback', feedback)

    const formGroup = element.closest('.form-group')
    formGroup.classList.add('has-danger')

    /* We add the error message */
    feedback.innerHTML = `<small class="form-control-feedback">
            ${showErrorText(element)}
        </small>`

    /* Update aria-invalid on the element */
    element.setAttribute('aria-invalid', true)
  }

  function hideError(element) {
    const formGroup = element.closest('.form-group')
    formGroup.classList.remove('has-danger')
    formGroup.querySelector('.form-control-feedback')?.remove()
    element.removeAttribute('aria-invalid')
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    form.checkValidity()
  })

  form.addEventListener('change', ({ target }) => {
    if (target.type === 'submit') {
      return
    }

    if (target.validity.valid) {
      hideError(target)
    } else {
      showError(target)
    }
  })
}
