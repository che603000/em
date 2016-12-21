import Ember from 'ember';

export default Ember.Route.extend({
  model() {

    const data = this.store.findAll('user', 1);
    data.name="!!!!!!!!!"
    return data;
    // debugger;
    // return {
    //   id: 0,
    //   name:"name"
    // }
  }
});
