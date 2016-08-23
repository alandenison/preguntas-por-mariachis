import DS from 'ember-data';

export default DS.Model.extend({
  usuario: DS.attr(),
  consulta: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});
