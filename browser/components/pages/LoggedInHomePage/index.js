import React, { Component } from 'react'
import Layout from '../molecules/Layout'

export default class LoggedInHomePage extends Component {
  render(){
    const { session, errors=[] } = this.props

    return <Layout className="LoggedInHomePage" session={session} errors={errors}>
      <h1>LoggedInHomePage</h1>
    </Layout>
  }
}
