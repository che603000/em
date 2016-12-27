import Ember from 'ember';

export default Ember.Component.extend({
  state: Ember.inject.service('state'),

  init(){
    this._super(...arguments);
    this.state = this.get("state");
  },
  get commands(){
    return []
  },
  willRender(){
    this.get("state").visible(this.commands)
  },
  willDestroyElement(){
    this.get("state").visible([])
  }
});
