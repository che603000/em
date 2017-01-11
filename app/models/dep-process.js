import DS from 'ember-data';

export default DS.Model.extend({
  clientId: DS.attr('number'),
  clientName: DS.attr('string'),
  processState: DS.attr('string'),
  deposition: DS.attr('string'),
  startDate: DS.attr('date'),
  endtDate: DS.attr('date'),
 });
