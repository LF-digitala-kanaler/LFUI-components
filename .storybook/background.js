import { addons } from '@storybook/addons'
import * as coreEvents from '@storybook/core-events'
let channel = addons.getChannel()
channel.addListener(coreEvents.UPDATE_GLOBALS, (args) => console.log('update', args))
