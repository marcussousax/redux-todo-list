import undoable from 'redux-undo'

export default undoable(function(state = [], action) {
    switch (action.type) {
        case 'ADD':
            return [...state, {
                value: action.payload, // In this case action.payload receives an input text value
                completed: false
            }]
        case 'DELETE':
            return state.filter(todo => todo.value !== action.payload.value)
        case 'UPDATE':
            return state.map(todo =>
                todo === action.payload
                    ? {...todo, completed: !todo.completed}
                    : todo
            )
        case 'DELETE_ALL':
            return action.payload
        default:
            return state
    }
})

