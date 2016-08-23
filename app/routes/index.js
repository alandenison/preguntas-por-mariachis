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
    update(pregunta, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          pregunta.set(key,params[key]);
        }
      });
      pregunta.save();
      this.transitionTo('index');
    },
    destroyPregunta(pregunta) {
      pregunta.destroyRecord();
      this.transitionTo('index');
    },
  }
});
