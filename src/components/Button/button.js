import React from 'react';

export default {
  title: 'Button',
};

export const primary = () => (
  <button type="button" class="btn btn-primary">Do this</button>
);

export const primaryWithArrow = () => (
  <button type="button" class="btn btn-primary btn-arrow">Continue</button>
);

export const secondary = () => (
    <button type="button" class="btn btn-secondary">Read more</button>
);

export const secondaryButtonWithIcon = () => (
    <button type="button" class="btn btn-secondary">
      {/* <svg class="icon icon-nudge-up-01 icon-left" width="10" height="10">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-plus-10" />
      </svg>Add one */}
    </button>
);
export const ButtonSizeSmall = () => (
  <button type="button" class="btn btn-sm btn-primary">I'm small</button>
);

export const ButtonSizeLarge = () => (
 <button type="button" class="btn btn-lg btn-primary">I'm large</button>
);

export const ButtonTight = () => (
  <button type="button" class="btn btn-tight btn-primary">Less horizontal spacing</button> 
);

export const ButtonBlock = () => (
  <button type="button" class="btn btn-primary btn-block">Submit all changes</button>
);

export const ButtonWithLeftArrow = () => (
  <button type="button" class="btn btn-primary btn-arrow-left">Go back</button>
);

export const ButtonWithLoader = () => (
  <button type="button" id="exampleButtonLoaderSm" class="btn btn-sm btn-primary loading">
    Continue
    <div class="lf-spinner lf-spinner-btn-primary">
      <svg viewBox="0 0 105 105" x="0" y="0" role="animation">
        <circle class="static-circle" r="45%" cx="50%" cy="50%"></circle>
        <circle class="lf-spinner-dash" r="45%" cx="50%" cy="50%"></circle>
      </svg>
    </div>
  </button>
);

export const ButtonWithMoreThenOneLineOfText = () => (
   <button class="btn btn-primary btn-arrow">
  Gå vidare
    <span class="d-block text-sm font-weight-normal font-base"> &amp; fyll i dina uppgifter</span>
  </button>
);
  
export const ButtonLogin = () => (
  <button type="button" class="btn btn-login-logout">Login</button>
);