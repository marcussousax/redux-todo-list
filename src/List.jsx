import React from 'react'
import TodosUndoRedo from './store/Todos/TodosUndoRedo'


const List = ({children}) => {


    return (
        <div className={'list-wrapper'}>
            <ol>
                {children}
            </ol>
        </div>
    )
}

export default List
