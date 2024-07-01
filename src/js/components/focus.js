const bodyElement = document.body
let hadKeyboardEvent = false
let hasClickEvent = false
const keyboardModalityWhitelist = [
  'input:not([type])',
  'input[type=text]',
  'input[type=number]',
  'input[type=date]',
  'input[type=time]',
  'input[type=datetime]',
  'textarea',
  '[role=textbox]',
  '[supports-focus=key]'
].join(',')

const matcher = (function() {
  if (bodyElement.matchesSelector) {
    return bodyElement.matchesSelector
  }
  if (bodyElement.webkitMatchesSelector) {
    return bodyElement.webkitMatchesSelector
  }
  if (bodyElement.mozMatchesSelector) {
    return bodyElement.mozMatchesSelector
  }
  if (bodyElement.msMatchesSelector) {
    return bodyElement.msMatchesSelector
  }

  return false
})()

function focusTriggersKeyboardModality(el) {
  let triggers = false

  if (matcher) {
    triggers = matcher.call(el, keyboardModalityWhitelist) && matcher.call(el, ':not([readonly])')
  }

  return triggers
}

function resetKeyboardEvent(event) {
  if (event.detail) {
    hadKeyboardEvent = false
    hasClickEvent = false
  }
}

bodyElement.addEventListener(
  'keydown',
  () => {
    hadKeyboardEvent = true

    if (!hasClickEvent) {
      bodyElement.addEventListener('click', resetKeyboardEvent, { once: true })
    }
  },
  true
)

bodyElement.addEventListener(
  'focus',
  (e) => {
    if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
      bodyElement.setAttribute('data-focus-source', 'key')
    }
  },
  true
)

bodyElement.addEventListener(
  'blur',
  () => {
    bodyElement.removeAttribute('data-focus-source')
  },
  true
)
