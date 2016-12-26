import Ember from 'ember';
import {COMMAND_ACTION} from '../config'

export default Ember.Route.extend({
  state: Ember.inject.service('state'),
  model(){
    return this.get('state');
  },
  actions: {
    [COMMAND_ACTION](command){
      console.log("app route [%s]", command);
    }
  }
});
