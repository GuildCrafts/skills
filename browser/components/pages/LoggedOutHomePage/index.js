import './index.sass'
import React, { Component } from 'react'
import Button from '../../atoms/Button'
import InspectObject from '../../atoms/InspectObject'
import Layout from '../../molecules/Layout'

export default class LoggedOutHomePage extends Component {
  render(){
    return <div className="LoggedOutHomePage">
      <h1>Skills</h1>
      <Button href={`/login?r=${encodeURIComponent(location.pathname)}`} externalLink>Login via Github</Button>
    </div>
  }
}
