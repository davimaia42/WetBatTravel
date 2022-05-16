import { Model } from 'objection';
import Knex from 'knex';
const config = require('../../knexfile');

function setupDatabase() {
    const knex = Knex(config.development);
    Model.knex(knex);
}

export { setupDatabase };