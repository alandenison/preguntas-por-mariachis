import Ember from 'ember';

export default Ember.Route.extend({
   model(params) {
     return this.store.findRecord('pregunta', params.pregunta_id);
   },
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
