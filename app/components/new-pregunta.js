import Ember from 'ember';

export default Ember.Component.extend({
  addNewPregunta: false,
  actions: {
    preguntaFormShow() {
      this.set('addNewPregunta', true);
    },
    save1() {
      var params = {
        usuario: this.get('usuario') ? this.get('usuario') : "",
        consulta: this.get('consulta') ? this.get('consulta') : "",
        nota: this.get('nota') ? this.get('nota') : "",
      };
      this.set('addNewPregunta', false);
      this.sendAction('save2', params);
    }
  }
});
