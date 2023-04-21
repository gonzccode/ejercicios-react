import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class TaskList extends Component {
    state = {
        tasks: [
            {
                task: 'task 01',
                description: 'description 01',
                isActive: true
            },
            {
                task: 'task 02',
                description: 'description 01',
                isActive: false
            },
            {
                task: 'task 03',
                description: 'description 01',
                isActive: true
            },
            {
                task: 'task 04',
                description: 'description 01',
                isActive: false
            },
            {
                task: 'task 05',
                description: 'description 01',
                isActive: true
            },
        ]
    }

    handleAddTask = (e) => {
        e.preventDefault();
        let title = e.target.newTask.value
        this.setState(state => {
            const tasks = [...state.tasks]
            tasks.push({
                task: title,
                description: 'description new',
                isActive: true
            })
            return({
                tasks: tasks
            })
        })
        e.target.newTask.value = null
    }

    changeCompleteTask = (id) => {
        this.setState(state => {
            const tasks = [...state.tasks]
            tasks[id].isActive = false
            return ({
                tasks: tasks
            })
        })
    }

    deleteTask = (id) => {
        this.setState(state => {
            const tasks = [...state.tasks]
            tasks.splice(id, 1)
            return({
                tasks: tasks
            })
        })
    }

    render() {
        return (
            <div className="taskList">
                <h3>
                    <strong>
                        Lista de tareas
                    </strong>
                </h3>
                <div className="inputTask">
                    <form onSubmit={this.handleAddTask}>
                        <input className="form-control" id="newTask" placeholder="Ingrese su tarea"/><br/>
                        <Button variant="primary" size="sm" type="submit">Agregar tarea</Button>
                    </form>
                </div>
                <br/>
                <div>
                    {
                        this.state.tasks.map((item, index) => 
                            <Card style={{ width: '18rem' }} key={index}>
                                <Card.Body>
                                    <Card.Title>{item.task}</Card.Title>
                                    <Card.Text>
                                    {item.description} 
                                    </Card.Text>
                                    {
                                        item.isActive ? 
                                        <Button variant="warning" size="sm" onClick={() => {this.changeCompleteTask(index)}} >No completado</Button> :
                                        <p style={{color: "green"}}><strong>Completado</strong></p>
                                    }
                                    <br/>
                                    <Button variant="danger" size="sm" onClick={() => {this.deleteTask(index)}}>Eliminar</Button>
                                </Card.Body>
                            </Card>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default TaskList;