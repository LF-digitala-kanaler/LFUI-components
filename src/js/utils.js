const EVENT_PREFIX = /^on/

export const refs = new WeakMap()

/**
 * Generate unique(-ish) identifier
 * @returns {string}
 */
export function uid() {
  return `u${Math.random().toString(36).substring(2)}`
}

/**
 * Render html template
 * @param {string[]} strings Tagged template string parts
 * @param  {...any} values Tagged template partial values
 * @returns {DocumentFragment}
 */
export function html(strings, ...values) {
  const div = document.createElement('div')
  const frag = document.createDocumentFragment()

  div.innerHTML = strings.reduce(function (html, string, index) {
    html += string
    if (values[index]) html += String(values[index])
    return html
  }, '')

  frag.append(...div.childNodes)

  return frag
}

/**
 * Iterate through each matching node
 * @param {string} selector Node selector
 * @param {function(Node, number, NodeList): void} callback Iterator callback
 * @param {Node} context Node context to search in
 */
export function each(selector, callback, context = document) {
  context.querySelectorAll(selector).forEach(callback)
}

/**
 * Delegate event listener to children matching selector
 * @param {string} selector Node selector
 * @param {function(Event): void} handler Event handler
 * @returns {function(Event): void}
 */
export function delegate(selector, handler) {
  return function (event) {
    const target = event.target.matches(selector)
      ? event.target
      : event.target.closest(selector)
    if (target) {
      handler.call(target, event)
    }
  }
}

/**
 * Create a node reference
 */
export class Ref {
  /**
   * Currently referenced node
   * @type {Node}
   */
  get current() {
    return refs.get(this)
  }
}

/**
 * Render node
 * @param {string} type Node type
 * @param {object} attrs Node attributes
 * @param {(str | Node)[]} children Node children
 * @returns {Node}
 */
export function h(type, attrs = {}, children = []) {
  const el = document.createElement(type)

  for (const [key, value] of Object.entries(attrs)) {
    if (key === 'ref') {
      if (typeof value === 'function') value(el)
      else refs.set(value, el)
    } else if (EVENT_PREFIX.test(key)) {
      el.addEventListener(key.replace(EVENT_PREFIX, ''), value)
    } else if (key in el) {
      el[key] = value
    } else {
      el.setAttribute(key, value)
    }
  }

  if (!Array.isArray(children)) children = [children]
  if (children.length) {
    el.append(
      ...children.filter(Boolean).map(function (child) {
        return child instanceof window.Node
          ? child
          : document.createTextNode(child)
      })
    )
  }

  return el
}
