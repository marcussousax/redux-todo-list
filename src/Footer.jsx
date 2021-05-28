import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCompletedTodosCount, selectTodosCount } from './store/Todos/Todos.selectors'
import { addTodo } from './store/Todos/Todos.actions'


const Footer = ({inputValue, setInputValue}) => {

    const dispatch = useDispatch()

    const CompletedCounter = () => {
        const completedCount = useSelector(selectCompletedTodosCount)
        const todosCount = useSelector(selectTodosCount)

        if (todosCount === completedCount) {
            return (
                <div className={'completed-status'}>
                    <p>Well Done! 🎉 🎉</p>
                </div>
            )
        }
        return (
            <div className={'completed-status'}>
                <p>{completedCount === 0 ? 'There are no' : <span>{completedCount}</span>} completed
                    item{completedCount > 1 && 's'}</p>
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
                       placeholder={'type an and press enter'} />
                <button type={'submit'}>add item</button>
            </form>
        </footer>
    )
}

export default Footer
