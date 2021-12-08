import 'regenerator-runtime/runtime'

import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import initStoryshots from '@storybook/addon-storyshots';

const getMatchOptions = ({ context: { kind, story }, url }) => {
  return {
    failureThreshold: 0.2,
    failureThresholdType: 'percent',
  };
};

const beforeScreenshot = async page => {

  await page.evaluate(() => {
    document.querySelectorAll('animate').forEach(el => {
      el.setAttribute('repeatCount', 'indefinite');
      el.setAttribute('dur', 'indefinite');
    });
  });

  // Fixing the Animation by inlining, previous approach with external file was flaky for the animation
  page.addStyleTag({
    content: `
    *, *::after, *::before {
      -webkit-transition: none !important;
      -moz-transition: none !important;
      -ms-transition: none !important;
      -o-transition: none !important;
      transition: none !important;
  
      -webkit-animation: none !important;
      -moz-animation: none !important;
      -ms-animation: none !important;
      -o-animation: none !important;
      animation: none !important;
    }`

  });
  return new Promise(resolve =>
    setTimeout(() => {
      resolve();
    }, 600)
  );


};



initStoryshots({
  suite: 'Image storyshots',
  framework: 'html',
  test: imageSnapshot({
    storybookUrl: 'http://localhost:6006',
    beforeScreenshot,
    getMatchOptions,

  }),
});
