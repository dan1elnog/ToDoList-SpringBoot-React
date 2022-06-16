import axios from 'axios'
import React, { Component } from 'react'
import VBedge from './icons/bedges/VBedge'
import XBedge from './icons/bedges/XBedge'
import MadeIcon from './icons/MadeIcon'
import NotIcon from './icons/NotIcon'
import TrashIcon from './icons/TrashIcon'

const BASE_URL = 'http://localhost:8080/api'

export default class List extends Component {
    constructor(props){
        super(props)
        this.state = {
            task: [],
            completed: '',
        }

        this.deleteTask = this.deleteTask.bind(this)
        this.changeCompletedToTrue = this.changeCompletedToTrue.bind(this)
        this.changeCompletedToFalse = this.changeCompletedToFalse.bind(this)
    }

    componentDidMount(){
        axios.get(BASE_URL)
            .then(res => {
                const task = res.data;
                this.setState({task})
            })
    }

    deleteTask(id){
        alert(`Tarefa ${id} excluída com sucesso`)
        axios.delete(`${BASE_URL}/${id}`)
    }

    changeCompletedToTrue(id){
        const res = axios.put(`${BASE_URL}/${id}`, {completed: true})
            .then(() => alert('Tarefa marcada como concluída'));
    }

    changeCompletedToFalse(id){
        const res = axios.put(`${BASE_URL}/${id}`, {completed: false})
            .then(() => alert('Tarefa marcada como não concluída'))
    }

    render() {  
        return (
            <div>
                <h2 className='text-center mt-3'>Lista de Tarefas:</h2>
                <table className="table table-hover mt-5 container ">
                    <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Tarefa</th>
                        <th scope="col">Finalizada</th>
                        <th scope="col">Opções</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.task.map(res => 
                            <tr key={res.id}>
                                <td>{res.id}</td>
                                <td>{res.task}</td>
                                <td>
                                    {res.completed === true ? <VBedge/>: <XBedge/>}
                                    <button className='btn btn-success mx-1' onClick={() => this.changeCompletedToTrue(res.id)}>
                                        <MadeIcon/>
                                    </button>
                                    <button className='btn btn-danger mx-1' onClick={() => this.changeCompletedToFalse(res.id)}>
                                        <NotIcon/>
                                    </button>
                                </td>
                                <td>
                                    <button className='btn btn-outline-danger' onClick={() => this.deleteTask(res.id)}>
                                        <TrashIcon/>
                                    </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}
