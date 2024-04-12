import { useEffect, useState } from '@storybook/client-api'
import { formGroupExample } from './FormgroupExample'

export default {
  title: 'Forms/Form groups',
  parameters: {
    backgrounds: { default: 'white' },
    badges: ['stable']
  },
  argTypes: {}
}

export const Grouping = () => `
  <form>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="validationCustom01">Label</label>
          <input type="text" class="form-control" id="validationCustom01" placeholder="Placeholder text" required="">
          <small class="form-text text-muted">Helptext here</small>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group has-danger">
          <label for="validationCustom01">Label</label>
          <input type="text" class="form-control" id="validationCustom01" placeholder="Placeholder text" required="">
          <small class="form-control-feedback">This is an error message</small>
          <small class="form-text text-muted">Helptext here</small>
        </div>
      </div>
    </div>
  </form>
`

export const FormGroup = () => {
  const formId = 'form-group-example'
  useEffect(() => formGroupExample(document.getElementById(formId)), [])

  return `
    <form id="${formId}" novalidate>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="${formId}-text"">Label</label>
            <input type="text" class="form-control" id="${formId}-text"" placeholder="Placeholder text" required="">
            <div id="${formId}-text-feedback" aria-live="assertive"></div>
            <small class="form-text text-muted">Helptext here</small>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="${formId}-email">Label</label>
            <input type="email" class="form-control" id="${formId}-email" placeholder="email@example.com" required="">
            <div id="${formId}-email-feedback" aria-live="assertive"></div>
            <small class="form-text text-muted">Helptext here</small>
          </div>
        </div>
      </div>
      <button type="submit" formnovalidate="false">Skicka</button>
    </form>
  `
}

export const Invalid = () => `
  <form>
    <div class="row" >
      <div class="col-md-6">
        <div class="form-group has-danger">
          <label for="validationCustom01">Label</label>
          <input type="text" class="form-control" id="validationCustom01" placeholder="Something is wrong with this input" required="">
          <small class="form-control-feedback">This is an error message</small>
        </div>
      </div>
    </div>
  </form>
  `

export const Valid = () => `
  <form>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group has-success">
          <label for="validationCustom01">Label</label>
          <input type="text" class="form-control" id="validationCustom01" placeholder="Something is wrong with this input" required="">
          <small class="form-text text-muted">Helptext here</small>
        </div>
      </div>
    </div>
  </form>
  `
