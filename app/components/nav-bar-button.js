import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  navAction:  Ember.inject.service('nav-action'),
  init(){
    this._super()
  },
  actions: {
    onAction: function (e) {
      this.get("navAction").active('test')

      // const state= this.get('router.router.state');
      // const params =this.get('router.router.state.params');
      //
      // const route  =this.get('container').lookup('controller:application');
      // console.log(route);
    }
  }
});
