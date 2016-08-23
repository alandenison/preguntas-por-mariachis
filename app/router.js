import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('pregunta', {path: '/pregunta/:pregunta_id'});
  this.route('answer', {path: '/answer/:answer_id'})
});

export default Router;
