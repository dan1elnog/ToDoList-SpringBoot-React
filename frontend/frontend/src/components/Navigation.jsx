import React, { Component } from 'react'
import {Routes, Route} from "react-router-dom"
import Error from './Error'
import Form from './Form'
import Home from './Home'
import List from './List'

export default class Navigation extends Component {
  render() {
    return (
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add-task' element={<Form/>} />
        <Route path='/task' element={<List/>}></Route>
        <Route path='*' element={<Error/>}/>
      </Routes>
    )
  }
}
