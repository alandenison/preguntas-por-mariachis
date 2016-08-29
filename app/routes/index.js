
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      preguntas: this.store.findAll('pregunta')
   };
  },

    actions: {
    save3(params) {
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
      this.transitionTo('index');
    },
    savePregunta(params) {
      var newPregunta = this.store.createRecord('pregunta', params);
      newPregunta.save();
      this.transitionTo('index');
    }
  }
});
