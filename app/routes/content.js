import Ember from 'ember';
import {COMMAND_ACTION, COMMAND_REMOVE, COMMAND_SAVE, COMMAND_EDIT, COMMAND_CANCEL} from '../config'

export default Ember.Route.extend({

  getModel(){
    return this.modelFor(this.get('router.currentRouteName'));
  },

  actions: {
    [COMMAND_ACTION](command){
      //console.info("route content. command = %s", COMMAND_ACTION);
      if (this.actions[command])
        this.send(command)
      else
        alert(`Not found command ${command}`)
    },
    [COMMAND_REMOVE] () {
      console.info("route content. command = %s", COMMAND_REMOVE);
    },
    [COMMAND_EDIT](a) {
      console.info("route content. command = %s", COMMAND_EDIT);
      const model = this.getModel();
      this.transitionTo('content.edit', model.id);
    },
    [COMMAND_SAVE](a) {
      console.info("route content. command = %s", COMMAND_SAVE);
      const model = this.getModel();
      model.save()
        .then(() => this.transitionTo('content.view', model.id))
        .catch(err => {
          console.info(err)
        })
    },
    [COMMAND_CANCEL](a) {
      console.info("route content. command = %s", COMMAND_CANCEL);
      const model = this.getModel();
      model.rollbackAttributes();
      this.transitionTo('content.view', model.id);
    }
  }
});
