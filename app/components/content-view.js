import Ember from 'ember';
import {COMMAND_EDIT} from '../config'
import CmdComponent from './bases/component-commands'

export default CmdComponent.extend({
  commands(){
    return [COMMAND_EDIT];
  }
});
