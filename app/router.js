import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('user');
  this.route('content', function () {
    this.route('index', {path: '/'})
    this.route('view', {path: '/:content_id'})
    this.route('edit', {path: '/edit/:content_id'})
  })
  this.route('upload', {path: '/upload'});
  this.route('not-found', {path: '/**'});
  this.route('procces');
});

export default Router;
