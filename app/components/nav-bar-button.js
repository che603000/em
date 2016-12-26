import Ember from 'ember';
import {COMMAND_ACTION} from '../config'

export default Ember.Component.extend({
  tagName: 'li',
  init(){
    this._super(...arguments);
    Object.keys(this.options).forEach(key => this.set(key, this.options[key]))
    this.options.addObserver('isVisible', () => this.set('isVisible', this.options.isVisible));
  },
  actions: {
    onClick: function () {
      this.triggerAction({
        action: COMMAND_ACTION,
        actionContext: [this.options.command]
      });
    },
  }
});
