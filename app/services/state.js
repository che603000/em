import Ember from 'ember';
import {navBarMenu} from '../config'

export default Ember.Service.extend({

  init(){
    this._super(...arguments)
    this.navBarMenu = navBarMenu.map(b => Ember.Object.create(b))
    //debugger;
    // setTimeout(() => {
    //   this.navBarMenu[0].set('isVisible', false)
    //
    // }, 2000)
  },
  visible(commands = []){
    setTimeout(() => {
      this.navBarMenu.forEach(b => {
        b.set('isVisible', commands.some(c => c === b.command))
      })
    }, 0)

  }
});
