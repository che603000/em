import Ember from 'ember';

export default Ember.Component.extend({
  navAction: Ember.inject.service('nav-action'),
  onRemove(id){
    const model = this.get('model');
    this.sendAction('action', 'remove');
    // model.destroyRecord().then(()=>{
    //
    // }); // => DELETE to /posts/2
  },
  init(){
    this._super(...arguments);
    this.service = this.get("navAction")
    this.service.on('action', this, this.onRemove);
  },
  willDestroyElement(){
    this.service.off('action', this, this.onRemove)
    return this._super(...arguments);
  }
});
