import Ember from 'ember';
import BsForm from 'ember-bootstrap/components/bs-form';

const {computed, RSVP:{Promise}} = Ember;

export default BsForm.extend({

  hasValidator: computed.notEmpty('model.validate'),

  validate() {
    const model = this.get('model');
    Ember.assert('Model needs to have the ember-validations mixin', model && typeof model.validate === 'function');
    return model.validate() ? Promise.resolve() : Promise.reject(model.get('errors'));
    //return this.get('model').validate() ? Promise.resolve(): Promise.reject();
  }

});
