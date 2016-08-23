import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    save1() {
      var params = {
        contestador: this.get('contestador') ? this.get('contestador') : "",
        respuesta: this.get('respuesta') ? this.get('respuesta') : "",
        pregunta: this.get('pregunta') ? this.get('pregunta') : "",
      };
      this.set('addNewAnswer', false);
      this.sendAction('save2', params);
    }
  }
});
