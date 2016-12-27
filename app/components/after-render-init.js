import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  didInsertElement(){
    $(document).trigger('nifty.ready');
  }
});
