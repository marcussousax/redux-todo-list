import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdCheckCircle, MdDelete } from 'react-icons/md'
import './App.css'
import { deleteTodo, updateTodo } from './store/Todos/Todos.actions'
import { selectTodos } from './store/Todos/Todos.selectors'
import Header from './Header'
import Footer from './Footer'
import List from './List'

function App() {

    const dispatch = useDispatch()
    const todos = useSelector(selectTodos)

    const [inputValue, setInputValue] = React.useState('')


    const handleDelete = (item) => {
        dispatch(deleteTodo(item))
    }

    const toggleComplete = (item) => {
        dispatch(updateTodo(item))
    }

    return (
        <div className="App">
            <Header />
            <List>
                {todos.map((item, index) =>
                    <ListItem key={index}>
                        <button className={`btn-complete ${item.completed ? 'completed' : ''} `} onClick={() => toggleComplete(item)}>
                            <MdCheckCircle />
                        </button>
                        <span className={item.completed ? 'completed' : ''}>{item.value}</span>
                        <button className={'btn-delete'} onClick={() => handleDelete(item)}><MdDelete /></button>
                    </ListItem>
                )}
            </List>
            <Footer inputValue={inputValue} setInputValue={setInputValue} />
        </div>
    )
}


const ListItem = ({children}) => {
    return (
        <li className={'list-item'}>
            {children}
        </li>
    )
}

export default App
