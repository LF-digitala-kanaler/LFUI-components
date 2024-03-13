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

export const Invalid = () => `
  <form>
    <div class="row">
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
