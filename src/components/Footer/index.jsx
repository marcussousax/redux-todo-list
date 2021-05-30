import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ActionCreators } from 'redux-undo'
import { MdHistory } from 'react-icons/md'

import { selectCompletedTodosCount, selectTodosCount, selectUndoable } from '../../store/Todos/Todos.selectors'
import { addTodo, deleteAllTodo } from '../../store/Todos/Todos.actions'
import { store } from '../../store/store'
import './index.css'

const Footer = ({inputValue, setInputValue}) => {

    const dispatch = useDispatch()
    const todosCount = useSelector(selectTodosCount)
    const undoable = useSelector(selectUndoable)


    const handleResetApp = () => {
        dispatch(deleteAllTodo())
        window.localStorage.clear()
        store.dispatch(ActionCreators.clearHistory())
    }

    const CompletedCounter = () => {
        const completedCount = useSelector(selectCompletedTodosCount)

        if (todosCount === completedCount && todosCount !== 0) {
            return (
                <div className={'completed-status'}>
                    <p>Well Done! 🎉 🎉</p>
                </div>
            )
        }

        if (todosCount === completedCount) {
            return null
        }

        return (
            <div className={'completed-status'}>
                <p>{completedCount === 0 ? 'There are no' : <span>{completedCount}</span>} completed
                    item{completedCount > 1 && 's'}</p>

                <button disabled={!undoable} title={'Reset App'} className={'btn-reset-app'}
                        onClick={handleResetApp}>
                    <MdHistory />
                    <span className={'btn-label'}>Reset App (this will clear undo history)</span>
                </button>
            </div>
        )
    }

    const handleSubmit = (e, value) => {
        e.preventDefault()
        if (value === '') return
        dispatch(addTodo(value))
        setInputValue('')
    }


    return (
        <footer>
            <CompletedCounter />
            <form onSubmit={(e) => handleSubmit(e, inputValue)}>
                <input type="text"
                       value={inputValue}
                       onChange={(e) => setInputValue(e.target.value)}
                       placeholder={'type and press enter'} />
                <button type={'submit'}>add item</button>
            </form>
        </footer>
    )
}

export default Footer
