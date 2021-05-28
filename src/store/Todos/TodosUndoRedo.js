import React from 'react'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'

let TodosUndoRedo = ({canUndo, canRedo, onUndo, onRedo}) => (
    <p>
        <button onClick={onUndo} disabled={!canUndo}>
            Undo
        </button>
        <button onClick={onRedo} disabled={!canRedo}>
            Redo
        </button>
    </p>
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
