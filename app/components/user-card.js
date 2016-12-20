import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    onClick: (e)=>{
      console.log(e);
    }
  }
});
