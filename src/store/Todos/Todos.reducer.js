// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = [], action) {
    switch (action.type) {
        case 'ADD':
            return [...state, {
                value: action.payload, // In this case action.payload is received a input text value
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
        default:
            return state
    }
}
