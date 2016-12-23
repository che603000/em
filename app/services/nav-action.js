import Ember from 'ember';

export default Ember.Service.extend(Ember.Evented, {
  init(){
    this._super(...arguments)
  },
  active(id){
    this.trigger('action', id);
  }
});
