import React from 'react'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'
import { FaUndoAlt, FaRedoAlt } from 'react-icons/fa'

let TodosUndoRedo = ({canUndo, canRedo, onUndo, onRedo}) => (
    <div className={'undo-redo'}>
        <button onClick={onUndo} disabled={!canUndo}>
            <FaUndoAlt /> Undo
        </button>
        <button onClick={onRedo} disabled={!canRedo}>
            <FaRedoAlt /> Redo
        </button>
    </div>
)

const mapStateToProps = (state) => ({
    canUndo: state.todos.past.length > 0,
    canRedo: state.todos.future.length > 0
})

const mapDispatchToProps = ({
    onUndo: UndoActionCreators.undo,
    onRedo: UndoActionCreators.redo
})

TodosUndoRedo = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodosUndoRedo)

export default TodosUndoRedo
