import React from 'react'
import './App.css'

function App() {

    const [todos, setTodos] = React.useState([])
    const [inputValue, setInputValue] = React.useState('')

    const handleSubmit = (e, value) => {
        e.preventDefault()
        setTodos([...todos, {
            value: value,
            completed: false
        }])
    }

    return (
        <div className="App">
            <div className={'wrapper'}>
                <h2>Redux Todo List - <Counter todos={todos} /></h2>
                <List>
                    {todos.map((item, index) => <ListItem key={index}>{item.value}</ListItem>)}
                </List>
                <form onSubmit={(e) => handleSubmit(e, inputValue)}>
                    <input type="text"
                           value={inputValue}
                           onChange={(e) => setInputValue(e.target.value)}
                           placeholder={'type an item and press enter'} />
                    <button type={'submit'}>add item</button>
                </form>
            </div>
        </div>
    )
}

const Counter = ({ todos }) => {
    return <span>{todos.length}</span>
}

const List = ({children}) => <ol>{children}</ol>

const ListItem = ({children}) => {
    return (
        <li>
            {children}
        </li>
    )
}

export default App
