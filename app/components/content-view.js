import Ember from 'ember';

const COMMAND_EDIT = "cmdEdit";

export default Ember.Component.extend({
  routing: Ember.inject.service('-routing'),
  commands: Ember.inject.service('commands'),
  cmdEdit(){
    const router = this.get('routing').get('router');
    const model_id = this.get('model').id;
    router.transitionTo('content.edit', model_id);
  },
  init(){
    this._super(...arguments);
    this.service = this.get("commands")
    this.service.on(COMMAND_EDIT, this, this.cmdEdit);
  },
  willDestroyElement(){
    this.service.off(COMMAND_EDIT, this, this.cmdEdit)
    return this._super(...arguments);
  }
});
