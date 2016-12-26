import Ember from 'ember';
import CmdComponent from './bases/component-commands'
import {COMMAND_REMOVE, COMMAND_CANCEL, COMMAND_SAVE} from '../config'

export default CmdComponent.extend({
  commands(){
    return [COMMAND_REMOVE, COMMAND_CANCEL, COMMAND_SAVE]
  },
  actions: {
    cmdSave(model){
      //debugger;
      this.triggerAction({
        action: COMMAND_SAVE,
        actionContext: [model]
      });
    }
  }

});
