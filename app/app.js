import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';

//import Nifty from 'vendor/nifty.min.js'

import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  ready: function() {
    // will be called when the app is ready
    //console.log(Nifty);
    //Nifty();


  },
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
