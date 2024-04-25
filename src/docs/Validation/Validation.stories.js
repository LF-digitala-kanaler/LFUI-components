import { useEffect, useState } from '@storybook/client-api'
import { ValidationExample } from './FormValidationExample'
import { uid } from '../../js/utils'
import { StyledRadioButtonTemplate } from '../RadioButtons/radioButtons.stories'
import { SuffixFullExample } from '../InputField/inputfield.stories'

export default {
  title: 'Forms/Validation/Form validation',
  parameters: {
    backgrounds: { default: 'white' },
    badges: ['stable']
  },
  argTypes: {}
}

export const Validation = () => {
  const formId = 'form-group-example'
  useEffect(() => ValidationExample(document.getElementById(formId)), [])
  const textId = uid()
  const emailId = uid()
  const radioId = uid()

  return `
    <form id="${formId}" novalidate>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label id="${textId}-label" for="${textId}-text"">Label</label>
            <input
              type="text"
              class="form-control"
              id="${textId}-text"
              placeholder="Placeholder text"
              required=""
              aria-labelledby="${textId}-label ${textId}-text-feedback"
              aria-describedby="${textId}-help"
            >
            <div id="${textId}-text-feedback" aria-live="assertive"></div>
            <small id="${textId}-help" class="form-text text-muted">Helptext here</small>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label id="${emailId}-label" for="${emailId}-email">Label</label>
            <input
              type="email"
              class="form-control"
              id="${emailId}-email"
              placeholder="email@example.com"
              required=""
              aria-labelledby="${emailId}-label ${emailId}-email-feedback"
              ${emailId}-help
            >
            <div id="${emailId}-email-feedback" aria-live="assertive"></div>
            <small id="${emailId}-help" class="form-text text-muted">Helptext here</small>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group has-danger">
            <div class="d-md-inline-block">
              <div class="custom-control custom-radio mr-05 mb-05">
                <input
                  id="${radioId}-1"
                  name="styledRadio"
                  type="radio"
                  class="custom-control-input"
                  aria-labelledby="${radioId}-1-label ${radioId}-feedback"
                  aria-describedby="${radioId}-help"
                  required
                >
                <label id="${radioId}-1-label" class="custom-control-label" for="${radioId}-1">One of the options</label>
              </div>
            </div>

            <div class="d-md-inline-block">
              <div class="custom-control custom-radio mr-05 mb-05">
                <input
                  id="${radioId}-2"
                  name="styledRadio"
                  type="radio"
                  class="custom-control-input"
                  aria-labelledby="${radioId}-2-label ${radioId}-feedback"
                  aria-describedby="${radioId}-help"
                  required
                >
                <label id="${radioId}-2-label" class="custom-control-label" for="${radioId}-2">The preferred option</label>
              </div>
            </div>

            <div id="${radioId}-feedback" aria-live="assertive"></div>
            <small id="${radioId}-help" class="form-text text-muted">Helptext here</small>
          </div>

          ${SuffixFullExample()}
      <button type="submit" formnovalidate="false">Skicka</button>
    </form>
  `
}
