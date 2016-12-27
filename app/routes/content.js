import Ember from 'ember';
import {COMMAND_ACTION, COMMAND_REMOVE, COMMAND_SAVE, COMMAND_EDIT, COMMAND_CANCEL} from '../config'

const APP_DEBUG = true;

export default Ember.Route.extend({

  getModel(){
    return this.modelFor(this.get('router.currentRouteName'));
  },

  actions: {
    [COMMAND_ACTION](command){
      if (this.actions[command])
        this.send(command)
      else
        alert(`Not found command ${command}`)
    },
    [COMMAND_REMOVE] () {
      APP_DEBUG && console.info("route content. command = %s", COMMAND_REMOVE);
    },
    [COMMAND_EDIT](a) {
      APP_DEBUG && console.info("route content. command = %s", COMMAND_EDIT);
      const model = this.getModel();
      this.transitionTo('content.edit', model.id);
    },
    [COMMAND_SAVE](a) {
      APP_DEBUG && console.info("route content. command = %s", COMMAND_SAVE);
      const model = this.getModel();
      model.save()
        .then(() => this.transitionTo('content.view', model.id))
        .catch(err => {
          console.log({
            name: "route.content",
            isError: model.get('isError'),
            isValid: model.get('isValid'),
            messageErr: model.get('errors').errorsFor('header'),
            originalError: err
          });
          return err;
        })
    },
    [COMMAND_CANCEL](a) {
      APP_DEBUG && console.info("route content. command = %s", COMMAND_CANCEL);
      const model = this.getModel();
      model.rollbackAttributes();
      this.transitionTo('content.view', model.id);
    }
  }
});
