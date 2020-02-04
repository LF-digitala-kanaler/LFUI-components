import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: 'hotpink',
  colorSecondary: '#005AA0',

  // UI
  appBg: 'white',
  
  appBorderColor: 'grey',
  appBorderRadius: 0,

  // Typography
  fontBase: 'Arial, sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: '#005AA0',
  

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'LFUI components',
  // brandUrl: 'https://example.com',
  // brandImage: 'https://placehold.it/350x150',
});