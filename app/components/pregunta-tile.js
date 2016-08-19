import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(pregunta) {
      if (confirm('¿está seguro quiere borrar esto?')) {
        this.sendAction('destroyPregunta', pregunta);
      }
    },
    update(pregunta, params) {
      this.sendAction('update', pregunta, params);
    }
  }
});
