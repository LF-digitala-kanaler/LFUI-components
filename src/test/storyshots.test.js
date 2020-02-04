// import initStoryshots from '@storybook/addon-storyshots';
//
// initStoryshots({ suite: 'Image storyshots', test: imageSnapshot() });

import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';



initStoryshots({
  test: imageSnapshot(),
});