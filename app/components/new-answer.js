import Ember from 'ember';

export default Ember.Component.extend({
  addNewPregunta: false,
  actions: {
    answerFormShow() {
      this.set('addNewPregunta', true);
    },
    save1() {
      var params = {
        contestador: this.get('contestador') ? this.get('contestador') : "",
        respuesta: this.get('respuesta') ? this.get('respuesta') : "",
        pregunta: this.get('pregunta') ? this.get('pregunta') : "",
      };
      this.set('addNewPregunta', false);
      this.sendAction('save2', params);
    }
  }
});
