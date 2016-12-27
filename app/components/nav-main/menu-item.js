import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  templateName: 'nav-main/menu-item',
  classNames: ["app-item-menu"],
  actions: {
    onAction: function (e) {
      // //debugger;
      // const state= this.get('router.router.state');
      // const params =this.get('router.router.state.params');
      //
      // const route  =this.get('container').lookup('controller:application');
      // console.log(route);
    }
  }
});
