exports.up = knex => {
  return knex.schema.createTable('incidents', table => {
    table.increments('id');
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();

    table.string('ngo_id').notNullable();
    table
      .foreign('ngo_id')
      .references('id')
      .inTable('ongs');
  });
};

exports.down = knex => {
  return knex.schema.dropTable('incidents');
};
