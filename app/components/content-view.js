import Ember from 'ember';

const COMMAND_EDIT = "cmdEdit";

export default Ember.Component.extend({
  //routing: Ember.inject.service('-routing'),
  //commands: Ember.inject.service('commands'),
  buttons:  Ember.inject.service('nav-buttons'),

  getRouter(){
    return  this.get('routing').get('router');
  },

  cmdEdit(a){
    const model_id = this.get('model').id;
    this.getRouter().transitionTo('content.edit', model_id);
  },

  // init(){
  //   this._super(...arguments);
  //   this.service = this.get("commands")
  //   this.service.on('command', this, this.onCommand);
  // },
  willRender(){
    this.get('buttons').visible([COMMAND_EDIT])
  },
  willDestroyElement(){
    //this.service.off('command', this, this.cmdEdit)
    this.get('buttons').visible()
  },

  onCommand(command){
    const arg = [...arguments].slice(1);
    if (this[command])
      this[command](...arg)

    console.log("content controller");
  },
});
