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

  getModel(){
    return this.modelFor(this.get('router.currentRouteName'));
  },
  actions: {
    cmdRemove () {
      console.log("content router");
      return true;
    },
    cmdEdit(a) {
      const model = this.getModel();
      this.transitionTo('content.edit', model.id);
    }
  }
});
