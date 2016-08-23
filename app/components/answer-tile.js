import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyAnswer(answer) {
      if(confirm("¿seguro?")) {
        this.sendAction('destroyAnswer', answer);
      }
    }
  }
});
