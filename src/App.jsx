import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { addTodo, deleteTodo, updateTodo } from './store/Todos/Todos.actions'
import { selectCompletedTodosCount, selectTodos, selectTodosCount } from './store/Todos/Todos.selectors'
import TodosUndoRedo from './store/Todos/TodosUndoRedo'

function App() {

    const dispatch = useDispatch()
    const todos = useSelector(selectTodos)

    const [inputValue, setInputValue] = React.useState('')

    const handleSubmit = (e, value) => {
        e.preventDefault()
        dispatch(addTodo(value))
        setInputValue('')
    }

    const handleDelete = (item) => {
        dispatch(deleteTodo(item))
    }

    const toggleComplete = (item) => {
        dispatch(updateTodo(item))
    }

    return (
        <div className="App">
            <div className={'wrapper'}>
                <TodosUndoRedo />
                <h2>Redux Todo List - <TotalCounter todos={todos} /></h2>
                <List>
                    {todos.map((item, index) =>
                        <ListItem key={index}>
                            <button className={'btn-complete'} onClick={() => toggleComplete(item)}>V</button>
                            <span className={item.completed ? 'completed' : ''}>{item.value}</span>
                            <button className={'btn-delete'} onClick={() => handleDelete(item)}>X</button>
                        </ListItem>
                    )}
                </List>
                <CompletedCounter />
                <form onSubmit={(e) => handleSubmit(e, inputValue)}>
                    <input type="text"
                           value={inputValue}
                           onChange={(e) => setInputValue(e.target.value)}
                           placeholder={'type an item and press enter'} />
                    <button type={'submit'}>add item</button>
                </form>
            </div>
        </div>
    )
}

const TotalCounter = () => {
    const todosCount = useSelector(selectTodosCount)
    return <span>Total Items:{todosCount}</span>
}

const CompletedCounter = () => {
    const completedCount = useSelector(selectCompletedTodosCount)
    return <div style={{textAlign: 'center'}}>Completed Items: {completedCount}</div>
}

const List = ({children}) => <ol>{children}</ol>

const ListItem = ({children}) => {
    return (
        <li>
            {children}
        </li>
    )
}

export default App
