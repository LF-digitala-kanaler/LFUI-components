describe('Button', () => {
  it('should be publicly accessible', () => {
    cy.visit('http://localhost:6006/iframe.html?id=button--primary&viewMode=story')
    cy.wait(1000)

    // snapshot name will be the test title
    cy.matchImageSnapshot()

    // options object passed in
    // cy.matchImageSnapshot(options)

    // match element snapshot
    // cy.get('#storybook-root').matchImageSnapshot()
    // cy.get('#storybook-root', { timeout: 30000 }).matchImageSnapshot()
  })
})
