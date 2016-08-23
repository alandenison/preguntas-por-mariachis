import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(answer) {
      if(confirm("¿esta seguro que quiere borrar tu respuesta?")) {
        this.sendAction('destroyAnswer', answer);
      }
    }
  }
});
