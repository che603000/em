import Ember from 'ember';

export function objectToPre(params/*, hash*/) {
  return JSON.stringify(params, null, 4);
}

export default Ember.Helper.helper(objectToPre);
