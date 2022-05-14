import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('quotes', (table) => {
        table.uuid('id').primary().unique().notNullable();
        table.string('name');
        table.double('price');
        table.uuid('departure_airport_id').references('airports.id');
        table.uuid('destination_airport_id').references('airports.id');
        table.date('departure_date');
        table.date('return_date');
        table.integer('number_of_travelers');
        table.string('transportation');

        table.timestamps(true, true);
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('quotes');
}
