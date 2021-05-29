import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ActionCreators } from 'redux-undo'
import { MdDeleteSweep } from 'react-icons/md'
import { store } from '../../store/store'
import { deleteAllTodo } from '../../store/Todos/Todos.actions'
import { selectUndoable } from '../../store/Todos/Todos.selectors'
import './index.css'

const List = ({children}) => {

    const dispatch = useDispatch()
    const undoable = useSelector(selectUndoable)

    const handleDeleteAll = () => {
        dispatch(deleteAllTodo())
        window.localStorage.clear('persist:root')
        store.dispatch(ActionCreators.clearHistory())
    }

    return (
        <div className={'list-wrapper'}>
            <div className={'list-toolbar'}>
                <button disabled={!undoable} title={'remove all'} className={'btn-delete btn-delete-all'}
                        onClick={handleDeleteAll}>
                    <MdDeleteSweep />
                    <span className={'btn-label'}>remove all (will clear undo history)</span>
                </button>
            </div>
            <ol>
                {children}
            </ol>
        </div>
    )
}

export default List
