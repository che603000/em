import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  actions: {
    onCommand: function (command) {
      debugger;

      this.sendAction('onCommand')
      return true;
    }
  }
});
