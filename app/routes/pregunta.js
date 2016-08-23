import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('pregunta', params.pregunta_id);
  },
  actions: {
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
