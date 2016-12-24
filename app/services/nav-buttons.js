import Ember from 'ember';

export default Ember.Service.extend({
  config: [
    {
      command: "cmdRemove",
      icon: "ti-cut",
      title: "remove record",
      isVisible: false
    },
    {
      command: "cmdEdit",
      icon: "ti-pencil-alt",
      title: "edit record",
      isVisible: false
    }
  ],
  init(){
    this._super(...arguments)
    this.buttons = this.get('config').map(b => Ember.Object.create(b))
    // setTimeout(() => {
    //   this.buttons[0].set('isVisible', false)
    // }, 2000)
  },
  visible(commands = []){
    setTimeout(() => {
      this.buttons.forEach(b => {
        b.set('isVisible', commands.some(c => c === b.command))
      })
    }, 0)

  }
});
