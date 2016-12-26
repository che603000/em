import Ember from 'ember';
import BsFormElement from 'ember-bootstrap/components/bs-form-element';

const {computed, defineProperty} = Ember;

export default BsFormElement.extend({
  // setupValidations() {
  //   defineProperty(this, 'errors', computed.readOnly(`model.errors.${this.get('property')}`));
  // },
  // validationMessages: computed('hasErrors', 'hasWarnings', 'errors.[]', 'warnings.[]', function () {
  //   debugger;
  //   if (this.get('hasErrors')) {
  //     return this.get('errors').map(err => err.message);
  //   }
  //   if (this.get('hasWarnings')) {
  //     return this.get('warnings');
  //   }
  //   return null;
  // }),

  // validation: computed('hasErrors', 'hasWarnings', 'hasValidator', 'showValidation', 'isValidating', 'disabled', function () {
  //   debugger;
  //   if (!this.get('showValidation') || !this.get('hasValidator') || this.get('isValidating') || this.get('disabled')) {
  //     return null;
  //   }
  //   const model = this.get('model');
  //   model.validate();
  //   return this.get('hasErrors') ? 'error' : this.get('hasWarnings') ? 'warning' : 'success';
  // }),
});
