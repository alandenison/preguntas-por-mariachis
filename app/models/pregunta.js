import DS from 'ember-data';

export default DS.Model.extend({
  usuario: DS.attr(),
  consulta: DS.attr(),
  rentals: DS.hasMany('answer', { async: true })
});
