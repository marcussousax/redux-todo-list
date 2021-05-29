import React from 'react'
import { useSelector } from 'react-redux'
import { selectTodosCount } from '../../store/Todos/Todos.selectors'
import TodosUndoRedo from '../../store/Todos/TodosUndoRedo'

import './index.css'

const Header = () => {

    const TotalCounter = () => {
        const todosCount = useSelector(selectTodosCount)
        return <span><strong>{todosCount}</strong> Item{todosCount !== 1 ? 's' : ''}</span>
    }

    return (
        <header>
            <h1>Todo List</h1>
            <TotalCounter />
            <TodosUndoRedo />
        </header>
    )
}

export default Header
