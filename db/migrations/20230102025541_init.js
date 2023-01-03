/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("products", table => {
    table.increments("id");
    table.string("name", 255).notNullable();
    table.string("description", 500);
    table.specificType("price", "money").notNullable();
    table.string("image", 255).notNullable();
    table.string("category", 255);
    table.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('products');
};
