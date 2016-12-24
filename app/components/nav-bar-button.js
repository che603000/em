import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  service:  Ember.inject.service('commands'),
  init(){
    this._super()
  },
  actions: {
    onCommand: function (command) {
      this.get("service").sendCommand(command, "test")
      this.sendAction(command)
      return true;
    }
  }
});
