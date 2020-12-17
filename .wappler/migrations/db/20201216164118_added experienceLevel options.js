
exports.up = function(knex) {
  return knex.schema
    .createTable('experienceLevel', function (table) {
      table.increments('id');
      table.string('0 - 1 års erfaring');
      table.string('1 - 3 års erfaring');
      table.string('3 - 10 års erfaring');
      table.string('Over 10 års erfaring');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('experienceLevel')
};
