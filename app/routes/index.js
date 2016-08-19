import Ember from 'ember';

export default Ember.Route.extend({
  model() {
   return this.store.findAll('pregunta');
  },
    actions: {
    save3(params) {
      var newPregunta = this.store.createRecord('pregunta', params);
      newPregunta.save();
      this.transitionTo('index');
    },
    destroyPregunta(pregunta) {
      pregunta.destroyRecord();
      this.transitionTo('index');
    },
  }
});
