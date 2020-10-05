import React from 'react'
import Todo from './Todo'

import './TodoList.css'

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='todo-list'>
                {this.props.todos &&
                    this.props.todos.map(task => {
                        return (<Todo task={task} dispatch={this.props.dispatch} key={task.id} />);
                    })
                }
            </div>
        );
    }
}