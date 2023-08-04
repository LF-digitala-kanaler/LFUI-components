export default {
  title: 'Page content/Line Element',
  parameters: {
    backgrounds: { default: 'gray' },
    badges: ['stable']
  }
}

export const Default = () => `
  <hr />
`

export const OnWhite = () => `
  <hr class="on-white-bg" />
`
OnWhite.parameters = { backgrounds: { default: 'white' } }
