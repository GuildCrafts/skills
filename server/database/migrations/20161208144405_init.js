exports.up = knex =>
  Promise.all([

    knex.schema.createTable('skills', table => {
      table.string('name').notNullable()
      table.string('email').notNullable().unique()
      table.string('avatar_url')
      table.integer('github_id').notNullable().unique()
      table.string('github_username').notNullable()
      table.string('github_access_token').notNullable()
      table.string('github_refresh_token')
      table.timestamps()
    }),


  ])

exports.down = knex =>
  Promise.all([
    knex.schema.dropTable('skills'),
  ])

