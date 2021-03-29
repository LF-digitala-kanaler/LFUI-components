/* global jQuery */

let hadKeyboardEvent = false;
let isHandlingKeyboardThrottle;
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
].join(',');

const matcher = (function () {
  const el = document.body;

  if (el.matchesSelector) {
    return el.matchesSelector;
  }
  if (el.webkitMatchesSelector) {
    return el.webkitMatchesSelector;
  }
  if (el.mozMatchesSelector) {
    return el.mozMatchesSelector;
  }
  if (el.msMatchesSelector) {
    return el.msMatchesSelector;
  }

  return false;
}());

function focusTriggersKeyboardModality(el) {
  let triggers = false;

  if (matcher) {
    triggers = matcher.call(
      el,
      keyboardModalityWhitelist) && matcher.call(el, ':not([readonly])'
    );
  }

  return triggers;
}

document.body.addEventListener('keydown', () => {
  hadKeyboardEvent = true;

  if (isHandlingKeyboardThrottle) {
    clearTimeout(isHandlingKeyboardThrottle);
  }

  isHandlingKeyboardThrottle = setTimeout(() => {
    hadKeyboardEvent = false;
  }, 100);
}, true);

document.body.addEventListener('focus', e => {
  if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
    document.body.setAttribute('data-focus-source', 'key');
  }
}, true);

document.body.addEventListener('blur', () => {
  document.body.removeAttribute('data-focus-source');
}, true);
