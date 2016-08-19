import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('pregunta');
  },

  actions: {
    destroyPregunta(pregunta) {
      pregunta.destroyRecord();
      this.transitionTo('index');
    }
  }
});
