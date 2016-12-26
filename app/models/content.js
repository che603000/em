import DS from 'ember-data';
import ValidatorMixin from 'ember-cli-data-validation/mixins/validator';

export default DS.Model.extend(ValidatorMixin, {
  header: DS.attr('string', {
    validation: {
      required: true,
      min: 5
    }
  }),
  body: DS.attr('string'),
  // validate(){
  //   //debugger;
  //   const r = this._super(...arguments)
  //   return r ? Ember.RSVP.resolve(r) : Ember.RSVP.reject(r);
  // },
  // save: function save() {
  //   var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  //
  //   var _ref$validate = _ref.validate;
  //   var validate = _ref$validate === undefined ? true : _ref$validate;
  //
  //   // if (!validate) {
  //   //   return this._super();
  //   // }
  //
  //   return this.validate()
  //     .then(() => this._super())
  //     .catch(() => createValidationError(this))
  //
  //   // if (this.validate()) {
  //   //   return Ember.RSVP.resolve();
  //   // }
  //   //
  //   // return Ember.RSVP.reject(createValidationError(this));
  // }
});
