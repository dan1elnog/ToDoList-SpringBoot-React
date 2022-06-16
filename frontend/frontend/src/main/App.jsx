import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Navigation from '../components/Navigation'

export default class App extends Component {
  render() {
    return (
      <main>
        <Navbar/>
        <Navigation/>
      </main>
    )
  }
}
