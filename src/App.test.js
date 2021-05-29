import { render } from '@testing-library/react'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import todosReducer from './store/Todos/Todos.reducer'
import App from './App'

export function createTestStore() {
    return createStore(
        combineReducers({
            todos: todosReducer
        })
    )
}

let store
describe('Testing App component', () => {
    beforeEach(() => {
        store = createTestStore()
    })
    test('if the text logo is in the document', async () => {

        const {findByText} = render(
            <Provider store={store}>
                <App />
            </Provider>
        )
        await findByText('Todo List')
    })

    test('if the blankstate message is in the document', async () => {
        const {findByText} = render(
            <Provider store={store}>
                <App />
            </Provider>
        )
        await findByText('You don’t have any todos yet.')
    })
})
