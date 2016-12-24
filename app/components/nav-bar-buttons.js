import Ember from 'ember';

export default Ember.Component.extend({
  tagName:'',
  service:  Ember.inject.service('nav-buttons'),
  init(){
    this._super(...arguments)
    this.buttons = this.get('service').buttons;
  }
});
