export function addTodo(inputValue) {
    return {
        type: 'ADD',
        payload: inputValue
    }
}

export function updateTodo(todo) {
    return {
        type: 'UPDATE',
        payload: todo
    }
}

export function deleteTodo(todo) {
    return {
        type: 'DELETE',
        payload: todo
    }
}
