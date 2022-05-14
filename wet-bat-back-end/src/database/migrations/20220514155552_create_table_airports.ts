import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('airports', (table) => {
        table.uuid('id').primary().unique().notNullable();
        table.string('name');
        table.uuid('address_id');

        table.timestamps(true, true);
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('airports');
}
