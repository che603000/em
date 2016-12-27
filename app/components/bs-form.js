import Ember from 'ember';
import BsForm from 'ember-bootstrap/components/bs-form';

const {computed, RSVP:{Promise}} = Ember;

export default BsForm.extend({
  hasValidator: computed.notEmpty('model.validate'),

  init(){
    this._super(...arguments);
    this.get('model').addObserver('isValid', this, this.showValidations);
  },

  willDestroyElement(){
    this.get('model').removeObserver('isValid', this, this.showValidations);
    return this._super(...arguments)
  },

  showValidations(model){
    this.get('childFormElements').setEach('showValidation', !model.get('isValid'));
  },

  validate() {
    const model = this.get('model');
    Ember.assert('Model needs to have the ember-validations mixin', model && typeof model.validate === 'function');
    return model.validate() ? Promise.resolve() : Promise.reject(model.get('errors'));
  },
});
