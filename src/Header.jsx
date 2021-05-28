import React from 'react'
import { useSelector } from 'react-redux'
import { selectTodosCount } from './store/Todos/Todos.selectors'
import TodosUndoRedo from './store/Todos/TodosUndoRedo'


const Header = () => {

    const TotalCounter = () => {
        const todosCount = useSelector(selectTodosCount)
        return <span><strong>{todosCount}</strong> Item{todosCount > 1 ? 's':''}</span>
    }

    return (
        <header>
            <TotalCounter />
            <TodosUndoRedo />
        </header>
    )
}

export default Header
