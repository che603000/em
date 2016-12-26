import Ember from 'ember';

export default Ember.Component.extend({
  data(){
    return {
      name:90000
    };
  },
  action:{
    // debugger;
    // const h =  Ember.Helpers.aaction;
    // Ember.Helper.action("cmdAction")
    actionName:"cmdEdit"
  },
  actions:{
    onClick() {
      console.log("component ");
      //this.sendAction(()=>{})
      this.triggerAction({
        action: "cmdAction",
        actionContext: ["a", "b"]
      });
      return true;
    }
  }
});
