import Ember from 'ember';
import BsFormElement from 'ember-bootstrap/components/bs-form-element';

const {computed, defineProperty} = Ember;

export default BsFormElement.extend({
  setupValidations() {
    defineProperty(this, 'errors', computed.readOnly(`model.errors.${this.get('property')}`));
  },

  validationMessages: computed('hasErrors', 'hasWarnings', 'errors.[]', 'warnings.[]', function () {
    if (this.get('hasErrors')) {
      return this.get('errors').map(err => err.message);
    }
    if (this.get('hasWarnings')) {
      return this.get('warnings');
    }
    return null;
  }),

  validate(){
    this.get('model').validate();
    return this;
  },
  focusOut() {
    this.validate().showValidationOnHandler('focusOut');
  }

});
