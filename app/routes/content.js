import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    //debugger;
    const data = this.store.find('content', 1);
    return data;
    // return {
    //   title: "test",
    //   html:'<code>test</code>'
    // };
  }
});
