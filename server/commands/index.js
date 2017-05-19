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



  // createRecord(table, attributes){
  //   return this.knex
  //     .table(table)
  //     .insert(attributes)
  //     .returning('*')
  //     .then(firstRecord)
  // }

  // createUser(attributes){
  //   attributes.created_at = attributes.updated_at = new Date
  //   return this.createRecord('users', attributes)
  // }

  // updateUser(github_id, attributes){
  //   attributes.updated_at = new Date
  //   return this.knex
  //     .table('users')
  //     .update(attributes)
  //     .where('github_id', github_id)
  //     .returning('*')
  //     .then(firstRecord)
  // }

  // findOrCreateUserFromGithubProfile({accessToken, refreshToken, profile}){
  //   const userAttributes = {
  //     name: profile.displayName || profile.username,
  //     email: profile.emails[0].value,
  //     avatar_url: (
  //       profile.photos &&
  //       profile.photos[0] &&
  //       profile.photos[0].value
  //     ),
  //     github_id: profile.id,
  //     github_username: profile.username,
  //     github_access_token: accessToken,
  //     github_refresh_token: refreshToken,
  //   }
  //   return this.knex
  //     .table('users')
  //     .where('github_id', profile.id)
  //     .first('*')
  //     .then(user =>
  //       user
  //         ? this.updateUser(userAttributes.github_id, userAttributes)
  //         : this.createUser(userAttributes)
  //     )
  // }

}

const firstRecord = records => records[0]
