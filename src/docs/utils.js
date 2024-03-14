import { parameters } from '../../.storybook/preview'
import { html } from '../js/utils'

export function backgroundName(color) {
  const {
    backgrounds: { values }
  } = parameters

  const result = Object.values(values).find((background) => color === background.value)

  return result ? result.name : ''
}

export function storyWrapper(callback) {
  return {
    render: (args, { globals: { backgrounds } }) => {
      // @ts-ignore
      return html`
        <div data-bs-theme="on-${backgroundName(backgrounds?.value)}">
          ${callback(args, backgrounds?.value)}
        </div>
      `
    }
  }
}
