import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      preguntas: this.store.findAll('pregunta'),
      answers: this.store.findAll('answer')
   });
  },
    actions: {
    save3(params) {
      var newPregunta = this.store.createRecord('pregunta', params);
      newPregunta.save();
      this.transitionTo('index');
    },
    savePregunta(params) {
      var newPregunta = this.store.createRecord('pregunta', params);
      newPregunta.save();
      this.transitionTo('index');
    }
});
