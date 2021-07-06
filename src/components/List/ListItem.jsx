import React from 'react'
import { useDispatch } from 'react-redux'
import { MdCheckCircle, MdDelete, MdEdit } from 'react-icons/md'
import { editTodo, deleteTodo, updateTodo } from '../../store/Todos/Todos.actions'

const ListItem = ({item}) => {
    const [isEditing, setIsEditing] = React.useState(false)
    const dispatch = useDispatch()

    const handleEdit = (newValue) => {
        dispatch(editTodo(item, newValue))
    }

    const handleDelete = (item) => {
        dispatch(deleteTodo(item))
    }

    const toggleComplete = (item) => {
        dispatch(updateTodo(item))
    }

    return (
        <li className={`list-item`}>
            <button disabled={isEditing} className={`btn-complete ${item.completed ? 'completed' : ''} `}
                    onClick={() => toggleComplete(item)}>
                <MdCheckCircle />
            </button>
            <span
                className={`list-item-content ${item.completed ? 'completed' : ''}`}>
                {isEditing ? <EditingInput handleEdit={handleEdit} value={item.value} /> : item.value}
            </span>
            <button className={`btn-edit ${isEditing ? 'is-editing' : ''} `} onClick={() => setIsEditing(!isEditing)}><MdEdit /></button>
            <button disabled={isEditing} className={'btn-delete'} onClick={() => handleDelete(item)}><MdDelete />
            </button>
        </li>
    )
}

const EditingInput = (props) => {
    const [inputValue, setInputValue] = React.useState(props.value)
    return (
        <form onSubmit={(e) => props.handleEdit(inputValue)}>
            <input type="text"
                   value={inputValue}
                   autoFocus={true}
                   onChange={(e) => setInputValue(e.target.value)}
                   placeholder={'type and press enter'} />
            <button type={'submit'}>update item</button>
        </form>
    )
}

export default ListItem
