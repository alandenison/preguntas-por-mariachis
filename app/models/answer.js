import DS from 'ember-data';

export default DS.Model.extend({
  contestador: DS.attr(),
  respuesta: DS.attr(),
  pregunta: DS.belongsTo('pregunta', { async: true })
});
