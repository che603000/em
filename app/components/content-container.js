import Ember from 'ember';

export default Ember.Component.extend({
  // init(){
  //   this._super(...arguments);
  //   //debugger;
  //   //console.log(EmberENV.EXTEND_PROTOTYPES.String);
  // },
  data() {
    const model = this.get('model');
    debugger;
    return model;
  }
});
