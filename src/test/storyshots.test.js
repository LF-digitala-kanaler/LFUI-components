import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import path from 'path';


initStoryshots({
  suite: 'Image storyshots',
  framework: 'html',
  test: imageSnapshot({
    storybookUrl: 'http://localhost:6006'
  }),
});