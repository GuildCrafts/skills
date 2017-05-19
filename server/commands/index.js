import knex from '../knex'
import Queries from '../queries'
import Github from '../Github'
import request from 'request-promise'
import logger from '../logger'

export default class Commands {

  constructor(currentUser, _knex=knex){
    this.currentUser = currentUser
    this.knex = _knex
    this.queries = new Queries(currentUser, _knex)
  }

}

const firstRecord = records => records[0]
