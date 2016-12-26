import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  actions: {
    onCommand: function (command) {
      debugger;
      const state = this.get('state');
      this.sendAction('onCommand')
      return true;
    }
  }
});
