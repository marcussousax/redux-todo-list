export function addTodo(inputValue) {
    return {
        type: 'ADD',
        payload: inputValue
    }
}

export function editTodo(todo, newValue) {
    return {
        type: 'EDIT',
        payload: {
            todo,
            newValue
        }
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

export function deleteAllTodo() {
    return {
        type: 'DELETE_ALL',
        payload: []
    }
}
