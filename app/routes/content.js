import Ember from 'ember';

export default Ember.Route.extend({
  // init(){
  //
  //   this._super(...arguments)
  //   const self= this;
  //   debugger;
  //   // const data = this.store.find('content', 1);
  //   // return data;
  // }
  actions:{
    remove: function () {
      alert('remove')
    }
  }
});
