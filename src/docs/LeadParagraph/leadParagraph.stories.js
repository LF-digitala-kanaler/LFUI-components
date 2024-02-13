export default {
  title: 'Typography & text/Lead Paragraph',
  parameters: {
    badges: ['stable']
  }
}

export const Default = () => `
  <div style="max-width: 45rem">
    <p class="lead">
      The 23 customer-owned regional insurance companies cooperate, thereby
      combining the ability of a small company to adapt to its customers with the
      strength of a large company.
    </p>
  </div>
`
export const PayOff = () => `
  <h1 class="display-1 mt-0">Pension</h1>
  <p class="payoff" role="doc-subtitle">
    Saving for later life.
    <a class="link" href="#" onclick="return false">
      An introduction to pensions
    </a>
  </p>
`
