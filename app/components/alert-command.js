import Ember from 'ember';

export default Ember.Component.extend({
  data(){
    return {
      name:90000
    };
  },
  actions:{
    onClick:m=> {
      console.log(m);
    }
  }
});
