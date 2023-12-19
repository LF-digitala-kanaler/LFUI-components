export default {
  title: 'Page content/Infobox',
  parameters: {
    backgrounds: { default: 'white' },
    badges: ['new']
  }
}

function IconTemplate(name) {
  if (!name) {
    return ''
  }

  return `
    <div class="infobox-icon">
      <svg class="icon" width="24" height="24">
        <use href="lf-icons/sprite/24/icons.svg#${name}"></use>
      </svg>
    </div>
  `
}

function Template({ icon, heading, text, link }) {
  return `
    <div class="infobox">
      ${IconTemplate(icon)}
      <div class="infobox-body">
        <div class="infobox-content">
          ${heading ? '<h3>' + heading + '</h3>' : ''}
          <p>${text}</p>
        </div>
        ${link ? '<a href="#link">' + link + '</a>' : ''}
      </div>
    </div>
  `
}

export const Default = Template.bind({})
Default.args = {
  heading: 'An optional inline heading.',
  text: 'Highlight crucial information so it doesn´t disappear.',
  link: 'Optional link',
  icon: 'info-enclosed-24'
}
