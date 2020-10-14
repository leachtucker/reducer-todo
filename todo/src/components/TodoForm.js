import React from 'react'
import { v4 as uuid } from 'uuid'

import { Button, TextField } from '@material-ui/core'

import './TodoForm.css'

const initialFormValues = {
    taskName: '',
    dueDate: '2020-10-13'
}

export default class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            taskName: initialFormValues.taskName,
            dueDate: initialFormValues.dueDate
        };
    }

    // EVENT HANDLERS //
    onSubmit = (evt) => {
        evt.preventDefault();
        const newTask = {item: this.state.taskName, completed: false, id: uuid(), dueDate: this.state.dueDate}
        this.props.dispatch({ type: 'ADD_TODO', payload: newTask });

        this.setState({
            ...this.state,
            taskName: initialFormValues.taskName,
            dueDate: initialFormValues.dueDate
        })
    }

    onChange = (evt) => {
        evt.preventDefault();
        this.setState({
            ...this.state,
            [evt.target.name]: evt.target.value,
        })
    }

    render() {
        return (
            <div className='form-container'>
                <form onSubmit={this.onSubmit}>
                    <TextField name='taskName' value={this.state.taskName} onChange={this.onChange} type='text' placeholder='Task title' required />
                    <TextField name='dueDate' value={this.state.dueDate} onChange={this.onChange} type='date' required />
                    <Button type='submit' variant='contained' color='primary'>Add Task</Button>
                    <Button onClick={() => {this.props.dispatch({ type: 'CLEAR_COMPLETED' });}} variant='contained' color='primary'>Clear Completed</Button>
                </form>
            </div>
        );
    }
}