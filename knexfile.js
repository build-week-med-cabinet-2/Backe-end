// Update with your config settings.
require("dotenv").config();
module.exports = {

  development: {
    client: 'sqlite3',
    connection: { filename: './database/medcab.db3' },
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './database/seeds' },
    useNullAsDefault: true,
    // client: 'pg',
    // connection: {
    //   database: process.env.DB_DEV_DATABASE,
    //   user: process.env.DB_DEV_USER,
    //   password: process.env.DB_DEV_PASSWORD
    // },
    // migrations: {
    //   directory: "./database/migrations"
    // },
    // seeds: {
    //   directory: "./database/seeds"
    // },
  },
    production: {
      client: "pg",
      connection: process.env.DATABASE_URL,
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: "knex_migrations",
        directory: "./data/migrations"
      },
      seeds: {
        directory: "./data/seeds"
      }
    }
  };