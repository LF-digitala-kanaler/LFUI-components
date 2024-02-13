import TimelineMarkup from './timeline.html?raw'

import { useEffect, useState } from '@storybook/client-api'
import { timelineExample } from './timeline'
import { uid } from '../../js/utils'

export default {
  title: 'Page content/Timeline',
  parameters: {
    backgrounds: { default: 'gray' },
    badges: ['stable']
  }
}

export const Default = () => {
  const [id] = useState(uid)
  useEffect(() => {
    timelineExample(document.getElementById(id))
  }, [])
  return `
    <div id="${id}">${TimelineMarkup}</div>
  `
}

const iconUpcoming = `
  <div class="timeline-icon"></div>
  `

const iconDone = `
  <div class="timeline-icon is-done">
    <svg aria-hidden="true" class="icon" width="24" height="24">
      <use xlink:href="lf-icons/sprite/24/icons.svg#check-24"></use>
    </svg>
  </div>
  `

const iconOnGoing = `
  <div class="timeline-icon">
    <svg
      aria-hidden="true"
      class="icon icon-blue d-md-none"
      width="24"
      height="24">
      <use xlink:href="lf-icons/sprite/24/icons.svg#flag-24"></use>
    </svg>
    <svg
      aria-hidden="true"
      class="icon icon-blue d-none d-md-block"
      width="24"
      height="24">
      <use xlink:href="lf-icons/sprite/24/icons.svg#flag-24"></use>
    </svg>
  </div>
  `

function spacingClass(state = 'upcoming') {
  switch (state) {
    case 'done': return 'is-done'
    case 'ongoing': return 'is-ongoing'
    case 'upcoming': return ''
  }
}

function icon(state = 'upcoming') {
  switch (state) {
    case 'upcoming': return iconUpcoming
    case 'done': return iconDone
    case 'ongoing': return iconOnGoing
  }
}

function ItemTemplate({ state }) {
  const id = uid()

  return `
  <div class="timeline">
    <ul class="timeline-list">
      <li class="timeline-item">
        <div class="timeline-container">
          <button
            class="timeline-header"
            data-bs-toggle="collapse:timeline"
            data-bs-target="#${id}"
            aria-expanded="false"
            aria-controls="${id}">
            <div class="timeline-spacing ${spacingClass(state)}">
              ${icon(state)}
            </div>
            <h3 class="timeline-heading">Skadeanmälan</h3>
            <small class="text-muted">2018-11-20: Skadan registrerad</small>
          </button>
          <div class="collapse" id="${id}">
            <div class="timeline-content">
              <p>
                Vi har tagit emot din skadeanmälan. Vi jobbar så snabbt vi kan så
                du inte ska behöva vänta. Om vi inte redan har kontaktat dig
                kommer vi att göra det.
              </p>
              <button
                data-bs-toggle="collapse:timeline"
                aria-expanded="false"
                data-bs-target="#${id}"
                aria-controls="${id}"
                class="btn-link d-md-none">
                Stäng
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  `
}

export const ItemUpcoming = ItemTemplate.bind({})
ItemUpcoming.args = {
  state: 'upcoming'
}

export const ItemDone = ItemTemplate.bind({})
ItemDone.args = {
  state: 'done'
}

export const ItemOngoing = ItemTemplate.bind({})
ItemOngoing.args = {
  state: 'ongoing'
}
