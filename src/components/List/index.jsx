import React from 'react'
import { useDispatch } from 'react-redux'
import { MdDeleteSweep } from 'react-icons/md'
import { deleteAllTodo } from '../../store/Todos/Todos.actions'
import './index.css'

const List = ({children}) => {

    const dispatch = useDispatch()

    const handleDeleteAll = () => {
        dispatch(deleteAllTodo())
    }

    return (
        <div className={'list-wrapper'}>
            <div className={'list-toolbar'}>
                <button className={'btn-delete btn-delete-all'}
                        onClick={handleDeleteAll}>
                    <MdDeleteSweep />
                    <span className={'btn-label'}>Clear all</span>
                </button>
            </div>
            <ol>
                {children}
            </ol>
        </div>
    )
}

export default List
