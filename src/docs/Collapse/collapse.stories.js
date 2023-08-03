import { uid } from '../../js/utils'

export default {
  title: 'Supportive microinteractions/Collapse',
  parameters: {
    badges: ['stable']
  }
}

function Template({ background = 'white' }) {
  const id = uid()
  return `
    <article>
      <button type="button" id="readMoreCollapse" class="btn btn-more" data-bs-toggle="collapse" href="#${id}" aria-expanded="false" aria-controls="${id}">Read more</button>
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
  background: 'white'
}

export const WithGrayBackground = Template.bind({})
WithGrayBackground.args = {
  background: 'gray'
}
