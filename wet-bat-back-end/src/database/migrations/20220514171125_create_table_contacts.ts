import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('contacts', (table) => {
        table.string('value').primary().unique().notNullable();
        table.enu('type', ['phone', 'email']);
        table.uuid('quote_id').references('quotes.id').onDelete('CASCADE');

        table.timestamps(true, true);
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('contacts');
}
