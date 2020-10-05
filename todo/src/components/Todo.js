import React from 'react'
import { Paper } from  '@material-ui/core'

import './Todo.css'

const Todo = ({task, dispatch}) => {
    return (
        <Paper className='todo' onClick={() => { dispatch({ type: 'TOGGLE_COMPLETED', payload: task.id }) } }>
            <div className={task.completed ? 'completed' : ''}>
                <h3>{task.item}</h3>
                {task.completed &&
                    <span role='img'> ✔️</span>
                }
            </div>
        </Paper>
    );
}

export default Todo;