import { uid } from '../../js/utils'

export default {
  title: 'Forms/Form groups',
  parameters: {
    backgrounds: { default: 'white' },
    badges: ['stable']
  },
  argTypes: {}
}

export const Grouping = () => {
  const id = uid()
  return `
  <form>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="validationCustom${id}">Label</label>
          <input type="text" class="form-control" id="validationCustom${id}" placeholder="Placeholder text" required="">
          <small class="form-text text-muted">Helptext here</small>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group has-danger">
          <label for="validationCustom${id}2">Label</label>
          <input type="text" class="form-control" id="validationCustom${id}2" placeholder="Placeholder text" required="">
          <small class="form-control-feedback">This is an error message</small>
          <small class="form-text text-muted">Helptext here</small>
        </div>
      </div>
    </div>
  </form>
`
}

export const Invalid = () => {
  const id = uid()
  return `
    <form>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group has-danger">
            <label for="validationCustom${id}">Label</label>
            <input type="text" class="form-control" id="validationCustom${id}" placeholder="Something is wrong with this input" required="">
            <small class="form-control-feedback">This is an error message</small>
          </div>
        </div>
      </div>
    </form>
    `
}

export const Valid = () => {
  const id = uid()
  return `
  <form>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group has-success">
          <label for="validationCustom${id}">Label</label>
          <input type="text" class="form-control" id="validationCustom${id}" placeholder="Something is wrong with this input" required="">
          <small class="form-text text-muted">Helptext here</small>
        </div>
      </div>
    </div>
  </form>
  `
}
