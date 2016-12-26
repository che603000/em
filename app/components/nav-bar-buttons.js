import Ember from 'ember';
import {COMMAND_ACTION} from '../config'


export default Ember.Component.extend({
  tagName:'',
  init(){
    this._super(...arguments)
  },
  actions:{
    cmdAction(command){
      console.log("component buttons [%s]", command);
      this.triggerAction({
        action: COMMAND_ACTION,
        actionContext: [command]
      });
    }
  }
});
