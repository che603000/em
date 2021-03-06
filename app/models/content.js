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
  validate(){
    const isValid = this._super(...arguments)
    console.log({
      name: "model.content",
      isError: this.get('isError'),
      isValid: this.get('isValid'),
      messageErr: this.get('errors').errorsFor('header'),
    });
    return isValid;
  },
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
  //     .then(() => {
  //        return this._super()
  //       }
  //     )
  //     .catch(() => {
  //       return createValidationError(this)
  //     })
  //
  //
  //   // if (this.validate()) {
  //   //   return Ember.RSVP.resolve();
  //   // }
  //   //
  //   // return Ember.RSVP.reject(createValidationError(this));
  // }
});
