/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
    // 'ember-cli-bootstrap': {
    //   'importBootstrapJS': true
    // }
  });
  app.import('vendor/bootstrap.min.css');
  app.import('vendor/nifty.min.css');
  app.import('vendor/themify-icons.min.css');
  app.import('vendor/fonts/themify.ttf', {destDir: 'assets/fonts'});
  app.import('vendor/fonts/themify.woff', {destDir: 'assets/fonts'});
  app.import('vendor/pace.min.css');

  app.import('vendor/pace.min.js');
  app.import('vendor/bootstrap.min.js');
  //app.import('vendor/nifty.min.js');



  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
