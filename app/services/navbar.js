import Ember from 'ember';

export default Ember.Service.extend({
  init(){
    this._supper(...arguments)
    debugger;
  },
  active(id){
    this.trigger('action', id);
  }
})
