import Ember from 'ember';

export default Ember.Route.extend({
  commands: Ember.inject.service('commands'),
  init(){
    this._super(...arguments);
    this.commands = this.get("commands")
    this.commands.on('command', this, this.onCommand);
  },
  cmdEdit(a, b, c) {
    debugger;
    console.log("content controller");
    return true;
  },
  onCommand(command){
    const arg = [...arguments].slice(1);
    this.get('router').send(command, ...arg);
    // const route= this.get(routeName);
    // debugger;
    //
    //
    //
    // if (this[command])
    //   this[command](...arg)
    //
    // console.log("content controller");
  }
});
