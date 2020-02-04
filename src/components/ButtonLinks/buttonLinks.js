import React from 'react';

export default {
  title: 'Button Links',
};

export const primaryButtonLink = () => (
  <button type="button" class="primary-link">Primary link</button>
);

export const secondaryButtonLink = () => (
  <button type="button" class="btn btn-link">Secondary link</button>
);

export const blockButtonLink = () => (
  <button type="button" class="btn primary-link btn-block" tabindex="-1">
    <span href="foo">Primary link</span>
  </button>
);

export const ButtonLinkArrow = () => (
  <>
  <button type="button" class="arrow-left"></button>
  <button type="button" class="arrow-right"></button>
  </>
);

export const ButtonLinkArrowWithText = () => (
  <>
    <button type="button" class="arrow-left float-left">Föregående</button>
    <button type="button" class="arrow-right float-right">Nästa</button>
  </>
);
  
