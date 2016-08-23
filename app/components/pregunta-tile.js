import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyPregunta(pregunta) {
      if(confirm('¿está seguro quiere borrar esto?')) {
        this.sendAction('destroyPregunta', pregunta);
      }
    }
  }
});
