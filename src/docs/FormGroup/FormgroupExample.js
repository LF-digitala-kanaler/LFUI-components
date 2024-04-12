export function formGroupExample(form) {
  const email = form.querySelector('[type="email"]')
  const emailFeedback = form.querySelector('#email-feedback')
  const text = form.querySelector('[type="text"]')

  //   // denna triggas
  //   email.addEventListener('invalid', () => {
  //     console.log('I am invalid')
  //   })

  //   console.log('hello', form)

  //   // Triggas inte
  //   form.addEventListener('invalid', (event) => {
  //     console.log('invalid', event)
  //   })

  function showErrorText(element) {
    if (element.validity.valueMissing) {
      // If the field is empty,
      // display the following error message.
      return errors[element.type].valueMissing
    } else if (email.validity.typeMismatch) {
      // If the field doesn't contain an email address,
      // display the following error message.
      return errors[element.type].typeMismatch
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
    }
  }

  function showError(element) {
    const feedback = document.getElementById(`${element.id}-feedback`)
    console.log('feedback', feedback)

    const formGroup = element.closest('.form-group')
    formGroup.classList.add('has-danger')

    feedback.innerHTML = `<small class="form-control-feedback">
            ${showErrorText(element)}
        </small>`
  }

  function hideError(element) {
    const formGroup = element.closest('.form-group')
    formGroup.classList.remove('has-danger')
    formGroup.querySelector('.form-control-feedback')?.remove()
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    if (!email.validity.valid) {
      showError(email)
    }
  })

  form.addEventListener('focusout', ({ target }) => {
    if (target.type === 'submit') {
      return
    }

    if (!target.validity.valid) {
      showError(target)
    } else {
      hideError(target)
    }
  })
}
