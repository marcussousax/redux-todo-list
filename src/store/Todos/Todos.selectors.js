export const selectTodos = state => state.todos.present
export const selectTodosCount = state => state.todos.present.length
export const selectCompletedTodosCount = state => state.todos.present.filter(todo => todo.completed === true).length
export const selectUndoable = state => {
    const {past, future} = state.todos
    return Boolean(past.length || future.length)
}
