<<<<<<< HEAD
const {db} = require('./.env')
=======
const { db } = require('./.env')
>>>>>>> 270f86daf2c91422aa5a3b1c77ebf9927f28c790

module.exports = {
  client: 'postgresql',
  connection: db,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
}
