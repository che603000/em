import DS from 'ember-data';

export default DS.Model.extend({
  key: DS.attr('number'),
  name: DS.attr('string')
});
