import { useEffect, useState } from '@storybook/client-api'
import { popoverTooltipExample } from './popovertooltip'
import { uid } from '../../js/utils'

export default {
  title: 'Supportive microinteractions/Popover Tooltip',
  parameters: {
    backgrounds: { default: 'white' },
    badges: ['stable']
  }
}

function Template({ centered = false }) {
  const [id] = useState(uid)

  useEffect(() => {
    popoverTooltipExample(document.getElementById(id))
  }, [])

  return `
    <section id="${id}">
      Our
      <span class="popover-tooltip-container">
        <button
          class="popover-tooltip-trigger ${centered ? 'popover-sm-center' : ''}"
          aria-controls="toggable2">
          occupational pension
        </button>
        <div
            role="region"
            aria-live="polite"
            aria-atomic="false"
            id="toggable2"
            class="popover-tooltip popover-bottom popover-attach ${
              centered ? 'popover-sm-center' : ''
            }">
            <div class="popover-wrapper">
              <p class="popover-title"><span class="sr-only">Definition: </span>Occupational pension</p>
              <div class="popover-content">
                <div class="card">
                  <div class="card-block">
                    <p class="card-text">
                      The pension paid to a retired person by a former employer.
                    </p>
                    <a href="#" onclick="return false">View dictionary</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
      plan gives you a pension plan suited to you and your
      <span class="popover-tooltip-container">
        <button
          class="popover-tooltip-trigger ${centered ? 'popover-sm-center' : ''}"
          aria-controls="toggable3">
          living
        </button>
        <div
            role="alert"
            aria-atomic="false"
            aria-live="polite"
            id="toggable3"
            class="popover-tooltip popover-bottom popover-attach ${
              centered ? 'popover-sm-center' : ''
            }">
            <div class="popover-wrapper">
            <p class="popover-title"><span class="sr-only">Definition: </span>Occupational pension</p>
            <div class="popover-content">
              <div class="card">
                <div class="card-block">
                  <p class="card-text">
                    The pension paid to a retired person by a former employer.
                  </p>
                  <a href="#" onclick="return false">View dictionary</a>
                </div>
              </div>
            </div>
          </div>
          </div>
        </span>
      conditions.
    </section>
    <a href="#">Hello</a>
    <a href="#">Hello</a>
  `
}

export const Default = Template.bind({})
Default.args = {
  centered: false
}

export const Centered = Template.bind({})
Centered.args = {
  centered: true
}
