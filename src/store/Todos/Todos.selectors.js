export const selectTodos = state => state.todos
export const selectTodosCount = state => state.todos.length
export const selectCompletedTodosCount = state => state.todos.filter(todo => todo.completed === true).length
