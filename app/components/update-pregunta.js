import Ember from 'ember';

export default Ember.Component.extend({
  updatePreguntaForm: false,
  actions: {
    updatePreguntaForm() {
      this.set('updatePreguntaForm', true);
    },
    update(pregunta) {
      var params = {
        usuario: this.get('usuario'),
        consulta: this.get('consulta'),
        nota: this.get('nota'),
      };
      this.set('updatePreguntaForm', false);
      this.sendAction('update', pregunta, params);
    }
  }
});
