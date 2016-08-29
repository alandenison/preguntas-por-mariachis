import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('pregunta', params.pregunta_id);
  },
  actions: {
    save3(params) {
     var newAnswer = this.store.createRecord('answer', params);
     var pregunta = params.pregunta;
     pregunta.get('answers').addObject(newAnswer);
     newAnswer.save().then(function() {
       return pregunta.save();
     });
     this.transitionTo('pregunta', params.pregunta);
   },
    destroyPregunta(pregunta) {
      var answer_deletions = pregunta.get('answers').map(function(answer) {
        return answer.destroyRecord();
      });
    Ember.RSVP.all(answer_deletions).then(function() {
      return pregunta.destroyRecord();
    });
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
  }
});
