save1() {
  var params = {
    contestador: this.get('contestador'),
    respuesta: this.get('respuesta'),
    pregunta: this.get('pregunta'),
  };
  this.set('addNewRental', false);
  this.sendAction('save2', params);
}
