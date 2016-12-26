import Ember from 'ember';

export default Ember.Route.extend({
  state: Ember.inject.service('state'),
  model(){
    return this.get('state');
  },
  actions:{
    cmdAction(command){
      console.log("app route [%s]", command);
    }
  }
});
