
exports.up = function(knex) {
  return knex.schema
    .dropTable('cars')
};

exports.down = function(knex) {
  return knex.schema
    .createTable('cars', function (table) {
      table.increments('id').primary().notNullable();
      table.string('make', 10);
      table.string('model', 12);
      table.integer('year');
    })
};
