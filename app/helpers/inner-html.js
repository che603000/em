import Ember from 'ember';

export function innerHTML(params/*, hash*/) {
  return Ember.String.htmlSafe(params);
}

export default Ember.Helper.helper(innerHTML);
