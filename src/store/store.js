import { combineReducers, createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import todosReducer from './Todos/Todos.reducer'

const rootReducer = combineReducers({
    todos: todosReducer
})

const persistedReducer = persistReducer({
    key: 'root',
    storage
}, rootReducer)

export const store = createStore(
    persistedReducer,
    (typeof window !== undefined && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

export const persistedStore = persistStore(store)

