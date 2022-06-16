import axios from 'axios'
import React, { Component } from 'react'

const BASE_URL = 'http://localhost:8080/api'

export default class Form extends Component {
  constructor(props){
    super(props)
    this.state ={
      task: ''
    }

    this.addTask = this.addTask.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = event => {this.setState({task: event.target.value })}

  componentDidMount(){
    axios.get(BASE_URL).then(res => console.log(res.data))
  }

  addTask(e){
    e.preventDefault()
    const data = {task: this.state.task}
    axios.post(BASE_URL, data)
      .then(res => alert(`Tarefa adicionada`))
      .catch(error => console.log(error.message))
  }
  
  render() {
    return (
      <form className='container  col-6 mt-5' >
        <h2 className='mb-5'>Nova Série:</h2>
        <div className="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label">Tarefa</label>
          <input type="text" className="form-control" onChange={this.handleChange}
           id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <button type="submit" className="btn btn-primary align-end" onClick={e => this.addTask(e)}>
          Cadastrar
        </button>
    </form>
    )
  }
}
