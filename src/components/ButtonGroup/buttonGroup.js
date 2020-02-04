import React from 'react';

export default {
  title: 'Button Group',
};

export const primary = () => (
  <div class="btn-group" data-toggle="buttons">
    <label class="btn active">
      <input type="radio" name="options" id="option1" autoComplete="off" checked="" /> Radio 1
    </label>
    <label class="btn">
      <input type="radio" name="options" id="option2" autoComplete="off" /> Radio 2
    </label>
    <label class="btn">
      <input type="radio" name="options" id="option3" autoComplete="off" /> Radio 3
    </label>
  </div>
);

export const withInvalidState = () => (
  <>
  <div class="btn-group has-danger" data-toggle="buttons">
    <label class="btn">
      <input type="radio" name="options2" id="option6" autocomplete="off" checked="" /> Radio 1
    </label>
    <label class="btn">
      <input type="radio" name="options2" id="option7" autocomplete="off" /> Radio 2
    </label>
    <label class="btn">
      <input type="radio" name="options2" id="option8" autocomplete="off" /> Radio 3
    </label>
  </div>
  <div class="form-control-feedback text-red">Please pick one</div>
  </>
);

export const stretch = () => (
  <div class="btn-group btn-group-stretch" name="button-group" role="group" aria-label="Basic example" data-toggle="buttons">
    <label class="btn active">
      <input type="radio" name="stretch-options" id="stretch-option1" autocomplete="off" checked="" />E-faktura
    </label>
    <label class="btn">
      <input type="radio" name="stretch-options" id="stretch-option2" autocomplete="off" />Autogiro
    </label>
    <label class="btn">
      <input type="radio" name="stretch-options" id="stretch-option3" autocomplete="off" />Faktura
    </label>
  </div>
);

export const disabled = () => (
  <div class="btn-group " name="button-group" role="group" aria-label="Basic example" data-toggle="buttons">
    <label class="btn active">
      <input type="radio" name="stretch-options" id="disabled-option1" autocomplete="off" disabled="" />E-faktura
    </label>
    <label class="btn">
      <input type="radio" name="stretch-options" id="disabled-option1" autocomplete="off" disabled="" />Autogiro
    </label>
    <label class="btn">
      <input type="radio" name="stretch-options" id="disabled-option1" autocomplete="off" disabled="" />Faktura
    </label>
  </div>
);