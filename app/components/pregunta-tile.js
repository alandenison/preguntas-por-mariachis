import Ember from 'ember';

export default Ember.Component.extend({
    delete(pregunta) {
      if (confirm('¿está seguro quiere borrar esto?')) {
        this.sendAction('destroyPregunta', pregunta);
      }
    }
  }
});
