import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('addresses', (table) => {
        table.uuid('id').primary().unique().notNullable().references('airports.address_id');
        table.string('street');
        table.string('number');
        table.string('district');
        table.string('city');
        table.string('country');
        table.string('zipcode');

        table.timestamps(true, true);
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('addresses');
}
