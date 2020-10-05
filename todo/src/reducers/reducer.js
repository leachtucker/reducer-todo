
const initialState = {
    todos: [
      {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
      },
      {
        item: 'Take trash out',
        completed: false,
        id: 3892987999
      },
      {
        item: 'Wash clothes',
        completed: false,
        id: 3892988632
      },
    ]
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':

            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload
                ]
            };

        case 'CLEAR_COMPLETED':
            // Removes completed tasks
            return {
                ...state,
                todos: state.todos.filter(task => {
                    return task.completed === false;
                }),
            };

        case 'TOGGLE_COMPLETED':
            const idArr = state.todos.map(task => {
                return task.id
            });
            const indexOf = idArr.indexOf(action.payload);
            const newArr = state.todos;
            newArr[indexOf].completed = !newArr[indexOf].completed;
            return ({
                ...state,
                todos: newArr
            });

        default:
            return state;
    }
}

export {initialState, reducer};