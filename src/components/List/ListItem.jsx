import React from 'react'
import { useDispatch } from 'react-redux'
import { MdCheckCircle, MdDelete } from 'react-icons/md'
import { deleteTodo, updateTodo } from '../../store/Todos/Todos.actions'

const ListItem = ({item}) => {

    const dispatch = useDispatch()

    const handleDelete = (item) => {
        dispatch(deleteTodo(item))
    }

    const toggleComplete = (item) => {
        dispatch(updateTodo(item))
    }

    return (
        <li className={'list-item'}>
            <button className={`btn-complete ${item.completed ? 'completed' : ''} `}
                    onClick={() => toggleComplete(item)}>
                <MdCheckCircle />
            </button>
            <span
                className={`list-item-content ${item.completed ? 'completed' : ''}`}>{item.value}</span>
            <button className={'btn-delete'} onClick={() => handleDelete(item)}><MdDelete /></button>
        </li>
    )
}

export default ListItem
