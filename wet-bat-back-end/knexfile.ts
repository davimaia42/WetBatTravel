import 'dotenv/config';
import type { Knex } from "knex";

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_NAME,
      user:     process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    }
  }
};

module.exports = config;
