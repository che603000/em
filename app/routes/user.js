import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      name: 'name'
    }
  },
  actions:{
    cmdAction(a,b){
      debugger;
      console.log(this, "user route");
      ///return true;
    }
  }
});
