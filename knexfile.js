const defaultConfig = (env) => {
  const connectionString = (
    process.env.DATABASE_URL ||
    `postgres://${process.env.USER}@localhost:5432/skills-${env}`
  )

  return {
    client: 'postgresql',
    connection: connectionString,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/build/server/database/migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: __dirname + `/build/server/database/seeds/${env}`
    }
  }
}

module.exports = {
  test: defaultConfig('test'),
  development: defaultConfig('development'),
  production: defaultConfig('production'),
};
