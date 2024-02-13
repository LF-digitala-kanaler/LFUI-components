import { uid } from '../../js/utils'

export default {
  title: 'Supportive microinteractions/Collapse',
  parameters: {
    badges: ['stable']
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['button', 'a']
    },
    background: {
      control: 'select',
      options: ['white', 'gray']
    }
  }
}

function Template({ background = 'white', type = 'button' }) {
  const id = uid()

  return `
    <article>
      <${type}
        id="readMoreCollapse"
        class="btn btn-more"
        data-bs-toggle="collapse"
        ${type === 'button' ? `data-bs-target="#${id}"` : ''}
        ${type === 'button' ? 'type="button"' : ''}
        ${type === 'a' ? `href="#${id}"` : ''}
        ${type === 'a' ? 'role="button"' : ''}
        aria-expanded="false"
        aria-controls="${id}"
      >
        Read more
      </${type}>
      <div
        id="${id}"
        class="collapse ${background === 'gray' ? 'bg-body-bg  mb-20' : ''}"
      >
        ${background === 'gray' ? '<div class="col-md-9 p-1">' : ''}
        <p>This is only needed if you wish to…</p>
        <ul>
          <li>shift your spendings,</li>
          <li>calculate your spendings in percentage,</li>
          <li>or plan on being active.</li>
        </ul>
        ${background === 'gray' ? '</div>' : ''}
      </div>
    </article>
    `
}

export const Default = Template.bind({})
Default.args = {
  background: 'white',
  type: 'button'
}

export const WithGrayBackground = Template.bind({})
WithGrayBackground.args = {
  background: 'gray'
}
