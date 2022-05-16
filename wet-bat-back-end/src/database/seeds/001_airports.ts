import { Knex } from "knex";
import { v4 as uuid } from "uuid";

export async function seed(knex: Knex): Promise<void> {
    await knex.raw('TRUNCATE TABLE "airports" CASCADE');
    await knex.raw('TRUNCATE TABLE "addresses" CASCADE');


    const addressesData = [
        { id: uuid(), street: "street 1", number: "123", district: "district 1", city: "city 1", country: "country 1", zipcode: "123" },
        { id: uuid(), street: "street 2", number: "456", district: "district 2", city: "city 2", country: "country 2", zipcode: "456" },
        { id: uuid(), street: "street 3", number: "789", district: "district 3", city: "city 3", country: "country 3", zipcode: "789" },
    ];

    const airportsData = [
        { id: uuid(), name: "airport 1", address_id: addressesData[0].id },
        { id: uuid(), name: "airport 2", address_id: addressesData[1].id },
        { id: uuid(), name: "airport 3", address_id: addressesData[2].id },
    ];

    await knex("airports").insert(airportsData);
    await knex("addresses").insert(addressesData);

};
