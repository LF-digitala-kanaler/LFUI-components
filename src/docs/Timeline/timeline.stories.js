import Timeline from './timeline.html?raw'
import { timelineExample } from './timeline'
import { useEffect } from '@storybook/client-api'
export default { title: 'Timeline' }

export const timeline = () => {
  useEffect(() => {
    timelineExample()
  }, [])
  return Timeline
}
