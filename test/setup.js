import sinon from 'sinon'
import knex from '../server/knex'
import Queries from '../server/queries'
import Commands from '../server/commands'

beforeEach(done => {
  knex.migrate.latest()
    .then(_ =>
      Promise.all([
        knex.truncate('skills'),
      ])
    )
    .then(_ => done())
})

global.sinon = sinon
global.knex = knex
global.Queries = Queries
global.Commands = Commands
