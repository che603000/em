import Ember from 'ember';

export default Ember.Controller.extend({
  commands: Ember.inject.service('commands'),
  init(){
    this._super(...arguments);
    this.commands = this.get("commands")
    this.commands.on('cmdRemove', this, this.onRemove);
  },
  actions: {
    cmdRemove() {
      console.log("content controller");
      return true;
    }
  },
  onRemove(){
    debugger;
    console.log("content controller");
  }
});
